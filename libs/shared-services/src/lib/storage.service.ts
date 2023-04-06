import {Injectable} from "@angular/core";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import {BehaviorSubject, finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  // downloadURL!: Observable<string>;
  downloadURL = new BehaviorSubject<string|null>(null)
  downloadURL$: Observable<string | null> = this.downloadURL.asObservable()
  constructor(
    private storage: AngularFireStorage
  ) { }

  uploadFile(file: File) {
    const filePath = `pdfs/${new Date().getTime()}_${file.name}`;
    const task = this.storage.upload(filePath, file)

    task.snapshotChanges().pipe(
      finalize(() => {
        this.storage.ref(filePath).getDownloadURL()
        .subscribe(url => this.downloadURL.next(url))
      })
    ).subscribe()
  }
}
