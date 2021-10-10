import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, AuthService } from '@app/shared/services/services';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  logInForm: FormGroup;
  submitted: boolean = false;
  loading = false;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logInForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      // username: [isDevEnvironment ? 'EREC9H' : '', [Validators.required]],
      // password: [isDevEnvironment ? 'UEJU2V' : '', [Validators.required, Validators.minLength(5)]],
    });
  }
  
  get f() { return this.logInForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.logInForm.invalid) {
      return;
    }
    const { username, password } = this.logInForm?.value;
    this.subs.add(
      this.apiService
        .login(username, password)
        .subscribe(() => this.router.navigateByUrl('/'))
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  
}
