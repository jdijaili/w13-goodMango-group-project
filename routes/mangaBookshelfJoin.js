const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require("../auth");

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const Manga = require('../db/models/manga')


router.post("/", csrfProtection, asyncHandler(async(req, res) => {
    let { mangaId, bookshelfId } = req.body;
    await db.MangaBookshelfJoin.create({
      mangaId,
      bookshelfId
    });
    res.redirect("/mangas");
}))


module.exports = router;
