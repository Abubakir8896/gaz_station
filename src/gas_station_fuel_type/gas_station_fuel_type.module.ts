import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Branch_FuelController } from './gas_station_fuel_type.controller';
import { gas_station_fuel_type } from './model/gas_station_fuel_type.model';
import { gaz_station_branch_fuelService } from './gas_station_fuel_type.service';

@Module({
  imports:[SequelizeModule.forFeature([gas_station_fuel_type])],
providers: [gaz_station_branch_fuelService],
  controllers: [Branch_FuelController]
})
export class GazStationBranchFuelModule {}
