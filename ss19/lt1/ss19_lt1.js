let month = +prompt("Nhập tháng: ");

if (isNaN(month) || month < 1 || month > 12) {
    alert(`Tháng không hợp lệ!`);

} else {
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11: {
            alert(`Tháng ${month} có 30 ngày!`);
            break;
        }
        case 2: {
            alert(`Tháng 2 có 28 ngày hoặc 29 ngày năm nhuận!`);
            break;
        }
        default: {
            alert(`Tháng ${month} có 31 ngày!`);
            break;
        }
    }
}



