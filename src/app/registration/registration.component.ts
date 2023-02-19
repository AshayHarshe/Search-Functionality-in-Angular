import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  signup: FormGroup;
  signupList: any = [];
  index = ''
  constructor(private formbuilder: FormBuilder) {
    this.signup = this.formbuilder.group({
     fullName:[''],
     Mobile:[''],
     email:[''],
     password:[''],
    })
  }
  ngOnInit(): void {
    
  }


  submit() {
    console.log(this.signup.value)
    // this.signupList.push(this.signup.value)
    // localStorage.setItem('signupList', JSON.stringify(this.signupList));
  }
































 
  // edit(i: any) {
  //   this.signup.patchValue({
  //     Email: this.signupList[i].Email,
  //     Password: this.signupList[i].Password,
  //   })
  //   this.index = i;
  // }
  // update() {
  //   this.signupList[this.index].Email = this.signup.value.Email;
  //   this.signupList[this.index].Password = this.signup.value.Password;
  //   localStorage.setItem('signupList', JSON.stringify(this.signupList));
  //   this.clear()
  // }
  // clear() {
  //   this.signup.reset()
  // }
  // delete(i: any) {
  //   this.signupList.splice(i, 1);
  //   localStorage.setItem('signupList', JSON.stringify(this.signupList));
  // }
}