const express = require('express')
const router = express.Router()
const controller = require('../controllers/calculadora')
const modelCalc = require("../models/calculadora");

const dependencias = {
  modelCalc
};

router.get("/soma", controller.soma);
router.get("/sub", controller.sub);

router.get("/mul/:a/:b", controller.mul);
router.get("/div/:a/:b", controller.div);
router.get("/div2/:a/:b", controller.div2.bind(null, dependencias));

module.exports = router