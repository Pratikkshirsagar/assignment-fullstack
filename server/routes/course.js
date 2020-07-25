const express = require('express');
const router = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');

router.route('/:id').get(getCourse).patch(updateCourse).delete(deleteCourse);
router.route('/').get(getCourses).post(createCourse);

module.exports = router;
