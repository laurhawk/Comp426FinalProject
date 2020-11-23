
//spots is a spot object from render.js
//import data from "data.js"
var location_spots;

export const renderMainPage = function () {
    const $root = $('#root');

    let mainPage = `<div class="columns">
                    <div class="column">
                    <section class="section">
                        <div class="container">
                            <h2 class="title" style="text-align: center;"> Find a Study Spot </h2>
                        </div>
                        <br>
                        <div id="map"></div>
                        <div> 
                        </div>
                    </section>
                    <section class="section">
                        <div class="container" style="text-align: center;" >
                            <button class="button is-primary is-large submit random" style="background-color: #7BAFD4"> Browse all Spots </button>
                            <button class="button is-primary is-large submit review" style="background-color: #7BAFD4"> Submit a Review </button>
                        </div>
                    <section>
                    </div>
                    </div>`;

    // Pick a spot from the list at random
    //var randomSpot = spots[Math.floor(Math.random() * spots.length)];
    //mainPage += <div class= "column">randomSpot</div>;

$root.append(mainPage);
$root.on("click", ".review", renderReviewForm);
//not sure addDb is the right class i think lauren changed it?
$root.on("click", ".addDB", handleSubmitReviewForm);
//$root.on("click", ".random", renderSpotCard)
//handle login button on index file
$(document).on("click", ".login", renderLoginForm);
//$(document).on("click", "#takeMeHome", renderMainPage);
$(document).on("click", ".search", individualSpot)
//whenever you click search button, needs to root.html a function that returns a new page with 
//the spot data you searched as the parameter

$(document).on("click", ".account", renderAccountDetails);
$(document).on("click", ".edit-account", renderAccountEditForm);
//whenever you click on "Account" button when you log in you are give
//your account details and ability to modify them
}

// Initialize and add the map
export function initMap() {

    const davis = { lat: 35.911326, lng: -79.04805 };
    const ul = { lat: 35.910001, lng: -79.048964 };
    const quad = { lat: 35.911126, lng: -79.050431 };
    const pit = { lat: 35.910229, lng: -79.048575 };
    const lenoir = { lat: 35.910588, lng: -79.048710 };
    const genome = { lat: 35.910588, lng: -79.048710 };
    const sitterson = { lat: 35.907660, lng: -79.050685 };
    const art = { lat: 35.912590, lng: -79.054297 };
    const phillips = { lat: 35.910930, lng: -79.052623 };
    const topo = { lat: 35.912986, lng: -79.055369 };
    const starbucks = { lat: 35.913453, lng: -79.055589 };
    const kenan = { lat: 35.909478, lng: -79.051396 };
    const wilson = { lat: 35.909550, lng: -79.049640 };
    const union = { lat: 35.910366, lng: -79.047844 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: davis,
    });

    const marker = new google.maps.Marker({
        position: davis,
        map: map,
    });

    const marker1 = new google.maps.Marker({
        position: ul,
        map: map,
    });

    const marker2 = new google.maps.Marker({
        position: quad,
        map: map,
    });

    const marker3 = new google.maps.Marker({
        position: pit,
        map: map,
    });

    const marker4 = new google.maps.Marker({
        position: lenoir,
        map: map,
    });

    const marker5 = new google.maps.Marker({
        position: genome,
        map: map,
    });

    const marker6 = new google.maps.Marker({
        position: sitterson,
        map: map,
    });

    const marker7 = new google.maps.Marker({
        position: art,
        map: map,
    });

    const marker8 = new google.maps.Marker({
        position: phillips,
        map: map,
    });

    const marker9 = new google.maps.Marker({
        position: topo,
        map: map,
    });

    const marker10 = new google.maps.Marker({
        position: starbucks,
        map: map,
    });

    const marker11 = new google.maps.Marker({
        position: kenan,
        map: map,
    });

    const marker12 = new google.maps.Marker({
        position: wilson,
        map: map,
    });

    const marker13 = new google.maps.Marker({
        position: union,
        map: map,
    });
}

