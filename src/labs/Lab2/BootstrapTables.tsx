import { Container, Table } from "react-bootstrap";

export default function BootstrapTables() {
    return (
        <Container>
            <div id="wd-css-styling-tables">
                <h2>Tables</h2>
                <Table>
                    <thead>
                        <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
                    </thead>
                    <tbody>
                        <tr className="table-warning"><th>Q1</th><th>HTML</th><th>2/3/21</th><th>85</th></tr>
                        <tr className="table-danger"><th>Q2</th><th>CSS</th><th>2/10/21</th><th>90</th></tr>
                        <tr className="table-primary"><th>Q3</th><th>JavaScript</th><th>2/17/21</th><th>90</th></tr>
                    </tbody>

                    <tfoot>
                        <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
                    </tfoot>

                </Table>
            </div>

            <div id="wd-css-responsive-tables">
                <h2>Responsive tables</h2>
                <Table responsive>
                    <thead>
                        <tr><th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                            <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                            <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                            <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>


    )
}