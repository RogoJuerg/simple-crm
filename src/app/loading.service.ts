import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingScreen: boolean = false;

  constructor() { }
}
