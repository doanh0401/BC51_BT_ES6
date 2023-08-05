import { Employee } from "../models/Employee.js";
import { ListPerson } from "../models/ListPerson.js";
import { Student } from "../models/Student.js";
import { Validation } from "../models/Validation.js";
import { Customer } from "../models/customer.js";
import { clearError } from "../models/notification.js";
import { checkValidation } from "../models/notification.js";

const domId = (id) => document.getElementById(id);
const listPerson = new ListPerson();
const validation = new Validation();
// hàm thêm button addProduct
domId("btnThemSP").onclick = () => {
        document.querySelector(".modal-title").innerHTML = "Add Person";
        document.querySelector(".modal-footer").innerHTML = `<button onclick="AddPerson()" class="btn btn-success">Add</button>`
        domId("myForm").reset();
        clearError("errorName", "errorAddress", "errorEmail", "errorId", "errorDiemToan", "errorDiemLy", "errorDiemHoa", "errorLuongNgay","errorWorkingDay","errorCompanyName","errorInvoiceValue","errorEvaluate");
        domId("id").disabled = false; 

        domId("blockToan").style.display="none";
        domId("blockLy").style.display="none";
        domId("blockHoa").style.display="none";
  
        domId("blockDate").style.display="none";
        domId("blockSalary").style.display="none";
  
        domId("blockCompanyName").style.display="none";
        domId("blockInvoiceValue").style.display="none";
        domId("blockEvaluate").style.display="none";
}
// Lấy thông tin người dùng
function LayThongTin() {
    let person = [];
    const id = domId("id").value;
    const name = domId("name").value;
    const address = domId("address").value;
    const email = domId("email").value;
    const typeJob = domId("typeJob").value;

    if(typeJob === "Student") {
        const toan = domId("diemToan").value;
        const ly = domId("diemLy").value;
        const hoa = domId("diemHoa").value;
        person = {name,address,id,email,typeJob,toan,ly,hoa};
    } else if(typeJob === "Employee") {
        const ngaylamviec = domId("ngaylamviec").value;
        const luongngay = domId("luongngay").value;
        person = {name,address,id,email,typeJob,ngaylamviec,luongngay};
    } else {
        const companyname = domId("companyname").value;
        const invoicevalue = domId("invoicevalue").value;
        const evaluate = domId("evaluate").value;
        person = {name,address,id,email,typeJob,companyname,invoicevalue,evaluate};
    }
    return person;
};

// Hiển thị input
window.HiddenInput = () => {
    const typeJob = domId("typeJob").value;
    if(typeJob === "Student") {
        domId("blockToan").style.display="block";
        domId("blockLy").style.display="block";
        domId("blockHoa").style.display="block";
  
        domId("blockDate").style.display="none";
        domId("blockSalary").style.display="none";
  
        domId("blockCompanyName").style.display="none";
        domId("blockInvoiceValue").style.display="none";
        domId("blockEvaluate").style.display="none";
  
    } else if(typeJob === "Employee") {
        domId("blockToan").style.display="none";
        domId("blockLy").style.display="none";
        domId("blockHoa").style.display="none";
  
        domId("blockDate").style.display="block";
        domId("blockSalary").style.display="block";
  
        domId("blockCompanyName").style.display="none";
        domId("blockInvoiceValue").style.display="none";
        domId("blockEvaluate").style.display="none";
    } else {
        domId("blockToan").style.display="none";
        domId("blockLy").style.display="none";
        domId("blockHoa").style.display="none";
  
        domId("blockDate").style.display="none";
        domId("blockSalary").style.display="none";
  
        domId("blockCompanyName").style.display="block";
        domId("blockInvoiceValue").style.display="block";
        domId("blockEvaluate").style.display="block";
    }
}

//Thêm 
window.AddPerson = () => {
    const person = LayThongTin();

    if(checkValidation(true)) {

        isValue = validation.checkId(id,"errorId","(*) Mã người dùng đã tồn tại",listPerson);

        if(isValue) {

            const entity = createEntity(person);

            listPerson.Add(entity);
            
            saveData();

        }
    }
}

