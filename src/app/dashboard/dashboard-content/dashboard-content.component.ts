import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-dashboard-content',
  templateUrl: 'dashboard-content.component.html',
  styleUrls: ['dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  rows = [{
    time: '2017-07-01',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-02',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-03',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-04',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-05',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-06',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-07',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  }
  ]

  cols = [
    { field: "time", header: "日付"},
    { field: "data1", header: "配信先"},
    { field: "data2", header: "タイトル"}
  ];
  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
