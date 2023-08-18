import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ConvertService } from '../services/convert.service';
import { DownloadPrivewDirective } from '../directives/dynamic-component.directive';
import { DownloadPreviewComponent } from './download-preview/download-preview.component';
import { Response } from '../services/responseModal';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  linkForm!: FormGroup;
  isLoading: boolean = false;
  @ViewChild(DownloadPrivewDirective)
  downloadPreview!: DownloadPrivewDirective;
  message: string = '';

  constructor(private convert: ConvertService) {}
  ngOnInit(): void {
    this.linkForm = new FormGroup({
      link: new FormControl(null, [
        Validators.required,
        // this.sanitizeFormInput.bind(this),
        Validators.pattern(/^[a-zA-Z0-9]{11}$/),
      ]),
    });
  }
  sanitizeFormInput() {
    return (control: FormControl): ValidationErrors | null => {
      const youtubeLinkPattern = /^[a-zA-Z0-9]{11}$/;
      if (youtubeLinkPattern.test(control.value)) {
        return null;
      }
      return { invalidId: true };
    };
  }

  onSubmit() {
    const previewContainerRef = this.downloadPreview.viewcontainerRef;
    previewContainerRef.clear();
    this.isLoading = true;
    const link: string = this.linkForm.value['link'];
    this.convert.convert(link).subscribe({
      next: (res) => {
        this.showPreview(res);
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.handleError(err);
      },
    });
    this.linkForm.reset();
  }

  showPreview(resp: Response) {
    const previewContainerRef = this.downloadPreview.viewcontainerRef;
    previewContainerRef.clear();
    const previewCMP = previewContainerRef.createComponent(
      DownloadPreviewComponent
    );
    previewCMP.instance.title = resp.title;
    previewCMP.instance.author = resp.author;
    previewCMP.instance.src = resp.thumb;
    previewCMP.instance.link = resp.link;
  }

  handleError(err: Error) {
    console.log(err);
  }
}
