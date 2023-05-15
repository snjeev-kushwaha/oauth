const AWS = require("aws-sdk");

const awsConfig = {
    accessKeyId: process.env.AccessKey,
    secretAccessKey: process.env.SecretKey,
    region: process.env.region,
};

const S3 = new AWS.S3(awsConfig);

module.exports = { S3 }