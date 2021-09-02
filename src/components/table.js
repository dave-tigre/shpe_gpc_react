import * as React from 'react'
import Table from "react-bootstrap/Table";

const TableRow = ({ imageSource, memberTitle, memberName, children }) => {
    return (
      <Table striped bordered hover>
          <thead>
          <tr>
              <th>Partnership Opportunities</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
          </tr>
          <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
          </tr>
          </tbody>
      </Table>
      
    )
  }

const SponsorshipTable = ({ imageSource, memberTitle, memberName, children }) => {
  return (
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Partnership Opportunities</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </Table>
    
  )
}

export default BootstrapCard