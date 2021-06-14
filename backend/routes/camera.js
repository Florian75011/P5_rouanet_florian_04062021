// Ici se trouvent des morceaux d'URL qui appellent des fonctions pour ajouter les chemins
const express = require('express');
const router = express.Router();

const cameraCtrl = require('../controllers/camera');

router.get('/', cameraCtrl.getAllCameras);
router.get('/:id', cameraCtrl.getOneCamera);
router.post('/order', cameraCtrl.orderCameras);

module.exports = router;