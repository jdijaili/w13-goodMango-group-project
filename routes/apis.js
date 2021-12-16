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

router.post('/bookshelves', bookshelfValidators, asyncHandler(async (req, res) => {
    const { name } = req.body;
    const { userId } = req.session.auth;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await db.Bookshelf.create({
            name,
            userId
        });

        res.json({ message: "Create Successful" });
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('/bookshelves', {
            title: 'My Mangas',
            errors,
            csrfToken: req.csrfToken()
        });
    }
}))

router.put('/bookshelves/:id(\\d+)', bookshelfValidators, asyncHandler(async (req, res) => {
    const { name } = req.body;
    const { userId } = req.session.auth;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await db.Bookshelf.update({
            name,
            userId
        });

        res.json({ message: "Update Successful" });
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
