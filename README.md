# Express Status Responder

A lightweight utility for handling HTTP responses and status codes in Express.js applications. Includes a customizable response handler and predefined HTTP status codes.

## Installation

🚀 Features
✅ Predefined HTTP status codes for cleaner code

🔁 Reusable response handler to send consistent API responses

⚡ Works seamlessly with Express.js


📥 Installation
npm install express-response-helper


📚 Usage
🔹 Import the module:
const { statusCode, responseHandler } = require('express-response-helper');


🔹 Example with Express:
const express = require('express');
const { statusCode, responseHandler } = require('express-response-helper');

const app = express();

app.get('/api/hello', (req, res) => {
  responseHandler(res, true, 'Hello World!', statusCode.OK, { greeting: 'Hello' });
});

app.get('/api/error', (req, res) => {
  responseHandler(res, false, 'Something went wrong', statusCode.INTERNAL_SERVER_ERROR);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

📦 Available HTTP Status Codes
Constant	Code	Description
OK	200	Request succeeded
CREATED	201	Resource created
ACCEPTED	202	Request accepted for processing
NO_CONTENT	204	No response body
BAD_REQUEST	400	Client error (bad request)
UNAUTHORIZED	401	Auth required
FORBIDDEN	403	Access denied
NOT_FOUND	404	Resource not found
CONFLICT	409	Conflict (duplicate, etc.)
UNPROCESSABLE_ENTITY	422	Validation failed
TOO_MANY_REQUESTS	429	Rate limiting
REQUEST_HEADER_FIELDS_TOO_LARGE	431	Header too large
INTERNAL_SERVER_ERROR	500	Server crashed
NOT_IMPLEMENTED	501	Feature not implemented
BAD_GATEWAY	502	Invalid upstream server
SERVICE_UNAVAILABLE	503	Server temporarily unavailable
GATEWAY_TIMEOUT	504	Timeout from upstream server


💡 Why use this?

.Reduces repetitive code

.Keeps status codes consistent

.Makes API response format predictable for frontend teams


📄 License
MIT


