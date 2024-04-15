var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/",indexController.inicio );
router.get("/search-results",indexController.bus );



module.exports = router;