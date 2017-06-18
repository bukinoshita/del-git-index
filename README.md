# del-git-index [![Build Status](https://travis-ci.org/bukinoshita/del-git-index.svg?branch=master)](https://travis-ci.org/bukinoshita/del-git-index)

> Safely delete index.lock of the current project

## Install
```bash
$ npm install -g del-git-index
```

## Usage
```bash
$ git-index --help

  Usage:
    $ git-index        Deletes index.lock of the current project

  Options:
    -h, --help         Show help options
    -v, --version      Show version
```

## Why

Accidentally deleted the entire git history by running `rm -rf .git` instead of running `rm -rf .git/index.lock`. So I don't have to worry anymore with pressing `enter` key by mistake.

# Demo

![](https://github.com/bukinoshita/del-git-index/blob/master/demo.gif)

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
