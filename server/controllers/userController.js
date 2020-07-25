const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const user = await User.find().populate('courses');

    res.status(200).json({ success: true, count: user.length, data: user });
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('courses');
    user.populate('Course');

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Create user
    const user = await User.create(req.body);

    res.status(200).json({ success: true, msg: 'Ok' });
  } catch (err) {
    console.log(err);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
      .select('+password')
      .populate('courses');

    if (!user) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }

    if (user.password !== password) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' });
    }

    console.log(user);

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
  }
};
