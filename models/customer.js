import { Person } from "./Person.js";

export class Customer extends Person {
    constructor(name,address,id,email,typeJob,companyname,invoicevalue,evaluate){
        super(name,address,id,email,typeJob);
        this.companyname = companyname;
        this.invoicevalue = invoicevalue;
        this.evaluate = evaluate;
    }
}