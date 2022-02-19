const { text } = require("stream/consumers");

var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    });
    FS = require("fs"),
    bucket_name_str = "2021-09-26-ss-catlostandfoundwebsite";

function uploadItemAsBinary(key_name_str, content_type_str, bin){
    S3API.putObject(
    {
        Body: bin, 
        Bucket: bucket_name_str, 
        Key: key_name_str,
    },
    (err, data) => {
        if(err) {
            console.log(err, err.stack);
        }
        else{
            console.log("succes!");
        }
    });
}        
(function init(){
    var cat_pic_bin = FS.readFileSync("../cat.jpg");
    uploadItemAsBinary("cat.jpg", "image/jpg", cat_pic_bin);
    var index_page_bin = FS.readFileSync("../index.html");
    uploadItemAsBinary("index.html", "text/html", index_page_bin);

})();
