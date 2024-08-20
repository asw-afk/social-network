const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    getReaction,
    deleteReaction,
    updateReaction
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThought).post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

    module.exports = router; 