const split = id => {
  if (id < 8) {
    return false;
  } else if (id == 8) {
    return true;
  } else if (id > 9) {
    return false;
  }
};

module.exports = split;
