import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recentPost: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchRecentPost();
  };

  fetchRecentPost(): void {
    this.recentPost = undefined;
    this.contentService.loadPost(5).subscribe(posts => this.recentPost = posts);

  }
}
