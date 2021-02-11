var trap = function (height) {
    let total = 0
    let maxL = 0
    let maxR = 0

    for (let i = 0; i < height.length; i++) {
        pointer_left = i - 1
        pointer_right = i + 1

        while (pointer_left >= 0) {
            if (height[pointer_left] > maxL) {
                maxL = height[pointer_left]
            }
            pointer_left -= 1
        }

        while (pointer_right < height.length) {
            if (height[pointer_right] > maxR) {
                maxR = height[pointer_right]
            }
            pointer_right += 1
        }
        let area = Math.min(maxL, maxR) - height[i]
        if (area > 0) {
            total += area
        }
        maxL = 0
        maxR = 0

    }
    return total
};

let height = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]