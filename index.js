firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    $(".login-cover").hide();

     var dialog = document.querySelector('#loginDialog');

    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();

  } else {
    // No user is signed in.
    $(".login-cover").show();

    var dialog = document.querySelector('#loginDialog');

    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});



$("#loginBtn").click(
	function(){

		var email = $("#loginEmail").val();
		var password = $("#loginPassword").val();

		if(email < 6 ){
			alert("Please insert email");
		}
		else if(password <4){
			alert("Please insert password");
		}

		if(email !="" && password != ""){

			$("#loginProgress").show();
			$("#loginBtn").hide();

			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){

			$("#loginError").show().text(error.message);

			$("#loginProgress").hide();
			$("#loginBtn").show();

			});


		}
		
	}
);


/* LOGOUT PROCESS */
$("#signOutBtn").click(
	function(){

		firebase.auth().signOut().then(function() {

		}).catch(function(error) {
		  // An error happened.	
		  alert(error.message);

		});

			$("#loginProgress").hide();
			$("#loginBtn").show();
						window.location.replace("login.html");	
	});



/*COMMENT END*/