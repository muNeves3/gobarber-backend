import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRespository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findApointMent = await this.findOne({
      where: { date },
    });

    return findApointMent || null;
  }
}

export default AppointmentsRespository;
