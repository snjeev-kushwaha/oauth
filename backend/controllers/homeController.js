const Home = require('../model/homeModel')
const bucketName = process.env.bucket_Name
const { S3 } = require('../s3/awsFile')

const getData = async (req, res) => {
    try {
        const data = await Home.find()
        res.status(200).json(data)
    } catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const postData = async (req, res) => {
    try {
        const data = {
            title: req.body.title,
            img: req.file.location,
            desc: req.body.desc,
            longDesc: req.body.longDesc
        }
        const data1 = await Home.create(data)
        res.status(201).json(data1)
    } catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const updateData = async (req, res) => {
    try {
        const id = req.params.id
      
        const Q1 = await Home.findById(id)
        if (!Q1) {
            return { status: 404, message: 'Home not found' };
        }
        const s3Key = Q1.img.split('/').pop();
       
        const params = {
            Bucket: bucketName,
            Key: s3Key,
        };
      
        await S3.deleteObject(params).promise();

        const data = {
            title: req.body.title,
            img: req.file.location,
            desc: req.body.desc,
            longDesc: req.body.longDesc
        }
      
        const homeData = await Home.findByIdAndUpdate(id, data, { new: true })
        res.status(200).json(homeData)
    }
    catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

const deleteData = async (req, res) => {
    try {
        const id = req.params.id

        const Q1 = await Home.findById(id)
        if (!Q1) {
            return { status: 404, message: 'Home not found' };
        }
        const s3Key = Q1.img.split('/').pop();

        const params = {
            Bucket: bucketName,
            Key: s3Key,
        };

        await S3.deleteObject(params).promise();

        await Home.findByIdAndDelete(id);

        res.send({ status: 200, message: 'Image deleted successfully' })
    }
    catch (err) {
        res.send({ status: 400, Error: err.message })
    }
}

module.exports = { getData, postData, updateData, deleteData }