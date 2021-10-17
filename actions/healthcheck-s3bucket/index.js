import * as core from "@actions/core";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js"; // Helper function that creates Amazon S3 service client module.

// Set the parameters.
const bucketParams = {
  Bucket: core.getInput("bucket-name"),
  Key: "healthcheck.txt",
  // Content of the new object.
  Body: "Healtcheck successful. This file can be deleted",
};

// Create and upload the object to the specified Amazon S3 bucket.
const run = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    core.info("Success");
    console.log(
      "Successfully uploaded object: " +
        bucketParams.Bucket +
        "/" +
        bucketParams.Key
    );
    return data;
  } catch (err) {
    console.log("Error", err);
    core.setFailed(e.message);
  }
};
run();