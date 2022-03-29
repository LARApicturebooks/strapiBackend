module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["nQ3U3JdOXZJ+HIqQTOdnUA==","ropEZLRb5oQi/shGPWoRnw==","Kl6ANGvY4dOSd19Yvsc0WA==","k8KY1p2FOq87ipc7zlHt5g=="]),
  },
});
