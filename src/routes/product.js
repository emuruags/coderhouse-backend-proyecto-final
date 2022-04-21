
import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.js';

const { Router } = express;
export const routerProducts = Router();

routerProducts.get('/:id?', getProducts);

routerProducts.post('/', createProduct);

routerProducts.put('/:id?', updateProduct);

routerProducts.delete('/:id?', deleteProduct);



