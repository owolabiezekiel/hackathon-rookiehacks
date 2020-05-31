const Forum = require('./../models/forumModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.aliasTopForums = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllForums = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(
    Forum.find().populate('comments.postedBy'),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const forums = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: forums.length,
    data: {
      forums
    }
  });
});

exports.getForum = catchAsync(async (req, res, next) => {
  const forum = await Forum.findById(req.params.id).populate(
    'comments.postedBy'
  );
  // Forum.findOne({ _id: req.params.id })

  if (!forum) {
    return next(new AppError('No Forum found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      forum
    }
  });
});

exports.createForum = catchAsync(async (req, res, next) => {
  const newForum = await Forum.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      Forum: newForum
    }
  });
});

exports.updateForum = catchAsync(async (req, res, next) => {
  let forum = await Forum.findById(req.params.id);

  if (!forum) {
    return next(new AppError('No Forum found with that ID', 404));
  }

  forum.comments.push(req.body.comment);
  forum = await Forum.create(forum);

  console.log(forum);

  res.status(200).json({
    status: 'success',
    data: {
      forum
    }
  });
});

exports.deleteForum = catchAsync(async (req, res, next) => {
  const forum = await Forum.findByIdAndDelete(req.params.id);

  if (!forum) {
    return next(new AppError('No Forum found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
