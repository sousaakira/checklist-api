const express = require('express')
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express()
app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(routes);


app.listen(3000, () => {
    console.log(`Server started on port`);
});