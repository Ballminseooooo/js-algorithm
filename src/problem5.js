function problem5(money) {
  var answer = [0,0,0,0,0,0,0,0,0];
  const arr = [50000,10000,5000,1000,500,100,50,10,1];
  for (let i=0; i<9; ++i){
    answer[i] += Math.floor(money/arr[i]);
    money %= arr[i];
  }
  return answer;
}

module.exports = problem5;
