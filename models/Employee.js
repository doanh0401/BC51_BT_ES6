import { Person } from "./Person.js";

export class Employee extends Person {
    constructor(name,address,id,email,typeJob,ngaylamviec,luongngay){
        super(name,address,id,email,typeJob);
        this.ngaylamviec = ngaylamviec;
        this.luongngay = luongngay;
        this.salary = 0;
    }
    
    TinhLuong() {
        this.salary=this.ngaylamviec*this.luongngay;
    }
}