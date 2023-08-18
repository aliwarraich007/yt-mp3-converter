import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-preview',
  templateUrl: './download-preview.component.html',
  styleUrls: ['./download-preview.component.scss'],
})
export class DownloadPreviewComponent {
  @Input() title!: string;
  @Input() author!: string;
  @Input() src!: string;
  @Input() link!: string;
}
