import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  monFormulaire: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.monFormulaire = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

ngOnInit(): void {
 
}

  
  submitForm() {
    if (this.monFormulaire.valid) {
      const formData = JSON.stringify(this.monFormulaire.value);
      localStorage.setItem('formData', formData);
  
      console.log('Données du formulaire stockées dans le localStorage');
      this.router.navigate(['/reserve']);
      this.monFormulaire.reset();
    } else {  
      console.log('Le formulaire n\'est pas valide.');
    }
  }
  
  

  supprimerForm() {
    this.monFormulaire.reset();
  }

  goToSecApp() {
    this.router.navigate(['/sec-app']);
  }
}
