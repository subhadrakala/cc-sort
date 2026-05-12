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
