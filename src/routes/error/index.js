// Unhandled error
function GET(req, res) {
  throw "unhandled error";
  res.json({name: 'test handlerGet'})
}

// Unsupproted method
function PURGE(req, res) {
  res.json({name: 'test handlerOptions'})
}

export {GET, PURGE}