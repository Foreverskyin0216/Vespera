#!/usr/bin/env node
import process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { ObserveCommand, TestCommand } from './commands'
;(() =>
  yargs(hideBin(process.argv))
    .scriptName('@playword/cli')
    .usage('$0 <command> [options]')
    .command(ObserveCommand)
    .command(TestCommand)
    .version(false)
    .wrap(null)
    .help()
    .showHelpOnFail()
    .demandCommand().argv)()