function createEntity(person) {
    let entity;
    if(person.typeJob === "Student") {

        const {name,address,id,email,typeJob,toan,ly,hoa} = person;
        const student = new Student(name,address,id,email,typeJob,toan,ly,hoa);
        student.TinhTrb();
        return entity = student;

    }
    else if(person.typeJob === "Employee") {

        const {name,address,id,email,typeJob,ngaylamviec,luongngay} = person;
        const employee = new Employee(name,address,id,email,typeJob,ngaylamviec,luongngay);
        employee.TinhLuong();
        return entity = employee;

    } else {

        const {name,address,id,email,companyname,typeJob,invoicevalue,evaluate} = person;
        const customer = new Customer(name,address,id,email,typeJob,companyname,invoicevalue,evaluate);
        return entity = customer;

    }
}
function renderTable(data = listPerson.arr) {
    
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var person = data[i];
    var other = "";
    if(person.typeJob === "Student") {
        other = `Điểm trung bình: ${person.dtrb}`;
    }
    else if(person.typeJob === "Employee") {
        other = `Lương: $${person.salary}`;
    } else {
        other = `Đánh giá: ${person.evaluate}`;
    }
    content += `
        <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.address}</td>
            <td>${person.typeJob}</td>
            <td>${person.email} </td>
            <td>${other} </td>
            <td>
                <button class="btn btn-warning mt-1" data-toggle="modal"
                data-target="#myModal" onclick="OpenEdit('${person.id}')">Edit</button>
                <button class="btn btn-danger mt-1" onclick="Delete('${person.id}')">Del</button>
            </td>
        </tr>
    `
  }
  domId("tblDanhSachSP").innerHTML = content;
  return content;
}

window.OpenEdit = (id) => {
    domId("id").disabled=true;
    document.querySelector(".modal-title").innerHTML = "Edit Person";
    document.querySelector(".modal-footer").innerHTML = `<button data-dismiss="modal" onclick="EditPerson()" class="btn btn-success">Edit</button>`;
    const person = listPerson.findById(id);
    const {name,address,email,typeJob} = person;
    domId("name").value = name;
    domId("address").value = address;
    domId("id").value = id;
    domId("email").value = email;
    domId("typeJob").value = typeJob;

    if(typeJob === "Student") {
        HiddenInput();
        const {toan,ly,hoa} = person;
        domId("diemToan").value = toan;
        domId("diemLy").value = ly;
        domId("diemHoa").value = hoa;
    } else if(typeJob === "Employee") {
        HiddenInput();
        const {ngaylamviec,luongngay} = person;
        domId("ngaylamviec").value = ngaylamviec;
        domId("luongngay").value = luongngay;
    } else {
        HiddenInput();
        const {companyname,invoicevalue,evaluate} = person;
        domId("blockCompanyName").value= companyname;
        domId("blockInvoiceValue").value=invoicevalue;
        domId("blockEvaluate").value=evaluate;
    }
}

window.EditPerson = () => {
    
    const person = LayThongTin();
    
    if(checkValidation(false)) {

        const entity = createEntity(person);
    
        listPerson.update(entity);

        saveData();
        
    }

}

window.Delete = (id) => {
    listPerson.Delete(id);
    
    saveData();
}

const saveData = () => {
    listPerson.arr = SortedName();
    setLocalStorage();
    renderTable();
}

window.onload = () => {
    getLocalStorage();
    renderTable();
};

const setLocalStorage = () => {
    const stringtify = JSON.stringify(listPerson.arr);
    localStorage.setItem("USER_LIST_KEY",stringtify);
}
const getLocalStorage = () =>{
    const stringify = localStorage.getItem("USER_LIST_KEY");
    if(stringify) {
        listPerson.arr = JSON.parse(stringify);
    }
}

window.Filter = () => {

    const job = domId("PersonJob").value;
    
    const arr = listPerson.filter(job);

    renderTable(arr);
}

function SortedName() {
    let names = [];
    let SortedArr = [];
    for(const element of listPerson.arr) {
        names.push(element.name)
    }
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < names.length - 1; i++) {
        const firstNameA = names[i].split(' ')[0].toLowerCase();
        const firstNameB = names[i + 1].split(' ')[0].toLowerCase();
        
        if (firstNameA > firstNameB) {
          // Swap elements
          const temp = names[i];
          names[i] = names[i + 1];
          names[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    for (const name of names) {
        const person = listPerson.findByName(name);
        SortedArr.push(person);
    }
    return SortedArr;
}
