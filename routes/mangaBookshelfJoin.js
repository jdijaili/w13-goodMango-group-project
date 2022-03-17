const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

// CREATE a manga bookshelf join relationship between a manga and bookshelf by id
router.post("/", csrfProtection, asyncHandler(async(req, res) => {
    let { mangaId, bookshelfId } = req.body;

    await db.MangaBookshelfJoin.create({
      mangaId,
      bookshelfId
    });

    res.redirect("/mangas");
}))

module.exports = router;
