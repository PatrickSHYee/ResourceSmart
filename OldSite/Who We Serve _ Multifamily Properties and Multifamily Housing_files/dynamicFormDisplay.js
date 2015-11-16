// JavaScript Document
$(function() {
	$(".dynamicFooter_offersForm,.dynamicFooter_contactForm").click(function() {
		var fid = this.id.replace("fid_","");
		if(ismobile) {
			// go to the form page
			window.location.href = "/templates/" + $(this).attr("class") + ".cfm?fid=" + fid;
		} else {
			$.fancybox({
				type: 'ajax',
				href : "/templates/" + $(this).attr("class") + ".cfm?fid=" + fid + "&ajaxopen=1"
				/*maxWidth		: 400,
				maxHeight		: 400,
				width  : '70%',
				height  : '70%',
				autoSize	: false,
				fitToView  : false*/
			});
			return false;
		}
	});
});