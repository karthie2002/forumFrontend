import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  categoriesList: string[] = [];

  ngOnInit(): void {
    this.sidebarService.GetAllCategories().subscribe((categories: string[]) => {
      this.categoriesList = categories;
    });
  }
}
