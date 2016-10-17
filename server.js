'use strict'

const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('Heeeyyy'))

module.exports = app