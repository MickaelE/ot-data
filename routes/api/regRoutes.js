// routes/api/regRoutes.js

const express = require('express');
const router = express.Router();
const RegCtrl = require('../../controllers/RegCtrl')
// Load Registation model
const Registation = require('../../models/registrations');

router.post('/registration', RegCtrl.createRegistration)
router.put('/registration/:id', RegCtrl.updateRegistration)
router.delete('/registration/:id', RegCtrl.deleteRegistration)
router.get('/registration/:id', RegCtrl.getRegistrationById)
router.get('/registrations', RegCtrl.getRegistrations)

module.exports = router;