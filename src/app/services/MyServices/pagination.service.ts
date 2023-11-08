import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private variableSubject = new BehaviorSubject<number>(1);

  constructor() { }

  getVariableValue() {
    return this.variableSubject.asObservable();
  }

  updateVariableValue(value: number) {
    this.variableSubject.next(value);
  }
}
