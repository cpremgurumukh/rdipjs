function Function(clickedId) {
    document.calc.result.value+=clickedId;
}
function Clear() {
    document.calc.result.value="";
}
function equal() {
    try{
    var inp=eval(document.calc.result.value);
    document.calc.result.value=inp;
    }catch(err){
            document.calc.result.value="error";
    }
}
function sqrt(){
  var inputNum1=document.calc.result.value;
  var result = Math.sqrt(inputNum1);
  document.calc.result.value = result;
return result;
}
function absolute()
{
var inputNum1=document.calc.result.value;
var result = Math.abs(inputNum1);
document.calc.result.value = result;
return result;
}
function add()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)+(inputNum2);
document.calc.result.value = result;
return result;
}
function sub()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)-(inputNum2);
document.calc.result.value = result;
return result;
}
function div()
{
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)/(inputNum2);
document.calc.result.value = result;
return result;
}
function percentile(){
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)%(inputNum2);
document.calc.result.value = result;
return result;
}
function mul(){
var inputNum1=document.calc.result.value;
var inputNum2=document.calc.result.value;
var result = (inputNum1)*(inputNum2);
document.calc.result.value = result;
return result;
}
function validate()
{
	var text=document.getElementById("text1").value;
	var regx=/^[7-9][0-9]{9}$/;
	if(regx.test(text))
	{
		document.getElementById("lb1text").innerHTML="Vaild";
		document.getElementById("lb1text").style.visibility="visible";
		document.getElementById("lb1text").style.color="green";
	}
	else
	{
		document.getElementById("lb1text").innerHTML="InVaild";
		document.getElementById("lb1text").style.visibility="visible";
		document.getElementById("lb1text").style.color="red";
		alert("enter valid phone number");	
	}
}
function validate1()
{
	var text=document.getElementById("text2").value;
	var regx=/^([^0-9]{1})([a-zA-Z0-9\-])+$/;
	if(regx.test(text))
	{
		document.getElementById("lb2text").innerHTML="Vaild";
		document.getElementById("lb2text").style.visibility="visible";
		document.getElementById("lb2text").style.color="green";
	}
	else
	{
		document.getElementById("lb2text").innerHTML="InVaild";
		document.getElementById("lb2text").style.visibility="visible";
		document.getElementById("lb2text").style.color="red";
		alert("enter valid name");	
	}
}
function validate2()
{
	var text=document.getElementById("text3").value;
	var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(regx.test(text))
	{
		document.getElementById("lb3text").innerHTML="Vaild";
		document.getElementById("lb3text").style.visibility="visible";
		document.getElementById("lb3text").style.color="green";
	}
	else
	{
		document.getElementById("lb3text").innerHTML="InVaild";
		document.getElementById("lb3text").style.visibility="visible";
		document.getElementById("lb3text").style.color="red";
		alert("enter valid email id");	
	}
}
function palindrome() 
{
	var str=document.getElementById("text2").value;
	var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  var result=(reverseStr === lowRegStr);
  return str+" "+result;
}
function anagram()
{
	var sorted1=document.getElementById("text").value;
	var sorted2=document.getElementById("text1").value;
	var sorted3 = sorted1.toLowerCase().split('').sort().join('').trim();
	var sorted4 = sorted2.toLowerCase().split('').sort().join('').trim();
	var result=(sorted3===sorted4);
	return sorted1+" "+sorted2+" "+result;
}
function gen1()
{
	  var a= Math.floor(Math.random() * (1000));
	  document.getElementById('g1').value=a;
}
function gen2()
{
	  var b= Math.floor(Math.random() * (1000));
	  document.getElementById('g2').value=b;
}
function main()
	{
		var a=document.getElementById('g1').value;
		var b=document.getElementById('g2').value;
		var c=a%3;
		var d=b%3;
		if(c==d){
			document.write("TIE");
		}
		else if(c==0 && d==1){
			document.write("Human Survives");
		}
		else if(c==0 && d==2){
			document.write("Human dies");
		}
		else if(c==1 && d==2){
			document.write("Cockroach Survives");
		}
	}
	
