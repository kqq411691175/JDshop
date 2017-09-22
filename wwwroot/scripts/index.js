$.get('/words',function(resData){	
	var i;
	for(i=0;i<10;i++){
		$('.picnav1').find('a').eq(i).html(resData.picnav1[i]);
	}
	for(i=0;i<16;i++){
		$('.picnav2').find('a').eq(i).html(resData.picnav2[i]);
	}
	for(i=0;i<68;i++){
		$('.picnav3').find('a').eq(i).html(resData.picnav3[i]);
	}
	for(i=0;i<5;i++){
		$('.phb-list').find('a').eq(i).html(resData.phba[i]);
		$('.JD-P1').eq(i).html(resData.JDP1[i]);
		$('.JD-P2-sp1').eq(i).find('span').html(resData.JDP2sp1[i]);
		$('.JD-P2-sp2').eq(i).find('del').html(resData.JDP2sp2[i]);
		$('.ag-ul li').eq(i).find('a').html(resData.ag[i])
		$('.jdg-ul li').eq(i).find('a').html(resData.jdg[i])
		$('.ayd-ul li').eq(i).find('a').html(resData.ayd[i])
		$('.aydu-ul li').eq(i).find('a').html(resData.aydu[i])
		$('.jdjr-ul li').eq(i).find('a').html(resData.jdjr[i])
		$('.dl2 dd').eq(i).html(resData.dl2[i])
		$('.dl3 dd').eq(i).html(resData.dl3[i])
		$('.dl4 dd').eq(i).html(resData.dl4[i])
	}
	for(i=0;i<8;i++){
		$('.nav-down-ul1').find('li').eq(i).html(resData.navdown1[i]);
	}
	for(i=0;i<9;i++){
		$('.nav-down-ul2').find('li').eq(i).html(resData.navdown2[i]);
	}
	for(i=0;i<46;i++){
		$('.nav-lunbo-list-dd').find('a').eq(i).html(resData.lunbolist[i]);
	}
	for(i=0;i<4;i++){
		$('.right2foot').find('p').eq(i).html(resData.right2foot[i]);
		$('.gjp-ul li').eq(i).find('a').html(resData.gjp[i])
		$('.w3c-ul li').eq(i).find('a').html(resData.w3c[i])
		$('.abb-ul li').eq(i).find('a').html(resData.abb[i])
		$('.ache-ul li').eq(i).find('a').html(resData.ache[i])
		$('.ayx-ul li').eq(i).find('a').html(resData.ayx[i])
		$('.ajk-ul li').eq(i).find('a').html(resData.ajk[i])
		$('.dkhs span').eq(i).html(resData.dkhs[i])
	}
	for(i=0;i<6;i++){
		$('.fxhh-content').eq(i).find('p').html(resData.fxhh[i]);
		$('.phb-contant').eq(i).find('p').html(resData.phb[i]);
		$('.bb-div').eq(i).html(resData.xpzdiv[i]);
		$('.bb-span').eq(i).html(resData.xpzspan[i]);
		$('.aml-ul li').eq(i).find('a').html(resData.aml[i])
		$('.aj-ul li').eq(i).find('a').html(resData.aj[i])
		$('.dl1 dd').eq(i).html(resData.dl1[i])
		$('.dl5 dd').eq(i).html(resData.dl5[i])
	}
	for(i=0;i<2;i++){
		$('.hmzj-contant-p').eq(i).html(resData.hmzj[i]);
	}
	for(i=0;i<11;i++){
		$('.dnsm-ul li').eq(i).find('a').html(resData.dnsm[i])
	}
	for(i=0;i<13;i++){
		$('.ac-ul li').eq(i).find('a').html(resData.ac[i])
	}
	for(i=0;i<3;i++){
		$('.shlx-ul li').eq(i).find('a').html(resData.shlx[i])
	}
	for(i=0;i<7;i++){
		$('.gts-h4').eq(i).html(resData.gtsh[i])
		$('.gts-p').eq(i).html(resData.gtsp[i])
	}
	for(i=0;i<70;i++){
		$('h5').eq(i).html(resData.h5[i])
		$('h6').eq(i).html(resData.h6[i])
	}
	for(i=0;i<35;i++){
		$('.address-table td').eq(i).html(resData.city[i])
	}
})
$.get('/imgsrc',function(resData){
	var i;
	$(".login-nav-down img").prop('src',resData.nav[0]);
	for(i = 0;i<8;i++){
		$('.lunbo-li').eq(i).find('img').prop('src',resData.lunboli[i])
	}
	$('.nav-lunbo-xx').eq(0).find('img').prop('src',resData.lunboli[8])
	$('.nav-lunbo-xx').eq(1).find('img').prop('src',resData.lunboli[9])
	for(i = 0;i<6;i++){
		$('.JD-miaosha-main-content').eq(i).find('img').prop('src',resData.jdmiaosha[i])
		$('.fxhh-content').eq(i).find('img').prop('src',resData.fxhh[i])
		$('.hmzj-contant-aa').eq(i).find('img').prop('src',resData.hmzj[i])
		$('.phb-contant').eq(i).find('img').prop('src',resData.phbsj[i])
		$('.xpz-main-bb').eq(i).find('img').prop('src',resData.xpzbb[i])
		$('.ag-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.aml-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
		$('.jdg-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.gjp-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
		$('.w3c-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.ayd-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
		$('.abb-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.aj-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
		$('.aydu-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.ache-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
		$('.ayx-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.jdjr-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
		$('.shlx-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.ajk-foot a').eq(i).find('img').prop('src',resData.logo[i+6])
	}
	for(i=0;i<4;i++){
		$('.lqzx-contant').eq(i).find('img').prop('src',resData.lqzx[i])
	}
	$('.mme-content img').prop('src',resData.mme[0]);
	$('.xpz-main-aa').find('img').prop('src',resData.xpzaa[0])
	$('.xpz-main-cc').eq(0).find('img').prop('src',resData.xpzcc[0])
	$('.xpz-main-cc').eq(1).find('img').prop('src',resData.xpzcc[1])
	for(i=0;i<8;i++){
		$('.ag-contant td').eq(i).find('img').prop('src',resData.ag[i])
		$('.aml-contant td').eq(i).find('img').prop('src',resData.aml[i])
		$('.jdg-contant td').eq(i).find('img').prop('src',resData.jdg[i])
		$('.gjp-contant td').eq(i).find('img').prop('src',resData.gjp[i])
		$('.w3c-contant td').eq(i).find('img').prop('src',resData.w3c[i])
		$('.ayd-contant td').eq(i).find('img').prop('src',resData.ayd[i])
		$('.abb-contant td').eq(i).find('img').prop('src',resData.abb[i])
		$('.aj-contant td').eq(i).find('img').prop('src',resData.aj[i])
		$('.aydu-contant td').eq(i).find('img').prop('src',resData.aydu[i])
		$('.ache-contant td').eq(i).find('img').prop('src',resData.ache[i])
		$('.ayx-contant td').eq(i).find('img').prop('src',resData.ayx[i])
		$('.jdjr-contant td').eq(i).find('img').prop('src',resData.jdjr[i])
		$('.shlx-contant td').eq(i).find('img').prop('src',resData.shlx[i])
		$('.ajk-contant td').eq(i).find('img').prop('src',resData.ajk[i])
	}
	for(i=0;i<16;i++){
		$('.dnsm-contant td').eq(i).find('img').prop('src',resData.dnsm[i])
	}
	for(i=0;i<15;i++){
		$('.ac-contant td').eq(i).find('img').prop('src',resData.ac[i])
	}
	for(i=0;i<12;i++){
		$('.dnsm-foot a').eq(i).find('img').prop('src',resData.logo[i])
		$('.ac-foot a').eq(i).find('img').prop('src',resData.logo[i])
	}
	for(i=0;i<7;i++){
		$('.gts-main-contant').eq(i).find('img').prop('src',resData.gts[i])
	}
	for(i=0;i<3;i++){
		$('#heng1').find('img').eq(i).prop('src',resData.hengfu[i])
		$('#heng2').find('img').eq(i).prop('src',resData.hengfu[i+3])
		$('#heng3').find('img').eq(i).prop('src',resData.hengfu[i+6])
		$('#heng4').find('img').eq(i).prop('src',resData.hengfu[i+9])
	}
	for(i=0;i<100;i++){
		$('.hmgg-main').eq(i).css('background-image','url('+resData.hmgg[i]+')')
	}
	//排行榜图片轮换
	$('.phb-list a').eq(0).on('mouseover',function(){
		for(i=0;i<6;i++){
			$('.phb-contant').eq(i).find('img').prop('src',resData.phbsj[i])
		}		
	})
	$('.phb-list a').eq(1).on('mouseover',function(){
		for(i=0;i<6;i++){
			$('.phb-contant').eq(i).find('img').prop('src',resData.phbtxd[i])
		}		
	})
	$('.phb-list a').eq(2).on('mouseover',function(){
		for(i=0;i<6;i++){
			$('.phb-contant').eq(i).find('img').prop('src',resData.phbdjd[i])
		}		
	})
	$('.phb-list a').eq(3).on('mouseover',function(){
		for(i=0;i<6;i++){
			$('.phb-contant').eq(i).find('img').prop('src',resData.phbxxsp[i])
		}		
	})
	$('.phb-list a').eq(4).on('mouseover',function(){
		for(i=0;i<6;i++){
			$('.phb-contant').eq(i).find('img').prop('src',resData.phbyxb[i])
		}		
	})
	//视频图片定时
	var j = 0;
	$.sp = function(){
		$('.xpz-main-aa').find('img').prop('src',resData.xpzaa[j]);
		j++;
		if(j>4){
			j = 0;
		}
	}
	setInterval("$.sp()",2000);
	//京东秒杀轮播
	$('.JDms-btn div').eq(0).hover(function(){
		$(this).css('background-color','red').siblings().css('background-color','black')
		
		$('#JDmmc5').prop('src',resData.jdmiaosha[5])
	})
	$('.JDms-btn div').eq(1).hover(function(){
		$(this).css('background-color','red').siblings().css('background-color','black')
		
		$('#JDmmc5').prop('src',resData.jdmiaosha[6])
	})
	//会买专辑轮播
	var k = -6;
	var m = 0;
	$.hmzj = function(){
		$('.hmzj-contant-aa').eq(0).find('img').prop('src',resData.hmzj[k+6])
		$('.hmzj-contant-aa').eq(1).find('img').prop('src',resData.hmzj[k+7])
		$('.hmzj-contant-aa').eq(2).find('img').prop('src',resData.hmzj[k+8])
		$('.hmzj-contant-aa').eq(3).find('img').prop('src',resData.hmzj[k+9])
		$('.hmzj-contant-aa').eq(4).find('img').prop('src',resData.hmzj[k+10])
		$('.hmzj-contant-aa').eq(5).find('img').prop('src',resData.hmzj[k+11])
		k = k + 6;
		if(k>11){
			k = -6;
		}
		$('.hmzj-btn div').eq(m).css('background-color','red').siblings().css('background-color','lightgray')
		m++;
		if(m>2){
			m = 0;
		}
	}
	setInterval("$.hmzj()",2000);
	//京东秒杀轮播2
	var n = 0;
	$('.JDleftbtn').click(function(){
		if(n == 0){
			n = 7;
		}else{
			n = 0;
		}
		$('.JDmiaoshaimg').eq(0).prop('src',resData.jdmiaosha[n])
		$('.JDmiaoshaimg').eq(1).prop('src',resData.jdmiaosha[n+1])
		$('.JDmiaoshaimg').eq(2).prop('src',resData.jdmiaosha[n+2])
		$('.JDmiaoshaimg').eq(3).prop('src',resData.jdmiaosha[n+3])
		$('.JDmiaoshaimg').eq(4).prop('src',resData.jdmiaosha[n+4])
	})
	$('.JDrightbtn').click(function(){
		if(n == 0){
			n = 7;
		}else{
			n = 0;
		}
		$('.JDmiaoshaimg').eq(0).prop('src',resData.jdmiaosha[n])
		$('.JDmiaoshaimg').eq(1).prop('src',resData.jdmiaosha[n+1])
		$('.JDmiaoshaimg').eq(2).prop('src',resData.jdmiaosha[n+2])
		$('.JDmiaoshaimg').eq(3).prop('src',resData.jdmiaosha[n+3])
		$('.JDmiaoshaimg').eq(4).prop('src',resData.jdmiaosha[n+4])
	})
	//爱逛商标轮播
	var q = 0;
	$('.agleftbtn').click(function(){
		if(q == 0){
			q = 6;
		}else{
			q = 0;
		}
		$('.ag-foot img').eq(0).prop('src',resData.logo[q])
		$('.ag-foot img').eq(1).prop('src',resData.logo[q+1])
		$('.ag-foot img').eq(2).prop('src',resData.logo[q+2])
		$('.ag-foot img').eq(3).prop('src',resData.logo[q+3])
		$('.ag-foot img').eq(4).prop('src',resData.logo[q+4])
		$('.ag-foot img').eq(5).prop('src',resData.logo[q+5])
	})
	$('.agrightbtn').click(function(){
		if(q == 0){
			q = 6;
		}else{
			q = 0;
		}
		$('.ag-foot img').eq(0).prop('src',resData.logo[q])
		$('.ag-foot img').eq(1).prop('src',resData.logo[q+1])
		$('.ag-foot img').eq(2).prop('src',resData.logo[q+2])
		$('.ag-foot img').eq(3).prop('src',resData.logo[q+3])
		$('.ag-foot img').eq(4).prop('src',resData.logo[q+4])
		$('.ag-foot img').eq(5).prop('src',resData.logo[q+5])
	})



})


//轮播图列表字体变红
$('.nav-lunbo-list-dd').find('a').each(function(){
	$(this).on('mouseover',function(){
		$(this).css('color','red');
	})
	$(this).on('mouseout',function(){
		$(this).css('color','white');
	})
})


//悬停弹出列表
$('#picnav1').on('mouseover',function(){
	$('#picnav1').css('background-color','white')
	$('.picnav1').show();
})
$('#picnav1').on('mouseout',function(){
	$('#picnav1').css('background-color','lightgray')
	$('.picnav1').hide();
})
$('#picnav2').on('mouseover',function(){
	$('#picnav2').css('background-color','white')
	$('.picnav2').show();
})
$('#picnav2').on('mouseout',function(){
	$('#picnav2').css('background-color','lightgray')
	$('.picnav2').hide();
})
$('#picnav3').on('mouseover',function(){
	$('#picnav3').css('background-color','white')
	$('.picnav3').show();
})
$('#picnav3').on('mouseout',function(){
	$('#picnav3').css('background-color','lightgray')
	$('.picnav3').hide();
})
for(var i=0;i<16;i++){
	$('.nav-lunbo-list-dd dd').eq(i).on('mouseover',function(){
		var j = $(this).index()
		$('.piclunbo').eq(j).show();
	})
	$('.nav-lunbo-list-dd dd').eq(i).on('mouseout',function(){
		var j = $(this).index()
		$('.piclunbo').eq(j).hide();
	})
}
//导航轮播图
var l = 0;
function lunbo(){
	$('.nav-lunbo-lunbo').find('li').eq(l).show();
	$('.nav-lunbo-lunbo').find('li').eq(l).siblings().hide();
	$('.lunbo-li-btn div').eq(l).css('background-color','red')
	$('.lunbo-li-btn div').eq(l).siblings().css('background-color','white')
	l++;
	if(l>7){
		l = 0;
	}
}
var lunboint = setInterval(lunbo,2000);
for(var i=0;i<7;i++){
	$('.lunbo-li-btn div').eq(i).hover(function(){
		//clearInterval(lunboint);
		var j = $(this).index();
		console.log(j)
		$(this).css('background-color','red').siblings().css('background-color','white')
		$('.nav-lunbo-lunbo').find('li').eq(j).show().siblings().hide();
	},function(){
		//clearInterval(lunboint);
		//setInterval(lunbo,2000);
	})
}
//图片偏转
$('.JDmiaoshaimg').hover(function(){
	$(this).finish().animate({
		top: "0"
	},200)
},function(){
	$(this).animate({
		top: "10"
	},200)
})
$('.fxhh-content img').hover(function(){
	$(this).finish().animate({
		left: "85"
	},200)
},function(){
	$(this).animate({
		left: "95"
	},200)
})
$('.lqzx-contant img').hover(function(){
	$(this).finish().animate({
		left: "57"
	},200)
},function(){
	$(this).animate({
		left: "47"
	},200)
})
$('.xpz-main-bb img').hover(function(){
	$(this).finish().animate({
		left: "-10"
	},200)
},function(){
	$(this).animate({
		left: "0"
	},200)
})
$('.xpz-main-cc img').hover(function(){
	$(this).finish().animate({
		left: "-10"
	},200)
},function(){
	$(this).animate({
		left: "0"
	},200)
})
$('.ag-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.aml-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.jdg-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.gjp-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.w3c-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.ayd-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.abb-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.aj-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.aydu-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.ache-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.ayx-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.jdjr-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.shlx-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.ajk-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.dnsm-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.ac-contant img').hover(function(){
	$(this).finish().animate({
		left: '-=10px'
	},200)
},function(){
	$(this).animate({
		left: '+=10px'
	},200)
})
$('.hmgg-main').hover(function(){
	$(this).css('border','1px solid red')
},function(){
	$(this).css('border','none')
})
//倒计时
var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();

		var h = 24 - hour;
		var m = 60 - minute;
		var s = 60 - minute;
		h=h<10?'0'+h:h;
		m=m<10?'0'+m:m;
		s=s<10?'0'+s:s;
		$.xx = function(){
			
			$('#djsh').html(h);
			$('#djsm').html(m);
			$('#djss').html(s);
			if(s == 0){
				s = 59;
				if(m == 0){
					m = 59;
					if( h == 0){
						clearInterval(cc);
					}else{
						h--;
					}					
				}else{
					m--;
				}
			}else{
				s--;
			}
			
			
		}
		
		var cc = setInterval("$.xx()",1000);
		
//滚动监听
$(document).scroll(function(){
	//scrollY == $(document).scrollTop()
//	console.log(scrollY)
	if(scrollY<600){
		$('.headfix').slideUp()
	}else{
		$('.headfix').slideDown()
	}
	if(scrollY<1600){
		$('.left-btn-dl').hide()
	}else{
		$('.left-btn-dl').show()
	}
	
	if(scrollY>1600 && scrollY<2500){
		$('.left-btn-dl dd').eq(0).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')		
	}else if(scrollY>2500 && scrollY<3000){
		$('.left-btn-dl dd').eq(1).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>3000 && scrollY<3700){
		$('.left-btn-dl dd').eq(2).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>3700 && scrollY<4200){
		$('.left-btn-dl dd').eq(3).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>4200 && scrollY<4800){
		$('.left-btn-dl dd').eq(4).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>4800 && scrollY<5400){
		$('.left-btn-dl dd').eq(5).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>5400 && scrollY<5900){
		$('.left-btn-dl dd').eq(6).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>5900 && scrollY<6600){
		$('.left-btn-dl dd').eq(7).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>6600 && scrollY<7100){
		$('.left-btn-dl dd').eq(8).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>7100 && scrollY<8000){
		$('.left-btn-dl dd').eq(9).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}else if(scrollY>8000){
		$('.left-btn-dl dd').eq(10).addClass('leftbtnhover').siblings().removeClass('leftbtnhover')
	}
})

//右边按钮悬停划出
for(var i=0;i<6;i++){
	$('.right-btn-dl1 dd').eq(i).hover(function(){
		$(this).addClass('leftbtnhover');
		$(this).find('div').css('display','block').animate({
			left:-60
		},100)
	},function(){
		$(this).removeClass('leftbtnhover');
		$(this).find('div').animate({
			left:0
		},100).css('display','none')
	})
}
for(var i=0;i<2;i++){
	$('.right-btn-dl2 dd').eq(i).hover(function(){
		$(this).addClass('leftbtnhover');
		$(this).find('div').css('display','block').animate({
			left:-60
		},100)
	},function(){
		$(this).removeClass('leftbtnhover');
		$(this).find('div').animate({
			left:0
		},100).css('display','none')
	})
}
//鼠标移入显示按钮
$('.JD-miaosha-main').on('mouseover',function(){
	$('.JDleftbtn').show()
	$('.JDrightbtn').show()
})
$('.JD-miaosha-main').on('mouseout',function(){
	$('.JDleftbtn').hide()
	$('.JDrightbtn').hide()
})
$('.ag-foot').on('mouseover',function(){
	$('.agleftbtn').show()
	$('.agrightbtn').show()
})
$('.ag-foot').on('mouseout',function(){
	$('.agleftbtn').hide()
	$('.agrightbtn').hide()
})
//点击城市事件
$('.city').mouseover(function(){
	$('.address-table').show()
})
$('.city').mouseout(function(){
	$('.address-table').hide()
})
$('.address-table td').each(function(){
	$(this).click(function(){
		$('#citya').html($(this).html());
	})
})
//点击登录
$('#usernameshow').click(function(){
	location.href = 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dbaidu-pinzhuan%26utm_medium%3Dcpc%26utm_campaign%3Dt_288551095_baidupinzhuan%26utm_term%3D0f3d30c8dba7459bb52f2eb5eba8ac7d_0_4e263fda10d44016a22c08254205665f'
})
//悬停左边按钮变色
$('.left-btn-dl dd').hover(function(){
	$(this).css('background-color','red')
},function(){
	$(this).css('background-color','gray')
})
//悬停显示二维码
$('.erweima').eq(0).hover(function(){
	$('.smjr').eq(0).show()
},function(){
	$('.smjr').eq(0).hide()
})
for(var i=0;i<16;i++){
	$('.erweima').eq(i).hover(function(){
		$(this).parent().find('.smjr').show()
},function(){
	$(this).parent().find('.smjr').hide()
})
}
