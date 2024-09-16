const multer = require('multer');
const path = require('path');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploads (ensure this folder exists)
    cb(null, 'uploads/profile');
  },
  filename: function (req, file, cb) {
    // Define how the file name should be saved (e.g., unique timestamp with original extension)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter to validate file types (e.g., only allow images)
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/; // Allowed file extensions
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png)'));
  }
};

// Set limits for file upload (e.g., max file size of 5MB)
const limits = {
  fileSize: 5 * 1024 * 1024, // 5MB
};

// Initialize multer upload middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
});

module.exports = upload;
