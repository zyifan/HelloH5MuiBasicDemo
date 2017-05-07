function open(url,id){
	mui.openWindow({
	    url:url,
	    id:id,
	    styles:{
	      top:opt.top,//新页面顶部位置
	      bottom:opt.bottom//新页面底部位置
	    }
	})
}
