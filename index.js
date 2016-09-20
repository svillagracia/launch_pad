const express    = require('express')
    , bodyParser = require('body-parser')
    , request    = require('request')
    , path       = require('path')
    , app        = express()
    , port       = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/views/index.html'))
})

app.listen(port)

module.exports = app