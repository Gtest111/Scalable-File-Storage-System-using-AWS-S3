# 📁 Scalable File Storage System using AWS S3 + Bootstrap

A simple and scalable cloud-based file storage system built with **Node.js**, **Express**, **AWS S3**, and **Bootstrap**. Upload, list, and delete files directly from your browser. Designed to work within the **AWS Free Tier**.

---

## 🚀 Features

- ✅ Upload files to AWS S3 via web UI
- 📃 View list of uploaded files
- 🗑️ Delete individual files from S3
- 🎨 Clean Bootstrap-based responsive frontend
- 🔐 Environment-based credentials using dotenv

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, AWS SDK
- **Frontend:** HTML, Bootstrap 5
- **Cloud Storage:** AWS S3 (Free Tier)
- **Tools:** dotenv, Postman (for API testing)

---

## 🌿 Folder Structure

file-storage-system/ │ ├── public/ │ └── index.html # Bootstrap-based UI │ ├── routes/ │ └── fileRoutes.js # Upload, List, Delete routes │ ├── s3.js # AWS S3 configuration ├── app.js # Main Express server ├── .env # Your local environment (NOT pushed) ├── .env.example # Safe template for environment config ├── package.json └── README.md

## 🔐 Environment Variables

Create a `.env` file in the root folder with the following keys:
AWS_ACCESS_KEY_ID=your_aws_access_key AWS_SECRET_ACCESS_KEY=your_aws_secret_key AWS_REGION=your_aws_region AWS_BUCKET_NAME=your_bucket_name



**Note:** Never commit your `.env` file.

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/your-username/file-storage-system.git
cd file-storage-system

npm install
npm start

Open browser at: http://localhost:3000

📄 License
MIT