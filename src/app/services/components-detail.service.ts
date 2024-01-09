import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ComponentDetailService {
  constructor(private http: HttpClient) {}

  getRandomImage(): Observable<Image[]> {
    return this.http.get<Image[]>(
      'https://dog.ceo/api/breed/husky/images/random'
    );
  }
}