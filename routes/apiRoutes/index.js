// Central hub to pull all routes together

const express = require('express');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./rolesRoutes'));
router.use(require('./departmentRoutes'));

module.exports = router;