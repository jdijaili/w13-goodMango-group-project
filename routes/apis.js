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
    const mangaBookshelf = await db.MangaBookshelfJoin.findAll({
        where: {
            bookshelfId
        }
    });

    if (bookshelf && mangaBookshelf) {
        for (let i = 0; i < mangaBookshelf.length; i++) {
            const manga = mangaBookshelf[i];
            await manga.destroy();
        }

        await bookshelf.destroy();

        res.json({ message: "Delete Successful" });
    } else {
        res.json({ message: "This bookshelf does not exist"});
    }
}));

router.delete('/bookshelves/:id(\\d+)/mangas/:manga(\\d+)', asyncHandler( async(req, res) => {
    const bookshelfId = parseInt(req.params.id, 10);
    const mangaId = parseInt(req.params.manga, 10);
    console.log("~~~~~~~~~~~~~~~~~~~~",bookshelfId, mangaId)

    const mangaBookshelf = await db.MangaBookshelfJoin.findOne({
        where: {
            mangaId,
            bookshelfId
        }
    })

    if (mangaBookshelf) {
        const deletedRecord = await mangaBookshelf.destroy();
        console.log(deletedRecord)

        res.json({ message: 'Delete Successful'})
    } else {
        res.json({ message: "Delete Unsuccessful"})
    }

}));

module.exports = router;
