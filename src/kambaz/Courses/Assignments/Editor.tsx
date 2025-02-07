
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="Wd-name"> Assignment Name </label>
            <input id="wd-name" value="A1 - ENV + HTML" /> <br/><br/>
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your web application running on Netlfiy. The landing page should include the following:
            </textarea>
            <br/>

            <table>
                <tr>
                    {/* points*/}
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>

                    <td>
                        <input id="wd-points" value={100}/>
                    </td>

                    {/* assignment group*/}
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>

                    <td>
                        <select id="wd-group">
                            <option>
                                ASSIGNMENTS
                            </option>
                        </select>
                    </td>

                    {/* display grade as*/}
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>

                    <td>
                        <select id="wd-display-grade-as">
                            <option>
                                Percentage
                            </option>
                        </select>
                    </td>

                    {/* submissino type*/}
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>

                    <td>
                        <select id="wd-submission-type">
                            <option>
                                Online
                            </option>
                        </select>

                        <p>Online Entry Options</p>
                        <input type="checkbox" id="wd-text-entry" name="entry1" value="Text Entry"/>
                        <input type="checkbox" id="wd-website-url" name="entry2" value="Website URL"/>
                        <input type="checkbox" id="wd-media-recordings" name="entry3" value="Media Recordings"/>
                        <input type="checkbox" id="wd-student-annotation" name="entry4" value="Student Annotation"/>
                        <input type="checkbox" id="wd-file-uploads" name="entry5" value="File Uploads"/>
                    </td>

                    {/* assign to*/}

                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>

                    <td>
                        <label id="assign-to" htmlFor="wd-name">Assign to</label>
                    </td>

                    <td>
                        <select id="wd-name">
                            <option>
                                Everyone
                            </option>
                        </select>

                        {/**due date */}
                        <td>
                            <label htmlFor="wd-due-date">Due</label>
                        </td>

                        <td>
                        <input id="wd-due-date" type="date"/>
                        </td>

                        {/**available from until */}
                        <span>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label>
                        </td>

                        <td>
                        <input id="wd-available-from" type="date"/>
                        </td>

                        <td>
                            <label htmlFor="wd-available-until">Available until</label>
                        </td>

                        <td>
                        <input id="wd-available-until" type="date"/>
                        </td>
                        </span>
                    </td>



                </tr>
            </table> <br/>
            <span>
                <button>Cancel</button>
                <button>Save</button>
            </span>
        </div>
    );
}