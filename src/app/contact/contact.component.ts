import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const emailBody = `
        Nom: ${formData.nom}
        Prénom: ${formData.prenom}
        Message: ${formData.message}
      `;

      const mailtoLink = `mailto:sehlimariem71@gmail.com?subject=Message%20du%20formulaire%20de%20contact&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      this.contactForm.reset();
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  }
}
