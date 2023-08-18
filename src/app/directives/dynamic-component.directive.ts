import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceHolder]',
})
export class DownloadPrivewDirective {
  constructor(public viewcontainerRef: ViewContainerRef) {}
}
