const express = require('express');
const multer = require('multer');
const { handleUpload, handleList, handleDelete} = require('../controllers/uploadController');

const router = express.Router();
const storage = multer.memoryStorage(); // store files in memory buffer
const upload = multer({ storage });

router.post('/upload', upload.single('file'), handleUpload);
router.get('/list', handleList);
router.delete('/delete/:key', handleDelete);

module.exports = router;
