import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleDetailsComponent } from "./article-details/article-details.component";
import { ArticlesComponent } from "./articles/articles.component";
import { CategoryComponent } from "./category/category.component";
import { CentersComponent } from "./centers/centers.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { PoliciesComponent } from "./policies/policies.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "why_voting",
    component: PoliciesComponent,
  },
  {
    path: "centers",
    component: CentersComponent,
  },
  {
    path: "news",
    component: ArticlesComponent,
  },

  { path: "article/:id", 
    component: ArticleDetailsComponent 
  },
  { path: "news-category/:id", 
    component: CategoryComponent 
  },
  {
    path: "contact_us",
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
