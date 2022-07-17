import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserLogin } from 'src/app/shared/models/IUserLogin';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required]
    })
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
    
    this.userService.login(
      {email: this.fc.email.value, password:this.fc.password.value})
      .subscribe((data) => 
    {
     const current_user: IUserLogin = {
      email: this.fc.email.value, password:this.fc.password.value
     };

     data.forEach(element => {
      if(element.email === current_user.email && element.password === current_user.password) {
        this.router.navigate(['/']);
      }
     });


      
    })
    
  }

  

}
