const express = require('express');
const resourceController = require('./../controllers/resourceController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, resourceController.getAllResources)
  .post(resourceController.createResource);

router
  .route('/:id')
  .get(resourceController.getResource)
  .patch(resourceController.updateResource)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    resourceController.deleteResource
  );

module.exports = router;
