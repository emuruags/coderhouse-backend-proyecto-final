import express from 'express';
import { routerCarts } from './routes/cart.js';
import { routerProducts } from './routes/product.js'
import { validateAdmin } from './middleware/middleware.js';

const app = express()
const PORT = 8080

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(validateAdmin);
app.use('/api/products', routerProducts);
app.use('/api/cart', routerCarts);

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || PORT, () => console.log(`Example app listening on port ${PORT}!`))

