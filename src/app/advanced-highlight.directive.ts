import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit{
  
  @Input() defaultColor: string = "black";
  @Input('appAdvancedHighlight') highlightColor: string = "white";

  @HostBinding('style.color') c: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.c = this.defaultColor;
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/Events
  @HostListener('mouseenter') me(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.c = this.highlightColor;
  }

  @HostListener('mouseleave') ml(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.c = this.defaultColor;
  }

}
