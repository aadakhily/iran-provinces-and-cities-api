import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { ProvincesRepository } from './provinces.repository';

import { Cities } from './entities/cities.entity';
import { Provinces } from './entities/provinces.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Provinces, Cities])],
  controllers: [ProvincesController],
  providers: [ProvincesService, ProvincesRepository],
})
export class ProvincesModule {}