//functions below this mimic a04; need to take data from data files and turn that data into individual pages
export const individualSpot = function(){
    const $root = $('#root');
    let input = document.getElementById('theInput').value
    //console.log(input)
    input = input.toLowerCase()
    //make x be list of sdata names
    var x = document.getElementsByClassName('namesl');

    for (var i = 0; i < x.length; i++) {  
        //console.log(input)
        //console.log(x[i])
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            console.log("false")
        } 
        else { 
           //console.log(x[i].innerHTML)
           var listi = x[i].innerHTML.toLowerCase()
           for(var i=0; i<location_spots.length; i++){
               //console.log(spotData[i].name + "name at each index")
                if(listi.includes(location_spots[i].name.toLowerCase())){
                    var temp = location_spots[i]
                    //console.log(temp)
                }
        }

            var item = `<div id="${temp.id}">`
            item += `
            <div class = "card container" style="background-color:#DCDCDC">
            <div class="column" align-content=left style="text-align:left">
                 <h1 class = "title has-text-left">  
                 <span class="individual cards">${temp.name}</span>
                 </h1>
 
                 <img class = "card_img" src = ${temp.image}>
 
                     <h2 class="individualcards"> Rating: ${temp.rating} <br> Would Study Again? ${temp.wouldStudy} </h2>
                        <p class="is-small individualcards"> Comments: ${temp.comments} </p>
             </div>
             </div>`
            $root.html(item)
            //x[i].style.display="list-item"
            //console.log("true")

        } 
    } 
}

export const renderSpotCard = function(spot) {
    const $root = $('#root');
    //var davis;
    // $.getJSON( "../data/spotData.json", function( json ) {
    //     //alert(JSON.stringify(json));
    //     console.log( "JSON Data: " + JSON.stringify(json[1]) );
    //     //davis = JSON.stringify(json[1])
    //    });
    //    //console.log(davis)

    
    var page = `<div id="${spot.id}">
            <div class = "card container is-multiline has-text-centered spotcards" style="background-color:#7BAFD4">
             <div class="column">
                 <h1 class = "title has-text-centered">  
                 <span class="spotcards">${spot.name}</span>
                 </h1>
 
                 <img class = "card_img" src = ${spot.image}>
 
                     <h2 class="spotcards"> Rating: ${avgRating(spot.ratings)} <br> ${wouldStudyPercentages(spot.wouldStudy)}% would study again</h2>
                        <p class="is-small spotcards"> Comments: ${spot.comments} </p>
             </div>
             </div>`

    $root.append(page);
 }

 export const loadSpotsIntoDOM = function() {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    // TODO: Append the hero cards to the $root element
    for(var i=0;i<location_spots.length; i++){
        console.log(location_spots[i]);
        $root.html(renderSpotCard(location_spots[i]));
    }

};

export const renderRandomStudySpot = function(spot){
    const $root = $('#root')
    let studySpot = `<div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
            <h1 class="title"> Davis Library</h1>
            <img src="https://library.unc.edu/wp-content/uploads/2019/08/davis.jpg" alt="Davis Library">
            <h2>Davis Library is a study spot located in the heart of campus right next to the Pit.</h2>
            <h2> <b>OPEN?:</b> Yes </h2>
            <button type="submit">Write a Review for Davis Libary</button>
        </div>
    </div>

    <div class="tile is-parent">
        <div class="tile is-child box">
            <h1 class="title">&#9733; &#9733; &#9733; &#9734; &#9734; </h1>
            <h2><b>Would Study Again?:</b> 50%<br>
            <b>Popular Study Spot:</b> First Floor<br>
            <b>Busy:</b>10AM-1AM<br>
            
            <b>Similar to Davis Libary:</b> Undergraduate Library, Student Union</h2>
        </div>
    </div>
</div>

`;

    $root.append(studySpot)
}

//end a04/a05 functions to be completed
/*
<div class= "section container columns">
                        <div class="column">
                        <div class = "field"></div>
                        <div class = "control has-icons-left has-icons-right">
                        <div class = "control has-icons-left has-icons-right">
                */

