import { Component, OnInit } from '@angular/core';
import { ArrivalCardService, ArrivalCard } from '../../services/arrival-card.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
})
export class ManageComponent implements OnInit {
  cards: ArrivalCard[] = [];

  constructor(private cardService: ArrivalCardService) {}

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getAllCards().subscribe({
      next: (data) => (this.cards = data),
      error: (err) => alert('Failed to load cards: ' + err.message),
    });
  }

  delete(id: string) {
    this.cardService.deleteCard(id).subscribe({
      next: () => {
        alert('Deleted successfully');
        this.loadCards(); // refresh list
      },
      error: (err) => alert('Failed to delete: ' + err.message),
    });
  }
}

