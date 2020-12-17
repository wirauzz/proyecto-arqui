const router= require('express-promise-router')();
const {index,newClient,getClient,replaceClient,updateClient,deleteClient} = require('../controllers/clientController');

router.get('/', index);

router.get('/:clientId', getClient);

router.post('/', newClient);

router.put('/:clientId', replaceClient);

router.patch('/:clientId', updateClient);

router.delete('/:clientId', deleteClient);


module.exports = router;