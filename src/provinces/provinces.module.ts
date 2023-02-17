import { Module } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { ProvincesRepository } from './provinces.repository';

@Module({
  controllers: [ProvincesController],
  providers: [ProvincesService, ProvincesRepository],
})
export class ProvincesModule {}
