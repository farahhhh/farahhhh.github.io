firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    $(".login-cover").hide();

     var dialog = document.querySelector('#loginDialog');

    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();
     window.location.replace("index.html");

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
			alert("Tolong masukkan email");
		}
		else if(password <4){
			alert("Tolong masukkan kata laluan");
		}

		if(email !="" && password != ""){

			$("#loginProgress").show();
			$("#loginBtn").hide();

			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){

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
		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.	
		  alert(error.message);

		});

			$("#loginProgress").hide();
			$("#loginBtn").show();

			localStorage.setItem("totalCart",0);
			localStorage.setItem("totalBil",0);

			window.location.replace("login.html");	
	});



/*COMMENT END*/