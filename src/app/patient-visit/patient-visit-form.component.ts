import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-patient-visit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
  templateUrl: './patient-visit-form.component.html',
  styleUrls: ['./patient-visit-form.component.scss']
})
export class PatientVisitFormComponent {
  visitForm: FormGroup;
  currentDateTime: Date = new Date();

  constructor(private fb: FormBuilder) {
    this.visitForm = this.fb.group({
      patientName: ['', Validators.required],
      birthDate: [''],
      patientId: [''],
      visitType: [''],
      visitReason: [''],
      status: ['Luonnos'],
      doctor: [{ value: 'Tuomas Veikko Kerola', disabled: true }],
      appointmentDateTime: [''],
      additionalNotes: ['']
    });
  }

  editDateTime() {
    // Future edit logic
    console.log('Edit datetime clicked');
  }

  onSubmit() {
    if (this.visitForm.valid) {
      console.log('Form Submitted', this.visitForm.getRawValue());
    }
  }

  closeForm() {
    console.log('Form closed');
    // Reset or navigate away
  }
}
