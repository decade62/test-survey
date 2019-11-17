var step; //current step -- initialized with load() at main code
//step1
var name, email;
//step2
var age, aboutme;
//step3
var address, gender;
//step4
var favbook, favcolors;


//HTML code that is added to the body.
//Including it here helps minimize the code additions to the host site
//CSS to add to the header
const css = `
body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
`;


//HTML scripts to append to body
const modal1 = `
<!-- The Modal -->
<div id="modal1" class="modal">
<form onSubmit="next_step();">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Step 1</h2>
    </div>
    <div class="modal-body">
      <p>Please provide basic information about you:</p>
	  <span>Name: </span>
      <input name="name" type="text" required>
	  <br><br>
	  <span>Email: </span>
	  <input name="email" type="email" required>
	  <p> </p>
    </div>
    <div class="modal-footer">
      <input type="submit" value="Next Step">
    </div>
  </div>
</form>
</div>`;

let gen_options='<option value="Under 18">Under 18</option>'+"\n";
for(i=18; i<=60; i++) gen_options+='<option value="'+i+'">'+i+'</option>'+"\n";
gen_options+='<option value="Over 60">Over 60</option>'+"\n";

const modal2 = `
<!-- The Modal -->
<div id="modal2" class="modal">
<form onSubmit="next_step();">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Step 2</h2>
    </div>
    <div class="modal-body">
      <p>Please provide basic information about you:</p>
      <span>Age: </span>
      <select name="age" required>
		`+ gen_options +`
	  </select>
	  <br><br>
	  <span>About me: </span>
	  <br>
	  <textarea name="aboutme" required></textarea>
    </div>
    <div class="modal-footer">
	  <input type="button" value="Previous Step" onclick="prev_step();">
      <input type="submit" value="Next Step">
    </div>
  </div>
</form>
</div>`;


const modal3 = `
<!-- The Modal -->
<div id="modal3" class="modal">
<form onSubmit="next_step();">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Step 3</h2>
    </div>
    <div class="modal-body">
      <p>Please provide any other information you would like to share (optional):</p>
	  <p>Address:</p>
      <input name="address" type="text">
	  <br>
	  <p>Gender:</p>
	  <input type="radio" name="male" value="male"> Male<br>
  	  <input type="radio" name="female" value="female"> Female<br>
 	  <input type="radio" name="other" value="other"> Other<br>  
	  <p> </p>
    </div>
    <div class="modal-footer">
	  <input type="button" value="Previous Step" onclick="prev_step();">
      <input type="submit" value="Next Step">
    </div>
  </div>
</form>
</div>`;

const modal4 = `
<!-- The Modal -->
<div id="modal4" class="modal">
<form onSubmit="next_step();">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Step 4</h2>
    </div>
    <div class="modal-body">
      <p>Please provide any other information you would like to share (optional):</p>
	  <p>Favourite book:</p>
      <input name="favbook" type="text">
	  <br>
	  <p>Favourite colours:</p>
	  <input type="checkbox" name="red" value="red">Red<br>
      <input type="checkbox" name="blue" value="blue">Blue<br>
      <input type="checkbox" name="green" value="green">Green<br><br>
    </div>
    <div class="modal-footer">
	  <input type="button" value="Previous Step" onclick="prev_step();">
      <input type="submit" value="Complete Survey">
    </div>
  </div>
</form>
</div>`;


const results_html = `
<table name="results" width="230" border="1" align="center">
	  <caption>
	    Survey Data
      </caption>
	  <tbody>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
	    <tr>
	      <th scope="row"></th>
	      <th scope="row"></th>
        </tr>
      </tbody>
    </table>`;



//AUXILIARY FUNCTIONS ///////////////////////////////////////////////////
function getVl(n) { return document.getElementsByName(n)[0].value; }

function getEl(n) { return document.getElementsByName(n)[0]; }


//HTML5 localStorage feature detection
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

