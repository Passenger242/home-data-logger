const erb = require('./error-response-builder');

const rb = (status, body, headers) => ({ status, body, headers });

// Regular responses
const ok = (body, headers) => rb(200, body, headers);
const noContent = headers => rb(204, undefined, headers);
const created = body => rb(201, body);
const accepted = body => rb(202, body);
const notModified = body => rb(304, body);

// Client errors
const badRequest = message => erb(undefined, { status: 400, message });
const notFound = message => erb(undefined, { status: 404, message });

const validationError = fields => rb(422, { error: { message: 'Validation error', fields } });

// Server errors
const notImplemented = body => rb(501, body);
const serverError = body => rb(500, body);

module.exports = {
  errors: {
    notImplemented,
    badRequest,
    notFound,
    validationError,
    serverError,
  },

  ok,
  noContent,
  created,
  accepted,
  notModified,
};
