export default function lab1() {
    return (
        <div id="wd-lab1">
            <h2> Lab 1</h2>
            <h3> Raaby Omar - CS5610 Spring 2025</h3>

            <div id="wd-h-tag">
                <h4> Heading Tags</h4>
            </div>

            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
                </p>

                <p id="wd-p-2">
                This is the second paragraph. Even though there is a deliberate wjite gap between
                the paragraph above and thi sparagraph, by default browsers render them as one
                continuous piece of text as shown here on the right.
                </p>

                <p id="wd-p-3">
                This is the third paragraph. Wrap each paragraph with the parahraph tag to tell 
                browsers to render the gaps.
                </p>

            </div>

            <div id="wd-l-tag">
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol>
                   <li>Mix dry ingredients</li>
                   <li>Add wet ingredients</li>
                   <li>Stir to combine</li>
                   <li>Heat a skillet or griddle</li>
                   <li>Pour batter onto the skillet</li>
                   <li>Cook until bubbly on top</li>
                   <li>Mix dry ingredients</li>
                   <li>Flip and cook the other side</li>
                   <li>Serve and enjoy!</li>
                </ol>
            </div>

            <div id="wd-f-tag">
                <h5>Form elements</h5>

                <label>Username:</label>
                <input id="username" type="text" placeholder="jdoe" title="Please type your username which should be unique"/>

                <br/>
                
                <label>Password:</label>
                <input id="username" type="text" placeholder="asdf876asd8d7" title="Please type your password which
                 doesn't have be unique"/>

                 <br/>

                 <button>Delete</button>
                 <br/>
                 <button>Edit</button>
                 <br/>
                 <button>Update</button>
                 <br/>

            </div>

            <div id="wd-b-tag">
                <h6>Buttons</h6>
                <br/>
                <button>Hello World!</button>
                <br/>
                <h6>Radio Buttons</h6>
                <br/> 
            </div>

            <div id="wd-radio-tag">

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Sci-Fi</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Horror</label>
            </div>

            <div>

<label>Favorite color:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Red</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Pink</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Purple</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Green</label>
            </div>
        </div>
    )
}