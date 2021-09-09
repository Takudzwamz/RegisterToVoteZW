import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class PoliciesComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    '../assets/images/IMG-20210817-WA0001.jpg',

    '../assets/images/IMG-20210817-WA0002.jpg',

    '../assets/images/IMG-20210817-WA0003.jpg',

    '../assets/images/IMG-20210817-WA0004.jpg',
    '../assets/images/IMG-20210817-WA0005.jpg',

    '../assets/images/IMG-20210817-WA0006.jpg',

    '../assets/images/IMG-20210817-WA0007.jpg',

    '../assets/images/IMG-20210817-WA0008.jpg',
    '../assets/images/IMG-20210817-WA0009.jpg',

    '../assets/images/IMG-20210817-WA0010.jpg',

    '../assets/images/IMG-20210817-WA0011.jpg',
    '../assets/images/IMG-20210817-WA0012.jpg',

    '../assets/images/IMG-20210817-WA0013.jpg',

    '../assets/images/IMG-20210817-WA0014.jpg',
    '../assets/images/IMG-20210817-WA0015.jpg',

    '../assets/images/IMG-20210817-WA0016.jpg',

    '../assets/images/IMG-20210817-WA0017.jpg',
    '../assets/images/IMG-20210817-WA0019.jpg',
    '../assets/images/IMG-20210817-WA0018.jpg',

    '../assets/images/IMG-20210817-WA0020.jpg',

    '../assets/images/IMG-20210817-WA0021.jpg',
    '../assets/images/IMG-20210817-WA0022.jpg',

    '../assets/images/IMG-20210817-WA0023.jpg',

    '../assets/images/IMG-20210817-WA0023.jpg',
  ];
  titles = [
    'Converge for Development',
    'Converge for Development',
    'Converge for Development',
    'Converge for Development',
  ];
  discription = [
    'Collaborate with honest and trustworthy people to drive the development agenda for Zimbabwe.',
    'Bring together all people from different walks of life',
    'Initiate, engage, partner and transform in partnership with local structures, government and development actors.',
    'Lead locally led economic development.',
  ];
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    config: NgbCarouselConfig,
    private title: Title,
    private metaTagService: Meta,
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
    this.title.setTitle('Christines Portfolio');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Christines Portfolio',
    });
  }
}
