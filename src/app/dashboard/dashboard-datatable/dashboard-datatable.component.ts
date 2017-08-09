import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-datatable',
  templateUrl: 'dashboard-datatable.component.html',
  styleUrls: ['dashboard-datatable.component.css']
})
export class DashboardDatatableComponent implements OnInit {
  @Input() title: string;
  @Input() rows: any;
  @Input() cols: any;
  constructor() { }

  ngOnInit() {
  }
  paginate(event){
    console.log(event)
  }

}
