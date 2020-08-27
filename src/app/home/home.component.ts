import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = {
    name: 'Michael Jordan',
    bio: 'Former baseball player',
    image: 'avatar.png',
  };

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url1', content: '/about' },
      { name: 'og:url2', content: '/about' },
      { name: 'og:url3', content: '/about' },
      { name: 'og:url4', content: '/about' },
      { name: 'og:url5', content: '/about' },
      { name: 'og:title1', content: this.data.name },
      { name: 'og:title2', content: this.data.name },
      { name: 'og:title3', content: this.data.name },
      { name: 'og:title4', content: this.data.name },
      { name: 'og:title5', content: this.data.name },
      { name: 'og:description1', content: this.data.bio },
      { name: 'og:description2', content: this.data.bio },
      { name: 'og:description3', content: this.data.bio },
      { name: 'og:description4', content: this.data.bio },
      { name: 'og:description5', content: this.data.bio },
      { name: 'og:image1', content: this.data.image },
      { name: 'og:image2', content: this.data.image },
      { name: 'og:image3', content: this.data.image },
      { name: 'og:image4', content: this.data.image },
      { name: 'og:image5', content: this.data.image },
    ]);
  }
}
