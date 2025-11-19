function hasDuplicates(nums) {
    return new Set(nums).size < nums.length;
}

const result = hasDuplicates([1, 2, 3, 4, 4]);
console.log(result);