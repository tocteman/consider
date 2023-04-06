import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageService } from '@consider/shared-services';
import { environment  } from '../../environments/environment';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() fileUploaded = new EventEmitter<File>()
  @Output() urlChanged = new EventEmitter<string | null>();

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.downloadURL$.subscribe(url => {
      this.urlChanged.emit(url)
    });

    const ANOTHER = process.env['ANOTHER_ENV_VAR']
    console.log({environment})
  }

  upload(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    if (!file || file.type !== "application/pdf") return
    this.storageService.uploadFile(file);
    this.fileUploaded.emit(file)
  }
}

