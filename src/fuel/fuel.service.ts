import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import { fuel } from './model/fuel.model';
import { UpdateFuelDto } from './dto/update-fuel.dto';
import { CreateFuelDto } from './dto/create-fuel.dto';

@Injectable()
export class FuelService {
    constructor(@InjectModel(fuel) private fuelRepo:typeof fuel){}

    async createFuel(createFuelDto:CreateFuelDto): Promise<fuel>{
        const fuel = await this.fuelRepo.create(createFuelDto);
        return fuel
    }

    async findAllFuel():Promise<fuel[]>{
        return  this.fuelRepo.findAll()
    }

    async findById(id:number):Promise<fuel>{
        return this.fuelRepo.findByPk(id)
    }

    async deleteById(id:number):Promise<string>{
        const fuel = await  this.fuelRepo.destroy({where:{id}})
        return "Success"
    }

    async updateById(id:number, updateFuelDto:UpdateFuelDto){
        const fuel = await this.fuelRepo.update(updateFuelDto,{where: {id},returning:true});
        return fuel
    }
}


