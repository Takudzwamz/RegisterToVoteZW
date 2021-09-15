import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import ARTICLE_QUERY from '../apollo/queries/article/article';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  private queryArticle: Subscription;
  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private title: Title,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('Article detail page');
    this.queryArticle = this.apollo
      .watchQuery({
        query: ARTICLE_QUERY,
        variables: {
          id: this.route.snapshot.paramMap.get('id'),
        },
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryArticle.unsubscribe();
  }
}
