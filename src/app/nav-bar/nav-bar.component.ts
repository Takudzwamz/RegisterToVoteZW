import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  private queryCategories: Subscription;
  isExpanded = false;
  public isMenuCollapsed = true;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.queryCategories = this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy() {
    this.queryCategories.unsubscribe();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
