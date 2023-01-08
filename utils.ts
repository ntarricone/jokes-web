export const getRandomIndex = ({
  array,
  excludedValues,
}: {
  array: any[];
  excludedValues?: number[];
}): number => {
  if (array.length === excludedValues?.length) return -1;

  let index = Math.floor(Math.random() * array.length);

  if (!excludedValues?.includes(index)) return index;

  return getRandomIndex({ array, excludedValues });
};

export const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
