let result1 = "javascript" + 5;
// result1 = javascript5  --> cộng chuỗi ( js ép 5 từ Number thành string r nối chuỗi)

let result2 = "javascript" - 1;
// result2 = NaN --> khi dùng toán tử "-", js ép "javascript" từ string thành Number thất bại (không xác định kết quả phép trừ)

let result3 = "3" + 2;
// result3 = 32 --> cộng chuỗi ( js ép 2 từ Number thành string r nối chuỗi)

let result4 = "5" - 4;
// result4 = 1 --> khi dùng toán tử "-", js ép "5" từ string thành Number thành công, sau đó thực hiện phép trừ

let result5 = isNaN("123");
// result5 = false --> isNaN kiểm tra giá trị có phải NaN, trước khi check ép kiểu giá trị về Number. "123" ép kiểu thành công.

let result6 = isNaN("hello");
// result5 = true --> "hello" ép kiểu về Number không thành công ("hello" không phải số (Not-a-Number))

let result7 = Number.isNaN("123");
// result7 = false --> Number.isNaN() kiểm tra giá trị có phải NaN và có kiểu Number hay không, và không ép kiểu khi kiểm tra. "123" là chuỗi, không phải NaN

let result8 = Number.isNaN(NaN);
// result8 = true --> NaN là giá trị đặc biệt thuộc kiểu Number(đúng  với điều kiện kiểm tra)

