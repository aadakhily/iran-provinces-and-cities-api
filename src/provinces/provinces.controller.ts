import { Controller, Get, Param, NotFoundException } from '@nestjs/common';

import { ProvincesService } from './provinces.service';

// iterfaces
import { City } from './interfaces/city.interface';
import { Province } from './interfaces/province.interface';

@Controller('provinces')
export class ProvincesController {
  constructor(private provincesService: ProvincesService) {}

  @Get()
  async getAllprovinces() {
    const provinces: Province[] =
      await this.provincesService.findAllProvinces();
    return provinces;
  }

  @Get(':id')
  async getAllProvinceCities(@Param('id') id: string) {
    const provinceId = Number(id);

    const cities: City[] = await this.provincesService.findAllProvinceCities(
      provinceId,
    );

    if (!cities?.length)
      throw new NotFoundException('Cities By This Province Id Not Found');

    return cities;
  }
}
