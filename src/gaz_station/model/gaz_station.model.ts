import {Column,Table, Model,DataType, HasMany} from "sequelize-typescript"
import { gaz_station_branch } from "src/gaz_station_branch/model/gaz_station_branch.model";


interface StationCreationAttr{
    name:string,
}

@Table({tableName:"station"})
export class gaz_station extends Model<gaz_station, StationCreationAttr>{
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

    @HasMany(() => gaz_station_branch)
    branchs: gaz_station_branch[];
}