export const renderLoginForm = function () {
    let modal = document.getElementById("myModal")
    modal.style.display = "none"

    const $root = $('#root');
    let form_html = `<form class = "loginForm" id = "login-form">
    <div class="section columns">

    <div class="column">
    <div class="field>
        <label class = "label">Email</label>
        <input class = "input is-right " type = "text" id="user-login" placeholder = "Email"></input>
    </div>
        
    <div class="field>
        <label class = "label">Password</label>
        <input class = "input" type = "password" id="login-password" placeholder = "Password"></input>
    </div>           
    <br>     
    <button class = "button is-primary submitlogin" style="background-color: #7BAFD4">Login</button>
    </div>

    <div class="column">
    <button class = "button is-primary newlogin" id="create" style="background-color: #7BAFD4">Create New Account</button>
    </div></div></form>
  `;

    //there are some login button issues, the .login class doesnt refer to the render create new user button
    //but create new user form only goes this way and it doesn't allow the login button to be pressed while on that form
    //also, the login fields don't work on the actual login part
    $root.html(form_html);
    $(document).on("click", ".submitlogin", login);
    $(document).on("click", ".newlogin", renderCreateNewUser);
    $root.on("click", "#submit", handleSubmitReviewForm());

}

export const renderCreateNewUser = function () {
    const $root = $('#root');
    let newUser = `<form class="createUser" id="signup-form">
    <div class="section">
    
    <div class= "field">
        <label class = "label">First Name</label>
        <input class = "input" id="fName"type = "text" placeholder = "First Name"></input>
    </div>
    <div class= "field">
        <label class = "label">Last Name</label>
        <input class = "input" id="lName" type = "text" placeholder = "Last Name"></input>
    </div>
    <div class= "field">
        <label class = "label">Email*</label>
        <input class = "input" id="signup-email" type = "email" placeholder = "email@cs.unc.edu"></input>
    </div>
    <div class= "field">
        <label class = "label">Create Username</label>
        <input class = "input" id="username" type = "text" placeholder = "Username"></input>
    </div>
    <div class= "field">
        <label class = "label">Create Password*</label>
        <input class = "input" id="password" type = "password" placeholder = "Password"></input>
    </div>
    <div class= "field">
        <label class = "label">Confirm Password*</label>
        <input class = "input" id="cPassword" type = "password" placeholder = "Password"></input>
    </div>
    <br>
    <button class="button is-primary submit create" style="background-color: #7BAFD4" id="create-account"> Create Account </button>
    </div>
    </form>`

    //check that the two created passwords match

    $root.html(newUser)
    $(document).on("click", ".create", submitUserToDb);
}

//helper functions for submiting users to userdb and checking if current
//user is logged in or not
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

//toggle UI elements
const setupUI = (user) => {
    if(user !== null){
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else{
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block')
    }
}
//listen for auth status changes
auth.onAuthStateChanged(user => {
    if(user !== null){
        db.collection('users').doc(user.uid).get().then(doc => {
        document.getElementById('welcome-msg').innerHTML = "Welcome " + doc.data().FirstName + "!";
        })
        console.log('user logged in ' + user);
        setupUI(user);
        
    } else {
        console.log('user logged out');
        setupUI(user);
    }
})

export const creationError = function(error){
    let modal = document.getElementById("errorModal");
    let span = document.getElementsByClassName("close")[0];
    
    document.getElementById("error-msg").innerHTML= "ERROR:" + error;
    modal.style.display = "block";

    span.onclick = function() {
            modal.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
//end of helper functions

export const submitUserToDb = function () {
    /*
    Upon submission of create new user form, this function should append the information given by the user
    in the above function to the user login database (and check if the username is available etc)
    */
    //get user info
    event.preventDefault()
    const signupForm = document.querySelector('#signup-form');
    const email = signupForm['signup-email'].value;
    const password = signupForm['password'].value;

    //check if passwords match
    if(password !== signupForm['cPassword'].value){
        creationError("Passwords do not match, try again")
        return
    }
    
    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            FirstName: signupForm['fName'].value,
            LastName: signupForm['lName'].value,
            Username: signupForm['username'].value,
            Bio: '',
            FaveSpot: ''

        })
       
    }).then(() => {
        signupForm.reset();
        $(signupForm).replaceWith(renderMainPage(), initMap());
    }).catch(err => {
    
    let modal = document.getElementById("errorModal");
    let span = document.getElementsByClassName("close")[0];
    
    document.getElementById("error-msg").innerHTML= err;
    modal.style.display = "block";

    span.onclick = function() {
            modal.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    })
    return;
}

