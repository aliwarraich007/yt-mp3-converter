import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPreviewComponent } from './download-preview.component';

describe('DownloadPreviewComponent', () => {
  let component: DownloadPreviewComponent;
  let fixture: ComponentFixture<DownloadPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadPreviewComponent]
    });
    fixture = TestBed.createComponent(DownloadPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
