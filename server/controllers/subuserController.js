const { subUsermodel } = require('../models/user');
const path = require('path');

const fs = require('fs')
const createUser = (req, res) => {
    const fileName = req.file.filename;
    const imageUrl = req.protocol + "://" + req.get('host') + "/api/auth/uploads/" + fileName;
    subUsermodel.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        age: req.body.age,
        country: req.body.country,
        image: imageUrl,
        creator: req.body.creator
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

//View by creator  
const userView = (req, res) => {
    const c_id = req.params.id;
    subUsermodel.find({ creator: c_id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
}
// const userdel = (req, res) => {
//     const id = req.params.id
//     subUsermodel.findByIdAndDelete(id)
//         .then(users => {
//             const imageUrl = users.image;

//             const fileName = path.basename(imageUrl);
//             console.log(fileName)
//             const imagePath = path.join(__dirname, 'api/auth/uploads', fileName);
//             fs.unlink(imagePath, (err) => {
//                 if (err) {
//                     console.error(err);
//                     res.status(500).json({ error: 'Failed to delete image file' });
//                 } else {
//                     res.json(users);
//                 }
//             });

//         })
// }
const userdel = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await subUsermodel.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const imageUrl = user.image;
      const fileName = path.basename(imageUrl);
      const imagePath = path.join(__dirname, '../uploads', fileName);
  
      await fs.promises.unlink(imagePath);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
const getuser=(req, res) => {
    const id = req.params.id
    subUsermodel.findById(id)
    .then(users=>res.json(users))
        .catch(err=>res.json(err))
    }
    const userupdate=(req, res) => {
        const id = req.params.id
        const fileName = req.file.filename;
        const imageUrl = req.protocol + "://" + req.get('host') + "/api/auth/uploads/" + fileName;

        subUsermodel.findByIdAndUpdate(id,{user_name : req.body.user_name,
            user_email:req.body.user_email,
            age: req.body.age,
            country:req.body.country,
            image:imageUrl
        })
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    }
module.exports = { createUser, userView, userdel, getuser, userupdate }