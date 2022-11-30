import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;
  constructor(private route: ActivatedRoute) { }
  search: string;
  ngOnInit(): void {
  }
  
  ApplyStyles() {
    let styles = {
      'font-weight' : this.isBold ? 'bold': 'normal',
      'font-style'  : this.isItalic ? 'italic' : 'normal',
      'font-size.px' : this.fontSize
    }
    return styles
  }
}
