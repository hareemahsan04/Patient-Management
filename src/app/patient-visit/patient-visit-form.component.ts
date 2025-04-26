import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-patient-visit-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  templateUrl: './patient-visit-form.component.html',
  styleUrls: ['./patient-visit-form.component.scss']
})
export class PatientVisitFormComponent {
  visitForm: FormGroup;
  dropdownOpen = false;

  doctors = ['Dr. Smith', 'Dr. Adams', 'Dr. Brown'];
  visitTypes = ['Consultation', 'Follow-up', 'Emergency'];

  constructor(private fb: FormBuilder) {
    this.visitForm = this.fb.group({
      patientName: ['', Validators.required],
      visitDate: ['', Validators.required],
      visitTime: ['', Validators.required],
      doctor: ['', Validators.required],
      visitType: ['', Validators.required],
      notes: ['']
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onSubmit() {
    if (this.visitForm.valid) {
      console.log('Form Submitted', this.visitForm.value);
      // For now, just log the form value as no backend integration is required
    }
  }
}
