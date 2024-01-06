function GET (req, res, url, payload) {
  res.setHeader('Content-Type', 'text/html')
  res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>HTML Page</title>
      </head>
      <body>
          <p style="color: red; font-size: 40px;">tag p</p>
      </body>
      </html>
  `)
}

function POST (req, res, url, payload) {
  res.setHeader('Content-Type', 'text/html')

  res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>HTML Page</title>
      </head>
      <body>
          <p style="color: red; font-size: 40px;">Data you sent:</p>
          <pre>${req.body}</pre>
      </body>
      </html>
  `)
}

export { GET, POST }
