import { Directive, ElementRef, HostListener } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color: string;
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
