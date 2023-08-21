module.exports = ({ env }) => ({
    'drag-drop-content-types': {
      enabled: true,
    },
    email: {
      config: {
        provider: "amazon-ses",
        providerOptions: {
          key: env("AWS_ACCESS_KEY_ID"),
          secret: env("AWS_ACCESS_SECRET"),
          amazon: `https://email.${env("AWS_REGION")}.amazonaws.com`,
        },
        settings: {
          defaultFrom: "Vidyardi OPS <ops@vidyardi.com>",
          defaultReplyTo: "Vidyardi OPS <ops@vidyardi.com>",
        },
      },
    },
    transformer: {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
      },
    },
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
            region: env("AWS_REGION"),
            params: {
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });
  