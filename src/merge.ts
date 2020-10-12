/**
 * This function takes an array of nested number-arrays and processes them. During this process, overlapping ones are
 * detected and combined. Afterwards, they are returned in the same format of nested number arrays.
 *
 * @param arraysToMerge
 */
export function merge(arraysToMerge: number[][]): number[][] {
    if (arraysToMerge?.length === 0) {
        console.error('Unfortunately, the array is empty :(');
        return [];
    }
    // Sort after array start item.
    const sortedArray = arraysToMerge
        .sort((intervalA: number[], intervalB: number[]) => {
            const startA = intervalA[0];
            const startB = intervalB[0];
            return startA === startB ? 0 : (startA > startB ? 1 : -1);
        });

    // Iterate over the arrays, determine overlapping ones and act accordingly.
    const arrayToReturn = [];
    sortedArray.forEach((intervalItem: number[], currentIndex: number) => {
        const maximumReturnIndex = arrayToReturn.length - 1;
        let lastEnd = arrayToReturn?.[maximumReturnIndex]?.[1];
        const currentStart = sortedArray[currentIndex][0];

        // If last.end < next.start then arrays are not overlapping. Push a new array to the result.
        if (arrayToReturn?.length === 0 || lastEnd < currentStart) {
            arrayToReturn.push(
                sortedArray[currentIndex]
            );
        // Else update the upper boundaries of the last array item.
        } else {
            const currentEnd = sortedArray[currentIndex][1];
            arrayToReturn[maximumReturnIndex][1] = Math.max(lastEnd, currentEnd);
        }
    });

    return arrayToReturn;
}
