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


## Related

- [git-synced](https://github.com/bukinoshita/git-synced) — 🎐 Keep a fork up to date
- [repo-exist](https://github.com/bukinoshita/repo-exist) — Checks if GitHub repository exist
- [gopn](https://github.com/bukinoshita/gopn) — Open GitHub repositories
- [is-github-repo](https://github.com/bukinoshita/is-github-repo) — Checks if string is a git repository
- [git-url-prettify](https://github.com/bukinoshita/git-url-prettify) — Prettify git url
- [git-url-uglify](https://github.com/bukinoshita/git-url-uglify) — Uglify git url

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
