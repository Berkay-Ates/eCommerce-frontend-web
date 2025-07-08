import { Component, inject, Signal, signal } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';
import { UserType } from '../../static/enums/user_types';

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

  register() {
    if (!this.email || !this.password) {
      console.log('Email ve şifre zorunlu');
      return;
    }
    console.log("Clicked");
    

    // this.authService.login(this.email, this.password).subscribe({
    //   next: (res:any) => {
    //     console.log('Giriş başarılı', res);
    //     // buraya yönlendirme vs. ekleyebilirsin
    //   },
    //   error: (err:any) => {
    //     console.error('Giriş başarısız', err);
    //   }
    // });
  }

}
