/**********************************************************************************
 * 4.寻找两个有序数组的中位数
 * 
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例1:
 *
 *     nums1 = [1, 3]
 *     nums2 = [2]
 *
 *     则中位数是 2.0
 * 
 * 示例2:
 *
 *     nums1 = [1, 2]
 *     nums2 = [3, 4]
 *
 *     则中位数是 (2 + 3)/2 = 2.5
 *
 *
 **********************************************************************************/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    let odd = (len1 + len2) % 2, target, left, right, pd = [];
    if(odd === 0){
        target = (len1 + len2) / 2;
    }else{
        target = (len1 + len2 - 1) / 2
    }
    let i = 0, j = 0;
    while(pd.length <= target){
        if(i < nums1.length && j < nums2.length){
            if(nums1[i] <= nums2[j]){
                pd.unshift(nums1[i]);
                i++
            }else{
                pd.unshift(nums2[j]);
                j++
            }
        }else if(i >= nums1.length && j < nums2.length){
            pd.unshift(nums2[j]);
            j++;
        }else if(i < nums1.length && j >= nums2.length){
            pd.unshift(nums1[i]);
            i++;
        }
    }

    if(pd.length === 1){
        return pd[0]
    }
    if(odd){
        return pd[0]
    }else{
        return (pd[0] + pd[1])/2
    }
};