import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FlowersService } from 'src/app/services/flowers.service';
import { Flower } from 'src/app/shared/models/Flowers';

@Component({
  selector: 'app-flower-page',
  templateUrl: './flower-page.component.html',
  styleUrls: ['./flower-page.component.css']
})
export class FlowerPageComponent implements OnInit {

  flower!: Flower;

  constructor(activatedRoute: ActivatedRoute, flowerService: FlowersService,
   private cartService: CartService, private router:Router) {
   activatedRoute.params.subscribe((params) => {
    if(params.id)
      flowerService.getFlowerById(params.id).subscribe(res => {
        this.flower = res;
      })
   })
  }

  ngOnInit(): void {
  }

  addToCart(){
    console.log('text');
    this.cartService.addToCart(this.flower);
    this.router.navigateByUrl('/cart-page');
  }
}
