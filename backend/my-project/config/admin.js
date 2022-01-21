module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '917769f0be90ed915a0169a0d708b477'),
  },
});
