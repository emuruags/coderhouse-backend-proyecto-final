import Cart from '../models/cart.js';
import DataFiles from './dataFiles.js';

const cartFS = new DataFiles('carts.txt');

export const getProductsByCartId = ( async (req, res) => {

    const cart = await cartFS.getById(parseInt(req.params.id));
  
    if(cart) return res.status(200).json(cart.products);
  
    return res.status(404).send('Cart not found'); 
  
  });
  
export const createCart = ( async (req, res) => {
    const id = await getId();
    const cart = new Cart(id + 1, Date.now(), [], 0);
  
    await cartFS.saveNew(cart);
  
    res.status(201).json({ message: 'Cart created', id: cart.id } );
  });

export const addProductToCart = ( async (req, res) => {
    const cart = await cartFS.getById(parseInt(req.params.id));
   
    if(cart) {
        cart.timestamp = Date.now();
        cart.products = req.body.products;
        await cartFS.saveUpdate(cart);
  
        return res.status(201).send('Product added');
    }
  
    return res.status(404).send('Cart not found'); 
  });

export const deleteCart = ( async (req, res) => {
    const carts = await cartFS.getAll() || [];
    const cart = carts.find(x => x.id === parseInt(req.params.id));
  
    if(cart) {
      await cartFS.deleteById(cart.id);
  
      return res.status(200).send('Cart deleted');
    }
  
    return res.status(404).send('Cart not found for delete'); 
  });
  
export const deleteProductFromCart = ( async (req, res) => {
    const carts = await cartFS.getAll() || [];
    const cart = carts.find(x => x.id === parseInt(req.params.id));
  
    if(cart) {
      cart.products = cart.products.filter(x => x.id !== parseInt(req.params.prod_id));
      await cartFS.saveUpdate(cart);
  
      return res.status(200).send('Product deleted');
    }
  
    return res.status(404).send('Product not found for delete'); 
  });

async function getId() {
    const carts = await cartFS.getAll() || [];
    const ids = carts.map((cart) => cart.id);
  
    return ids.length > 0 ? Math.max(...ids) : 0;
  }


export default {getProductsByCartId, createCart, addProductToCart, deleteCart, deleteProductFromCart};