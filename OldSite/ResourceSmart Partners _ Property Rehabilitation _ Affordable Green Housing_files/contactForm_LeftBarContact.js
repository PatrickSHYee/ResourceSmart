

$(function() {
	$(".lowerformsubmitfield_21455833").click(function() {
		var formHeight = $("#page2_21455833").height();
		var theFormID = this.id.replace("submit_","");
		var data = $("#" + theFormID).serialize();
		var validate = eval("validate_" + theFormID + "()");
		if(validate) {
			$.post("/ajax/ajax_dynamicForms.cfm", { data: data },
				function(response){
					
					$("#page2_21455833").css("height",formHeight + "px").html(response);
					
					var t = setTimeout("parent.$('#leavemessagenav').hide()",3000);
					
			}, "html");
		}
	});
	var refURL = "";
	refURL = refURL.toLowerCase();
	var refType = "Organic";
	if (refURL.search(/\/(aclk)/) >= 0) {
		refType = "Google PPC";
	} else if (refURL.search(/(dlvr\.it)/) >= 0) {
		refType = "RSS Fed Social Media";
	} else if (refURL.search(/(facebook)/) >= 0) {
		refType = "Facebook";
	} else if(refURL.search(/(plus\.google)/) >= 0) {
		refType = "Google Plus";
	} else if(refURL.search(/\/(t\.co)/) >= 0) {
		refType = "Twitter";
	} else if(refURL.search(/(youtube)/) >= 0) {
		refType = "YouTube";
	} else if(refURL.search(/\/(www\.google\.com)/) >= 0) {
		refType = "Google";
	}
	$(".dynamicForm").append('<input type="hidden" name="Referrer" value="' + refType + '" />');
});
function validate_contactForm_21455833() {
	
	return true;
}

      document.write('<style type="text/css">#page2_21455833 { position: relative; width: 99%; top: 0; left: 0; }#page2_21455833 label { display: block; width: 99%; margin-top: 5px; font: 10px Verdana, Geneva, sans-serif; }h3 { font-size: 14px; font-weight: bold; }</style><div data-role="page" id="page2_21455833"><div data-role="content">    <form class="dynamicForm" id="contactForm_21455833">    <input type="hidden" name="formName" id="formName_21455833" value="contactForm" />    <input type="hidden" name="footermenuid" id="footermenuid_contact_21455833" value="283" />    <input type="hidden" name="prospectID" id="prospectID_contact_21455833" value="100315" />		    <div data-role="fieldcontain">    <label for="firstName">Name</label>    <input type="text" name="firstName" id="lf_firstName_21455833" class="lowerformtextfield" style="width: 99%;" />	    </div>        <div data-role="fieldcontain">    <label for="homePhone">Phone</label>    <input type="text" name="homePhone" id="lf_homePhone_21455833" class="lowerformtextfield" style="width: 99%;" />	    </div>        <div data-role="fieldcontain">    <label for="email">Email</label>    <input type="text" name="email" id="lf_email_21455833" class="lowerformtextfield" style="width: 99%;" />	    </div>        <div data-role="fieldcontain">    <label for="address">Address:</label>    <input type="text" name="address" id="lf_address_21455833" class="lowerformtextfield" style="width: 99%;" />	    </div>        <div data-role="fieldcontain">    <label for="city"># of Units:</label>    <input type="text" name="city" id="lf_city_21455833" class="lowerformtextfield" style="width: 99%;" />	    </div>        <div data-role="fieldcontain">    <label for="state">Age of property:</label>    <input type="text" name="state" id="lf_state_21455833" class="lowerformtextfield" style="width: 99%;" />	    </div>        <div data-role="fieldcontain">    <label for="message">Message Details</label>    <textarea name="message" id="lf_message_21455833"  style="width: 98%; height: 80px;"></textarea>    </div>        <div data-role="fieldcontain">    <input type="button" name="submitContactForm" id="submit_contactForm_21455833" value="Submit" class="lowerformsubmitfield_21455833" />    </div>  </form></div><br /><br /></div>');
      
