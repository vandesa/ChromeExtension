
function clickHandler(){
if(document.getElementById("J").value==""){alert("Please enter into the left column a list of IDs on 15 chars");return;}var y=document.getElementById("J").value.split("\r").join("").split("\n");var z=new Array();for(var x=0;x<y.length;x++){if(y[x].length==15){var s="";for(var i=0;i<3; i++){var f=0;for(var j=0;j<5;j++){var c=y[x].charAt(i*5+j);if(c>="A" && c<="Z")f+=1<<j;}s+="ABCDEFGHIJKLMNOPQRSTUVWXYZ012345".charAt(f);}z.push(y[x]+s);}else{alert("Error : "+y[x]+" has not a length of 15 characters"+y[x].length);return;}}document.getElementById("L").value=z.join("\r\n");
}
	
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});