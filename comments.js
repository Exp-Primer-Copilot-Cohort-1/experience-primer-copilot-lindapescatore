// Create web server
const express = require('express')
const app = express()
const port = 3000

// Use the body parser middleware to parse the body of a request
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Use the express middleware to serve static files
app.use(express.static('public'))

// Use the comments router
const comments = require('./comments-router')
app.use(comments)

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`))

// Path: comments-router.js
const express = require('express')
const router = express.Router()

// Array to store comments
const comments = []

// Get all comments
router.get('/comments', (req, res) => {
  res.json(comments)
})

// Add a new comment
router.post('/comments', (req, res) => {
  const comment = req.body
  comments.push(comment)
  res.status(201).json(comment)
})

module.exports = router
```

## 2.5.2. Middleware
**Middleware** are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

Middleware functions can be used to:

- Execute code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

```javascript
const express = require('express')
const app = express()
const port = 3000

// Middleware function that logs the request method and path
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.path}`)
  next()
})

// Serve static files
app.use(express.static('public'))

app.listen(port, () => console.log(`Server listening on port ${port}`))
```

```javascript
const express = require('express')
const app = express()
const port = 3000

// Middleware function that logs the request method and path
app.use((req, res, next
