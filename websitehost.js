var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    });

(function makeBucketWebsiteEnabled(){
    var
        params = {
            Bucket: "2021-09-26-ss-catlostandfoundwebsite",
            WebsiteConfiguration: {
                ErrorDocument: {
                    Key: "error.html"
                },
                IndexDocument: {
                    Suffix: "index.html"
                }
            }
        };
        S3API.putBucketWebsite(params, function(error, data){
            console.log(error, data);
        });
})();