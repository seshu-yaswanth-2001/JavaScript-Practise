function topK(nums, k) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
       map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    const freqArray = Object.entries(map);
    console.log(freqArray.sort((a, b) => b[1] - a[1]));

    return freqArray.slice(0, k).map((item) => item[0])
}

const result = topK([1, 2, 2, 2, 2, 2, 3, 3, 3, 3], 2);
console.log(result);