import { Validation } from "./Validation.js";

const validation = new Validation();
const domId = (id) => document.getElementById(id);

// function showError(errorId, mess) {
//     domId(errorId).style.display = "block";
//     domId(errorId).innerHTML = mess;
// };
// function hiddenError(errorId) {
//     domId(errorId).style.display = "none";
//     domId(errorId).innerHTML = "";
// }
// function clearErrorKeyup(errorId, value) {
//     function clearErrorWhenInput() {
//         // console.log(123);
//         domId(errorId).style.display = "none";
//         domId(errorId).innerHTML = "";
//     }
//     domId(value).addEventListener("keyup", clearErrorWhenInput);
//     clearErrorWhenInput();
// }
// // clearErrorOptions
// domId("typePhone").addEventListener("change", clearErrorOption);
// function clearErrorOption() {
//     var inputOption = domId("productType").value;
//     if (inputOption !== 0) {
//         hiddenError("errorTypePhone");
//     }
// }
// clearErrorKeyup("errorScreen", "screen");
// clearErrorKeyup("errorbackCamera", "backCamera");
// clearErrorKeyup("errorName", "TenSP");
// clearErrorKeyup("errorImage", "HinhSP");
// clearErrorKeyup("errorPrice", "GiaSP");
// clearErrorKeyup("errorfrontCamera", "frontCamera");
// clearErrorKeyup("errorDescribe", "MoTa");
// // check validation
// function checkValidation(isAdd) {
//     var name = domId("TenSP").value;
//     var price = domId("GiaSP").value;
//     var image = domId("HinhSP").value;
//     var screen = domId("screen").value;
//     var backCamera = domId("backCamera").value;
//     var frontCamera = domId("frontCamera").value;
//     var type = domId("typePhone").value;
//     var describe = domId("MoTa").value;
//     let isValue = true;
//     isValue &= validation.checkEmpty(name, "errorName", "(*) Vui lòng nhập tên sản phẩm");
//     isValue &= validation.checkEmpty(price, "errorPrice", "(*) Vui lòng nhập giá sản phẩm") && validation.CheckNumber(price, "errorPrice", "(*) Giá sản phẩm vui lòng nhập số");
//     isValue &= validation.checkEmpty(image, "errorImage", "(*) Vui lòng thêm ảnh");
//     isValue &= validation.checkEmpty(screen, "errorScreen", "(*) Vui lòng nhập kích thước màn hình");
//     isValue &= validation.checkEmpty(backCamera, "errorbackCamera", "(*) Vui lòng nhập thông tin camera sau");
//     isValue &= validation.checkEmpty(frontCamera, "errorfrontCamera", "(*) Vui lòng nhập thông tin camera trước");
//     isValue &= validation.checkEmptyOption("typePhone", "errorTypePhone", "(*) Vui lòng nhập loại sản phẩm");
//     isValue &= validation.checkEmpty(describe, "errorDescribe", "(*) Vui lòng nhập mô tả");
//     return isValue;
// }
// // xóa input
// function clearInput(name, price, image, screen, backCamera, frontCamera, type, describe) {
//     domId(name).value = "";
//     domId(price).value = "";
//     domId(image).value = "";
//     domId(screen).value = "";
//     domId(backCamera).value = "";
//     domId(frontCamera).value = "";
//     domId(type).value = 0;
//     domId(describe).value = "";
// }
// // xóa thông báo 
// function clearError(errorName, errorPrice, errorImage, errorScreen, errorbackCamera, errorfrontCamera, errorTypePhone, errorDescribe) {
//     hiddenError(errorName);
//     hiddenError(errorPrice);
//     hiddenError(errorImage);
//     hiddenError(errorScreen);
//     hiddenError(errorbackCamera);
//     hiddenError(errorfrontCamera);
//     hiddenError(errorTypePhone);
//     hiddenError(errorDescribe);
// }