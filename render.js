export const renderMainPage = function(){
    const $root = $('#root');
    let mainPage = `<section class="section">
                        <div class="container">
                            <h1 class="title" style="text-align: center;"> Find a Study Spot </h1>
                            <h1 style="text-align: center"><img src="https://www.google.com/maps/d/thumbnail?mid=1ECA2UWDNhkBLXPrSRbD7PMLRXhM&hl=en" alt="map"></h1>
                        </div>
                    </section>
`;
$root.append(mainPage);
}

//make this into an actual form
export const renderReviewForm = function(){
 let reviewForm = `<section>
                        <div class="tile is-ancestor">
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    <h1 class="title">Davis Library</h1>
                   
                                    <div class="field">
                                        <label class="label">Location</label>
                                            <div class="control">
                                                <div class="select">
                                                <select>
                                                <option>Select dropdown</option>
                                                <option>With options</option>
                                                 </select>
                                            </div>
                                    </div>
                            </div>
                   
                        <div class="field">
                            <label class="label">Time:</label>
                                <div class="control">
                                    <div class="input"></div>
                                </div>
                        </div>

                   <div class="field">
                       <label class="label">Rating: &#9734; &#9734; &#9734; &#9734; &#9734;</label>
                   </div>

                   <div class="field">
                       <label class="label">Would Study Again?:</label>
                       <div class="control">
                         <label class="radio">
                           <input type="radio" name="question">Yes</label>
                         <label class="radio">
                           <input type="radio" name="question">No</label>
                       </div>
                   </div>

                   <div class="field">
                        <label class="label">Additional Tags</label>
                        <div class="control">
                            <label class="checkbox">
                            <input type="checkbox">Loud</label>

                       <label class="checkbox">
                        <input type="checkbox">Quiet</label>

                       <label class="checkbox"><input type="checkbox">Busy</label>

                       <label class="checkbox"><input type="checkbox">Good for Group Work</label>

                        </div>
                   </div>

                   <div class="field">
                     <div class="control">
                       <textarea class="textarea" placeholder="Textarea"></textarea>
                     </div>
                   </div>
                   
                   <div class="field is-grouped">
                     <div class="control">
                       <button class="button is-link">Submit</button>
                     </div>
                     <div class="control">
                       <button class="button is-link is-light">Cancel</button>
                     </div>
                   </div>
             </div>
         </div>
     </div>
 </section>`
 $root.append(reviewForm)
}

export const studySpot = function(){
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
                      &#9733; &#9733; &#9733; &#9734; &#9734; <br>First Floor 10/11/20 1:00PM-1:00AM
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
</div>`

    $root.append(studySpot)
}

$(function(){ 
    const $root = $('#root')
    renderMainPage();
    renderReviewForm()

})
