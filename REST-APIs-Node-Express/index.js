import express from 'express';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

// bodyarser setup
app.use(bodyParser)

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);