/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // Get the length of the flowerbed array.
    const flowerbedLength = flowerbed.length;

    // Loop through each spot in the flowerbed.
    for (let i = 0; i < flowerbedLength; ++i) {
        // Determine the state of the left spot (0 if at the start, otherwise the previous spot).
        const leftNeighbor = i === 0 ? 0 : flowerbed[i - 1];
        // Determine the state of the right spot (0 if at the end, otherwise the next spot).
        const rightNeighbor = i === flowerbedLength - 1 ? 0 : flowerbed[i + 1];
      
        // Check if current spot and its neighbors are empty (0).
        if (leftNeighbor + flowerbed[i] + rightNeighbor === 0) {
            // Plant a flower at the current spot.
            flowerbed[i] = 1;
            // Decrease the count of flowers we need to plant.
            --n;
        }
    }
    // If we've managed to plant 'n' or more flowers, return true.
    return n <= 0;
};