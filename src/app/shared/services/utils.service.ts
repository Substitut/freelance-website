import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public static isMobile(width: number): boolean {
    return width < 600;
  }
}
