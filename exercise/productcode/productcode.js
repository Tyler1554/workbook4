
let supplierCode = {
    supplierCode: "", 
    

}








function getSupplier(code) {
    return code.substring(0, code.indexOf(":"));
}

function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}

function getSize(code) {
    return code.substring(code.indexOf("-") + 1);
}