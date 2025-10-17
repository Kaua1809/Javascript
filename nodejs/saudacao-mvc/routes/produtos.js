const router = express.router();
const siteController = require('../controllers/siteController');
const {route} = require('./users');

router.get("/",siteController.produtos);
router.get("/camisetas",siteController.camisetas);

module.exports = router;