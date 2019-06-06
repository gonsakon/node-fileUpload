const express = require('express');
const router = express.Router();
const multer = require('multer');
const UPLOAD_URL = './uploads'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_URL)
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, Date.now() + "-" + file.originalname); 
  }
})
const upload = multer({
  storage: storage
})
// 首頁
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 檔案上傳
router.post('/upload', upload.single('fileUpload'), function (req, res, next) {

   res.send('上傳成功');
   
 })

module.exports = router;
