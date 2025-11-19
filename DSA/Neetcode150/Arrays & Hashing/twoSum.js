function twoSum(nums, target) {
    const map = new Map();
    for(let i = 0; i <= nums.length; i++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
          return  [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
    return [];
}

const result = twoSum([1, 2, 3, 4], 3);
console.log(result);