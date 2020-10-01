require('yargs')
  .scriptName("hands-per-human")
  .usage('$0 <cmd> [args]')
  .command('There are [hands]','hands on a human!', (yargs) => {
    yargs.positional('hands', {
      type: 'number',
      default: 'Cambi',
      describe: 'The amount of hands on a human'
    })
  }, 
  
  function (argv) {
    console.log("Hello!")
    console.log('There are', argv.hands, 'hands on a human!')
  })
  .help()
  .argv

/*
export function numberofhands(yargs:Argv):void{

    // yargs.command paramater #1
    // name the command with no spaces
    // this will be the first parameter we send:
    // format:  node dist/index.js [command]
    // example: node dist/index.js hands-per-human
    'hands-per-human'

    // define the parameters we need for our command
    function(yargs:string){
        return yargs.options({
            
            // format:  node dist/index.js [command] --[parameter] [value]
            amount: {
                type:'number',
                alias: 'a',
                description: 'The amount of hands on a typical human'
            }
        });
    },

    function(args){
        let amountofhands = 2;
        console.log(amountofhands);
    }
}

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();
*/ 