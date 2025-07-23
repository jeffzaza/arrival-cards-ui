import { Component, OnInit } from '@angular/core';
import { ArrivalCardAPI, ArrivalCard } from '../../services/arrival-card';

@Component({
  standalone: true,
  templateUrl: './manage.html',
  styleUrls: ['./manage.css'],
  selector: 'app-manage',
})
export class Manage implements OnInit {
  cards: ArrivalCard[] = [];

  constructor(private api: ArrivalCardAPI) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.list().subscribe({
      next: data => this.cards = data,
      error: err => alert('Load failed: ' + err.message)
    });
  }

  remove(id: string) {
    this.api.delete(id).subscribe({
      next: () => this.load(),
      error: err => alert('Delete failed: ' + err.message)
    });
  }
}
