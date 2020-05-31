const express = require('express');
const forumController = require('./../controllers/forumController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, forumController.getAllForums)
  .post(forumController.createForum);

router
  .route('/:id')
  .get(forumController.getForum)
  .patch(forumController.updateForum)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    forumController.deleteForum
  );
module.exports = router;
