/*
 * @parma {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 **/
function sortColors(nums) {
  let length = nums.length;
  let i = 0, j = length - 1, index = 0;

  let swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  while (index <= j) {
    let item = nums[index]
    switch (item) {
      case 0:
        swap(i, index);
        index++;
        i += 1;
        break;
      case 1:
        index++;
        break;
      case 2:
        swap(j, index);
        j--;
        break;

    }

  }

  console.log(nums);
}

sortColors([1,2,1,2,1,1,0,0,0,1,2,1,2,0,1,2,1,0,1,2,0,1,2,0,2])
sortColors([2, 0, 2, 1, 1, 0])
