import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-owl-detail',
  templateUrl: './owl-detail.component.html',
  styleUrls: ['./owl-detail.component.css'],
})
export class OwlDetailComponent implements OnInit {
  id: string | null = '';
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
  }
}
