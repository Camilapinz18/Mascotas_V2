const express = require('express');
const router = express.Router();
const breedController = require('../controllers/breed');

router.get('/all', breedController.allBreeds);
router.post('/create', breedController.createBreed);
router.put('/update/:id', breedController.updateBreed);
router.delete('/delete/:id', breedController.deleteBreed);

module.exports = router;