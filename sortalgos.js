export function radixSort(a) {
    let maxLength = 0;
    for (let k of a) {
        if (k.length > maxLength) {
            maxLength = k.length;
        }
    }

    let i = maxLength - 1;

    while (i >= 0) {
        let buckets = new Array(256);
        for (let j=0; j <= a.length - 1; j++) {
           let word = a[j];
           let charCode;
           if (word.length <= i) {
            charCode = 0;
           } else {
            charCode = word.charCodeAt(i);
           }
           
           if (!buckets[charCode]) {
            buckets[charCode] = [];
           }
           buckets[charCode].push(word);
        }

        a = buckets.flat();
        i--;

    }
    return a;
}

export function mergeSort(a) {
    if (a.length <= 1) {
        return a;
    }

    const mid = Math.floor(a.length / 2);
    const left = a.slice(0, mid);
    const right = a.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    

    while(leftIndex < left.length && rightIndex < right.length) {
        let leftWord = left[leftIndex];
        let rightWord = right[rightIndex];
        
        if (leftWord < rightWord) {
            result.push(leftWord);
            leftIndex++;
        } else {
            result.push(rightWord);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}