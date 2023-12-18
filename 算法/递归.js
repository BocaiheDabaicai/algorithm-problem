// 归并排序

let nums = [8, 6, 7, 2, 3, 5, 4, 1]
sortArray(nums)
console.log(nums)

function sortArray(nums) {
    let len = nums.length
    let temp = []
    mergeSort(nums, 0, len - 1, temp)
}

function mergeSort(nums, left, right, temp) {
    if (left === right) return
    let mid = Math.floor((left + right) / 2)
    mergeSort(nums, left, mid, temp)
    mergeSort(nums, mid + 1, right, temp)
    console.log(nums, left, right, temp)
    console.log()
    mergeOfTwoSortedArray(nums, left, mid, right, temp)
}

function mergeOfTwoSortedArray(nums, left, mid, right, temp) {
    for (let i = left; i <= right; i++) temp[i] = nums[i]

    let i = left
    let j = mid + 1
    let k = left

    while (i <= mid && j <= right) {
        if (temp[i] <= temp[j]) nums[k++] = temp[i++]
        else nums[k++] = temp[j++]
    }

    while (i <= mid) nums[k++] = temp[i++]
    while (j <= right) nums[k++] = temp[j++]
}