import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   contain_register=false;
   contain_log=true;

    title ='example react form';

    public formLogin!:FormGroup 
    public formRegister!: FormGroup

  constructor( private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['',
      [
        Validators.required,
        Validators.email,
      ],
    ],
      password:['',
      [
        Validators.required,
        Validators.minLength(6),
      ]
      ],
    });
    this.formRegister =this.formBuilder.group({
      name_user_new:['',
      [
        Validators.required,
        Validators.minLength(6),
      ],
    ],
      email_new:['',
      [
        Validators.required,
        Validators.email
      ],
    ],
      password_new:['',
      [
        Validators.required,
        Validators.minLength(6),
      ]
      ],

    })

  }

  send(): any{
    if(this.formLogin.valid){
      console.log(this.formLogin!.value);
      this.onResetForm(); 
    }
    
  }

  onResetForm(){
    this.formLogin.reset();
  }

  res(){
    if(this.contain_register=true){
      this.contain_log=false;
    }
  }
  res2(){
    this.contain_register=false
    this.contain_log=true;

  }
  send_new_user():any{
    console.log(this.formRegister.value);
  }


}
