function topK(nums, k) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
       map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    const freqArray = Object.entries(map);
    freqArray.sort((a, b) => b[1] - a[1]);

    return freqArray.slice(0, k).map(entry => parseInt(entry[0]));
}

const result = topK([1, 2, 2, 2, 2, 2, 3, 3, 3, 3], 2);
// console.log(result);

// optimized way

function topKK(nums, k) {
    const count = {};
    const freq = Array.from({length: nums.length + 1}, () => []);

    for(let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    for(let n in count) {
        freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for(let i = freq.length - 1; i >= 0; i--) {
        for(let n of freq[i]) {
            res.push(n);
            if(res.length === k){
                return res;
            }
        }
    }
}


const result2 = topKK([1, 2, 2, 2, 2, 2, 3, 3, 3, 3], 2);
console.log(result2);