import {Component, Input, OnInit} from '@angular/core';
import { IClickListItem } from 'src/app/shared/charts/click-list/click-list-interfaces';

@Component({
  selector: 'app-security-scan-detail',
  templateUrl: './security-scan-detail.component.html',
  styleUrls: ['./security-scan-detail.component.scss']
})
export class SecurityScanDetailComponent implements OnInit {

  public data: IClickListItem;

  constructor() {}

  ngOnInit() {
  }

  // click list header details
  @Input()
  set detailData(data: any) {
    this.data = data;
    console.log(this.data);
  }

  isDate(obj): boolean {
    return obj instanceof Date;
  }

  formatDate(date: Date) {
    return new Date(date).toUTCString();
  }

}
