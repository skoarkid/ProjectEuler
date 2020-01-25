function multiplesOf3and5(number) {
  var multipOf3 = getMultiples(number,3);
  var multipOf5 = getMultiples(number,5);
  var multipOf15 = getMultiples(number,15);
  
  return sum(multipOf3)*3 + sum(multipOf5)*5 - sum(multipOf15)*15;

}

function getMultiples(number,root)
{
  return (number%root==0) ? Math.floor(number/root) -1 : Math.floor(number/root);
}

function sum(number)
{
  return number*(number+1)/2
}

multiplesOf3and5(1000);
