export const changeConfig = (array) => {
    let arrayNew = array.map(elem => {
    if (elem === '--config') {
      return '-c';
    } else if (elem === '--input') {
      return '-i';
    } else if  (elem === '--output') {
      return '-o';
    } else {
      return elem;
    }
    })
    return arrayNew;
}

export const checkDoubles = (array) => {
    let set = new Set(array);
    return set.size === array.length;
}