const express = require('express');
const morgan = require('morgan');
const app = express();
const cors=require("cors");
app.use(cors())

app.set('port',process.env.PORT || 8000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(require('./routes'));
app.use('/api/hotels',require('./routes/index'))

app.listen(app.get('port'), ()=>{
    console.log(`Server on express ${app.get('port')}`)
})
