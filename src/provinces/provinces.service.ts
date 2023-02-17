import { Injectable } from '@nestjs/common';
import { ProvincesRepository } from './provinces.repository';

@Injectable()
export class ProvincesService {
  constructor(private provincesRepo: ProvincesRepository) {}

  findAllProvinces() {
    return this.provincesRepo.findAllProvinces();
  }

  findAllProvinceCities(id: number) {
    return this.provincesRepo.findAllProvinceCities(id);
  }
}
