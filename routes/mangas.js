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

module.exports = router;
