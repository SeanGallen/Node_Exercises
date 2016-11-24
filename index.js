function giveMe (flag) {
  var index  = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}

var name = giveMe('--name');
var statement = giveMe('--statement');

if (!name || !statement)
  {
  console.log("Something is wrong.")
  }
else
{
  console.log(`${name} said ${statement}`);
}

