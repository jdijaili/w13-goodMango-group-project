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

const reviewValidators = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a review'),
];

router.post('/bookshelves', bookshelfValidators, asyncHandler(async (req, res) => {
    const { name } = req.body;
    const { userId } = req.session.auth;

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const newBookshelf = await db.Bookshelf.create({
            name,
            userId
        });

        console.log(newBookshelf.id);
        res.json({ message: "Create Successful", bookshelfId: newBookshelf.id });
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('/bookshelves', {
            title: 'My Mangas',
            errors
        });
    }
}));

router.put('/bookshelves/:id(\\d+)', bookshelfValidators, asyncHandler(async (req, res) => {
    const { name } = req.body;
    const shelfId = parseInt(req.params.id, 10);

    const bookshelf = await db.Bookshelf.findByPk(shelfId);

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const update = await bookshelf.update({
            name
        });

        await bookshelf.save();

        res.json({ message: "Edit Successful", bookshelfId: shelfId});
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('/bookshelves', {
            title: 'My Mangas',
            errors
        });
    }
}));

router.delete('/bookshelves/:id(\\d+)', asyncHandler( async(req, res) => {
    const bookshelfId = parseInt(req.params.id, 10);
    const bookshelf = await db.Bookshelf.findByPk(bookshelfId);

    if (bookshelf) {
        const deltedBookshelf = await bookshelf.destroy();

        res.json({ message: "Delete Successful" });
    } else {
        res.json({ message: "This bookshelf does not exist"});
    }
}))

router.post('/reviews', reviewValidators, asyncHandler(async (req, res) => {
    let { mangaId, userId, review } = req.body;
    console.log(req.body);

    mangaId = parseInt(mangaId, 10);

    let bookshelves = [];
    let reviews = [];
    let user;

    const manga = await db.Manga.findByPk(mangaId);

    if(req.session.auth) {
        const { userId } = req.session.auth;
        bookshelves = await db.Bookshelf.findAll({
            where: {
                userId
            }
        });
        user = await db.User.findByPk(userId);
      }
      // Find manga by mangaId and return associated genres
      const mangaGenres = await db.Manga.findByPk(mangaId, {
        include: db.Genre
      });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const newReview = await db.Review.create({
            mangaId,
            userId,
            review
        });

        res.json({ message: "Create Successful", review: newReview, user, reviewId: newReview.id });

    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render( 'manga-detail', {
            title: `${manga.title} Summary`,
            manga,
            genres: mangaGenres.Genres,
            bookshelves,
            reviews,
            errors
        });

    }

}));

router.put("/reviews/:id(\\d+)", reviewValidators, asyncHandler(async(req, res) => {
    let { review, mangaId, userId } = req.body;
    const reviewId = parseInt(req.params.id, 10);

    const reviewRecord = await db.Review.findByPk(reviewId);

    mangaId = parseInt(mangaId, 10);

    let bookshelves = [];
    let reviews = [];
    let user;

    const manga = await db.Manga.findByPk(mangaId);

    if(req.session.auth) {
        const { userId } = req.session.auth;
        bookshelves = await db.Bookshelf.findAll({
            where: {
                userId
            }
        });
        user = await db.User.findByPk(userId);
      }
      // Find manga by mangaId and return associated genres
      const mangaGenres = await db.Manga.findByPk(mangaId, {
        include: db.Genre
      });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        const update = await reviewRecord.update({
            review
        });

        await reviewRecord.save();

        res.json({ message: "Edit Successful", review });
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render( 'manga-detail', {
            title: `${manga.title} Summary`,
            manga,
            genres: mangaGenres.Genres,
            bookshelves,
            reviews,
            errors
        });
    }
}));

router.delete('/reviews/:id(\\d+)', asyncHandler( async(req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await db.Review.findByPk(reviewId);

    if (review) {
        await review.destroy();

        res.json({ message: "Delete Successful" });
    } else {
        res.json({ message: "This review does not exist"});
    }
}))

module.exports = router;
