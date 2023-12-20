const express = require('express');
const fileControllers = require('../controllers/fileControllers');

const router = express.Router();

router.get('/data', fileControllers.getFilesData);

module.exports = router;