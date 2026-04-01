import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const runGit = (command) => {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
};

const gitCommit = runGit('git rev-parse --short HEAD') || 'unknown';
const gitTag = runGit('git describe --tags --exact-match');

const buildInfoTs = `export interface BuildInfo {
  version: string;
  gitCommit: string;
  gitTag: string;
}

export const BUILD_INFO: BuildInfo = ${JSON.stringify(
  {
    version: packageJson.version,
    gitCommit,
    gitTag
  },
  null,
  2
)};
`;

writeFileSync(new URL('../src/app/build-info.ts', import.meta.url), buildInfoTs, 'utf8');
