$(document).ready(function(){
	    $("#submitpass").click(function(){
	    	var temp = $('#passinput').val()
	    	if (temp = 'australia'){
	    		window.location.href = 'index.html'
	    		localStorage.setItem('done', 'true')
	    	} else {
	    		localStorage.setItem('done', 'false')
	    	}
	        // $("#loginModal").modal();
	    });
	});