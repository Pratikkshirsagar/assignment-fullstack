const Courses = require('../models/Course');

// get /api/v1/courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Courses.find();

    res
      .status(200)
      .json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    console.log(err);
  }
};

// get /api/v1/courses/:id
exports.getCourse = async (req, res) => {
  try {
    const courses = await Courses.findById(req.params.id);

    res.status(200).json({ success: true, data: courses });
  } catch (err) {
    console.log(err);
  }
};

// POST /api/v1/courses
exports.createCourse = async (req, res) => {
  try {
    const course = await Courses.create(req.body);

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (err) {
    console.log(err);
  }
};

// PATCH /api/v1/courses/:id
exports.updateCourse = async (req, res) => {
  try {
    const course = await Courses.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (err) {
    console.log(err);
  }
};

// DELETE /api/v1/courses/:id
exports.deleteCourse = async (req, res) => {
  try {
    await Courses.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};
