import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(
    private plantService: PlantsService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  plant: any = {};
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.plantService.getPlant(params.id)
      .subscribe(
        res => {
          this.plant = res;
        }
      )
    }
    
  }

  onClick() {
    this.route.navigate(['/list'])
  }

}
