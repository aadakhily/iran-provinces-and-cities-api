import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProvincesModule } from '../provinces/provinces.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.provinces_cities',
      entities: [],
      synchronize: true,
    }),
    ProvincesModule,
  ],
})
export class AppModule {}
