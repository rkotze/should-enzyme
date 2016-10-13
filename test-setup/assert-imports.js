var fs = require('fs'),
colors = require('colors'),
assertPaths = [],
paths = fs.readdirSync('src/assertions/'),
errorLog = [];

paths.forEach(function(path) {
  if(!path.includes('spec') && !path.includes('assertion-builder')){
    assertPaths.push(path.replace('.js', ''));
  }
});

fs.readFile('src/index.js', 'utf8', function(err, indexData){
  if(err){
    console.log(err);
  }

  assertPaths.forEach(function(assertName){
    if(!indexData.includes(assertName)){
      errorLog.push('src/assertions/' + assertName + '.js');
    }
  });

  if(errorLog.length){
    console.log(colors.red('Assertion not imported into "src/index.js": %s'), errorLog);

    process.exit(1);
  }
});
