const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const clientsRoutes = require('./routes/clientRoutes');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(cors())
const version = 1;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest-api-clientes',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
.catch(err => console.log(err));

//setting 
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/v'+version+'/clients',clientsRoutes); 

//starting server
app.listen(app.get('port'), () =>{
    console.log('server running on', app.get('port'));
})