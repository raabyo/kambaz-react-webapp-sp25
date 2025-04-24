import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import React, { useState } from "react";
import { useParams } from "react-router";
/* import { v4 as uuidv4 } from "uuid"; */
import * as db from "../../Database";
import { BsGripVertical, BsPlus } from "React-icons/bs";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import ModuleControlButtons from "./ModuleControlButtons";


export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    return (
        <div>

            <ModulesControls
                moduleName={moduleName}
                setModuleName={setModuleName}
                addModule={() => {
                    dispatch(addModule({ name: moduleName, course: cid }));
                    setModuleName("");
                }} />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <ListGroup className="rounded-0">
                {modules.map((module: any) => (
                    <ListGroup.Item
                        className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            {!module.editing && module.name}
                            {module.editing && (
                                <FormControl className="w-50 d-inline-block"
                                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") { dispatch(updateModule({ ...module, editing: false })); }
                                    }}

                                    defaultValue={module.name} />
                            )}

                            <ModuleControlButtons moduleId={module._id}
                                deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                                editModule={(moduleId) => dispatch(editModule(moduleId))} />
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );

}