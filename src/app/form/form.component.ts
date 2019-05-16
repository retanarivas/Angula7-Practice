import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  patternExp: string = "^[^><%$!?))&'@]*$";
  allowExtensions: string = "(.*?)\.(JPG|jpg|PNG|png)$"
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    secondName: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    region: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    description: new FormControl('', Validators.required),
    img: new FormControl(null, Validators.pattern(this.allowExtensions))
  })

  ngOnInit() {
  }

  onSend() {
    let newItem = this.form.value;
    console.log(newItem);
    localStorage.setItem('form', JSON.stringify(newItem));
    this.form.reset();
  }
  onClear() {
    this.form.reset();
  }

  onFileSelected(event) {
    console.log(event.target.files.name);
  }

  onKey (event: any) {

  }

}
