//Generic types

function addIndexList<T>(array: T[], value:T) {
  return array.map(() => + value);
}

addIndexList(['a', 'b', 'c'], 'f');
