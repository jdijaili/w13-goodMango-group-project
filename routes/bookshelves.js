const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require("../auth");

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const Manga = require('../db/models/manga')

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    const bookshelves = await db.Bookshelf.findAll({
        include: [Manga]
    });

    res.render('bookshelves', { title: 'Bookshelves', bookshelves, csrfToken: req.csrfToken() });
}));

module.exports = router;
