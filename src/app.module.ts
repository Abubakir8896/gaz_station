import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelModule } from './fuel/fuel.module';
import { GazStationBranchFuelModule } from './gas_station_fuel_type/gas_station_fuel_type.module';
import { StationModule } from './gaz_station/gaz_station.module';
import { GazStationBranchModule } from './gaz_station_branch/gaz_station_branch.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [],
      autoLoadModels: true,
    }),
    StationModule,
    GazStationBranchModule,
    FuelModule,
    GazStationBranchFuelModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
