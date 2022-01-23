import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title ='example react form';

    public formLogin!:FormGroup 

  constructor( private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['',
      [
        Validators.required,
        Validators.email
      ],
    ],
      password:['',
      [
        Validators.required,
        Validators.minLength(6)
      ]
       

      ]
    });

  }

  send(): any{
    console.log(this.formLogin!.value)
  }


}
