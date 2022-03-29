module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7376d028e50327df2d65fa26ccdf97ae'),
  },
});
