import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import { gaz_station_branch } from './model/gaz_station_branch.model';
import { UpdateBranchDto } from './dto/update-gaz_station_branch.dto';
import { CreateBranchDto } from './dto/create-gaz_station_branch.dto';
@Injectable()
export class gaz_station_branchService {
    constructor(@InjectModel(gaz_station_branch) private branchRepo:typeof gaz_station_branch){}

    async createMachine(createBranchDto:CreateBranchDto): Promise<gaz_station_branch>{
        const branch = await this.branchRepo.create(createBranchDto);
        return branch
    }

    async findAllBranch():Promise<gaz_station_branch[]>{
       const branchs = await this.branchRepo.findAll({include:{all:true}})
        return branchs
    }

    async findById(id:number):Promise<gaz_station_branch>{
        return this.branchRepo.findByPk(id)
    }

    async deleteById(id:number):Promise<string>{
        const branch = await  this.branchRepo.destroy({where:{id}})
        return "Success"
    }

    async updateById(id:number, createBranchDto:UpdateBranchDto){
        const branch = await this.branchRepo.update(createBranchDto,{where: {id},returning:true});
        return branch
    }
}


