var index = 1  ;
changeImage = function()  {
    var  imgs = ["img/banner1.jpg","img/banner2.jpg" ,"img/banner3.jpg" , "img/banner4.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index==4) {
        index = 0;
    }
}
setInterval(changeImage,5000);