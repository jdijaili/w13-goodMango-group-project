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

module.exports = router;
