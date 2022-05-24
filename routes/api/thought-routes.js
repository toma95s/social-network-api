const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id') //:id means params
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;