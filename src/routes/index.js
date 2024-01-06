function GET (req, res, url, payload) {
  try {
    const ip = req.socket.remoteAddress
    const port = req.socket.remotePort
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: `Path ${url.pathname}. Your IP address is ${ip} and your source port is ${port}.` }))
  } catch (error) {
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}

function OPTIONS (req, res, url, payload) {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ name: 'Method OPTIONS of root handler' }));
  } catch (error) {
    res.statusCode = 500;
    res.end('Internal Server Error');
    console.error(error);
  }
}

function POST (req, res, url, payload) {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(`POST method of root handler ${payload}`);
  } catch (error) {
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

export { GET, OPTIONS, POST }
