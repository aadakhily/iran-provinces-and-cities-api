import { Controller, Get, Query, NotFoundException } from '@nestjs/common';

import { ProvincesService } from './provinces.service';

// iterfaces
import { City } from './interfaces/city.interface';
import { Province } from './interfaces/province.interface';

@Controller('list')
export class ProvincesController {
  constructor(private provincesService: ProvincesService) {}

  @Get('provinces')
  async getAllprovinces() {
    const provinces: Province[] =
      await this.provincesService.findAllProvinces();
    return provinces;
  }

  @Get('cities')
  async getAllProvinceCities(@Query('province_id') id: string) {
    const provinceId = Number(id);

    const cities: City[] = await this.provincesService.findAllProvinceCities(
      provinceId,
    );

    if (!cities?.length)
      throw new NotFoundException('Cities By This Province Id Not Found');

    return cities;
  }
}
