// Binary Search
// INPUT MUST BE SORTED FIRST!!!!!!!!!

// Time: O(logn)
// Space: O(logn)


//  The enum provides a type-safe way to specify what kind of data you're working with, while the generic type T ensures type consistency throughout the function.
//  The optional comparator function allows for custom comparison logic when needed, especially useful for complex objects or custom sorting requirements.


enum DataType {
  NUMBER = 'number',
  STRING = 'string',
  DATE = 'date'
  // Add more types as needed
}

interface SearchConfig<T> {
  type: DataType;
  comparator?: (a: T, b: T) => number;
}

function binarySearch<T>(arr: T[], target: T, config: SearchConfig<T>): number {
  let start: number = 0;
  let end: number = arr.length - 1;

  while (start <= end) {
      let mid: number = Math.floor((end + start) / 2);

      if (config.comparator) {
          const comparison = config.comparator(target, arr[mid]);
          if (comparison === 0) return mid;
          if (comparison > 0) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      } else {
          if (target === arr[mid]) return mid;
          if (target > arr[mid]) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
  }

  return -1;
}




// Example usage:
const dates = [new Date('2023-01-01'), new Date('2023-06-01'), new Date('2023-12-31')];

const dateConfig: SearchConfig<Date> = {
  type: DataType.DATE,
  comparator: (a: Date, b: Date) => a.getTime() - b.getTime()
};

console.log(binarySearch(dates, new Date('2023-06-01'), dateConfig));





// For simple types, you can use it without a comparator

const numbers = [1, 2, 3, 4, 5];
const strings = ['apple', 'banana', 'orange', 'pear']

console.log(binarySearch(numbers, 3, { type: DataType.NUMBER }));
console.log(binarySearch(strings, 'orange', { type: DataType.STRING }));
