const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

// READ all manga
router.get('/', asyncHandler(async (req, res) => {
  const mangas = await db.Manga.findAll();
  const genres = await db.Genre.findAll();
  res.render('mangas', { title: "Manga", mangas, genres });
}));

// READ manga by manga id
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const mangaId = parseInt(req.params.id, 10);

  let bookshelves = [];
  let reviews = [];

  reviews = await db.Review.findAll({
    where: {mangaId},
    include: db.User,
    order: [['updatedAt', "DESC"]]
  });

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
  res.render( 'manga-detail', {
    title: `${manga.title} Summary`,
    csrfToken: req.csrfToken(),
    manga,
    genres: mangaGenres.Genres,
    bookshelves,
    reviews });
}));

module.exports = router;
