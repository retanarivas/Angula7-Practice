import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'appHttpClientModule-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  patternExp: string = "^[^><%$!?))&'@]*$";
  allowExtensions = "(.*?)\.(JPG|jpg|PNG|png)$";
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    secondName: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    region: new FormControl('', [Validators.required, Validators.pattern(this.patternExp)]),
    description: new FormControl('', Validators.required),
    img: new FormControl(null, Validators.pattern(this.allowExtensions))
  });

  ngOnInit() {
  }

  onSend() {
    const newItem = this.form.value;
    this.http
    .post('form/add', newItem)
    .subscribe(
      error => console.error(error),
      res => console.log(res)
    );
    this.form.reset();
  }
  onClear() {
    this.form.reset();
  }

  onFileSelected(event) {
    console.log(event.target.files.name);
  }

}
