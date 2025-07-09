import { Component, inject } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';
import { UserType } from '../../static/enums/user_types';
import { LoginEntityRequest } from '../../core/models/Auth/requestModels/requestLoginObject';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  authService = inject(Auth)
  email: string = '';
  password: string = '';
  userType: UserType = UserType.CUSTOMER;

  async login() {
    if (!this.email || !this.password) {
      console.log('Email ve şifre zorunlu');
      return;
    }

    let loginObject: LoginEntityRequest = {email:this.email, password: this.password}
    try {

      if(this.userType===UserType.CUSTOMER){
        console.log("Customer Login")
        console.log(loginObject);
        
        const res = await this.authService.loginCustomer(loginObject);
        console.log('Giriş başarili', res);

      }else if(this.userType === UserType.SELLER){
        console.log("Seller Login")
        const res = await this.authService.loginSeller(loginObject);
        console.log('Giriş başarili', res);
      }

    } catch (err: any) {
      console.error('Giriş başarisiz', err);
      console.log(err)
      // hata mesaji göster
    }
  }

}
