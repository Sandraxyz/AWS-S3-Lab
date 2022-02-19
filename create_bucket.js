var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    });

(function createBucket(){
    var 
        params = { 
            //use bucket name here
            Bucket: "2021-09-26-ss-catlostandfoundwebsite",
        };
        S3API.createBucket(params, function(error, data){
            if(error){
                console.log(error, error.stack);
            }
        });
})();