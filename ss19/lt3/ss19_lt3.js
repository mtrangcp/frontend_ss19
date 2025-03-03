let vndToUsd = +prompt(`Đổi VND sang USD: `);
let usdToVnd = +prompt(`Đổi USD sang VND: `);

if (isNaN(vndToUsd) || isNaN(usdToVnd)) {
    alert(`Dữ liệu không hợp lệ!`);

} else {
    let convertVnd = vndToUsd / 23000;
    let convertUsd = usdToVnd * 23000;

    document.write(`VND --> USD: ${vndToUsd} --> ${convertVnd} <br/>`);
    document.write(`USD --> VND: ${usdToVnd} --> ${convertUsd}`);
}


