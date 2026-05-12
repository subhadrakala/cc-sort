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

        let filename, unique = false, algo;
        const sortAlgos = new Set();
        sortAlgos.add('radix');
        sortAlgos.add('quick');
        sortAlgos.add('merge');
        sortAlgos.add('heap');
        
        args.forEach(  async a => {
            if( a === '-u') {
                unique = true;
            }
            else if ( a.startsWith('-sort')) {
                algo = a.replace('-sort=', '');
                if (!sortAlgos.has(algo)) {
                    console.log('This sort function is not supported');
                    return;
                }
            }
            else {
                 if (! await isFile(a)) {
                    console.error('Invalid file');
                    return;
                }   
                filename = a;
            }
        });
           
        filename = args[1];
       

        const fileData = await fs.readFile(filename, 'utf-8');
        let fileArray = fileData.trim().split('\n').sort();

        if (unique) {
            fileArray = [...new Set(fileArray)];
        }

        console.log(fileArray.join('\n'));
    }
    catch (error) {
        console.error(`Error processing file ${error.message}`);
        process.exit(1);
    }

}


main();