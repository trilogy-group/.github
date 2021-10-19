const core = require('@actions/core');
const github = require('@actions/github');
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("./libs/s3Client.js"); // Helper function that creates Amazon S3 service client module.


const s3BucketString = core.getInput("bucket-names", { required: true });
const s3Buckets = urlString.split("|");

// Create and upload the object to the specified Amazon S3 bucket.
const run = async () => {
  try {
    for (const s3Bucket of s3Buckets) {
      // Set the parameters.
      const bucketParams = {
        Bucket: s3Bucket,
        Key: "healthcheck.txt",
        // Content of the new object.
        Body: "Healtcheck successful. This file can be deleted",
      };
      const data = await s3Client.send(new PutObjectCommand(bucketParams));
      core.info(bucketParams.Bucket + " Success");
      console.log(
        "Successfully uploaded object: " +
          bucketParams.Bucket +
          "/" +
          bucketParams.Key
      );
    // return data;
    }
  } catch (err) {
    console.log("Error", err);
    core.setFailed(e.message + "\n Failed to upload file to: " + bucketParams.Bucket);
  }
};
run();
