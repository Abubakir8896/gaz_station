import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStationDto } from './dto/create-gaz_station.dto';
import { UpdateStationDto } from './dto/update-gaz_station.dto';
import { gaz_stationService } from './gaz_station.service';
import { gaz_station } from './model/gaz_station.model';

@Controller('station')
export class StationController {
    constructor(private readonly stationService:gaz_stationService){}

    @Post('create')
    async createMachine(@Body() createStationDto:CreateStationDto):Promise<gaz_station>{
        return this.stationService.createMachine(createStationDto)    
    }

    @Get('all')
    async findAllCompany():Promise<gaz_station[]>{
        return this.stationService.findAllStation()
    }

    @Get('one/:id')
    async findById(@Param("id") id:string):Promise<gaz_station>{
        return this.stationService.findById(+id)
    }

    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.stationService.deleteById(+id)
    }

    @Put("update/:id")
    async updateById(@Param('id') id:string, @Body() updateStationDto:UpdateStationDto){
        return this.stationService.updateById(+id,updateStationDto)
    }
}
