import { Component } from '@angular/core';
import { ArrivalCardAPI, ArrivalCard } from '../../services/arrival-card';

@Component({
  standalone: true,
  templateUrl: './create.html',
  styleUrls: ['./create.css'],
  selector: 'app-create',
})
export class Create {
  card: ArrivalCard = {
    name: '',
    id: '',
    date: ''
  };

  constructor(private api: ArrivalCardAPI) {}

  submit() {
    this.api.create(this.card).subscribe({
      next: () => alert('Card submitted successfully'),
      error: err => alert('Submission failed: ' + err.message)
    });
  }
}
