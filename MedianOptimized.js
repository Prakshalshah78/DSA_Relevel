/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 function findMedianSortedArrays(nums1, nums2) {
    if(nums2.length < nums1.length){
        return findMedianSortedArrays(nums2,nums1);
    }
    let n1 = nums1.length;
    let n2 = nums2.length;
    let low = 0, high = n1;
    
    while(low<=high){
        let cut1 = (low + high) >> 1;
        let cut2 = parseInt((n1+n2+1)/2) - cut1;
        
        let left1 = cut1 == 0 ? Number.MIN_VALUE : nums1[cut1-1];
        let left2 = cut2 == 0 ? Number.MIN_VALUE : nums2[cut2-1];
        
        let right1 = cut1 == n1 ? Number.MAX_VALUE : nums1[cut1];
        let right2 = cut2 == n2 ? Number.MAX_VALUE : nums2[cut2];
        
        if(left1 <= right2 && left2 <= right1){
            if((n1+n2)%2==0){
                return parseInt((Math.max(left1,left2)+Math.min(right1,right2)) / 2.0);
            }
            else{
                return Math.max(left1,left2);
            }
        }
        
        else if(left1 > right2){
            high = cut1 - 1;
        }
        
        else{
            low = cut1 + 1;   
        }
        
    }
};