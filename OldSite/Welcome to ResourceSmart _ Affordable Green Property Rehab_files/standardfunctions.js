// JavaScript Document
function imageSwap(newSrc){
	$("#" + detailgallery).attr("src",newSrc);
}
function viewContact(){
	$('#contactInfo').show();
	$('#cLink').hide();
}
$(function() {
	$('.requestActivation').on("click",function(e) {
		var tid = this.id.replace("request_","");
		$.fx.off = true;
		e.preventDefault();
		$.nyroModalManual({
			url: '/requestActivation.cfm?prospectId='+tid
		});
		return false;
	});
	$("#additionalContactsLink").on("click",function() {
		$(".additionalContacts").toggle();
	});
	function addListing() {
		var theid = replace(this.id,"add_","");
		$.post("/ajax/ajax_addToFavorites.cfm", { prospectId: theid }, 
			function() { 
				$("#add_"+theid).hide();
				$("#remove_"+theid).show();
				$("#viewListIcon_"+theid).show();
				$("#viewListings").show();
			} , "");
	}
	function removeListing() {
		var theid = replace(this.id,"remove_","");
			if(confirm("Are you sure you want to delete from your favorites?")) {
				$.post("/ajax/ajax_removeFromFavorites.cfm", { prospectId: theid }, 
					function(response) { 
						$("#remove_"+theid).hide();
						$("#add_"+theid).show();
						$("#viewListIcon_"+theid).hide();
						if($.trim(response) == "emptyCookie") {
							$("#viewListings").hide();
						}
					} , "");
			}
	}
	$('.addToList').click(addListing);
	$('.removeFromList').click(removeListing);
});