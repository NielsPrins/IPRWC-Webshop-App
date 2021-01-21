import {Component, OnInit} from '@angular/core';
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
  public form: FormGroup = new FormGroup({});
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

  submit() {
    this.api.put('/user', this.form.value).then((res) => {
      if (res.data.result) {
        Swal.fire({
          title: 'Account has been created',
          text: 'Check your email to verify your account',
          confirmButtonText: 'Login'
        }).then(() => {
          return this.router.navigate(['/login']);
        });
      } else {
        this.registerFailed = true;
      }
    }).catch(() => {
      this.registerFailed = true;
    });
  }

}
