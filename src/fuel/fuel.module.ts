import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelService } from './fuel.service';
import { FuelController } from './fuel.controller';
import { fuel } from './model/fuel.model';

@Module({
  imports:[SequelizeModule.forFeature([ fuel ])],
  providers: [FuelService],
  controllers: [FuelController ]
})
export class FuelModule {}
