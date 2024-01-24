import { Injectable } from '@angular/core';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments:Appointment[];

  constructor() { }
}
