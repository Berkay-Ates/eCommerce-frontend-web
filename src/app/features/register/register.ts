import { Component, inject, Signal, signal } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';
import { UserType } from '../../static/enums/user_types';
import { RegisterCustomerRequest } from '../../core/models/Auth/requestModels/customerRegisterModel';
import { RegisterSellerRequest } from '../../core/models/Auth/requestModels/sellerRegisterModel';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
    authService = inject(Auth)
    email: string = '';
    password: string = '';
    name: string = '';
    surname: string = '';

    UserType = UserType;

  userType = signal<UserType>(UserType.CUSTOMER);

  onUserTypeChange(newType: UserType) {
    this.userType.set(newType);
  }

  async register() {
    if (!this.email || !this.password) {
      console.log('Email ve şifre zorunlu');
      return;
    }
    try {
      if(this.userType()===UserType.CUSTOMER){
        const registerObject: RegisterCustomerRequest = {surname: this.surname, email: this.email, password: this.password, name: this.name}; 
        const res = await this.authService.registerCustomer(registerObject);
        console.log('Kayit başarili', res);

      }else if(this.userType() === UserType.SELLER){
        const registerObject: RegisterSellerRequest = {email: this.email, password: this.password, name: this.name};
        const res = await this.authService.registerSeller(registerObject);
        console.log('Kayit başarili', res);
      }

    } catch (err: any) {
      console.error('Kayit başarisiz', err);
      // hata mesajı göster
    }
  }

}
