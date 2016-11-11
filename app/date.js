var betterDate = Date();

betterDate = betterDate.split(' ');
for (var i =0; i < 2; i++) {
  betterDate.pop();
}
console.log(betterDate.join(' '));
