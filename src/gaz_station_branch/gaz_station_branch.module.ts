import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { gaz_station_branchService } from './gaz_station_branch.service';
import { BranchController } from './gaz_station_branch.controller';
import { gaz_station_branch } from './model/gaz_station_branch.model';

@Module({
  imports:[SequelizeModule.forFeature([gaz_station_branch])],
  providers: [gaz_station_branchService],
  controllers: [BranchController]
})
export class GazStationBranchModule {}
