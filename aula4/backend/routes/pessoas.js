const express = require('express');
const router = express.Router();
const controller = require('../controllers/pessoas');
const db = required('../database/index')

router.get('/',controller.index.bind(null,{db}));
router.post('/',controller.create.bind(null,{db}));
router.get('/:id',controller.show.bind(null,{db}));
router.put('/:id',controller.update.bind(null,{db}));
router.delete('/:id',controller.destroy.bind(null,{db}));
//router.get('/:id_pessoa/endereco/:id_endereco');

module.exports = router