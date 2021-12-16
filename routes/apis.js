const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require("../auth");

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');



const bookshelfValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your bookshelf')
        .isLength({ max: 100 })
        .withMessage('Bookshelf must not be more than 100 characters long'),
];

router.post('/api/bookshelves', csrfProtection, bookshelfValidators, asyncHandler(async (req, res) => {
    console.log('plz werkkkkkkkkkkkkkkkkk')
    const { name } = req.body;
    const { userId } = req.session.auth;

    const validatorErrors = validationResult(req);

    console.log(name, userId);

    if (validatorErrors.isEmpty()) {
        await db.Bookshelf.create({
            name,
            userId
        });

        console.log('after createeeeeeeee');

        // res.redirect('/api/bookshelves');
        res.json({ message: "Success" });
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
