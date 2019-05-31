import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlantsService } from '../../services/plants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'appHttpClientModule-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /* plant: Plant = {
    id: 0,
    nombre: '',
    nombre_cientifico: '',
    region: '',
    descripcion: '',
    imagen: ''
  }; */

  constructor(
    private plantsService: PlantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService
  ) { }

  patternExp: string = "^[^><%$!?))&'@]*$";
  allowExtensions = "(.*?)\.(JPG|jpg|PNG|png)$";
  form: any = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    secondName: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    region: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    description: new FormControl('', Validators.required),
    img: new FormControl('', Validators.pattern(this.allowExtensions))
  });

  edit: boolean = false;
  plant: any = {};
  image: File;
  imageString: string = '';
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.plantsService.getPlant(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.plant = res;
          this.edit = true;
        },
        error => console.error(error)
      )
    }
  }

  onSend() {
    var _self = this;
    let plant = this.form.value;
    plant.img = this.imageString;
    this.plantsService.savePlant(plant)
    .subscribe(
      res => {
        _self.alert.success('Formulario Guardado'),
        this.router.navigate(['/list'])
      },
    );
  }

  onUpdate() {
    var _self = this;
    const params = this.activatedRoute.snapshot.params;
    const plant = this.form.value;
    plant.img = this.imageString;
    this.plantsService.updatePlant(params.id, plant)
    .subscribe(
      res => {
        _self.alert.success('Formulario actualizado con exito');
        _self.router.navigate(['/list']);
      }
    );
  }

  onClear() {
    this.form.reset();
  }

  onCancel() {
    this.router.navigate(['/list']);
  }


  onChange(event) {
    event.target.files;
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.image = event.target.files.item(0);
      reader.readAsDataURL(this.image);
      reader.onload = () => {
        this.imageString = reader.result.toString().split(',')[1];
        //this.imageString = this.imageString.substr(22,this.imageString.length);
      }
    }
  } 

  noNumbers(e) {
    var  tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true; 
    var  patron =/[A-Za-z\s]/;
    var te = String.fromCharCode(tecla);
    return patron.test(te);
  }

}
