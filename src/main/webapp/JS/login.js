/*require([
  "dojo/parser",
  "dojo/dom",
  "dojo/on",
  "dijit/form/Button",
  "dijit/form/TextBox",
  "dijit/form/ValidationTextBox",
  "dijit/form/DateTextBox",
  "dijit/form/ComboBox",
  "dojo/domReady!"
], function(parser, dom, on) {
 parser.parse();

  var loginBtn = dijit.byId("loginBtn");

  on(loginBtn, "click", function() {
    var name = dijit.byId("name");
    var username = dijit.byId("username");
    var password = dijit.byId("password");
    var dob = dijit.byId("dob");
    var role = dijit.byId("role");
    var message = dom.byId("message");

    var uname = username.get("value");
    var pwd = password.get("value");
 
    var isUsernameValid = /^[A-Z]+$/.test(uname);
    var isPasswordValid = pwd.includes("@");

    if (!username.isValid() || !password.isValid() || !dob.isValid()) {
      message.style.color = "red";
      message.innerHTML = "Please fill all required fields correctly.";
    } else if (!isUsernameValid) {
      message.style.color = "red";
      message.innerHTML = "Username must be in capital letters only.";
    } else if (!isPasswordValid) {
      message.style.color = "red";
      message.innerHTML = "Password must contain '@' symbol.";
    } else {
      message.style.color = "green";
      message.innerHTML = "✔ Login successful!";
      alert("Login successful\n" +
            "Name: " + name.get("value") + "\n" +
            "DOB: " + dob.get("displayedValue") + "\n" +
            "Role: " + role.get("value"));
    }
  });
});*/





require([
  "dojo/parser",
  "dojo/dom",
  "dojo/on",
  "dijit/form/Button",
  "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
  "dijit/form/ComboBox",
  "dijit/form/CheckBox",
  "dijit/Dialog",
  "dojo/domReady!"
], function(parser, dom, on) {
  parser.parse();

  var loginBtn = dijit.byId("loginBtn");
  var helpDialog = dijit.byId("helpDialog"); 

  on(loginBtn, "click", function() {
    var username = dijit.byId("username").get("value");
    var password = dijit.byId("password").get("value");
    var dob = dijit.byId("dob");
    var role = dijit.byId("role");
    var message = dom.byId("message");

    if (username === "ADMIN" && password.includes("@")) {
    // alert.style.color = "green";
      //message.innerHTML = "✔ Login successful!";
  
     alert("✔ Login successful!"  );
     // Redirect after 1 second
     setTimeout(() => {
       window.location.href = "home.html";
     }, 1000);
     
    } else {
      message.style.color = "red";
      message.innerHTML = "Invalid credentials.";
    }
 
       console.log("SUCCESS")
       
     
   
       var helpBtn = dijit.byId("helpBtn");
       on(helpBtn,"click",function(){
	helpDialog.show();
	
	var remember=dijit.byId("rememberMe").get("checked");
	console.log("Remember Me ",remember);
	})
  });
});
