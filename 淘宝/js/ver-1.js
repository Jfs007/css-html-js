
	//准备两组
	function lunbo(lunbo,direction,locabtn,isAl,ti,dirbtn){		
	var time=(ti==null)?2000:ti
	var isAlone=isAl;
	var iNow =0;
	var Oul = lunbo.find('.imglist');	
	var Oli = Oul.children('li');
	var iW =Oli.outerWidth(true);
	var endNum = Oli.length;	
	if(dirbtn!=null){
	var prev= dirbtn.find('.prev');
	var next= dirbtn.find('.next');}
	else{
	var prev=lunbo.find('.prev');
	var next=lunbo.find('.next');
	}
	if(locabtn!=null){
	var aI = locabtn.children();	
	}
	var timer = null;
	var typer=direction;
	var tween =null
	//顺序1
	if(direction=='top'){
	Oli.css({'float':'none'}) 
	Oul.css({'height':iW*endNum*2});
	}
	else{
	Oul.css({'width':iW*endNum*2});
	}
	//顺序2
	Oul.append(Oul.html());	
	//做方向类型判断
	function isDr(direction,num){
		var obj={} ;
		switch(direction){
		case'top':obj.top=num;iW =Oli.outerHeight(true);;
		break;
		case'left':obj.left=num;
		default:obj.left=num;
		}
		return obj;
	}
	isDr(direction,0);
	//主要运动模块 核心
	function Move(option){		
		if(Oul.is(":animated")!=true){
		iNow+=option;
		if(Math.abs(iNow)>endNum){			
			Oul.css(isDr(typer,0));				
			iNow=option;
		}
		if(iNow>0){
			Oul.css(isDr(typer,-iW*endNum));
			iNow=-(endNum-1)
		}		
		Oul.stop().animate(isDr(typer,iW*iNow),1000,tween);}
	}
	//以下是次要的内容，甚至不需要
	//控制定时器的方法
	function contral(ele){
		ele.hover(function(){
			clearInterval(timer);
		},
		function(){
			autoPlay();
		}
	)		
	}
	//自动播放 一般都需要
	function autoPlay(){		  
		  timer=setInterval(function(){
			     Move(-1);  
			     active()  
			   },time);			   
		 }	
	//焦点 焦点图时需要 次要
	function active(){
		if(locabtn!=null){
		aI.removeClass(' active ');
	    var inde=-iNow; 
		if(inde===endNum){		
		inde = 0
		}		
		aI.eq(inde).addClass(' active ');
						}
	}
	//焦点图单幅滚动下的方法 此时需要 次要
	function locat(ele){
		//alert(ele+'之前')
		if(Oul.is(":animated")!=true){
		var inde=-iNow; 
		if(inde===endNum){		
		inde = 0;
		}		
		var clind =ele;
		var op = inde - clind;
		var dir = op>0?1:-1;
		if(op!=0){
		Oli.addClass(' none ');				
		Oli.each(function(index,target){
				if(index==inde||index==clind){
					Oli.eq(index).removeClass(' none ');
					if(op>0){
					Oul.css(isDr(typer,-iW))}
					else{
					Oul.css(isDr(typer,0))	
					}
				}
			})			
		Oul.stop().animate(isDr(typer,'+='+iW*dir),1000,tween,function(){
			Oli.removeClass(' none ');
			Oul.css(isDr(typer,-iW*clind));	
		});		
					}
									}
					}

	if(locabtn!=null){	
	contral(aI);
	aI.click(function(){		
		if(Oul.is(":animated")!=true){
		var _this = $(this).index();		
		_this=_this%(endNum)
		if(isAlone){			
			locat(_this);}
		else{		
		Oul.stop().animate(isDr(typer,-iW*(_this)),1000,tween);}
		iNow=-(_this);
		active();		                           }
		});	 
	}
	active();
	autoPlay();
	contral(prev);
	contral(next);
	contral(Oul);		
	//需要左右切换时需要	
	prev.click(function(){		
		Move(1)		
		active()		
	});
	next.click(function(){		
		Move(-1)	
		active()		
	});		
	}


	
	function fntab(tabLi,tabContent,sEvent){		
		  var oTabLi = tabLi.children();
		  tabContent.hide().eq(0).show();
		  oTabLi.each(function(index){		  	
			    $(this).on(sEvent,function(){
			     oTabLi.removeClass('active')
				 $(this).addClass('active');			 
				 tabContent.removeClass(" block ").hide().eq(index).show();
			  })
		 })
      }	  	

//downmenu
function downm(dorpdown,sEvent){
	var dorpdown = dorpdown;
	//alert(dorpdown)
	//alert(Top)
	dorpdown.each(function(index){ 
	    var Top = $(this).css('height');
	    $(this).find('.downmenu').css({'marginTop':Top});	
	})
	dorpdown.hover(function(){
		$(this).find('.downmenu').show()
	},
	function(){		
		$(this).find('.downmenu').hide()
	})
}
//
(function(){
	var arr=["输入你想搜索的宝贝","输入你想搜索的商城"]
	$(".seachTab a").click(function(){
		$(this).addClass(" active ").siblings("a").removeClass(" active ");
		$(".seachBar .seachText").val("").attr("placeholder",arr[$(this).index()]);
	})
})();


(
function(){
	$('.shadeBox').each(function(index){		
		var _this = $(this);
	_this.find('.section li').children('a').mouseover(function(event){
		//alert('d')
		//console.log('dd')
		_this.find('.section li').children('a').find(".shade").remove()
		_this.find('.section li').children('a').append("<div class='shade'></div>")
		$(this).find(".shade").remove()
		$(this).find('.shade').bind('mouseover',function(event){
		event.preventDefault();
		event.stopPropagation();
		});　
		});
	
	$(this).find('.section').mouseout(function(){
		_this.find('.section li').children('a').find(".shade").remove()
	})
	})
})()
