import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button,Dropdown } from "react-bootstrap";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";


export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
    { moduleName: string, setModuleName: (title: string) => void; addModule: () => void; }
) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <div id="wd-modules-controls" className="text-nowrap">
        <Button variant="danger" onClick={handleShow} size="lg" className="me-1 float-end" id="wd-add-module-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Module
        </Button>

        <Dropdown className="float-end me-2">
            <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
                <GreenCheckmark /> Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item id="wd-publish-all">
                    <GreenCheckmark/> Publish All
                </Dropdown.Item>
                <Dropdown.Item id="wd-publish-all-modules-and-items">
                    <GreenCheckmark/> Publish all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-publish-modules-only">
                    <GreenCheckmark/> Publish modules only
                </Dropdown.Item>

                <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                    <GreenCheckmark/> Unpublish all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-unpublish-modules-only">
                    <GreenCheckmark/> Unpublish modules only
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="float-end me-2">
            <Dropdown.Toggle variant="secondary" size="lg" id="wd-view-progress-btn">
                <GreenCheckmark /> View Progress
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item id="wd-view-progress">
                    <GreenCheckmark/> View Progress
                </Dropdown.Item>
                <Dropdown.Item id="wd-view-progress-modules-and-items">
                    <GreenCheckmark/> View all progress
                </Dropdown.Item>
                <Dropdown.Item id="wd-view-progress-only">
                    <GreenCheckmark/> View progress
                </Dropdown.Item>

                <Dropdown.Item id="wd-unview-all-progress">
                    <GreenCheckmark/> Unview all progress
                </Dropdown.Item>
                
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="float-end me-2">
            <Dropdown.Toggle variant="secondary" size="lg" id="wd-collapse-all-btn">
                <GreenCheckmark /> Collapse All
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item id="wd-collapse-all">
                    <GreenCheckmark/> Collapse All
                </Dropdown.Item>
                <Dropdown.Item id="wd-collapse-all-modules-and-items">
                    <GreenCheckmark/> Collapse all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-collapse-modules-only">
                    <GreenCheckmark/> Collapse modules only
                </Dropdown.Item>

                <Dropdown.Item id="wd-close-all-modules-and-items">
                    <GreenCheckmark/> Close all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-close-modules-only">
                    <GreenCheckmark/> Close modules only
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>

        <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
        moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
    </div>
    );
}