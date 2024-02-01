export class Empleado {
    constructor(
      public id: string = '',
      public name: string = '',
      //public edad: string = '',
      public email: string = '', // Added this line
      public password: string = '',
      public dias: string=''
    ) {}
  }
  