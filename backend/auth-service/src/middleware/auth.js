const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findOne({ _id: decoded.userId, isActive: true });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Vui lòng đăng nhập' });
  }
};

exports.adminAuth = async (req, res, next) => {
  try {
    await exports.auth(req, res, () => {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Không có quyền truy cập' });
      }
      next();
    });
  } catch (error) {
    res.status(401).json({ message: 'Vui lòng đăng nhập' });
  }
}; 