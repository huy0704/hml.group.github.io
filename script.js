const btn = document.querySelectorAll("a,button")
// console.log(btn)
var giohang = new Array ()
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src   //ảnh
        var productName = product.querySelector("b").innerText  //tên sp
        var productPrice = product.querySelector("span").innerText //giá
        // var productAmount = product.querySelector("input").value //số lượng
        addcart(productPrice,productImg,productName)
        var sp = new Array(productImg,productName,productPrice);//,productAmount);

            giohang.push(sp);

            console.log(giohang);
            showcountsp();

    }})
})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".NameT")
        if(productT[i].innerHTML== productName) {
            alert("Sản Phẩm của bạn đã có trong giỏ hàng")   
            return 
        }
        }
    var trcontent = '<tr><td style="display:flex;align-items: center;" ><img style="width:70px;" src="'+productImg+'" alt=""><span class="NameT">'+productName+'</span></td><td><p><span class="Price">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;"type="number" min="1" max="10" value="1"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}
function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}
//------------------------totalPrice-----------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    // console.log(cartItem)
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".Price").innerText
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    // console.log(carttotalA)
    inputchange()
}
//------------------------Delete cart-----------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    var carttotalA = document.querySelector(".price-total span")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()      
            carttotal()     
        })
        }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    var carttotalA = document.querySelector(".price-total span")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal() 
        })
        }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".Cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".Cart").style.right = "-100%"
})


