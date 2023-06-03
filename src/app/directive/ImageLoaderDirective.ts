import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({ selector: '[imageLoader]' })
export class ImageLoaderDirective {
  @Input('src') imageSrc?: string;
  @HostListener('load')
  loadImage() {
    console.log('load triggered')
    if (this.imageSrc) {
      this.srcAttr = this.imageSrc;
    }
  }

  @HostBinding('attr.src') srcAttr = '/assets/loader.svg';
  constructor() {}
}
