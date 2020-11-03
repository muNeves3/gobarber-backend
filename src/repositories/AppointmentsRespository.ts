import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// Data transfer Object

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRespository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findApointMent = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findApointMent || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRespository;
