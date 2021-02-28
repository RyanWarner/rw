rw
==

Ryan Warner&#39;s personal CLI tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rw.svg)](https://npmjs.org/package/rw)
[![Downloads/week](https://img.shields.io/npm/dw/rw.svg)](https://npmjs.org/package/rw)
[![License](https://img.shields.io/npm/l/rw.svg)](https://github.com/RyanWarner/rw/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @ryanwarner/cli
$ rw COMMAND
running command...
$ rw (-v|--version|version)
@ryanwarner/cli/0.0.1 darwin-x64 node-v14.13.0
$ rw --help [COMMAND]
USAGE
  $ rw COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rw hello`](#rw-hello)
* [`rw help [COMMAND]`](#rw-help-command)
* [`rw project`](#rw-project)

## `rw hello`

Describe the command here

```
USAGE
  $ rw hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/RyanWarner/rw/blob/v0.0.1/src/commands/hello.js)_

## `rw help [COMMAND]`

display help for rw

```
USAGE
  $ rw help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `rw project`

Create itermocil config and bash alias for starting a project's dev environment.

```
USAGE
  $ rw project

OPTIONS
  -n, --name=name  name to print
```

_See code: [src/commands/project.js](https://github.com/RyanWarner/rw/blob/v0.0.1/src/commands/project.js)_
<!-- commandsstop -->
