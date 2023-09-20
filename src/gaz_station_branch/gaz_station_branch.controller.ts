import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-gaz_station_branch.dto';
import { UpdateBranchDto } from './dto/update-gaz_station_branch.dto';
import { gaz_station_branch } from 'src/gaz_station_branch/model/gaz_station_branch.model';
import { gaz_station_branchService } from './gaz_station_branch.service';

@Controller('branch')
export class BranchController {
    constructor(private readonly stationService:gaz_station_branchService){}

    @Post('create')
    async createMachine(@Body() createBranchDto:CreateBranchDto):Promise<gaz_station_branch >{
        return this.stationService.createMachine(createBranchDto)    
    }

    @Get('all')
    async findAllCompany():Promise<gaz_station_branch []>{
        return this.stationService.findAllBranch()
    }

    @Get('one/:id')
    async findById(@Param("id") id:string):Promise<gaz_station_branch >{
        return this.stationService.findById(+id)
    }

    @Delete("/:id")
    async deleteById(@Param('id') id:string):Promise<String>{
        return this.stationService.deleteById(+id)
    }

    @Put("update/:id")
    async updateById(@Param('id') id:string, @Body() updateBranchDto:UpdateBranchDto){
        return this.stationService.updateById(+id,updateBranchDto)
    }
}
