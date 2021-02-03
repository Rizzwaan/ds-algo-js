

def rain_water(nums):
    max_area = 0
    lenght = len(nums)
    for i in range(0, lenght):
        for j in range(i+1, lenght):
            l = min(nums[i], nums[j])
            b = j - i
            area = l*b
            if area > max_area:
                max_area = area

    return max_area


# Test cases
nums1 = [7, 1, 2, 3, 9]
nums2 = []
nums3 = [7]
nums4 = [6, 9, 3, 4, 5, 8]

print(rain_water(nums4))
