console.log("Leetcode Problems Solutions");

/*

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

// function twoSum(nums,target){
//     let firstEle = nums[0];
//     for(let i=1; i<nums.length; i++){
//         if(nums[i]+firstEle == target){
//             console.log('firstEle',firstEle);
//             console.log("if",nums[i]);
//             return [i-1,i];
//         } else{
//             console.log("Else",firstEle,nums[i]);
//             console.log('firstEle',firstEle);
//             // firstEle = nums[i]++;
//             console.log('firstEle',firstEle);

//         }
//     }
// }

function twoSum(nums,target){
    let obj = {};
    for(let i=1; i<nums.length; i++){
        if(nums[i]+firstEle == target){
            console.log('firstEle',firstEle);
            console.log("if",nums[i]);
            return [i-1,i];
        } else{
            console.log("Else",firstEle,nums[i]);
            console.log('firstEle',firstEle);
            // firstEle = nums[i]++;
            console.log('firstEle',firstEle);

        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([3,2,3], 6))


