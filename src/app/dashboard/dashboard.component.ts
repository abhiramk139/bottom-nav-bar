import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    this.tab1Css = 'selectedTab';
    this.tab2Css = 'non-selected';
    this.tab3Css = 'non-selected';
    this.tab4Css = 'non-selected';
    this.tab5Css = 'non-selected';
   }

  ngOnInit(): void {
  }

  currentTab = 1;
  tab1Css: string = '';
  tab2Css: string = '';
  tab3Css: string = '';
  tab4Css: string = '';
  tab5Css: string = '';
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  changeTab(index:any) {
    if (index.index == 0) {
      this.tab1Css = 'selectedTab';
      this.tab2Css = 'non-selected';
      this.tab3Css = 'non-selected';
      this.tab4Css = 'non-selected';
      this.tab5Css = 'non-selected';
    } else if (index.index == 1) {
      this.tab1Css = 'non-selected';
      this.tab2Css = 'selectedTab';
      this.tab3Css = 'non-selected';
      this.tab4Css = 'non-selected';
      this.tab5Css = 'non-selected';
    } else if (index.index == 2) {
      this.tab1Css = 'non-selected';
      this.tab2Css = 'non-selected';
      this.tab3Css = 'selectedTab';
      this.tab4Css = 'non-selected';
      this.tab5Css = 'non-selected';
    } else if (index.index == 3) {
      this.tab1Css = 'non-selected';
      this.tab2Css = 'non-selected';
      this.tab3Css = 'non-selected';
      this.tab4Css = 'selectedTab';
      this.tab5Css = 'non-selected';
    } else if (index.index == 4) {
      this.tab1Css = 'non-selected';
      this.tab2Css = 'non-selected';
      this.tab3Css = 'non-selected';
      this.tab4Css = 'non-selected';
      this.tab5Css = 'selectedTab';
    }
  }

}
