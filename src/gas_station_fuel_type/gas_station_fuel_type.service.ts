import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import { gas_station_fuel_type } from './model/gas_station_fuel_type.model';
import { CreateBranchFuelDto } from './dto/create-gas_station_fuel_type.dto';
import { UpdateBranchFuelDto } from './dto/update-gas_station_fuel_types.dto';
@Injectable()
export class gaz_station_branch_fuelService {
    constructor(@InjectModel(gas_station_fuel_type) private branch_fuelRepo:typeof gas_station_fuel_type){}

    async createBranchFuel(createBranchFuelDto:CreateBranchFuelDto): Promise<gas_station_fuel_type>{
        
        const branch_fuel = await this.branch_fuelRepo.create(createBranchFuelDto);
        return branch_fuel
    }

    async findAllBranch_Fuel():Promise<gas_station_fuel_type[]>{
       const branch_fuels = await this.branch_fuelRepo.findAll({include:{all:true}})
        return branch_fuels
    }

    async findById(id:number):Promise<gas_station_fuel_type>{
        return this.branch_fuelRepo.findByPk(id)
    }

    async deleteById(id:number):Promise<string>{
        const branch_fuel = await  this.branch_fuelRepo.destroy({where:{id}})
        return "Success"
    }

    async updateById(id:number, updateBranchFuelDto:UpdateBranchFuelDto){
        const branch_fuel = await this.branch_fuelRepo.update(updateBranchFuelDto,{where: {id},returning:true});
        return branch_fuel
    }
}