import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { gaz_stationService } from './gaz_station.service';
import { StationController } from './gaz_station.controller';
import { gaz_station } from './model/gaz_station.model';

@Module({
  imports:[SequelizeModule.forFeature([gaz_station])],
  providers: [gaz_stationService],
  controllers: [StationController]
})
export class StationModule {}
