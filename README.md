# cc-sort

A custom command-line tool written in Node.js that replicates the core functionality of the standard Unix `sort` utility. This project was built as part of the [Coding Challenges - Build Your Own Sort Tool](https://codingchallenges.fyi/challenges/challenge-sort).

## Features

- **Default Sort**: Sorts text files lexicographically.
- **Unique Sorting (`-u`)**: Removes duplicate lines from the output.
- **Multiple Algorithms (`-sort=<algo>`)**: Supports swapping out the underlying sorting engine.
- **Random Sort (`-sort=random`)**: Shuffles the lines randomly, but guarantees that identical lines are grouped together.

## Supported Sorting Algorithms

You can specify the sorting algorithm using the `-sort=` flag.

1. `radix`: Radix Sort (O(N*K) time, O(N+K) space)
2. `merge`: Merge Sort (O(N log N) time, O(N) space)
3. `quick`: Quick Sort In-Place (O(N log N) average time, O(log N) space)
4. `heap`: Heap Sort In-Place (O(N log N) time, O(1) space)
5. `random`: Custom Hash-based Random Sort (groups identical items)

## Usage

```bash
# Default sort
node cc-sort.js words.txt

# Sort uniquely (remove duplicates)
node cc-sort.js -u words.txt

# Sort using a specific algorithm
node cc-sort.js -sort=quick words.txt

# Sort uniquely using a specific algorithm
node cc-sort.js -u -sort=heap words.txt

# Randomly shuffle but keep identical lines together
node cc-sort.js -sort=random words.txt
```

## Testing

This project uses the native Node.js test runner to ensure algorithms are working correctly against sample data.

```bash
npm test
```
