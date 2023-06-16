import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminder$: Observable<number>;


  constructor() { 
    this.reminder$ = new Observable(observer => {
      setInterval(() => {
        observer.next();
      }, 1 * 60 * 1000); // Time interval set to 1 hour
    });
  }

  getReminder(): Observable<number> {
    return this.reminder$;
  }
}
