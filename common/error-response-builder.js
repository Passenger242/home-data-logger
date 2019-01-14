module.exports = (code, error) => ({
  status: error.status,
  body: {
    error: {
      code,
      message: error.message,
    },
  },
});
