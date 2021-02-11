def trapped_water(nums):
    total = 0
    max_l = 0
    max_r = 0

    for i in range(len(nums)):
        p_left = i-1
        p_right = i+1
        while p_left >= 0:
            if nums[p_left] > max_l:
                max_l = nums[p_left]
            p_left -= 1
        print(f"pleft : {p_left}")
        while p_right < len(nums):
            if nums[p_right] > max_r:
                max_r = nums[p_right]
            p_right += 1
        print(f"pright : {p_right}")
        area = min(max_l, max_r) - nums[i]
        print(f"max_l: {max_l} | max_r: {max_r}")
        print(f"area: {area}")
        if area > 0:
            total += area
        max_l = 0
        max_r = 0

    return total


nums1 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
print(trapped_water(nums1))
