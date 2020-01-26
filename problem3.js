function largestPrimeFactor(number) {
  var factor = 2;
  while(number>1)
  {
    if(isPrime(factor))
    {
      while(number%factor==0)
      {
        number/=factor;
      }
    }
    if(number==1)
    {
      break;
    }
    factor++;
  }
  return factor;
}

function isPrime(number)
{
  for(var i=2;i<Math.floor(Math.sqrt(number))+1;i++)
  {
    if(number%i==0)
    {
      return false;
    }
  }
  return true;
}

largestPrimeFactor(600851475143);
