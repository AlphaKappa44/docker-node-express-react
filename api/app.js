const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"2704",
      "title":"Book Review: Summary of 'The Four Agreements' by Don Miguel Ruiz"
    },
    {
      "id":"2",
      "title":"Game Review: Double Dragon II"
    },
    {
      "id":"3",
      "title":"Show Review: Mary's show is the best in town (CLICKED REFRESH!)"
    }
  ])
})

app.listen(4000, () => {
  console.log('Some changes for test here. Nodemon should restart! Listening for requests on port 4000')
})