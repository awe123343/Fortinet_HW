import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first, single } from 'rxjs/operators';
import { DataFetcherService } from '../services/data-fetcher.service';
import { Data } from '@angular/router';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const sev_order = ["Critical", "Alert", "Warning", "Information"];

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  tableContent: any;
  switchState: boolean = false;

  toggleIcon = this.switchState ? faToggleOn : faToggleOff;
  arrowIcon = faArrowRight;
  upArrowIcon = faArrowUp;
  downArrayIcon = faArrowDown;
  barIcon = faBars;

  showDropdown: boolean = false;
  sortParam = "placeholder";

  constructor(
    private dataFetcher: DataFetcherService,
  ) {

  }

  ngOnInit() {
    this.dataFetcher.getDataList().pipe(first()).subscribe(data => {
      this.tableContent = data;
    });
  }

  toggleDropIcon() {
    this.showDropdown = !this.showDropdown;
    // return this.showDropdown === true ? this.downArrayIcon : this.upArrowIcon;
  }
  
  toggleDropOnMouse(toShowDropdown: boolean) {
    this.showDropdown = toShowDropdown;
    // console.log(this.showDropdown);
    this.getDisplayState();
  }

  getDisplayState() {
    return this.showDropdown ? "block" : "none";
  }

  onSortChange(event) {
    this.sortParam = event;
    console.log(this.sortParam);
    let tmp_table = this.tableContent;

    if (this.sortParam == 'name') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by name");
        tmp_table.sort((a, b) => b.name > a.name ? -1 : 1);
      }
    } else if (this.sortParam == 'sevtopdown') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by severity in desc");
        tmp_table.sort((a, b) => sev_order.indexOf(b.severity) > sev_order.indexOf(a.severity) ? -1 : 1);
      }
    } else if (this.sortParam == 'sevbottomup') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by severity in asc");
        tmp_table.sort((a, b) => sev_order.indexOf(b.severity) > sev_order.indexOf(a.severity) ? 1 : -1);
      }
    } else if (this.sortParam == 'cat') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by category");
        tmp_table.sort((a, b) => b.type > a.type ? -1 : 1);
      }
    }

    this.tableContent = tmp_table;
    console.log(this.tableContent);
  }

  onSortChange1(event) {
    this.sortParam = event;
    console.log(this.sortParam);
    let tmp_table = this.tableContent;

    if (this.sortParam == 'name') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by name");
        tmp_table.sort((a, b) => b.name > a.name ? -1 : 1);
      }
    } else if (this.sortParam == 'sevtopdown') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by severity in desc");
        tmp_table.sort((a, b) => sev_order.indexOf(b.severity) > sev_order.indexOf(a.severity) ? -1 : 1);
      }
    } else if (this.sortParam == 'sevbottomup') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by severity in asc");
        tmp_table.sort((a, b) => sev_order.indexOf(b.severity) > sev_order.indexOf(a.severity) ? 1 : -1);
      }
    } else if (this.sortParam == 'cat') {
      if (this.tableContent !== null && this.tableContent !== undefined) {
        console.log("Sort by category");
        tmp_table.sort((a, b) => b.type > a.type ? -1 : 1);
      }
    }

    this.tableContent = tmp_table;
    console.log(this.tableContent);
  }

  getSevColor(sev_level) {
    let res = "grey";

    // console.log(sev_level);

    if (sev_level == "Critical") {
      res = "red";
    } else if (sev_level == "Alert") {
      res = "purple";
    } else if (sev_level == "Warning") {
      res = "yellow";
    } else if (sev_level == "Information") {
      res = "blue";
    }

    // let styles = {
    //   'borderLeftWidth':  '5px',
    //   'borderLeftStyle':  'solid',
    //   'borderLeftColor': res
    // };

    return res;
  }

}
