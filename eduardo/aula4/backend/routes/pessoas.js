const express = require('express')
const router = express.Router()
const controller = require('../controller/pessoas')

const db = require('../database/index')

router.get('/', controller.index.bind(null, { db }))
router.post('/', controller.create.bind(null, { db }))
router.get('/:id', controller.show.bind(null, { db }))
router.put('/:id', controller.update.bind(null, { db }))
router.delete('/:id', controller.destroy.bind(null, { db }))

module.exports = router