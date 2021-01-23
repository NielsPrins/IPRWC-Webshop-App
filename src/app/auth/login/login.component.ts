import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('captchaRef') captchaRef: any;
  public form: FormGroup = new FormGroup({});
  private recaptchaToken = '';
  public loginFailed = false;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private appService: AppService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
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
    if (captchaResponse !== null){
      this.submit();
    }
  }

  submit(): void {
    if (!this.form.valid) {
      this.loginFailed = true;
      return;
    }

    const recaptchaData = {token: this.recaptchaToken};
    this.api.post('/user/checkLogin', {...this.form.value, ...recaptchaData}).then((res) => {
      if (res.data.login === 'success') {
        this.appService.setUserWithToken(res.data.token);
        return this.router.navigate(['.']);
      } else {
        this.loginFailed = true;
        this.captchaRef.reset();
      }
    }).catch(() => {
      this.loginFailed = true;
      this.captchaRef.reset();
    });
  }
}
