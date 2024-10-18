import { Component,EventEmitter, Output,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,} from '@angular/forms';
import { Router } from '@angular/router';
import { Directive, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';  


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  @Output() reservationSubmitted = new EventEmitter<any>();
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace('/[^0-9]/g', ''); 
  }
  ReservationForm: FormGroup;
  years: number[] = [];
  months: number[] = [];
  days: number[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.ReservationForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      Num: ['', [Validators.required,Validators.maxLength(7), Validators.pattern('^[0-9]+$')]],
      year: ['', Validators.required],
      month: ['', Validators.required],
      day: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initDateArrays();
  }

  initDateArrays() {
    for (let year = 1900; year <= 2024; year++) {
      this.years.push(year);
    }
    for (let month = 1; month <= 12; month++) {
      this.months.push(month);
    }
    for (let day = 1; day <= 31; day++) {
      this.days.push(day);
    }
  }
  submitForm() {
    if (this.ReservationForm.valid) {
      console.log(this.ReservationForm.value);
  
      localStorage.setItem('formData', JSON.stringify(this.ReservationForm.value));
      const reservationData = this.ReservationForm.value;
      this.reservationSubmitted.emit(reservationData);
      this.router.navigate(['/reserve']);
      this.ReservationForm.reset();
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  }
  supprimerForm() {
    this.ReservationForm.reset();
  }

  gotologin() {
    this.router.navigate(['/login']);
  }
}
