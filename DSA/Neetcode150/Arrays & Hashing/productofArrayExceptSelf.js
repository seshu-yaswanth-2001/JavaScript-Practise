// [1, 2, 3, 4] = [48, 24, 12, 8]

function product(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    res[i] = product;
  }
  return res;
}

const nums = [1, 2, 4, 6];
const result = product(nums);
console.log(result);

// optimal way using prefix and suffix

function optimal(nums) {
  const n = nums.length;
  let count = new Array(n).fill(1);

  for (let i = 1; i < nums.length; i++) {
    count[i] = count[i - 1] * nums[i - 1];
  }

  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    count[i] *= postfix;
    postfix *= nums[i];
  }
  return count;
}

const result2 = optimal(nums);
console.log(result2);
