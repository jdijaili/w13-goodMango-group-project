const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require("../auth");

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

const authCheck = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
}

// router.use(authCheck);

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    const bookshelves = await db.Bookshelf.findAll({
        include: db.Manga
    });

    res.render('bookshelves', { title: 'Bookshelves', bookshelves, csrfToken: req.csrfToken() });
}));

const bookshelfValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your Bookshelf')
        .isLength({ max: 100 })
        .withMessage('Bookshelf must not be more than 100 characters long'),
];

router.post('/', csrfProtection, bookshelfValidators, asyncHandler(async (req, res) => {
    const { name } = req.body;
    const { userId } = req.session.auth;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await db.Bookshelf.create({
            name,
            userId
        });
        res.json({ message: "Success" })
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('/bookshelves', {
            title: 'My Mangas',
            errors,
            csrfToken: req.csrfToken()
        });
    }
}))

module.exports = router;
