const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {signup,signupread,login,auth} =  require('../controllers/userController')
const {createUser, userView,userdel,getuser,userupdate} =  require('../controllers/subuserController')

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
router.post('/create',upload.single('image'),createUser)
router.put("/update_user/:id",upload.single('image'),userupdate)


router.use('/uploads', express.static('uploads'));
router.get('/', signupread)
router.post('/signup',signup)
router.post('/login',login)
router.post('/authentication',auth)
// SubUsers
router.get('/view/:id',userView)
router.delete("/del/:id", userdel)
router.get("/getuser/:id",getuser)
module.exports = router;