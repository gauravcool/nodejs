const express = require('express')

const app = express()

const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products/2">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    });
    res.json(newProducts);
})

app.get('/api/products/:productId', (req, res) => {
    console.log('jkk',req.params);
    
    const singleProduct = products.find((product)=> product.id === Number(req.params.productId));
    if(!singleProduct) {
        res.status(404).send('Product does not exist');
    }
    res.json(singleProduct);
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    console.log(sortedProducts);
    
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1) {
        return res.status(404).send({success:true, data: []});
    }
    return res.status(200).json(sortedProducts);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})