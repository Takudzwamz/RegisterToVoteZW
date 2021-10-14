import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 // title = '#RegisterToVoteZW';

  constructor(private metaTagService: Meta) {}


  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'RegisterToVoteZW, RegisterToVoteZW2023, Zimbabwe, Elections, Africa, Zimbabwe decides, Zim 2023, elections, democracy, Presidential election, Zimbabwe Votes, Voting, Vote, Register to vote, Constitution, Southern Africa, Sadc, Southern Africa, UN, AU',
      },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: '3tmzI_B2ANl7WS84E0HYgeUlDsU27ZfrhCcJeniJYQg',
      },
      {
        name: 'description',
        content:
          'Voting gives you an opportunity to be part of decision-making that affects your life.',
      },
      { name: 'author', content: 'RegisterToVoteZW' },
      { name: 'twitter:card', content: 'RegisterToVoteZW' },
      {
        name: 'twitter:title',
        content:
          'Voting gives you an opportunity to be part of decision-making that affects your life. ',
      },
      {
        name: 'twitter:description',
        content:
          'Every vote does count! Remember: there is power in numbers. When we vote and get our family members to vote, we can impact outcomes and change the debate. Zimbabwe’s youth represent over a large proportion of people voting in the next election, so its important for youths to be heard. Young people should vote to ensure high overall turnout thus making a stable democracy.',
      },
    ]);
  }
}
