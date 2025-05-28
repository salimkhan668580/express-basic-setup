
const statusCode = {
  // ✅ Success Codes
  OK: 200, // Request succeeded
  CREATED: 201, // Resource created
  ACCEPTED: 202, // Request accepted but not yet processed
  NO_CONTENT: 204, // No content to return

  // ❌ Client Errors
  BAD_REQUEST: 400, // Malformed request
  UNAUTHORIZED: 401, // Missing/invalid auth
  FORBIDDEN: 403, // Valid auth, but no permission
  NOT_FOUND: 404, // Resource not found
  CONFLICT: 409, // Duplicate or version conflict
  UNPROCESSABLE_ENTITY: 422, // Validation failed

  // 🚫 Rate Limiting / Headers
  TOO_MANY_REQUESTS: 429, // Rate limiting
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431, // Headers too large

  // 💥 Server Errors
  INTERNAL_SERVER_ERROR: 500, // Server crashed
  NOT_IMPLEMENTED: 501, // Not yet implemented
  BAD_GATEWAY: 502, // Invalid response from upstream
  SERVICE_UNAVAILABLE: 503, // Server down or overloaded
  GATEWAY_TIMEOUT: 504, // Timeout from upstream server
};

function responseHandler(resp, success, msg, status, data) {
  resp.status(status).json({
    success,
    message: msg,
    data: data || null,
  });
}
// Export both using CommonJS
module.exports = {
  statusCode,
  responseHandler
};
