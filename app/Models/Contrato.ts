import { column, BaseModel } from "@ioc:Adonis/Lucid/Orm";

export default class Empleado extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public estado: boolean

    @column()
    public empleado_id: number

    @column()
    public empresa_id: number
}