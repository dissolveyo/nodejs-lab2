export function GET (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end(`
      GET Method of text route handler
      Name: Ivan
      Surname: Petrovich
  `)
}

export function POST (req, res, payload) {
  res.setHeader('Content-Type', 'text/plain')
  res.end(`POST method of text route: ${payload}`)
}

export function OPTIONS (req, res) {
  res.setHeader('Allow', 'GET, POST, OPTIONS')
  res.end("OPTIONS method of text route")
}
