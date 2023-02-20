import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvincesModule } from '../provinces/provinces.module';

import { Cities } from '../provinces/entities/cities.entity';
import { Provinces } from '../provinces/entities/provinces.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'provinces_cities.sqlite',
      entities: [Provinces, Cities],
      synchronize: true,
    }),
    ProvincesModule,
  ],
})
export class AppModule {}
