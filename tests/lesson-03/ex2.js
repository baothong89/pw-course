let height = 170;
if(height <100 || height >= 200 ){
    console.log('Chiều cao không hợp lệ. CHiều cao phải nằm trong khoảng từ 100cm đến 200cm');
}else{
    let bestWeight = (height % 100) * 9/10;
    let maxWeight = height % 100;
    let minWeight = (height % 100) * 8/10;
    console.log(`Với chiều cao: ${height}cm thì cân nặng lý tưởng là: ${bestWeight}kg, cân nặng tối đa là: ${maxWeight}kg và cân nặng tối thiểu là: ${minWeight}kg`);
}