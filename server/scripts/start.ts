#!/usr/bin/env node

import { execa } from 'execa'

async function main() {
  await execa('esno', ['-r', 'tsconfig-paths/register', 'src/index.ts'], {
    stdio: 'inherit',
  })
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
