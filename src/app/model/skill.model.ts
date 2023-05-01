export class Skill{
    id?: number;
    nombreSk: string;
    porcentaje: number;


contructor(nombreSk: string, porcentaje: number){
    this.nombreSk = nombreSk;
    this.porcentaje = porcentaje;
}
}