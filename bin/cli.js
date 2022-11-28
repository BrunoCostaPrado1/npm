const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.log(`fail to execute ${command}`);
  }
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth https://github.com/BrunoCostaPrado1/npm ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn`;

console.log(`Coping repo ${repoName}...`);
const checkout = runCommand(gitCheckoutCommand);

if (!checkout) {
  process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}...`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  process.exit(-1);
}

console.log(
  `Done, ${repoName} is ready to go!`,
  `use cd ${repoName} to enter the folder, and yarn to download the dependencies`
);
