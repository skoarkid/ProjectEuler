function fiboEvenSum(n) {
  if(n==1)
  {
    return 0;
  }
  var sum = 0;
  var first = 1;
  var next = 2;
  while(n>=2)
  {
    if(next%2==0)
    {
      sum+=next;
    }
    var temp = next;
    next = first + next;
    first = temp;
    n--;
  }
  return sum;
}

fiboEvenSum(10);
