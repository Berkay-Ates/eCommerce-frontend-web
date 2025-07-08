import { Component, inject } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';
import { UserType } from '../../static/enums/user_types';

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

  login() {
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
