function find_building_no({number_of_digits=3,find_first=false}){
    let solution = [];
    for (let building_no = 10 ** (number_of_digits-1); building_no < 10 ** number_of_digits; building_no++) {
        let sum_left = 0;
        for (let i = 1; i < building_no; sum_left += i, i++) {}
        let sum_right = 0;
        let j = building_no+1;
        while (sum_right < sum_left){
            sum_right += j;
            j++;
        }
        if (sum_left === sum_right) {
            let number_of_buildings = j - 1;
            solution.push({building_no, number_of_buildings});
            if (find_first) {
                break;
            }
        }
    }
    return solution;
}

for( let {building_no,number_of_buildings} of find_building_no({number_of_digits: 5,find_first: true})){
  console.log(building_no, number_of_buildings);
}

for( let solution of find_building_no({number_of_digits: 5,find_first: false})){
    let {building_no,number_of_buildings} = solution;
    console.log(building_no, number_of_buildings);
}
