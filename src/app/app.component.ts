import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spaceman';

  constructor(private metaTagService: Meta) {}


  ngOnInit(): void {
    this.metaTagService.addTags([
      {name: 'keywords', content: 'Christine Nhamo, Zimbabwe, South Africa, International law, Advocate, English Teacher, Radio Presenter, Editor, Writer, Customer service agent'},
      {name: 'robots', content: 'index, follow'},
      {name: 'google-site-verification', content: '3tmzI_B2ANl7WS84E0HYgeUlDsU27ZfrhCcJeniJYQg'},
      {name: 'description', content: 'I am an International advocate, an Author of 5 books, TV Personality  TV Personality, Social Activist, Human Rights Defender, Legal Advisor, Radio Presenter, Counsellor, Graphic designer, Motivational Speaker, Humanitarian, Certified English Teacher, Translator, Founder and Director of a Zimbabwean Magazine called Zim Influencers Magazine as well as a managing director of Zim Talks Broadcasting Company'},
      {name: 'author', content: 'Christine Nhamo'},
      {name: 'twitter:card', content: 'Christine Nhamo'},
      {name: 'twitter:title', content: 'I strongly believe in living a principled life, that directly marks a solid positive impact in the world. '},
      {name: 'twitter:description', content: 'I am an International advocate, an Author of 5 books, TV Personality  TV Personality, Social Activist, Human Rights Defender, Legal Advisor, Radio Presenter, Counsellor, Graphic designer, Motivational Speaker, Humanitarian, Certified English Teacher, Translator, Founder and Director of a Zimbabwean Magazine called Zim Influencers Magazine as well as a managing director of Zim Talks Broadcasting Company'},

    ]);
  }
}
