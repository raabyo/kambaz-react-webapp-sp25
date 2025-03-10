import './index.css'

export default function Float() {
    return(
        <div id="wd-float-divs">
            <h2>Float</h2>
            <div>
                <img className="wd-float-right"
                src="https://media.cntraveler.com/photos/65988c68ba9c434d5460c732/16:9/w_5472,h_3078,c_limit/Cape_Town_When_to_Visit_South_Africa_November_GettyImages-671323338.jpg"/>
                This is South Africa. The coast is very beautiful during sunset.
                This is South Africa. The coast is very beautiful during sunset.

                <img className="wd-float-left"
                src="https://media.cntraveler.com/photos/65988c68ba9c434d5460c732/16:9/w_5472,h_3078,c_limit/Cape_Town_When_to_Visit_South_Africa_November_GettyImages-671323338.jpg"/>
                This is South Africa. The coast is very beautiful during sunset.
                This is South Africa. The coast is very beautiful during sunset.

                <img className="wd-float-right"
                src="https://media.cntraveler.com/photos/65988c68ba9c434d5460c732/16:9/w_5472,h_3078,c_limit/Cape_Town_When_to_Visit_South_Africa_November_GettyImages-671323338.jpg"/>
                This is South Africa. The coast is very beautiful during sunset.
                This is South Africa. The coast is very beautiful during sunset.

                <img className="wd-float-left"
                src="https://media.cntraveler.com/photos/65988c68ba9c434d5460c732/16:9/w_5472,h_3078,c_limit/Cape_Town_When_to_Visit_South_Africa_November_GettyImages-671323338.jpg"/>
                This is South Africa. The coast is very beautiful during sunset.
                This is South Africa. The coast is very beautiful during sunset.
                <div className="wd-float-done"></div>


            </div>

            <div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
                    Yellow</div>
                    <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
                    Blue</div>
                    <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
                    Red</div>
                    <img className="wd-float-right"
                    src="https://media.cntraveler.com/photos/65988c68ba9c434d5460c732/16:9/w_5472,h_3078,c_limit/Cape_Town_When_to_Visit_South_Africa_November_GettyImages-671323338.jpg"/>
                    <div className="wd-float-done"></div>
            </div>

        </div>
    );
}