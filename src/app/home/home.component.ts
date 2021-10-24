import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// import * as dataJSON from './carousel_images.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  
  @Input('pagination') pagination: boolean;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) set matPaginator(
    paginator: MatPaginator
  ) {
    if (this.pagination) {
      this.dataSource.paginator = paginator;
    }
  }

  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    '../assets/images/vote1.jpg',

    '../assets/images/vote2.jpg',

    '../assets/images/vote3.jpg',

    '../assets/images/vote4.jpg',
  ];
  titles = [
    '#RegisterToVote ZW',
    '#RegisterToVote ZW',
    '#RegisterToVote ZW',
    '#RegisterToVote ZW',
  ];
  discription = [
    'If YOU don’t Vote Others will make the decisions for YOU!',
    'Voting gives you an opportunity to be part of decision-making that affects your life.',
    'Voting is the most important way to make your voice be heard on the issues that concern you.',
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
