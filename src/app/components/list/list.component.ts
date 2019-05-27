import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private plantsServeice: PlantsService) { }

  plants: any = [];
  ngOnInit() {
    this.plantsServeice.getPlants().subscribe(
      res => {
        this.plants = res;
      },
      error => console.log(error)
    );
  }


  onDelete(id: string) {
    this.plantsServeice.deletePlant(id).subscribe(
      res => {console.log(res)},
      error => console.log(error)
    );
    this.ngOnInit();
  }

  onUpdate() {
    
  }

}
