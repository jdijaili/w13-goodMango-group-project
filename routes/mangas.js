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

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const mangaId = parseInt(req.params.id, 10);
  // Find manga by mangaId and return associated genres
  const mangaGenres = await db.Manga.findByPk(mangaId, {
    include: db.Genre
  });
  // console.log(mangaGenres.Genres[0].name);
  const manga = await db.Manga.findByPk(mangaId);
  res.render( 'manga-detail', { title: `${manga.title} Summary`, manga, genres: mangaGenres.Genres });
}));


module.exports = router;
