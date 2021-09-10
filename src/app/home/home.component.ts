import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';
// import * as dataJSON from './carousel_images.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    '../assets/images/vote1.jpg',

    '../assets/images/vote2.jpg',

    '../assets/images/vote3.jpg',

    '../assets/images/vote4.jpg',
  ];
  titles = [
    '#RegisterToVoteZW',
    '#RegisterToVoteZW',
    '#RegisterToVoteZW',
    '#RegisterToVoteZW',
  ];
  discription = [
    'If YOU don’t Vote Others will make the decisions for YOU!',
    'Voting gives you an opportunity to be part of decision-making that affects your life.',
    'Voting is the most important way to make your voice heard on the issues that concern you.',
    'Vote to Get more out of Life in a Better Zimbabwe',
  ];
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    config: NgbCarouselConfig,
    private title: Title,
    private canonicalService: CanonicalService
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 8000; // images change in 8sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('#RegisterToVoteZW');
  }
}
