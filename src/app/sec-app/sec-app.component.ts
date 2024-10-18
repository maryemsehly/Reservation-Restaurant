import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sec-app',
  templateUrl: './sec-app.component.html',
  styleUrls: ['./sec-app.component.css']
})
export class SecAppComponent implements OnInit {
  monFormulaire: FormGroup;

  constructor(private formBuilder: FormBuilder , private router:Router) {
    
    this.monFormulaire = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
    
  }
  submitForm() {
    if (this.monFormulaire.valid) {
      console.log(this.monFormulaire.value);
      localStorage.setItem('monFormData', JSON.stringify(this.monFormulaire.value));
      this.monFormulaire.reset();
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  }
 
  supprimerForm() {
    this.monFormulaire.reset();
  }
  gotologin() {
    this.router.navigate(['/login']);
  }}