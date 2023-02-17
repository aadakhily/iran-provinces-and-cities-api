import { readFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

import { City } from './interfaces/city.interface';
import { Province } from './interfaces/province.interface';

@Injectable()
export class ProvincesRepository {
  async findAllProvinces() {
    const provincesJson = await readFile('db/provinces.json', {
      encoding: 'utf8',
    });

    const provinces: Province[] = JSON.parse(provincesJson);

    return provinces;
  }

  async findAllProvinceCities(id: number) {
    const citiesJson = await readFile('db/cities.json', {
      encoding: 'utf8',
    });

    const cities: City[] = JSON.parse(citiesJson);

    const findedCities: City[] = cities.filter(
      (city) => city.province_id === id,
    );

    return findedCities;
  }
}
