function p1()
	{
		var r1,v1,rl1,i1;		
r1=parseFloat(document.getElementById('r1').value);
v1=parseFloat(document.getElementById('v1').value);
rl1=parseFloat(document.getElementById('rl1').value);
i1=(v1/(r1+rl1));
document.getElementById('A').value=i1;
document.getElementById('A1').value=i1;
perform_meter1();
	}
	function changeImage1()
{
 document.getElementById("img1").src = "./images/comp1.jpg";
 document.getElementById('rl2').style.display = "none";
 document.getElementById('v1').style.display = "block";
 document.getElementById('V').style.display = "none";
 document.getElementById('A').style.display = "block";
 document.getElementById('r1').style.display = "block";
 //document.getElementById('div1').style.display = "none";
 document.getElementById('rl1').style.display = "block";
 document.getElementById('R').style.display = "none";
 document.getElementById('F').style.display = "none";
 document.getElementById('C').style.display = "none";
 document.getElementById('G').style.display = "none";
 document.getElementById('H').style.display = "none";
 document.getElementById('I').style.display = "none";
 }
	function p2()
	{
		var r1,v1,rl1,rl2,i1;		
r1=parseFloat(document.getElementById('r1').value);
v1=parseFloat(document.getElementById('v1').value);
rl1=parseFloat(document.getElementById('rl1').value);
rl2=parseFloat(document.getElementById('rl2').value);
i1=(v1/(r1+rl1+rl2));
document.getElementById('A').value=i1;
document.getElementById('vth1').value=i1;

	}
	function changeImage2()
{
 document.getElementById('G').value=document.getElementById('r1').value;
 document.getElementById('H').value=document.getElementById('rl1').value;
 document.getElementById('I').value=document.getElementById('v1').value;
 document.getElementById("img1").src = "./images/comp2.jpg";
 document.getElementById('rl2').style.display = "block";
 document.getElementById('v1').style.display = "block";
 document.getElementById('v1').setAttribute('readonly', 'readonly');
 document.getElementById('V').style.display = "none";
 document.getElementById('A').style.display = "block";
 document.getElementById('r1').style.display = "block";
 document.getElementById('r1').setAttribute('readonly', 'readonly');
 //document.getElementById('div1').style.display = "none";
 document.getElementById('rl1').style.display = "block";
 document.getElementById('rl1').setAttribute('readonly', 'readonly');
 document.getElementById('R').style.display = "none";
 document.getElementById('F').style.display = "none";
 document.getElementById('C').style.display = "none";
 document.getElementById('G').style.display = "none";
 document.getElementById('H').style.display = "none";
 document.getElementById('I').style.display = "none";
}
	
	function checkValue() {
	var rl2_value = document.getElementById('rl2').value;
	var rl1_value = document.getElementById('rl1').value;
	var max_input = (rl1_value * 2)/ 100;
	if(rl2_value > max_input) {
		alert("You can enter maximum value :  2% of RL = " +max_input+""); 
		document.getElementById('rl2').value = max_input;
	} 
}

function changeImage3()
{
 document.getElementById('r1').style.display = "block";
 document.getElementById('r1').setAttribute('readonly', 'readonly');
 document.getElementById("img1").src = "./images/comp3.jpg";
 document.getElementById('rl2').style.display = "none";
 document.getElementById('v1').style.display = "none";
 document.getElementById('V').style.display = "block";
 document.getElementById('A').style.display = "none";
 //document.getElementById('div1').style.display = "none";
 document.getElementById('rl1').style.display = "none";
 document.getElementById('R').style.display = "block";
 document.getElementById('F').style.display = "block";
 document.getElementById('C').style.display = "none";
 document.getElementById('G').style.display = "none";
 document.getElementById('H').style.display = "none";
 document.getElementById('I').style.display = "none";
}
var count=0;
function p3()
{
	var r1,v1,rl1,rl2,R1,A,C,I,E,A1,vth1,A12,rth1,v22;
	rl1=parseFloat(document.getElementById('rl1').value);
	rl2=parseFloat(document.getElementById('rl2').value);
	A=parseFloat(document.getElementById('A').value);
	A1=parseFloat(document.getElementById('A1').value);
	vth1=parseFloat(document.getElementById('vth1').value);
	C=parseFloat(document.getElementById('C').value);
	R1=rl1+rl2;
	I=A1-vth1;
	E=A1*rl2;
	document.getElementById('R').value=R1;
	rth1=document.getElementById('rth1').value=R1;
	document.getElementById('V').value=I;
	A12=document.getElementById('A12').value=I;
	v22=document.getElementById('v22').value=E;
	document.getElementById('F').value=E;
	
////Additional code by Piyali//////////////
document.getElementById('v1').removeAttribute('readonly');
document.getElementById('r1').removeAttribute('readonly');
document.getElementById('rl1').removeAttribute('readonly');
//////////////////////////////////////////////////////////////////

	count=count+1;
			
			if(count==1)
			{document.getElementById('tr1').value=A1; document.getElementById('tr2').value=vth1; document.getElementById('tr3').value=A12; document.getElementById('tr4').value=rth1;document.getElementById('tr5').value=v22;}
			else if(count==2)
			{document.getElementById('tr10').value=A1; document.getElementById('tr20').value=vth1; document.getElementById('tr30').value=A12; document.getElementById('tr40').value=rth1;document.getElementById('tr50').value=v22;}
			else if(count==3)
			{document.getElementById('tr11').value=A1; document.getElementById('tr21').value=vth1; document.getElementById('tr31').value=A12; document.getElementById('tr41').value=rth1;document.getElementById('tr51').value=v22;}
			else if(count==4)
			{document.getElementById('tr12').value=A1; document.getElementById('tr22').value=vth1; document.getElementById('tr32').value=A12; document.getElementById('tr42').value=rth1;document.getElementById('tr52').value=v22;}
			else if(count==5)
			{document.getElementById('tr13').value=A1; document.getElementById('tr23').value=vth1; document.getElementById('tr33').value=A12; document.getElementById('tr43').value=rth1;document.getElementById('tr53').value=v22;}
			else{alert("The observation table is full. Refresh the page to continue");
			}
}