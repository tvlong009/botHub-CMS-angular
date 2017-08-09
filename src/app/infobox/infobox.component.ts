import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {
  @Input() text: string;
  @Input() number: number;
  @Input() background: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
