const Ship = (size) => {
  const length = size;

  const makeArea = () => {
    const area = [];
    for (let i = 0; i < size; i++) {
      area.push(0);
    }
    return area;
  };

  const shipArea = makeArea();

  const hit = (position) => {
    if (shipArea[position] === 0) {
      shipArea[position] = 1;
    } else {
      return 'That location has already been hit';
    }
  };

  const isSunk = () => {
    for (let i = 0; i < length; i++) {
      if (shipArea[i] === 0) {
        return false;
      }
    }
    return true;
  };

  const getShipLength = () => length;

  return {
    getShipLength, makeArea, hit, isSunk, shipArea,
  };
};

module.exports = Ship;