//sets a cookie
function setCookie(cname, cvalue) {
	//days until cookie expires -- default: 5 days
	const exdays = 5;
	var d = new Date();
  	d.setTime(d.getTime() + (exdays*24*60*60*1000));
  	var expires = "expires="+ d.toUTCString();
  	document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires;
}

//returns the value of cookie as string
function getCookie(cname) {
  	var name = cname + "=";
  	var decodedCookie = decodeURIComponent(document.cookie);
  	var ca = decodedCookie.split(';');
  	for(var i = 0; i <ca.length; i++) {
    	var c = ca[i];
    	while (c.charAt(0) == ' ') {
      	c = c.substring(1);
		}
    if (c.indexOf(name) == 0) {
      	return c.substring(name.length, c.length);
		}
	}
	return "";
}

//delete cookies for this domain -- cookies names' must be provided
function removeCookies() {
	for (var i = 0; i < arguments.length; i++) {
		browser.cookies.remove({
    		url: window.location.href,
    		name: arguments[i]
  		});
	}
}

/////////////////////////////////////////////////////////////////////

//Saves the settings  --  Utilizes the saving of survey data
function save() {
	if(step > 4) return 5;
	//use HTML5 local storage
	//alert(step);
	if(supports_html5_storage()) {
		switch(step) {
			case 4:
				//final submission - survey should not reopen
				localStorage["favbook"] = favbook;
				localStorage["favcolors"] = favcolors;
				break;
			case 3:
				localStorage["address"] = address;
				localStorage["gender"] = gender;
				break;
			case 2:
				localStorage["age"] = age;
				localStorage["aboutme"] = aboutme;
				break;
			case 1:
				localStorage["name"] = name;
				//alert(document.getElementsByName("email")[0].value);
				//alert(email);
				localStorage["email"] = email;
				break;
			default:
				//back sto step 0
				//this should not happen
				//alert("An unknown error has occured!");
				//localStorage.clear();
				//return 0;
		}
		localStorage["step"] = step;
	}
	//use cookies to save the data
	else {
		switch(step) {
			case 4:
				//final submission - survey should not reopen
				setCookie('favbook', favbook);
				setCookie('favcolors', favcolors);
				break;
			case 3:
				setCookie("address", address);
				setCookie("gender", gender);
				break;
			case 2:
				setCookie("age", age);
				setCookie("aboutme", aboutme);
				break;
			case 1:
				setCookie("name", name);
				setCookie("email", email);
				break;
			default:
				//this should not happen
				//alert("An unknown error has occured!");
				//removeCookies('favbook', 'favcolors', 'address', 'gender', 'age', 'aboutme', 'name', 'email');
				//return 0;
		}
		setCookie("step", step);
	}
	//return step;
}

//Load any saved variables and determine the step number
function load() {
	let s;
	//use HTML5 local storage
	if(supports_html5_storage()) {
		s = parseInt(localStorage["step"]);
		switch(s) {
			case 4:
				//final submission - survey should not reopen
				favbook = localStorage["favbook"];
				favcolors = localStorage["favcolors"];
			case 3:
				address = localStorage["address"];
				gender = localStorage["gender"];
			case 2:
				age = localStorage["age"];
				aboutme = localStorage["aboutme"];
			case 1:
				name = localStorage["name"];
				email = localStorage["email"];
				break;
			default:
				//step 0 - no input submitted
				return 0;
		}
	}
	//use cookies to load the data
	else {
		s = parseInt(getCookie("step"));
		switch(s) {
			case 4:
				//final submission - survey should not reopen
				favbook = getCookie("favbook");
				favcolors = getCookie("favcolors");
			case 3:
				address = getCookie("address");
				gender = getCookie("gender");
			case 2:
				age = getCookie("age");
				aboutme = getCookie("aboutme");
			case 1:
				name = getCookie("name");
				email = getCookie("email");
				break;
			default:
				//step 0 - no input submitted
				return 0;
		}
	}
	return s;
}

