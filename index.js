var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.write('Hello Docker container! 🚀');  // write a response to the client
  res.end(); // end the response
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
