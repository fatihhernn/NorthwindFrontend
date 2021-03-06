import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';




@Injectable({

  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    //bu rklrfiğim şey sepette var mı ?
    let item=CartItems.find(c=>c.product.productID===product.productID)
    if (item) {
      item.quantity+=1
    }else{
      let cartItem=new CartItem()
      cartItem.product=product
      cartItem.quantity=1
      CartItems.push(cartItem)
    }

  }

  list(){
    return CartItems;
  }

  removeFromCart(product:Product){
    let item:any=CartItems.find(c=>c.product.productID===product.productID);
    CartItems.splice(CartItems.indexOf(item),1)
  }
}
