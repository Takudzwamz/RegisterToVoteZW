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
      {name: 'keywords', content: 'RegisterToVoteZW, RegisterToVoteZW2023, Zimbabwe, Africa, Zimbabwe decides, Zim 2023, elections, democracy, Presidential election, Zimbabwe Votes, Voting, Vote, Register to vote, Constitution, Southern Africa, Sadc, Southern Africa, UN, AU'},
      {name: 'robots', content: 'index, follow'},
      {name: 'google-site-verification', content: '3tmzI_B2ANl7WS84E0HYgeUlDsU27ZfrhCcJeniJYQg'},
      {name: 'description', content: 'To make your voice heard on an issue or candidate; don’t let others decide for you. Substantive representation of youth: The assumption is that voting will affect the nature of representation and ultimately the content of public policy. If young people do not register to vote and participate in elections, their distinct interests are more likely to be ignored or neglected by policy-makers.'},
      {name: 'author', content: 'RegisterToVoteZW'},
      {name: 'twitter:card', content: 'RegisterToVoteZW'},
      {name: 'twitter:title', content: 'I strongly believe in living a principled life, that directly marks a solid positive impact in the world. '},
      {name: 'twitter:description', content: 'Every vote does count! Remember: there is power in numbers. When we vote and get our family members to vote, we can impact outcomes and change the debate. Zimbabwe’s youth represent over a large proportion of people voting in the next election, so its important for youths to be heard. Young people should vote to ensure high overall turnout thus making a stable democracy.'},

    ]);
  }
}
