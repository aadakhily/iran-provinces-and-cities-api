import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Cities } from './entities/cities.entity';
import { Provinces } from './entities/provinces.entity';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Cities) private citiesRepo: Repository<Cities>,
    @InjectRepository(Provinces) private provincesRepo: Repository<Provinces>,
  ) {}

  findAllProvinces() {
    return this.provincesRepo.find();
  }

  findAllProvinceCities(id: number) {
    return this.citiesRepo.findBy({ province_id: id });
  }
}