//Load the required css and html for the survey
function loadFoundation() {
	//Load the CSS to the page
	var style = this.document.createElement('style');
	style.innerHTML = css;
	document.head.appendChild(style);
	
	//Load the modals
	document.body.innerHTML += modal1 + modal2 + modal3 + modal4;
	
	//load the data to modals
	switch(step) {
		case 4:
			getEl('favbook').value = favbook;
			if(favcolors.includes('red')) getEl('red').checked = true;
			if(favcolors.includes('green')) getEl('green').checked = true;
			if(favcolors.includes('blue')) getEl('blue').checked = true;
		case 3:
			getEl('address').value = address;
			if(gender == 'male') getEl('male').checked = true;
			else if(gender == 'female') getEl('female').checked = true;
			else if(gender == 'other') getEl('other').checked = true;
		case 2:
			getEl('age').value = age;
			getEl('aboutme').value = aboutme;
		case 1:
			getEl('name').value = name;
			getEl('email').value = email;
			break;
		default:
			//just started the survey
	}
}



/////////// SURVEY NAVIGATION //////////////////////////////////////////////
//continues to the next step
function next_step() {
	//just to prevent submission
	event.preventDefault();
	//true means it comes as next step
	popup(true);
}

//reverts to the previous step
function prev_step() {
	//close the active modal
	document.getElementById("modal"+parseInt(step+1)).style.display = 'none';
	step--;
	save();
	popup();
}


//Utilizing of popup -- uses optional argument
function popup(comes_as_next_step = false) {
	//if called as a result of next step submission, save
	if(comes_as_next_step) {
		step++;
		var active_modal = document.getElementById("modal"+step);
		switch(step) {
			case 1:
				name = getVl('name');
				//alert(getVl('email'));
				email = getVl('email');
				break;
			case 2:
				age = getVl('age');
				aboutme = getVl('aboutme');
				break;
			case 3:
				address = getVl('address');
				if(getEl('male').checked) gender = 'male';
				else if(getEl('female').checked) gender = 'female';
				else gender = (getEl('other').checked)?'other':'';
				break;
			case 4:
				favbook = getVl('favbook');
				favcolors = ((getEl('red').checked)?"red ":"") + ((getEl('green').checked)?"green ":"") + ((getEl('blue').checked)?"blue":"");
				break;
			default:
				//ERROR CODE HERE
		}
		//Hide active modal before displaying the next one
		active_modal.style.display = 'none';
		//Save environment variables to local storage or cookies
		save();
		if(step === 4) {
			results();
			return;
		}
	}
	
	// Get the current modal
	var modal = document.getElementById("modal"+parseInt(step+1));

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	//open the modal 
  		modal.style.display = "block";

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
  		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
	  	}
	}
	
	//On submission for the next step close the modal and move to the next
	
}

//Loads and generates results
function results() {
	//hide modal if the user just finished the survey
	let active_modal = document.getElementById("modal"+step);
	if(active_modal != null) active_modal.style.display = 'none';
	//generate the results
	document.body.innerHTML += results_html;
	let table = getEl('results').getElementsByTagName('th');
	table[0].innerHTML = 'Name';
	table[1].innerHTML = name;
	table[2].innerHTML = 'E-mail';
	table[3].innerHTML = email;
	table[4].innerHTML = 'Age';
	table[5].innerHTML = age;
	table[6].innerHTML = 'About me';
	table[7].innerHTML = aboutme;
	table[8].innerHTML = 'Address';
	table[9].innerHTML = address;
	table[10].innerHTML = 'Gender';
	table[11].innerHTML = gender;
	table[12].innerHTML = 'Favourite book';
	table[13].innerHTML = favbook;
	table[14].innerHTML = 'Favourite colours';
	table[15].innerHTML = favcolors;
}

function initiateRun() {
	loadFoundation();
	popup();
}
///////////////////////////////////////////////////////////////////////

//MAIN CODE STARTS HERE
step = load();
if(step === 4) {
	//alert('Thank you for completing the survey!');
	results();
}
else setTimeout(function(){ window.onload = initiateRun(); }, 2000);


