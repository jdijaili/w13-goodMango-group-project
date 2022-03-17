const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require("../auth");

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render('user-signup', { title: 'Sign Up', csrfToken: req.csrfToken(), user });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
]

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email')
    .isLength({ max: 255 })
    .withMessage('Email must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
]

// CREATE a new user
router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  const user = db.User.build({
    username,
    email,
    password,
    confirmPassword
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    return loginUser(req, res, user);
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-signup', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }

}))

// Render login page
router.get("/login", csrfProtection, (req, res) => {
  res.render("user-login", { csrfToken: req.csrfToken(), title: "Login" })
})

// Login the user
router.post("/login", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let errors = [];

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user !== null) {
      const match = await bcrypt.compare(password, user.hashedPassword.toString())

      if (match) {
        return loginUser(req, res, user);
      }
    }

    errors.push("Login failed for the provided Email and Password");
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render("user-login", {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken(),
  });
}))

// logout the user
router.post("/logout", (req, res) => {
  logoutUser(req, res);
});

// router to log in as demo user
router.get("/login/demo", asyncHandler(async(req, res) => {
  let email = "demouser@gmail.com";
  let password = "ilovemangos";
  const user = await db.User.findOne({where: {email}});
  return loginUser(req, res, user);
}));

module.exports = router;
