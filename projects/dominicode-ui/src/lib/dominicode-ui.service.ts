import { Injectable, signal } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class DominicodeUIService {

}
