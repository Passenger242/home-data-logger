/**
 * Function to execute an asynchronous function with parameters.
 * Errors will get status 500 and then passed to error handling middleware.
 * @param {Async function} promise - Promise to execute
 * @param {Function} paramFunc - Function returning the input parameters to the promise function
 */
module.exports = (promise, paramFunc) => async (req, res, next) => {
  const params = paramFunc ? paramFunc(req, res, next) : [];
  try {
    const result = await promise(...params);
    return res
      .set(result.headers || {})
      .status(result.status || 200)
      .json(result.body);
  } catch (error) {
    return res.status(500) && next(error);
  }
};
