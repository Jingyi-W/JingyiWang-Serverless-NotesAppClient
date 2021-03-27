const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51IUbiVDrFuHCRg6JVKQog1h3dT0LbLOZo8PLnchbiKxNVmlgthQq8RJi2Xv4yg4i3c2aqFj0kIXVmh9ZO6sfn9ja00WTWdXG28",
  s3: {
    REGION: "us-east-1",
    BUCKET: "jingyiwang-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://24lvwvq5ij.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bnpkbQCjc",
    APP_CLIENT_ID: "56db18qafg2r4qcbesn7i4qcvu",
    IDENTITY_POOL_ID: "us-east-1:12451eb6-d10d-4d0f-bb4b-e6e51b469ef0",
  },
};

export default config;