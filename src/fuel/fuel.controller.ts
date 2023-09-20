import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFuelDto } from './dto/create-fuel.dto';
import { UpdateFuelDto } from './dto/update-fuel.dto';
import { FuelService } from './fuel.service';
import { fuel } from './model/fuel.model';

@Controller('fuel')
export class FuelController {
    constructor(private readonly stationService:FuelService){}

    @Post('create')
    async createMachine(@Body() createFuelDto:CreateFuelDto):Promise<fuel>{
        return this.stationService.createFuel(createFuelDto)    
    }

    @Get('all')
    async findAllCompany():Promise<fuel[]>{
        return this.stationService.findAllFuel()
    }

    @Get('one/:id')
    async findById(@Param("id") id:string):Promise<fuel>{
        return this.stationService.findById(+id)
    }

    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.stationService.deleteById(+id)
    }

    @Put("update/:id")
    async updateById(@Param('id') id:string, @Body() updateFuelDto:UpdateFuelDto){
        return this.stationService.updateById(+id,updateFuelDto)
    }
}
