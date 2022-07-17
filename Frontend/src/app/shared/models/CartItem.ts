
import { Flower } from "./Flowers";

export class CartItem{

   constructor(public flower:Flower) {
   }
  quantity:number = 1;
  price: number = this.flower.price;
}
