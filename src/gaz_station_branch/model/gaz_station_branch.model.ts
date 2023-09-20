import {Column,Table, Model,DataType, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript"
import { fuel } from "src/fuel/model/fuel.model";
import { gas_station_fuel_type } from "src/gas_station_fuel_type/model/gas_station_fuel_type.model";
import { gaz_station } from "src/gaz_station/model/gaz_station.model";


interface BranchCreationAttr{
    name:string,
    addres:string,
    station_id:number,
    location:string,
    phone:string
}

@Table({tableName:"branch"})
export class gaz_station_branch extends Model<gaz_station_branch, BranchCreationAttr>{
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

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    addres:string;


    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    location:string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    phone:string;
    
    
    @ForeignKey(() => gaz_station)
    @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate:'Cascade'})
    station_id:number;
    
    @BelongsTo(() => gaz_station)
    station:gaz_station;
    
    @BelongsToMany(() => fuel, () => gas_station_fuel_type)
    fuels:fuel[];
}
