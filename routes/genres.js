const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils');
const db = require('../db/models');

// READ all the mangas by genre id
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const genreId = parseInt(req.params.id, 10);
  const genreMangas = await db.Genre.findByPk(genreId, {
    include: db.Manga
  });

  const mangas = genreMangas.Mangas;
  res.render('mangagenres', { title: "Genres", mangas, genre: genreMangas});
}));

module.exports = router;
