// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    let res = [];
    for (let i = 1; i <= matrix.length - 1; i += 2) {
        matrix[i].reverse();
    }
    res = matrix.map((el) => el).flat();
    return res;
};
