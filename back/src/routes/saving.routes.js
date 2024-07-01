const { Router } = require("express");
const savingControl = require("../controllers/saving.controller");
const router= Router()
const multer = require("multer");

const storage = multer.diskStorage({
    destination: './../savingdogs/public',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
  
const upload = multer({ storage: storage });

router.post("/registro", savingControl.registro);
router.post("/login",savingControl.login);
router.get("/landing/:id",savingControl.landing);
router.post("/registroperdido",upload.single('foto'), savingControl.registroPerdido)
router.get("/informacionperdido/:id", savingControl.getPerdido)
router.post("/registroencontrado",upload.single('foto'), savingControl.registroEncontrado)
router.get("/informacionencontrado/:id", savingControl.getEncontrado)


module.exports = router;