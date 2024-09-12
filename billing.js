var pId = "";
var pName = "";
var pPrice = "";
var pCount = "";
var pTotal = "";
var products = [];

function getProductDetail() {
let pId = "";
let pPrice = "";
switch (document.getElementById("pName").value) {
case "Rice":
pId = 1001;
pPrice = 50;
break;
case "Oil":
pId = 1002;
pPrice = 60;
break;
case "Ghee":
pId = 1003;
pPrice = 200;
break;
case "Soap":
pId = 1004;
pPrice = 45;
break;
case "Detergents":
pId = 1005;
pPrice = 80;
break;
case "Shampoo":
pId = 1006;
pPrice = 30;
break;
case "Toothpaste":
pId = 1007;
pPrice = 50;
break;
case "Pickles":
pId = 1008;
pPrice =78;
break;
case "Pooja Products":
pId = 1009;
pPrice = 100;
break;
case "Cookies":
pId = 1010;
pPrice =50 ;
break;
case "Ice creams":
pId = 1011;
pPrice = 120;
break;
case "Cooldrinks":
pId = 1012;
pPrice =80 ;
break;
case "Masala":
pId = 1013;
pPrice = 70;
break;
case "Chocolates":
pId = 1014;
pPrice = 55;
break;
case "Nuts":
pId = 1015;
pPrice = 270;
break;
case "Vegetables":
pId = 1016;
pPrice = 40;
break;
case "Fruits":
pId = 1017;
pPrice =90 ;
break;
case "Milk Products":
pId = 1018;
pPrice =35 ;
break;

default:
console.log("Invalid product");
}
document.getElementById("pId").value = pId;
document.getElementById("pPrice").value = pPrice;
}
function getInputs() {
pId = document.getElementById("pId");
pName = document.getElementById("pName");
pPrice = document.getElementById("pPrice");
pCount = document.getElementById("pCount");
pTotal = document.getElementById("pTotal");
}
function calcTotal() {
getInputs();
pTotal.value = Number(pPrice.value) * Number(pCount.value);
}
function addProduct() {
getInputs();
if (findDuplicate() == false) {
let newProduct = [
pId.value,
pName.value,
pPrice.value,
pCount.value,
pTotal.value,
];
products.push(newProduct);
}
displayProducts();
resetEntry();
}

function findDuplicate() {
let isDuplicateFound = false;
for (let pIdx = 0; pIdx < products.length; pIdx++) {
console.log(pIdx, products, products[pIdx], pId.value);
if (products[pIdx][0] == pId.value) {
products[pIdx][3] =
Number(products[pIdx][3]) + Number(pCount.value);
products[pIdx][4] = products[pIdx][2] * products[pIdx][3];
isDuplicateFound = true;
}
}
return isDuplicateFound;
}

function resetEntry() {
document.getElementById("pId").value = "";
document.getElementById("pName").value = "";
document.getElementById("pPrice").value = "";
document.getElementById("pCount").value = "";
document.getElementById("pTotal").value = "";
}

function deleteProduct(pIdx) {
products.splice(pIdx, 1);
displayProducts();
}

function updateProduct(pIdx) {
let existingProduct = products[pIdx];
document.getElementById("pId").value = existingProduct[0];
document.getElementById("pName").value = existingProduct[1];
document.getElementById("pPrice").value = existingProduct[2];
document.getElementById("pCount").value = existingProduct[3];
document.getElementById("pTotal").value = existingProduct[4];
products.splice(pIdx, 1);
}

displayProducts();
function displayProducts() {
let result = "";

for (let pIdx = 0; pIdx < products.length; pIdx++) {
console.log(products[pIdx]);
let existProd = products[pIdx];
result += '<div class="row mt-4">';
for (let pdIdx = 0; pdIdx < products[pIdx].length; pdIdx++) {
console.log(products[pIdx][pdIdx]);
result += '<div class="col">' + products[pIdx][pdIdx] + "</div>";
}

result +=
'<div class="col">' +
'<button type="button" class="btn btn-warning" onclick="updateProduct(' +
pIdx +
')">Update</button>' +
'<button type="button" class="btn btn-danger" onclick="deleteProduct(' +
pIdx +
')">Delete</button>' +
"</div> </div>";
}

document.getElementById("productsDisplay").innerHTML = result;
}