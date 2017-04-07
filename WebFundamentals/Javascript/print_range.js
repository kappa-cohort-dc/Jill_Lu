function printRange(start, end, skip){
  while(start<end){
  console.log(start);
  start = start + skip;
  }
}
printRange(2,10,2)
