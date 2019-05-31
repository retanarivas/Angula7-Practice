import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private plantsServeice: PlantsService,
    private alert: AlertService,
  ) { }

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
    this.plantsServeice.deletePlant(id)
    .subscribe( 
        res => {
          confirm('DESEA ELIMINAR LA PLANTA ?'),
          this.alert.danger('eliminado correcto'),
          this.ngOnInit();
        } 
    );
  }
}
