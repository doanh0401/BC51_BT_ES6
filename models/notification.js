import { Validation } from "./Validation.js";

const validation = new Validation();
const domId = (id) => document.getElementById(id);

export function showError(errorId, mess) {
    domId(errorId).style.display = "block";
    domId(errorId).innerHTML = mess;
};
export function hiddenError(errorId) {
    domId(errorId).style.display = "none";
    domId(errorId).innerHTML = "";
}
function clearErrorKeyup(errorId, value) {
    function clearErrorWhenInput() {
     
        domId(errorId).style.display = "none";
        domId(errorId).innerHTML = "";
    }
    domId(value).addEventListener("keyup", clearErrorWhenInput);
    clearErrorWhenInput();
}
// clearErrorOptions
domId("typeJob").addEventListener("change", clearErrorOption);
function clearErrorOption() {
    var inputOption = domId("typeJob").value;
    if (inputOption !== 0) {
        hiddenError("errorTypeJob");
    }
}
clearErrorKeyup("errorId","id")
clearErrorKeyup("errorName", "name");
clearErrorKeyup("errorAddress", "address");
clearErrorKeyup("errorEmail", "email");
clearErrorKeyup("errorDiemToan", "diemToan");
clearErrorKeyup("errorDiemLy", "diemLy");
clearErrorKeyup("errorDiemHoa", "diemHoa");
clearErrorKeyup("errorWorkingDay", "ngaylamviec");
clearErrorKeyup("errorLuongNgay", "luongngay");
clearErrorKeyup("errorCompanyName", "companyname");
clearErrorKeyup("errorInvoiceValue", "invoicevalue");
clearErrorKeyup("errorEvaluate", "evaluate");
// check validation
export function checkValidation(isAdd) {
    const id = domId("id").value;
    const name = domId("name").value;
    const address = domId("address").value;
    const email = domId("email").value;
    const typeJob = domId("typeJob").value;

    let isValue = true;
    isValue &= validation.checkEmpty(id, "errorId", "(*) Vui lòng nhập mã người dùng") && validation.kiemTraDoDaiKiTu(id,"errorId","(*) Vui lòng nhập mã 4 - 6 ký tự",4,6);
    isValue &= validation.checkEmpty(name, "errorName", "(*) Vui lòng nhập tên người dùng") && validation.checkPattern(name,"errorName","(*) Vui lòng chỉ nhập chữ cái","^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    isValue &= validation.checkEmpty(address, "errorAddress", "(*) Vui lòng nhập địa chỉ");
    isValue &= validation.checkEmpty(email, "errorEmail", "(*) Vui lòng nhập địa chỉ email")&& validation.checkPattern(email,"errorEmail","Vui lòng nhập email không hợp lệ",/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    isValue &= validation.checkEmptyOption("typeJob", "errorTypeJob", "(*) Vui lòng chọn nghề nghiệp");

    if(typeJob !== 0){
        if(typeJob === "Student") {

        const toan = domId("diemToan").value;
        const ly = domId("diemLy").value;
        const hoa = domId("diemHoa").value;

        isValue &= validation.checkEmpty(toan, "errorDiemToan", "(*) Vui lòng nhập điểm toán") && validation.CheckNumber(toan, "errorDiemToan", "(*) Vui lòng nhập số") && validation.kiemTraGiaTri(toan,"errorDiemToan","(*) Vui lòng nhập điểm hợp lệ",0,10);
        isValue &= validation.checkEmpty(ly, "errorDiemLy", "(*) Vui lòng nhập điểm lý") && validation.CheckNumber(ly, "errorDiemLy", "(*) Vui lòng nhập số") && validation.kiemTraGiaTri(ly,"errorDiemLy","(*) Vui lòng nhập điểm hợp lệ",0,10);
        isValue &= validation.checkEmpty(hoa, "errorDiemHoa", "(*) Vui lòng nhập điểm hóa") && validation.CheckNumber(hoa, "errorDiemHoa", "(*) Vui lòng nhập số") && validation.kiemTraGiaTri(hoa,"errorDiemHoa","(*) Vui lòng nhập điểm hợp lệ",0,10);

        } else if(typeJob === "Employee") {

        const ngaylamviec = domId("ngaylamviec").value;
        const luongngay = domId("luongngay").value;

        isValue &= validation.checkEmpty(ngaylamviec, "errorWorkingDay", "(*) Vui lòng nhập số ngày làm việc") && validation.CheckNumber(ngaylamviec, "errorWorkingDay", "(*) Vui lòng nhập số");
        isValue &= validation.checkEmpty(luongngay, "errorLuongNgay", "(*) Vui lòng nhập lương 1 ngày") && validation.CheckNumber(luongngay, "errorLuongNgay", "(*) Vui lòng nhập số");
        } else {

        const companyname = domId("companyname").value;
        const invoicevalue = domId("invoicevalue").value;
        const evaluate = domId("evaluate").value;

        isValue &= validation.checkEmpty(companyname, "errorCompanyName", "(*) Vui lòng nhập tên công ty") && validation.checkPattern(companyname,"errorCompanyName","(*) Vui lòng chỉ nhập chữ cái","^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        isValue &= validation.checkEmpty(invoicevalue, "errorInvoiceValue", "(*) Vui lòng nhập trị giá hóa đơn") && validation.CheckNumber(invoicevalue, "errorInvoiceValue", "(*) Vui lòng nhập số");
        isValue &= validation.checkEmpty(evaluate, "errorEvaluate", "(*) Vui lòng nhập đánh giá");

        }
    }
    return isValue;
}
// xóa thông báo 
export function clearError(errorName, errorAddress, errorEmail, errorId,errorDiemToan,errorDiemLy, errorDiemHoa,errorLuongNgay,errorWorkingDay,errorCompanyName,errorInvoiceValue,errorEvaluate) {
    hiddenError(errorName);
    hiddenError(errorAddress);
    hiddenError(errorEmail);
    hiddenError(errorId);
    hiddenError(errorDiemHoa);
    hiddenError(errorDiemToan);
    hiddenError(errorDiemLy);
    hiddenError(errorLuongNgay);
    hiddenError(errorWorkingDay);
    hiddenError(errorCompanyName);
    hiddenError(errorInvoiceValue);
    hiddenError(errorEvaluate);
}