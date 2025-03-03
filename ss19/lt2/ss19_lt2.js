let input = prompt("Nhập kí tự: ");

if (input.length > 1 || !isNaN(input)) {
    alert(`Không phải chữ cái`);

} else {
    alert(`Kí tự ${input} là chữ cái`);
}



