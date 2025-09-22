// Terence Tao
// Street: 1 2 3 ... N ... M
// N: 3-digit integer
// Sum left == Sum right
// 13:53 -> N? M?
for (let building_no = 1; building_no < 100_000; building_no++) {
    let sum_left = 0;
    for (let i = 1; i < building_no; sum_left += i, i++) {}
    let sum_right = 0;
    let j = building_no+1;
    while (sum_right < sum_left){
        sum_right += j;
        j++;
    }
    if (sum_left === sum_right) {
        console.log(`Building number is ${building_no}, and there are ${j-1} buildings in the street.`);
        //break;
    }
}