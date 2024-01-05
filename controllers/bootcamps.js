const Bootcamp = require('../models/Bootcamp');

//? @desc   Get all bootcamps
//? route   GET /api/v1/bootcamps
//? access  Public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

//? @desc   Get a bootcamp based on ID
//? route   GET /api/v1/bootcamps/:id
//? access  Public
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false, error: error.message });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

//? @desc   create a new bootcamp
//? route   POST /api/v1/bootcamps
//? access  private
exports.createBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//? @desc   Update bootcamp
//? route   PUT /api/v1/bootcamps/:id
//? access  Public
exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      res.status(400).json({ success: false, error: error.message });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

//? @desc   Delete a Bootcamp
//? route   DELETE /api/v1/bootcamps/:id
//? access  Public
exports.deleteBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      res.status(400).json({ success: false, error: error.message });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
