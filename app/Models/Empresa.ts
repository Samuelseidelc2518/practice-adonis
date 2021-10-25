import { hasMany, HasMany, column, BaseModel } from "@ioc:Adonis/Lucid/Orm";
// import Contrato from "./Contrato"

export default class Empresa extends BaseModel {
    @column({ isPrimary: true })
    public id_empresa: number

    @column()
    public nombre: string

    // @hasMany(() => Contrato, {
    //     foreignKey: 'empresa_id',
    // })
    // public contrato: HasMany<typeof Contrato>
}