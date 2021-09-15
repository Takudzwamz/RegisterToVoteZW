import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';
import ARTICLES_QUERY from '../apollo/queries/articles/articles'; 
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  leftArticlesCount: any;
  leftArticles: any[];
  rightArticles: any[];

  private queryCategories: Subscription;
  private queryArticles: Subscription;

  constructor(
    private apollo: Apollo,
    private title: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('News Page');
    this.queryCategories = this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });

    this.queryArticles = this.apollo
      .watchQuery({
        query: ARTICLES_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryCategories.unsubscribe();
    this.queryArticles.unsubscribe();
  }
}
