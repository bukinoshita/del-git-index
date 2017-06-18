#!/usr/bin/env node
'use strict'

const path = require('path')
const meow = require('meow')
const updateNotifier = require('update-notifier')
const del = require('del')
const shoutSuccess = require('shout-success')
const shoutError = require('shout-error')

const cli = meow(
  `
  Usage:
    $ git-index        Deletes index.lock of the current directory

  Options:
    -h, --help         Show help options
    -v, --version      Show version
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

updateNotifier({ pkg: cli.pkg }).notify()

const run = () => {
  del(path.resolve(process.cwd(), 'git/index.lock'))
    .then(file => {
      if (file[0]) {
        return shoutSuccess('`index.lock` deleted.')
      }

      shoutError('`index.lock` does not exist.')
    })
    .catch(err => shoutError(err))
}

run()
