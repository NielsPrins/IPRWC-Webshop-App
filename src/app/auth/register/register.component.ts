import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('captchaRef') captchaRef: any;
  public form: FormGroup = new FormGroup({});
  private recaptchaToken = '';
  public registerFailed = false;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),
        Validators.pattern('^(?=.*[A-Z])(?=.*[\\W])(?=.*[0-9])(?=.*[a-z]).{8,35}$')
      ]],
    });
  }

  ngOnInit(): void {
  }

  public submitForm(): void {
    if (!this.recaptchaToken) {
      this.captchaRef.execute();
    } else {
      this.submit();
    }
  }

  public resolved(captchaResponse: string): void {
    this.recaptchaToken = captchaResponse;
    if (captchaResponse !== null) {
      this.submit();
    }
  }

  submit(): void {
    if (!this.form.valid) {
      this.registerFailed = true;
      return;
    }

    const recaptchaData = {token: this.recaptchaToken};
    this.api.post('/user', {...this.form.value, ...recaptchaData}).then((res) => {
      if (res.data.result) {
        Swal.fire({
          title: 'Account has been created',
          // text: 'Check your email to verify your account',
          confirmButtonText: 'Login'
        }).then(() => {
          return this.router.navigate(['/login']);
        });
      } else {
        this.registerFailed = true;
        this.captchaRef.reset();
      }
    }).catch(() => {
      this.registerFailed = true;
      this.captchaRef.reset();
    });
  }

}
