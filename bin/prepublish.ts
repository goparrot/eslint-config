import fs from 'fs';
import path from 'path';
import parseArgs from 'minimist';

interface IPrepublishArgs {
    from: string;
    to: string;
}

async function run(): Promise<void> {
    const { from = '.', to = './dist' } = parseArgs<IPrepublishArgs>(process.argv.slice(2));
    console.log({ from, to });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { scripts, devDependencies, husky, files, 'lint-staged': lintStaged, directories, config, ...packageJson } = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), `./${from}/package.json`)).toString(),
    );

    packageJson.main = './index.js';
    packageJson.typings = './index.d.ts';
    packageJson.sideEffects = false;

    fs.writeFileSync(`${to}/package.json`, JSON.stringify(packageJson, null, 4));

    const copyFiles = ['README.md'];
    for (const file of copyFiles) {
        const fromPath = `${from}/${file}`;
        if (!fs.existsSync(fromPath)) {
            console.warn(`WARN: File "${fromPath}" doesn't exist`);
            continue;
        }

        fs.copyFileSync(fromPath, `${to}/${file}`);
    }
}

void run();
