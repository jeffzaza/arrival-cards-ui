import { Component } from '@angular/core';
import { ArrivalCardService, ArrivalCard } from '../../services/arrival-card.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  card: ArrivalCard = {
    name: '',
    id: '',
    date: '',
  };

  constructor(private cardService: ArrivalCardService) {}

  submit() {
    this.cardService.createCard(this.card).subscribe({
      next: () => alert('Card submitted successfully'),
      error: (err) => alert('Failed to submit: ' + err.message),
    });
  }
}

