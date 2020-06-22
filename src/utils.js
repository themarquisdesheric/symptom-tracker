export const TIMES = ['morning', 'day', 'evening', 'night'];

export const arbitrarySort = (a, b) => {
  const arbitraryOrder = { morning: 1, day: 2, evening: 3, night: 4 };

  return arbitraryOrder[a] - arbitraryOrder[b];
};
