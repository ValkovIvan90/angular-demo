import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.css']
})
export class TeamListItemComponent implements OnInit, AfterViewInit {

  themeList: ITheme[];
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemeList().subscribe(themeList => {
      this.themeList = this.themeList
    })
  }
  ngAfterViewInit(): void { 
     console.log('Views was initialized!');
     
  }

}