//logout method
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    auth.signOut();
    
})

export const login = function () {
    /*
    Handle Login event
    */
   event.preventDefault();
   const loginForm = document.querySelector('#login-form');
   const email = loginForm['user-login'].value;
   const password = loginForm['login-password'].value;


       auth.signInWithEmailAndPassword(email, password).then(cred => {
           $(loginForm).replaceWith(renderMainPage(), initMap());
           loginForm.reset();
       }).catch(err => {
        let modal = document.getElementById("errorModal");
        let span = document.getElementsByClassName("close")[0];
        
        document.getElementById("error-msg").innerHTML= err;
        modal.style.display = "block";
    
        span.onclick = function() {
                modal.style.display = "none"
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
       })

  
    return;
}

export const renderAccountDetails = function (event){
    event.preventDefault();
    const $root = $('#root');
    auth.onAuthStateChanged(user => {
        let modal = document.getElementById("accountModal");
        let span = document.getElementsByClassName("close")[0];
       
         db.collection('users').doc(user.uid).get().then(doc => {
            
            let userInfo = `Name: ${doc.data().FirstName} ${doc.data().LastName}
             <br>
             Bio: ${doc.data().Bio}
             <br>
             Favorite Study Spot: ${doc.data().FaveSpot}`
        document.getElementById('account-information').innerHTML = userInfo;
        document.getElementById('acc-Name').innerHTML = user.email;
        })

        modal.style.display = "block";
    
        span.onclick = function() {
                modal.style.display = "none"
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })

}

export const renderAccountEditForm = function() {
    auth.onAuthStateChanged(user => {
        db.collection('users').doc(user.uid).get().then(doc => {
    document.getElementById("accountModal").style.display = "none";
    const $root = $('#root');

    let editForm =  `<form class="createUser" id="update-form">
    <div class="section">
    
    <div class= "field">
        <label class = "label">First Name</label>
        <input class = "input" id="fName"type = "text" placeholder = "First Name" value="${doc.data().FirstName}"></input>
    </div>
    <div class= "field">
        <label class = "label">Last Name</label>
        <input class = "input" id="lName" type = "text" placeholder = "Last Name" value="${doc.data().LastName}"></input>
    </div>
    
    <div class= "field">
        <label class = "label">Username</label>
        <input class = "input" id="username" type = "text" placeholder = "Username" value="${doc.data().Username}"></input>
    </div>
    <div class= "field">
        <label class = "label">Bio</label>
        <textarea class="textarea" id="bio" placeholder="write something about yourself">${doc.data().Bio}</textarea>

    </div>
    <div class= "field">
        <label class = "label">Favorite Study Spot</label>
        <div class="control" id="faveSpot">
                                <div class="select is-rounded">
                                    <select name = "Select location:" id="selectSpot">
                                        <option value = "Davis Library">Davis Library</option>
                                        <option value = "Undergraduate Library">Undergraduate Library</option>
                                        <option value = "The Quad">The Quad</option>
                                        <option value = "The Pit">The Pit</option>
                                        <option value = "Bottom of Lenoir">Bottom of Lenoir</option>
                                        <option value = "Genome Sciences Cafe">Genome Sciences Cafe</option>
                                        <option value = "Sitterson Lobby">Sitterson Lobby</option>
                                        <option value = "Sloane Art Library">Sloane Art Library</option>
                                        <option value = "Phillips Hall">Phillips Hall</option>
                                        <option value = "TOPO">TOPO</option>
                                        <option value = "Starbucks on Franklin">Starbucks on Franklin</option>
                                        <option value = "Kenan Science Library">Kenan Science Library</option>
                                        <option value = "Wilson Library">Wilson Library</option>
                                        <option value = "Student Union">Student Union</option>
                                    </select> 
                                </div>
                        </div>
    </div>
    <br>
    <button class="button is-primary submit update" style="background-color: #7BAFD4" id="update-account"> Update </button>
    </div>
    </form>`
    $root.html(editForm);
    $(document).on("click", ".update", handleUpdate);
        })
    })
}

export const handleUpdate = function(){
    auth.onAuthStateChanged(user => {
        const updateForm = document.querySelector('#update-form');
        console.log(document.getElementById("selectSpot").value)
       db.collection("users").doc(user.uid).set({
        FirstName:updateForm['fName'].value,
        LastName: updateForm['lName'].value,
        Username: updateForm['username'].value,
        Bio: document.getElementById("bio").value,
        FaveSpot: document.getElementById("selectSpot").value
       })

    })
    
}


export const renderReviewForm = function () {
    //replace X with Y function to replace main page with review form
    //create form 
    //take people's input from form, check it against what we already have
    //if information is new, create new StudySpot object from user input
    //if information isn't new, add to database

    //need to check if already in database
    //want to autofill location name

    //added so error occurs when non-logged in user presses review button
    auth.onAuthStateChanged(user => {
        const $root = $('#root');
        if(user == null){
            let modal = document.getElementById("myModal")
            let span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none"
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }

            
        } else {
    const $root = $('#root');
    let reviewForm = `<div class="section container"> 
                        <form id = "reviewSpotForm">
                        <div class="field">
                        <div class="control">
                            <h3>Select location:</h3>
                                <div class="select is-rounded">
                                    <select class = "selectLocation" name = "Select location:">
                                        <option value = "Davis Library">Davis Library</option>
                                        <option value = "Undergraduate Library">Undergraduate Library</option>
                                        <option value = "The Quad">The Quad</option>
                                        <option value = "The Pit">The Pit</option>
                                        <option value = "Bottom of Lenoir">Bottom of Lenoir</option>
                                        <option value = "Genome Sciences Cafe">Genome Sciences Cafe</option>
                                        <option value = "Sitterson Lobby">Sitterson Lobby</option>
                                        <option value = "Sloane Art Library">Sloane Art Library</option>
                                        <option value = "Phillips Hall">Phillips Hall</option>
                                        <option value = "TOPO">TOPO</option>
                                        <option value = "Starbucks on Franklin">Starbucks on Franklin</option>
                                        <option value = "Kenan Science Library">Kenan Science Library</option>
                                        <option value = "Wilson Library">Wilson Library</option>
                                        <option value = "Student Union">Student Union</option>
                                    </select> 
                                </div>
                        </div>
                     </div><br>
  `;

    // data.forEach(location => {
    //   reviewForm += `<option value = ${location.id}>${location.name}</option>`;
    // });

    //boolean would study
    reviewForm += `
 <div class="field">
    <div class="control">
        <h3>Would you study here again? </h3>
            <div class="select is-rounded">
                <select class = "selectWouldStudy" name = "Would Study Here Again?">
                    <option value = "true">Yes</option>
                    <option value = "false">No</option>
                </select> 
            </div>
    </div>
 </div><br> `

    //drop down rating
    reviewForm += `<div class="field">
                    <div class="control">
                        <h3> Select rating out of five:</h3> 
                            <div class="select is-rounded">
                                <select class = "selectRating" name = "Rating">
                                    <option value = "1">&#x2605</option>
                                    <option value = "2">&#x2605 &#x2605</option>
                                    <option value = "3">&#x2605 &#x2605 &#x2605</option>
                                    <option value = "4">&#x2605 &#x2605 &#x2605 &#x2605</option>
                                    <option value = "5">&#x2605 &#x2605 &#x2605 &#x2605 &#x2605</option>
                                </select> 
                            </div>
                    </div>
                </div><br> `

    //other comments
    reviewForm += `<h3>Any other comments? </h3> 
 <textarea type = "text" class = "textarea placeholder comments" id = "comments" placeholder="Too crowded"></textarea> <br> <br> 
<button type = "submit" class="button is-primary submit addDB" id = "submit" style="background-color: #7BAFD4">Submit</button> <br> 
</form> </div>
`;
    $root.html(reviewForm);
        }
    })
    
    

    //Figure out how to convert user input into something to put into database
    
    // var userInput = $('form').serializeArray()
    // console.log(userInput)
    
    
    // var name = userInput[0]
    // var wouldStudy = userInput[1]
    // var rating = userInput[2]
    // var comments = userInput[3]
    
    // //generate a random id greater than 12
    // let s1 = new StudySpot(13, name, wouldStudy, rating, comments);
    // study_data.set(s1.id.toString(), s1);
    



}

export const handleSubmitReviewForm = function () {
    //event.preventDefault();
    //get values from selector classes/ textareas (handle autofill name separately)
    let w_new = Boolean($(".selectWouldStudy").val());
    let r_new = parseInt($(".selectRating").val());
    let c_new = $("#comments").val();
    let l = $(".selectLocation").val();

    //var update_data = [];
    console.log(l + w_new);
    
    for (let i = 0; i < location_spots.length; i++){
        if(location_spots[i].name.toString() == l.toString()){
            location_spots[i].comments.push(c_new);
            location_spots[i].ratings.push(r_new);
            location_spots[i].wouldStudy.push(w_new);
        }
    }
    // c_old[c_old.length] = c_new;
    // w_old[w_old.length] = w_new;
    // r_old[r_old.length] = r_new;


    //var newSpot = {"id": spot_id, "name": l, "wouldStudy": w_old, "ratings": r_old, "comments": c_old, "image": spot_image};
    
    // var fs = require('fs');
    // const filename = './sData.js';
    // //const file = require(filename);
    // const jsonString = JSON.stringify(newSpot);

    // fs.readFile(filename, function(err, data) {
    //     if(err) throw err;
    //     if(data.id == jsonString.id){
    //         data.toString();
    //         data.replace(data, jsonString);
    //     }
    //     fs.writeFile(filename, data, function(err) {
    //         err || console.log('Data replaced \n', data);
    //     });
    // });

    // fs.writeFile(filename, update_data.stringify, function(err){
    //     if(err) console.log("ERROR!!" + err);
    //     console.log("done");
    // });


}

export const addInfoToDb = function () {
    return ``;
}

export const avgRating = function(ratings){
    let sum = 0;
    if(ratings.length==0){
        return 0;
    }
    for(let i = 0 ; i < ratings.length; i++){
        sum += ratings[i];
    }

    return Math.round(sum*10/ratings.length)/10;
}

export const wouldStudyPercentages = function(wouldStudyArr){
    let yes = 0;
    let no = 0;
    if(wouldStudyArr.length==0){
        return 0;
    }
    for(let i = 0; i<wouldStudyArr.length; i++){
        if (wouldStudyArr[i]){
            yes += 1;
        } else {
            no += 1;
        }
    }
    return Math.round((yes/wouldStudyArr.length)*100);
}


export const loadSpotsInitial = function(){
    var s = new Array(spotData.length);
    var executed = false;
    if (!executed){
        executed = true;
        let i = 0;
        spotData.forEach(spot =>{
            s[i] = spot;
            i++;
        });
    }
    return s;
}

$(function () {
    const $root = $('#root');  
    location_spots = loadSpotsInitial();
    renderMainPage();
    initMap();
    $root.on("click", ".random", loadSpotsIntoDOM)
    $root.on("click", ".addDB", addInfoToDb);

})
