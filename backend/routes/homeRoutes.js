const express = require('express')
const multer = require('multer')
const homeRoute = express.Router()
const multerS3 = require('multer-s3')
const { S3 } = require('../s3/awsFile')

const { getData, postData, updateData, deleteData } = require('../controllers/homeController')
const bucketName = process.env.bucket_Name

const upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: bucketName,
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.originalname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
});

homeRoute.get('/home', getData)
homeRoute.post('/home', upload.single('image'), postData)
homeRoute.put('/home/:id', upload.single('image'), updateData)
homeRoute.delete('/home/:id', deleteData)

module.exports = { homeRoute }