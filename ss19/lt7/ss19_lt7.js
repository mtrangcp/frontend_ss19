let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

let max;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert(`Số không hợp lệ`);

} else {
    max = a > b && a > c ? a : b > a && b > c ? b : c;

    alert(`Số lớn nhất trong 3 số: ${max}`);
}


