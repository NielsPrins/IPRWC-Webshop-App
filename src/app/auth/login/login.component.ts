import {Component, OnInit} from '@angular/core';
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
  public form: FormGroup = new FormGroup({});
  public loginFailed = false;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private appService: AppService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.api.post('/user/checkLogin', this.form.value).then((res) => {
      if (res.data.login === 'success') {
        this.appService.setUser(res.data.token);
        return this.router.navigate(['.']);
      } else {
        this.loginFailed = true;
      }
    }).catch(() => {
      this.loginFailed = true;
    });
  }

}
