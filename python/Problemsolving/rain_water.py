

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


def rain_water_optimal(nums):
    p1 = 0
    p2 = len(nums) - 1
    max_area = 0
    while(p1 < p2):
        area = min(nums[p1], nums[p2]) * (p2 - p1)
        max_area = max(max_area, area)
        if nums[p1] <= nums[p2]:
            p1 += 1
        else:
            p2 -= 1

    return max_area


# Test cases
nums1 = [7, 1, 2, 3, 9]
nums2 = []
nums3 = [7]
nums4 = [6, 9, 3, 4, 5, 8]
nums5 = [2, 3, 4, 5, 18, 17, 6]
nums6 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

# print(rain_water(nums4))

print(rain_water_optimal(nums6))
