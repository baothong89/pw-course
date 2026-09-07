// Cách 1:
for (let i = 1000; i<=2000; i++){
    if(i % 3 === 0){
        console.log(i);
    };
};
// Cách 2: Vòng lặp chạy ít hơn
// for (let i = 1002; i <= 2000; i = i+3)
// {
//     console.log(i);
// }