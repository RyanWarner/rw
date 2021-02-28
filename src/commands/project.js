const {Command, flags} = require('@oclif/command')

class ProjectCommand extends Command {
  async run() {
    const {flags} = this.parse(ProjectCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/project.js`)
  }
}

ProjectCommand.description = `Create itermocil config and bash alias for starting a project's dev environment.`

ProjectCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ProjectCommand
