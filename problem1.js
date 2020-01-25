function multiplesOf3and5(number) {
  var i;
  var sum=0;
  for(i=3;i<number;i++)
  {
    if(i%3==0)
    {
      sum += i;
      continue;
    }
    if(i%5==0)
    {
      sum += i;
      continue;
    }
  }
  return sum;
}

multiplesOf3and5(1000);
