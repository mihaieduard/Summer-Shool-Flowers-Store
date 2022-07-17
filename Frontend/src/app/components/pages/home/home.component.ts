import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FlowersService } from 'src/app/services/flowers.service';
import { Flower } from 'src/app/shared/models/Flowers';
import { sample_flowers } from 'src/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  flowersArray: Flower[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private flowersService: FlowersService,
    activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.subscriptions.push(
    this.flowersService.getAllFlowers().subscribe((flowers) => {
      this.flowersArray = flowers;
      console.log(flowers[0].tags.split(','));
    })
  );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
