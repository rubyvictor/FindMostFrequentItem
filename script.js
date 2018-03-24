function find_most_frequent(arr) {
  let map = {};

  if (arr.length === 0) return 0;

  arr.forEach(element => {
    if (map[element] === undefined) {
      map[element] = 1;
    } else {
      map[element]++;
    }
  });

  const result = Object.keys(map).reduce((elem1, elem2) => {
    return map[elem1] > map[elem2] ? elem1 : elem2;
  });

  return result;
}

find_most_frequent([1, 1, "2", "2", "2", 3, 4, -1, -1, -1, -1, -1, -1]);

module.exports = find_most_frequent;
