var delay=300
var fcontent=new Array()
begintag='<font face="Lucida Console" color="white" "size=3>'
 
fcontent[0]="█████<br>█   █<br>█ █ █<br>█   █<br>█████<br>" 
fcontent[1]="█████<br>█ █ █<br>█   █<br>█   █<br>█████<br>" 
fcontent[2]="█████<br>█   █<br>█ █ █<br>█   █<br>█████<br>"
fcontent[3]="█████<br>█   █<br>█   █<br>█ █ █<br>█████<br>"

closetag='</font>'
var ie4=document.all&&!document.getElementById
var ns4=document.layers
var DOM2=document.getElementById
var index=0
function changecontent(){
if (index>=fcontent.length)
index=0
if (DOM2){
document.getElementById("fscroller").innerHTML=begintag+fcontent[index].replace(/ /g,"&nbsp;")+closetag
}
else if (ie4)
document.all.fscroller.innerHTML=begintag+fcontent[index].replace(/ /g,"&nbsp;")+closetag
else if (ns4){
document.fscrollerns.document.fscrollerns_sub.document.write(begintag+fcontent[index].replace(/ /g,"&nbsp;")+closetag)
document.fscrollerns.document.fscrollerns_sub.document.close()
}
index++
setTimeout("changecontent()",delay)
}
if (ie4||DOM2)
document.write('<div id="fscroller"></div>')
window.onload=changecontent
