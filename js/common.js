//公用函数
	// 格式化日期时间字符串，格式为"YYYY-MM-DD HH:MM:SS"
	var dateToStr=function(d){
		return (d.getFullYear()+"-"+ultZeroize(d.getMonth()+1)+"-"+ultZeroize(d.getDate())+" "+ultZeroize(d.getHours())+":"+ultZeroize(d.getMinutes())+":"+ultZeroize(d.getSeconds()));
	};
	/**
	 * 设置数字的位数
	 * zeroize value with length(default is 2).
	 * @param {Object} v
	 * @param {Number} l
	 * @return {String} 
	 */
	var ultZeroize=function(v,l){
		var z="";
		l=l||2;
		v=String(v);
		for(var i=0;i<l-v.length;i++){
			z+="0";
		}
		return z+v;
	};
	// 格式化时长字符串，格式为"HH:MM:SS"
	var timeToStr=function(ts){
		if(isNaN(ts)){
			return "--:--:--";
		}
		var h=parseInt(ts/3600);
		var m=parseInt((ts%3600)/60);
		var s=parseInt(ts%60);
		return (ultZeroize(h)+":"+ultZeroize(m)+":"+ultZeroize(s));
	};
	
//在底部输入内容函数
	function outPut(el,html){
		var el = mui(el)[0];
		el.innerHTML = html;
	}
	
//打开新页面
function openScan(url){
	mui.openWindow({
		url:url,
		id:url
	})
}
var ws='';
// 处理返回事件
window.back=function(hide){
	if(window.plus){
		ws||(ws=plus.webview.currentWebview());
		if(hide||ws.preate){
			ws.hide('auto');
		}else{
			ws.close('auto');
		}
	}else if(history.length>1){
		history.back();
	}else{
		window.close();
	}
};

window.clicked = function(url){
	mui.openWindow({
		url:url,
		id:url
	})
}
