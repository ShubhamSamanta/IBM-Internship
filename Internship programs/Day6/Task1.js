/*Task 1 */
var inp=100;
var op=Even_Odd_Zero(inp);
console.log(op);
function Even_Odd_Zero(arg)
{
    if(arg==0)
    {
        return_arg=0;
    }
    else if(arg%2==0)
    {
        return_arg= "Even";
    }
    else{
        return_arg="Odd";
    }
    return(return_arg);
}


/*Task 1.2 is below*/
var inp = 7;
var op = Even_Odd_Zero(inp);
console.log(op);
function Even_Odd_Zero(arg) {
  var return_arg = 0;
  if (arg == 0) {
    return_arg = 0;
  } else if (arg % 2 == 0) {
    return_arg = "Even";
  } else {
    return_arg = "Odd";
  }
  return return_arg;
}