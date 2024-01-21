var firebaseConfig = {
    apiKey: "AIzaSyDHudVgqFGV7xyQ4jCVGvKH6TtGjmHuu1w",
    authDomain: "h1kedangnabit.firebaseapp.com",
    projectId: "h1kedangnabit",
    storageBucket: "h1kedangnabit.appspot.com",
    messagingSenderId: "227185552646",
    appId: "1:227185552646:web:e111dae28c7115f665c287",
    measurementId: "G-ER8RBBZGJ5"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = firebase.auth()
  const database = firebase.database()

  function register(){
    username = document.getElementById('username').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    password2 = document.getElementById('password2').value
    Identityproof = document.getElementById('Identityproof').value

    if(validate_email(email) == false || validate_password(password) == false){
        alert('Email or Password is Incorrect')
        return
    }


    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser
            var database_ref = database.ref()
            var user_data = {
                email : email,
                username : username,
                last_login : Data.now()
            }

            database_red.child('users/' + user.uid).set(user_data)




        alert('User Created')
    })
    .catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
    
  }
  

  function validate_email (email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true){
        return true 
    } else{
        return false
    }
  }
  function validate_password(){
    if(password<6){
        return false
    } else{
            return true
    }
  }

  function validate_password2(){
    if(password == password2){
    return true
    }
   
  else{
    return false
  }
}



