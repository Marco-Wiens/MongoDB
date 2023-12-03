const {Router} = require("express");
const router = Router();
const photosCtrl = require("../controller/photo.controller");

router.get("/photos", photosCtrl.getPhotos);

router.post("/photos", photosCtrl.postPhoto);

router.put("/photos", photosCtrl.putPhoto);

router.delete("/photos", photosCtrl.deletePhoto);

module.exports = router;