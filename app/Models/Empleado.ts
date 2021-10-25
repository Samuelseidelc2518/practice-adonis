import { column, BaseModel, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Contrato from "./Contrato"

export default class Empleado extends BaseModel {
    @column({ isPrimary: true })
    public id_empleado: number

    @column()
    public nombre: string

    @column()
    public sueldo: number

    @column()
    public id_empresa: number

    @hasMany(() => Contrato, {
        foreignKey: 'empleado_id',
    })
    public contrato: HasMany<typeof Contrato>
}