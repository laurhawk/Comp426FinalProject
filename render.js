//spots is a spot object from render.js
//import data from "data.js"
export const renderMainPage = function(){
    const $root = $('#root');

    let mainPage = `<section class="section">
                        <div class="container">
                            <h2 class="title" style="text-align: left;"> Find a Study Spot </h1>
                            <h2 style="text-align: left"><img src="https://www.google.com/maps/d/thumbnail?mid=1ECA2UWDNhkBLXPrSRbD7PMLRXhM&hl=en" alt="map"></h1>
                        </div>
                        <div> 
                        </div>
                    </section>
                    <section class="section">
                        <div class="container" justify-content= "center" align-content= "center" text-align="center" >
                            <button class="button submit review" style="background-color: #7BAFD4"> Submit a Review </button>
                        </div>
                    <section>`;

    // Pick a spot from the list at random
    //var randomSpot = spots[Math.floor(Math.random() * spots.length)];
    //mainPage += randomSpot;

$root.append(mainPage);
$root.on("click", ".review", renderReviewForm);

}

//make this into an actual form


export const renderReviewForm = function(){
//replace X with Y function to replace main page with review form
//create form 
//take people's input from form, check it against what we already have
//if information is new, create new StudySpot object from user input
//if information isn't new, add to database

//need to check if already in database
//want to autofill location name
  let reviewForm = `<container> <form>
  <h3>Enter location name:</h3> 
  <textarea type = "text" id = "placeholder"></textarea> <br> <br> 
  `;
  const $root = $('#root');
  // data.forEach(location => {
  //   reviewForm += `<option value = ${location.id}>${location.name}</option>`;
  // });
 reviewForm += `
 <h3>Would you study here again? </h3>
 <select name = "Would Study Here Again?">
     <option value = "true">Yes</option>
     <option value = "false">No</option>
 </select> <br> <br> 
 <h3> Select rating out of five:</h3> 
 <select name = "Rating">
     <option value = "1">&#x2605</option>
     <option value = "2">&#x2605 &#x2605</option>
     <option value = "3">&#x2605 &#x2605 &#x2605</option>
     <option value = "4">&#x2605 &#x2605 &#x2605 &#x2605</option>
     <option value = "5">&#x2605 &#x2605 &#x2605 &#x2605 &#x2605</option>
 </select> <br> <br> 
 <h3>Any other comments? </h3> 
 <textarea type = "text" class = "comments" id = "comments"></textarea> <br> <br> 
<button class="button submit addDB" id = "submit" style="background-color: #7BAFD4">Submit</button> <br> <br> 
</form> </container>
`;
 $root.html(reviewForm);
}

export const addInfoToDb = function(){
    return ``;
}

export const renderRandomStudySpot = function(){
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
            <b>Davis Libary's Top Tags:</b> Quiet, Good for Group Projects, Busy<br>
            <b>Similar to Davis Libary:</b> Undergraduate Library, Student Union</h2>
        </div>
    </div>
</div>


<div class="tile is-ancestor">
    <div class="tile is-parent">
        <div class="tile is-child box">
            <article class="media">
                <div class="media-content">
                  <div class="content">
                    <h1 class="title">
                      &#9733; &#9733; &#9733; &git#9734; &#9734; <br>First Floor 10/11/20 1:00PM-1:00AM
                    </h1>

                    <h3><b>Would Study Again?:</b> Yes</h3>


                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </div>
              </article>
        </div>
    </div>
</div>`;

    $root.append(studySpot)
}


$(function(){ 
    const $root = $('#root');
    renderMainPage();
    //renderRandomStudySpot()

    //renderReviewForm()

    $root.on("click", ".addDB", addInfoToDb);
})
