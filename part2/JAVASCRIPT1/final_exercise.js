var flag=1
var first=prompt("First Name?")
var last=prompt("Last Name?")
if(first[0]!==last[0])
{
  flag=0
}
var age=prompt("Age?")
if(age<=20 || age>=30)
{
  flag=0
}
height=prompt("Height(cm)?")
if(height<170)
{
  flag=0
}
pet=prompt("Pet name?")
if(pet!=="Sammy")
{
  flag=0
}

if(flag===1)
{
  console.log("Welcome agaent")
}
else {
  console.log("ehh")
}
