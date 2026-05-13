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

export function quickSort(a, left = 0, right = a.length - 1) {
    if (left >= right) {
        return a;
    }

    const pivot = a[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (a[i] < pivot) {
            let temp = a[i];
            a[i] = a[partitionIndex];
            a[partitionIndex] = temp;
            
            partitionIndex++;
        }
    }

    // Move the pivot to its correct spot in the middle using 'temp' swap
    let temp = a[partitionIndex];
    a[partitionIndex] = a[right];
    a[right] = temp;

    quickSort(a, left, partitionIndex - 1);
    quickSort(a, partitionIndex + 1, right);

    return a;
}

function heapify(a, l, i) {
    let largest = i;
    let leftChild = (2*i) + 1;
    let rightChild = (2*i) + 2;
    
    if (leftChild < l && a[leftChild] > a[largest]) {
        largest = leftChild;
    }
    if (rightChild < l && a[rightChild] > a[largest]) {
        largest = rightChild;
    }
    if (largest != i) {
        let temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;
        heapify(a, l, largest);
    } 
}

export function heapSort(a) {
    let l = a.length;
    for (let i = l / 2 - 1; i >= 0; i--) {
        heapify(a, l, i);
    }
    for (let i = l - 1; i > 0; i--) {
        let temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        heapify(a, i, 0);
    }
    return a;
}