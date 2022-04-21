
import express from 'express';
import { createCart, addProductToCart, deleteCart, deleteProductFromCart, getProductsByCartId } from '../controllers/cart.js';

const { Router } = express;
export const routerCarts = Router();

routerCarts.get('/:id/products', getProductsByCartId);

routerCarts.post('/', createCart);

routerCarts.post('/:id/products', addProductToCart);

routerCarts.delete('/:id', deleteCart);

routerCarts.delete('/:id/products/:prod_id', deleteProductFromCart);