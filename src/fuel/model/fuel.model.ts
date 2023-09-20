import {Column,Table, Model,DataType, HasMany, BelongsToMany} from "sequelize-typescript"
import { gas_station_fuel_type } from "src/gas_station_fuel_type/model/gas_station_fuel_type.model";
import { gaz_station_branch } from "src/gaz_station_branch/model/gaz_station_branch.model";

interface FuelCreationAttr{
    name:string,
}

@Table({tableName:"fuel"})
export class fuel extends Model<fuel, FuelCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    })
    id:number;

    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    name:string;

    @BelongsToMany(() => gaz_station_branch,()=> gas_station_fuel_type)
    branchs:gaz_station_branch[]
}
