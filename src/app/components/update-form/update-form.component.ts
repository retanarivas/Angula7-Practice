import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../services/plants.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(
    private plantsService: PlantsService,
    private activatedRoute: ActivatedRoute
  ) { }


  patternExp: string = "^[^><%$!?))&'@]*$";
  allowExtensions = "(.*?)\.(JPG|jpg|PNG|png)$";
  form: any = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    secondName: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    region: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    description: new FormControl('', Validators.required),
    img: new FormControl(null, Validators.pattern(this.allowExtensions))
  });


  plant: any = {};
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
      this.plantsService.getPlant(params.id).subscribe(
        res => {
          console.log(res);
          this.plant = res;
          console.log(this.plant);
        },
        error => console.error(error)
      )
  }

  onSend() {
    const params = this.activatedRoute.snapshot.params;
    const plant = this.form.value;
    this.plantsService.updatePlant(params.id, plant)
    .subscribe(
      res => {
        console.log(res);
      },
      error => console.log(error)
    );
    this.form.reset();
  }

}
