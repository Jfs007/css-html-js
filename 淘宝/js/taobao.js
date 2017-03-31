(function(){	
	
	var arrData = [
	  {'id':'01','info':'解读时与最高端的时尚生活品味为伍。','data':'04/03/2010','url':'http://www.china.com'},
	  {'id':'02','info':'TomFord重返秀场 打造女装新阵容。','data':'05/12/2010','url':'http://www.china.com'},
	  {'id':'03','info':'浩荡群星托起中国时装力量 。','data':'04/04/2010','url':'http://www.china.com'},
	  {'id':'04','info':'22位设计名师打造水晶小黑裙 。','data':'05/03/2010','url':'http://www.china.com'},
	  {'id':'05','info':'维多利亚的天使PS之前什么样？。','data':'05/01/2010','url':'http://www.china.com'},
	  {'id':'06','info':'刘雯访谈：真实简单，我是“小蚊 。','data':'05/07/2010','url':'http://www.china.com'}
	  ];
	  var oUl = $(".notice ul");
	  var node='';
	  for(var i=0;i<arrData.length;i++){
		   node +='<li><span class="id">'+arrData[i].id+'</span><span class="info">' + arrData[i].info + '</span><span class="data">' + arrData[i].data + '</span>'
		   +'<a href="'+arrData[i].url+'"></a></li>';
		  }
	  oUl.html(node);
	  var endNum=arrData.length;
	  var timer = null;
	  var iNow=0;
	  var iH = oUl.find('li').height();
	  oUl.css({'height':iH*endNum*2});
	  oUl.append(oUl.html());
	  //一般轮播
	  function doMove(num){	
		  iNow += num;
		  if(Math.abs(iNow)>endNum){
			    oUl.css({'top':0});
				iNow=num;		    
			  }
		  if(iNow > 0){
			  oUl.css({'top':-iH*endNum});
			  iNow=-(endNum-1)
			  }
		   oUl.stop().animate({'top':iH*iNow},1000,"backBoth");
    }
	  function autoPlay(){
		  timer=setInterval(function(){
			     doMove(-1);
			   },2000)
		 }
	  autoPlay();
	  
})();
/*(function(){
	$(".mlbselect li a").mouseover(function(){
		$(this).addClass(" active ").parent().siblings("li").children("a").removeClass(" active ");
	});
	
	var oUl = $(".mlbselect ul");
	var iNow = 1;
	var time = null;
	var oprev = $(".mlbselect .prev");
	var onext = $(".mlbselect .next");
	var owrap = $(".mlbselect .wrap");
	
	
	function move(option){		
		//克隆 无缝轮播
		$(".mlbselect li a").removeClass(" active ")
		var iloca = 44;
		var loca = 0;
		if(option==0){	
		if(oUl.is(":animated")!=true){
		 loca= option*iloca;
		var cli =$(".mlbselect li").last().clone(true).insertBefore(".mlbselect li:first-child")
		oUl.css("left",-iloca+"px").animate({"left":loca+"px"},500,function(){
			$(".mlbselect li").last().remove(); 
		});
		$(".mlbselect li").first().find("a").addClass(" active ");
		}
		}
		else if(option==-1){
		if(oUl.is(":animated")!=true){
		 loca = option*iloca
		var cli =$(".mlbselect li").first().clone(true).insertAfter(".mlbselect li:last-child")  
		oUl.animate({"left":loca+"px"},500,function(){
			oUl.children("li").first().remove()
			 $(".mlbselect ul").css("left",0);
		});
		$(".mlbselect li").first().find("a").addClass(" active ");
										}		
		}		
	};	
	function automove(){
		if(oUl.is(":animated")!=true){
		time=setInterval(function(){move(0)},6000);}
	}
	function contral(element){
		element.hover(
		function(){
		clearInterval(time);
					},
		function(){
		automove();
					}
						)
							}
	automove();
	contral(oprev);	
	contral(onext);
	contral(owrap);
	oprev.click(function(){
		move(-1);
	});	
	onext.click(function(){
		move(0);
	});
	
	
})();*/
//
(function(){
	$(".top-r .downmenu").hover(function(){
		$(this).find(".dorpdown").show()
	},
	function(){
		$(this).find(".dorpdown").hide()
	})
})();
(function(){
	$(".rl li").mouseover(function(){
		$(this).addClass(" active ").siblings("li").removeClass(" active ")
	})
})();
(function(){	
	fntab($(".tabtitle2"),$(".tabcon2"),'click')
	fntab($(".tabtitle3"),$(".tabcon3"),'click')
	fntab($(".tabtitle4"),$(".tabcon4"),'click')
	fntab($(".tabtitle5"),$(".tabcon5"),'click')
	fntab($(".tabtitle6"),$(".tabcon6"),'click')
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
	   
	
		})();

(function(){
	var arr=["输入你想搜索的宝贝","输入你想搜索的商城","输入你想搜索的店铺","输入你想拍卖的商品","输入你想搜的全球购物","输入你想打听的关键字"]
	$(".tabtitle1 li").mouseover(function(){
		$(this).addClass(" active ").siblings("li").removeClass(" active ");
		$(".tabcon1 .seach .text").val("").attr("placeholder",arr[$(this).index()]);
	})
})();

