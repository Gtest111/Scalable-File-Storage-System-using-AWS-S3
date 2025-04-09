const { uploadToS3 } = require('../services/s3Service');

const handleUpload = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const fileUrl = await uploadToS3(req.file);
    res.status(200).json({ message: 'File uploaded successfully', fileUrl });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

const { listFiles } = require('../services/s3Service');

const handleList = async (req, res) => {
  try {
    const files = await listFiles();
    res.status(200).json(files);
  } catch (err) {
    console.error('List error:', err);
    res.status(500).json({ error: 'Failed to list files' });
  }
};

const { deleteFile } = require('../services/s3Service');

const handleDelete = async (req, res) => {
  try {
    const { key } = req.params;
    await deleteFile(key);
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Failed to delete file' });
  }
};


module.exports = { handleUpload, handleList , handleDelete};

