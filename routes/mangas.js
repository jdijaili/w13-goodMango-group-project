const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require("../auth");

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const mangas = await db.Manga.findAll();
  res.render('mangas', { title: "Mangas", mangas });
}));

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const mangaId = parseInt(req.params.id, 10);

  let bookshelves = [];

  if(req.session.auth) {
    const { userId } = req.session.auth;
    bookshelves = await db.Bookshelf.findAll({
      where: {
        userId
      }
    });
  }
  // Find manga by mangaId and return associated genres
  const mangaGenres = await db.Manga.findByPk(mangaId, {
    include: db.Genre
  });

  const manga = await db.Manga.findByPk(mangaId);
  res.render( 'manga-detail', { title: `${manga.title} Summary`, csrfToken: req.csrfToken(), manga, genres: mangaGenres.Genres, bookshelves });
}));


module.exports = router;
