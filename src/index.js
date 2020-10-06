// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.reduce(
              (initArr, item, index) =>
                  initArr.concat(index % 2 === 1 ? item.reverse() : item),
              []
          )
        : [];
};
