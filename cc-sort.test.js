import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

test('sorts lines of a file', async () => {
    const { stdout } = await execAsync('node cc-sort.js words.txt | uniq | head -n5');
    assert.strictEqual(stdout, "A\nACTUAL\nAGREE\nAGREEMENT\nAND\n");
});

test('sorts lines of a file with -u argument', async () => {
    const { stdout } = await execAsync('node cc-sort.js -u words.txt | head -n5');
    assert.strictEqual(stdout, "A\nACTUAL\nAGREE\nAGREEMENT\nAND\n");
});

test('sorts lines of a file with -algo radix argument', async () => {
    const { stdout } = await execAsync('node cc-sort.js -algo=radix words.txt | head -n5');
    assert.strictEqual(stdout, "A\nACTUAL\nAGREE\nAGREEMENT\nAND\n");
});


test('sorts lines of a file with -algo merge argument', async () => {
    const { stdout } = await execAsync('node cc-sort.js -algo=merge words.txt | head -n5');
    assert.strictEqual(stdout, "A\nACTUAL\nAGREE\nAGREEMENT\nAND\n");
});