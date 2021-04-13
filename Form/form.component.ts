import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DewAuthService } from '@app/authentication/auth.service';
import { ApiService } from '@app/services/api.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class GoogleFormComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ])
    
   });
    constructor( 
        private authService: DewAuthService,
        private api: ApiService) { 
       
    }
  
   
    ngOnInit() {
    }
  
    onSubmit(){
        let data = Object.values(this.form.value);
      console.log([data]);
      this.api.insertFormData([data])
      .subscribe(
        (data: any) => {
          console.log(data)
        },
        (error) => {
          console.log("Error", error);
        });
    }

}