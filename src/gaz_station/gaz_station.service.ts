import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import { gaz_station } from './model/gaz_station.model';
import { UpdateStationDto } from './dto/update-gaz_station.dto';
import { CreateStationDto } from './dto/create-gaz_station.dto';
@Injectable()
export class gaz_stationService {
    constructor(@InjectModel(gaz_station) private stationRepo:typeof gaz_station){}

    async createMachine(createStationDto:CreateStationDto): Promise<gaz_station>{
        const station = await this.stationRepo.create(createStationDto);
        return station
    }

    async findAllStation():Promise<gaz_station[]>{
        return  this.stationRepo.findAll()
    }

    async findById(id:number):Promise<gaz_station>{
        return this.stationRepo.findByPk(id)
    }

    async deleteById(id:number):Promise<string>{
        const station = await  this.stationRepo.destroy({where:{id}})
        return "Success"
    }

    async updateById(id:number, updateStationDto:UpdateStationDto){
        const station = await this.stationRepo.update(updateStationDto,{where: {id},returning:true});
        return station
    }
}


