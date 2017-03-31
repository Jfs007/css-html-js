/**
 * Created by JetBrains WebStorm.
 * User: sjf
 * Date: 16-6-1
 * Time: 下午11:54
 * To change this template use File | Settings | File Templates.
 */
//刷新定时器，或者使用定时器
//规定此函数第一个参数为要移动的距离
function ResTime(distance,ImgNum,ImgLen,ImgList){
var tid=setInterval((function(){
if(ImgNum<ImgLen-1)
{
    //alert(ImgNum);
    ImgNum++
}
        else{
    ImgNum=0;
}
   goleft(ImgNum*distance,ImgList)

    }),2800);
return tid;
}
function goleft(go,ImgList){
     var dist = parseInt(ImgList.style.left)+go;
    //console.log(dist);
    var tooleft;
    if(dist<0){
      tooleft=false;
      dist=Math.abs(dist);
    }
    else{
        tooleft=true;
    }

     for(var i=0;i<=dist/49;i++)
     {
     (function(n)
     {  console.log(n+"dd");
         var pos=parseInt(ImgList.style.left);//每次运行获取一次
         setTimeout(function(){
                  pos+= (tooleft)? -(n * 49) : (n * 49); //根据toLoeft值指定图片组位置改变
                  console.log(pos);
                  ImgList.style.left = pos + "px";
                },n*12);//时间损耗问题？

     })(i)
     }
}
function calImglen(Wrapper,ImgList){
    var WrapperWidth=Wrapper.offsetWidth;
    var ImgListWidth=ImgList.offsetWidth;
    var ImgLen=Math.ceil(ImgListWidth/WrapperWidth);

    return ImgLen;
}