let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert(`Số không hợp lệ`);

} else {
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        alert(`Phương trình vô nghiệm`);

    } else if (delta === 0) {
        let x = (-b) / (2 * a);
        alert(`Phương trình có nghiệm kép: x1 = x2 = ${x}`);

    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1} ; x2 = ${x2}`);
    }
}

