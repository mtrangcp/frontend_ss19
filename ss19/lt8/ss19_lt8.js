let season = +prompt("Nhập tháng: ");

if (isNaN(season) || season < 1 || season > 12) {
    alert(`Tháng không hợp lệ!`);

} else {
    switch (season) {
        case 1:
        case 2:
        case 3: {
            alert(`Mùa Xuân`);
            break;
        }
        case 4:
        case 5:
        case 6: {
            alert(`Mùa hạ`);
            break;
        }
        case 7:
        case 8:
        case 9: {
            alert(`Mùa thu`);
            break;
        }
        default: {
            alert(`Mùa đông`);
            break;
        }
    }
}



