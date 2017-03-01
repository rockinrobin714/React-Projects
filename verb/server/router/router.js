const router = require('express').Router();
const controller = require('./controller');


// router.get('/employees/all', controller.employees.all);
// router.get('/employees/it', controller.employees.it);
// router.get('/employees/sales', controller.employees.sales);
// router.get('/employees/support', controller.employees.support);

// router.get('/searchQuery', controller.searchQuery.get);

router.post('/employees', controller.employees.post);

module.exports = router;