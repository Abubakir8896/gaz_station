import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBranchFuelDto } from './dto/create-gas_station_fuel_type.dto';
import { UpdateBranchFuelDto } from './dto/update-gas_station_fuel_types.dto';
import { gas_station_fuel_type } from './model/gas_station_fuel_type.model';
import { gaz_station_branch_fuelService } from './gas_station_fuel_type.service';

@Controller('branch_fuel')
export class Branch_FuelController {
    constructor(private readonly stationService:gaz_station_branch_fuelService){}

    @Post('create')
    async createMachine(@Body() createBranchFuelDto:CreateBranchFuelDto):Promise<gas_station_fuel_type >{
        return this.stationService.createBranchFuel(createBranchFuelDto)    
    }

    @Get('all')
    async findAllBranch_Fuel():Promise<gas_station_fuel_type []>{
        return this.stationService.findAllBranch_Fuel()
    }

    @Get('one/:id')
    async findById(@Param("id") id:string):Promise<gas_station_fuel_type >{
        return this.stationService.findById(+id)
    }

    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.stationService.deleteById(+id)
    }

    @Put("update/:id")
    async updateById(@Param('id') id:string, @Body() updateBranchFuelDto:UpdateBranchFuelDto){
        return this.stationService.updateById(+id,updateBranchFuelDto)
    }
}
