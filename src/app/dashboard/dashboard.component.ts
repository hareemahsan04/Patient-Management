import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HeaderComponent
  ],
})
export class DashboardComponent {
  showDropdown = false;

  actions = [
    { name: 'Potilaan tarkastelu', icon: 'person' },
    { name: 'Potilaan viestit', icon: 'message' },
    { name: 'Lääkärin viestit', icon: 'local_hospital' },
    { name: 'Työajat', icon: 'schedule' },
    { name: 'Kalenteri', icon: 'calendar_today' },
    { name: 'Asetukset', icon: 'settings' },
    { name: 'Terveysportti', icon: 'health_and_safety' },
  ];

  appointments = [
    { time: '09:00 AM', name: 'Juha Lahtinen – 240545-123Y', type: 'Etävastaanotto', message: 'Hei tohtori, kiitos, että hyväksyitte tapaamisen. Tarvitsen apua uusien oireideni kanssa, joita aloin kokea viime viikolla.' },
    { time: '09:45 AM', name: 'Kaarina Mäkinen – 210637-963A', type: 'Etävastaanotto' },
    { time: '10:30 AM', name: 'Antti Virtanen – 060526-741B', type: 'Vastaanotto' },
    { time: '11:15 AM', name: 'Mari Hiltunen – 060526-741B', type: 'Hoitopuhelu' },
    { time: '01:00 PM', name: 'Petri Niemi – 060526-741B', type: 'Konsultaatio' },
    { time: '02:15 PM', name: 'Laura Leppänen – 151139-258D', type: 'Etävastaanotto' },
  ];

  shortcuts = [
    { name: 'Sairaalalähete', icon: 'assets/icons/hospital-referral.png' },
    { name: 'Laboratoriotilaus', icon: 'assets/icons/lab-order.png' },
    { name: 'Todistukset', icon: 'assets/icons/certificates.png' },
    { name: 'Resepti', icon: 'assets/icons/prescription.png' },
    { name: 'Kuvantaminen', icon: 'assets/icons/imaging.png' },
    { name: 'Lääkelista', icon: 'assets/icons/medication-list.png' },
  ];

  recentPatients = [
    { name: 'Olavi Virtanen', id: '240545-123Y' },
    { name: 'Juhani Korhonen', id: '010132-123Y' },
    { name: 'Riikka Mäkelä', id: '150242-456K' },
    { name: 'Mikko Nieminen', id: '300630-789P' },
    { name: 'Aino Salminen', id: '010141-321N' },
  ];

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
