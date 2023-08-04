import { Person } from "./Person.js";

export class Student extends Person {
    constructor(name,address,id,email,typeJob,toan,ly,hoa){
        super(name,address,id,email,typeJob);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.dtrb = 0;
    }

    TinhTrb = () => {
       this.dtrb = ((parseFloat(this.toan) + parseFloat(this.ly) + parseFloat(this.hoa))/3).toFixed(2);
    }
}