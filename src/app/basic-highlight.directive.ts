import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'    // <p appBasicHighlight></p>
  //selector: 'appBasicHighlight'    //<appBasicHighlight></appBasicHighlight>
  //selector: '.appBasicHighlight'   // <p class="appBasicHighlight"></p>
})
export class BasicHighlightDirective implements OnInit {
  
  constructor(private elRef: ElementRef) {}
  
  ngOnInit(): void {
    this.elRef.nativeElement.style.color = "red";
    this.elRef.nativeElement.style.backgroundColor = "yellow";
  }

}


