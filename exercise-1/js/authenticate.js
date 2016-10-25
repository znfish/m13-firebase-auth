// JavaScript authentication file
$(function() {

    // Initialize Firebase 
    var config = {
    	apiKey: "AIzaSyDVMwE9FnSqcktn5ukVGF2V28rGF5-w01I",
    	authDomain: "mm13-6a6e3.firebaseapp.com",
    	databaseURL: "https://mm13-6a6e3.firebaseio.com",
    	storageBucket: "mm13-6a6e3.appspot.com",
    	messagingSenderId: "281215829376"
  	};
  	firebase.initializeApp(config);


    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var displayName = $('#display-name').val();


        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndOassword(email, password).then(function(user) {
        });

                // Set display name

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#email').val();
        var password = $('#password').val();

        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function() {
    	event.preventDefault();
    	
    });



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
