(function  ($){
	var color="#0000FF";
	$.fn.myfunction=function(){
		this.css({"background-color":color});
		return this;
	}
})(jQuery)