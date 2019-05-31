import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(
    private plantService: PlantsService 
  ) { }

  plants: any = []
  ngOnInit() {
    this.plantService.getPlants()
    .subscribe(
      res => {
        this.plants = res;
      },
      error => console.log(error)
    )
  }

}
