import "./index.css";
export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel right on the element.
                Although it's very convenient it is considered bad practice and you should
                avoid using the style attribute

            </p>

            {/* id selectors */}

            <div id="wd-css-id-selectors">
                <h3>ID SELECTORS</h3>
                <p id="wd-id-selector-1">
                    CHANGE ELEMENT USING ID
                </p>

                <p id="wd-id-selector-2">
                    ANOTHER EXAMPLE
                </p>

            </div>

            {/* class selectors */}
            <div className="wd-class-selector">
                <h3>CLASS SELECTORS</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an element's CLASS attribute
                </p>

                <h4 className="wd-class-selector">
                    This heading has the same style as the paragraph above
                </h4>

            </div>

            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document Structure Selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be comnined to refer elements in particular places in the document
                        <p className="wd-selector-3">This paragraph's red background is references as <br /> .selector-2 .selector-3<br />
                            <span className="wd-selector-4">
                                whereas this span is a direct child of its parent
                            </span>
                            you can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>

            </div>

            <div id="wd-z-index">
                <h2>Z index</h2>
                <div className="wd-pos-relative">
                    <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
                        Portrait
                    </div>
                    <div className=" wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>
                    <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
                        Square
                    </div>
                </div> <br /><br /><br /><br /><br /><br /><br />
            </div>


        </div>
    );
}