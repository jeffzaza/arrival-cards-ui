import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrivalCardAPI, ArrivalCard } from '../../services/arrival-card';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './create.html',
  styleUrls: ['./create.css'],
  imports: [CommonModule, FormsModule],
  selector: 'app-create',
})
export class Create {
  card: ArrivalCard = {
    name: '',
    id_number: '',
    arrival_date: ''
  };

  constructor(private api: ArrivalCardAPI) {}

  submit() {
    this.api.create(this.card).subscribe({
      next: () => alert('Card submitted successfully'),
      error: err => alert('Submission failed: ' + err.message)
    });
  }
}
