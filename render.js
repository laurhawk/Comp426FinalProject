
//spots is a spot object from render.js
//import data from "data.js"
export const renderMainPage = function () {
    const $root = $('#root');

    let mainPage = `<div class="columns">
                    <div class="column">
                    <section class="section">
                        <div class="container">
                            <h2 class="title" style="text-align: left;"> Find a Study Spot </h2>
                        </div>
                        <br>
                        <div id="map"></div>
                        <div> 
                        </div>
                    </section>
                    <section class="section">
                        <div class="container" justify-content= "center" align-content= "center" text-align="center" >
                            <button class="button is-primary submit review" style="background-color: #7BAFD4"> Submit a Review </button>
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
    //handle login button on index file
    $(document).on("click", ".login", renderLoginForm);
    //$(document).on("click", "#takeMeHome", renderMainPage);


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

export const renderSpotCard = function (spot) {
    return `<div class = "card container is-multiline has-text-centered">
             <div class="column">
                 <h1 class = "title has-text-centered">  
                 <span>${spot.name}</span>
                 </h1>
 
                 <img src = ${spot.img}>
 
                     <h2> ${spot.rating} ${spot.wouldStudy} </h2>
                        <p class="is-small"> ${spot.comments} </p>
                        <button class="button review is-light"> Review </button>
             </div>
             </div>`
};

export const loadSpotsIntoDOM = function (spots) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    // TODO: Append the hero cards to the $root element
    for (var i = 0; i < spots.length; i++) {
        $root.append(renderHeroCard(spots[i]))
    }

    // Pick a hero from the list at random
    const randomSpot = spots[Math.floor(Math.random() * spots.length)];

};

export const renderRandomStudySpot = function (spot) {
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
    const $root = $('#root');
    let form_html = `<form class = "loginForm">
                <div class="section columns">

                <div class="column">
                <div class="field>
                    <label class = "label">Username</label>
                    <input class = "input is-right " type = "text" placeholder = "Username"></input>
                </div>
                    
                <div class="field>
                    <label class = "label">Password</label>
                    <input class = "input" type = "password" placeholder = "Password"></input>
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

}

export const renderCreateNewUser = function () {
    const $root = $('#root');
    let newUser = `<form class="createUser">
                    <div class="section">
                    
                    <div class= "field">
                        <label class = "label">First Name</label>
                        <input class = "input" type = "text" placeholder = "First Name"></input>
                    </div>
                    <div class= "field">
                        <label class = "label">Last Name</label>
                        <input class = "input" type = "text" placeholder = "Last Name"></input>
                    </div>
                    <div class= "field">
                        <label class = "label">Email</label>
                        <input class = "input" type = "email" placeholder = "email@cs.unc.edu"></input>
                    </div>
                    <div class= "field">
                        <label class = "label">Create Username</label>
                        <input class = "input" type = "text" placeholder = "Username"></input>
                    </div>
                    <div class= "field">
                        <label class = "label">Create Password</label>
                        <input class = "input" type = "password" placeholder = "Password"></input>
                    </div>
                    <div class= "field">
                        <label class = "label">Confirm Password</label>
                        <input class = "input" type = "password" placeholder = "Password"></input>
                    </div>
                    <br>
                    <button class="button is-primary submit create" style="background-color: #7BAFD4"> Create Account </button>
                    </div>
                    </form>`

    //check that the two created passwords match

    $root.html(newUser)
    $(document).on("click", ".create", submitUserToDb);
}

export const submitUserToDb = function () {
    return;
    /*
    Upon submission of create new user form, this function should append the information given by the user
    in the above function to the user login database (and check if the username is available etc)
    */
}

export const login = function () {
    return;
    /*
    Handle Login event
    */
}
export const renderReviewForm = function () {
    //replace X with Y function to replace main page with review form
    //create form 
    //take people's input from form, check it against what we already have
    //if information is new, create new StudySpot object from user input
    //if information isn't new, add to database

    //need to check if already in database
    //want to autofill location name
    const $root = $('#root');
    let reviewForm = `<div class="section container"> 
                        <form>
                        <div class="field">
                        <div class="control">
                            <h3>Select location:</h3>
                                <div class="select is-rounded">
                                    <select name = "Select location:">
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
                                        <option value = "Wilson">Wilson Library</option>
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
                <select name = "Would Study Here Again?">
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
                                <select name = "Rating">
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
<button class="button is-primary submit addDB" id = "submit" style="background-color: #7BAFD4">Submit</button> <br> 
</form> </div>
`;
    $root.html(reviewForm);

    //Figure out how to convert user input into something to put into database
    /*
    var userInput = $('form').serializeArray()
    
    var name = userInput[0]
    var wouldStudy = userInput[1]
    var rating = userInput[2]
    var comments = userInput[3]
    
    //generate a random id greater than 12
    let s1 = new StudySpot(13, name, wouldStudy, rating, comments);
    study_data.set(s1.id.toString(), s1);
    */



}

export const handleSubmitReviewForm = function (event) {
    //get values from selector classes/ textareas (handle autofill name separately)
    let wouldStudy = $(".selectWouldStudy").val();
    let rating = $(".selectRating").val();
    let comments = $("#comments").val();

}

export const addInfoToDb = function () {
    return ``;
}

$(function () {
    const $root = $('#root');
    renderMainPage();
    initMap();
    //renderRandomStudySpot()

    //renderReviewForm()

    $root.on("click", ".addDB", addInfoToDb);
})
