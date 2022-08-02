const Router = require('@koa/router');
const router = new Router();

const mainController = require('../controllers/main-controller');

router.get("/eesti", mainController.helloEesti);
router.get("/no-you", mainController.noYou);
router.get("/add", mainController.addition);


module.exports = router;