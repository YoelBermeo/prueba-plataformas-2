export class Cita {
  constructor(
    public _id: string = '',
    public nombre: string = '',
    public cedula: string = '',
    public estado: string = '',
    public dias: number = 0,
    public fechaInicio: string = '',
    public fechaFin: string = ''
  ) {}
}