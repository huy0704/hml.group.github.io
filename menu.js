var originHeight = new Array();
var statusToggle = new Array();
var h = 0;
$(document).ready(function(e) {
h = $('.submenu div').height();
for(i=0; i<$('.submenu').size(); i++){originHeight.push($('.submenu:nth-child('+(i+1)+')').height());
statusToggle.push(true);//open
}
});
function toggleMenu(subitem){
for(i=0; i<$('.submenu').size(); i++)
if($('.submenu').get(i)==subitem)
{
if(statusToggle[i]==true){
$(subitem).animate({height:h+'px'}, 300);
statusToggle[i]=false;
}else{
$(subitem).animate({height:originHeight[i]+'px'}, 300);
statusToggle[i]=true;
}
return;
}
}
