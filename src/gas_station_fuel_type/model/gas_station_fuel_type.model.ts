import {Column,Table, Model,DataType, ForeignKey, BelongsTo} from "sequelize-typescript"
import { fuel } from "src/fuel/model/fuel.model";
import { gaz_station_branch } from "src/gaz_station_branch/model/gaz_station_branch.model";


interface BeetwenCreationAttr{
    station_branch_id: number,
    fuel_id:number,
    Price:number,
    is_bor:boolean
}

@Table({tableName:"gas_station_fuel_type"})
export class gas_station_fuel_type extends Model<gas_station_fuel_type, BeetwenCreationAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    })
    id:number;

    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    price:number

    @Column({
        type:DataType.BOOLEAN,
        allowNull:false,
    })
    is_bor:boolean


    @ForeignKey(() => gaz_station_branch)
    @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate:'Cascade'})
    station_branch_id:number

    @ForeignKey(() => fuel)
    @Column({ type: DataType.INTEGER, onDelete: 'CASCADE', onUpdate:'Cascade'})
    fuel_id:number
}
