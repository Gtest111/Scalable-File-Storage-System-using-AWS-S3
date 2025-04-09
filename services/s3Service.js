const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadToS3 = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${uuidv4()}_${file.originalname}`, // unique filename
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const data = await s3.upload(params).promise();
  return data.Location; // returns the file URL
};

const listFiles = async () => {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
    };
  
    const data = await s3.listObjectsV2(params).promise();
    return data.Contents.map(item => ({
      key: item.Key,
      url: `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`
    }));
  };
  
  const deleteFile = async (key) => {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
    };
    await s3.deleteObject(params).promise();
  };
  
  module.exports = { uploadToS3, listFiles, deleteFile };