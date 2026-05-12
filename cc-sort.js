import fs from 'fs/promises';


async function isFile(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

async function main() {

    try {

        let args = process.argv.slice(2);

        if (args.length === 0) {
            console.error('Please provide a file');
            return;
        }
        let filename = args[0];
        if (!await isFile(filename)) {
            console.error('Invalid file');
            return;
        }

        const fileData = await fs.readFile(filename, 'utf-8');
        let fileArray = fileData.trim().split('\n').sort();

        console.log(fileArray.join('\n'))
    }
    catch (error) {
        console.error(`Error processing file ${error.message}`);
        process.exit(1);
    }

}


main();