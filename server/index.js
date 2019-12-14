const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

const cors = require('cors');

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('', )
app.listen(port, () => console.log(path.join(__dirname, '../public')));