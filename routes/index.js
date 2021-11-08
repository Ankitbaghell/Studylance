const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');
const dbController = require('../controllers/db_controller');

router.get('/',homeController.home);
router.get('/gatePage',homeController.gate);
router.get('/rgpv',homeController.rgpv);
router.get('/donate',homeController.donate);
router.get('/contactUs',homeController.contactUs);
router.get('/aboutUs',homeController.aboutUs);


router.get('/cs-it',homeController.csit);
router.get('/eee',homeController.eee);
router.get('/ece',homeController.ece);
router.get('/me',homeController.me);
router.get('/ce',homeController.ce);
router.get('/che',homeController.che);


// db routes

router.post('/create-record',dbController.createContact);

router.post('/create-donate',dbController.createDonate);



module.exports= router;