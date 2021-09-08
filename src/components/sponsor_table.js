import * as React from "react";
import Table from "react-bootstrap/Table";

import {
    tableHeader,
    tableCell
} from "./sponsor_table.module.css"

const SponsorshipTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className={tableHeader}>Partnership Opportunities</th>
          <th className={tableHeader}>Platinum ($4000)</th>
          <th className={tableHeader}>Gold ($3000)</th>
          <th className={tableHeader}>Silver ($2000)</th>
          <th className={tableHeader}>Bronze ($1000)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Host Professional Networking Event</td>
          <td
            className={tableCell}
          >
            &#10004; (2)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
          <td className={tableCell}></td>
          <td className={tableCell}></td>
        </tr>
        <tr>
          <td>Opportunity to collaborate on a pre-college event</td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
          <td className={tableCell}></td>
          <td className={tableCell}></td>
        </tr>
        <tr>
          <td>Opportunity to provide a speaker(s) during a workshop</td>
          <td
            className={tableCell}
          >
            &#10004; (2)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
          <td className={tableCell}></td>
        </tr>
        <tr>
          <td>Admission to all Chapter Events</td>
          <td
            className={tableCell}
          >
            &#10004; (3)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (3)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (2)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (2)
          </td>
        </tr>
        <tr>
          <td>Career Opportunity Advertisement</td>
          <td
            className={tableCell}
          >
            &#10004; (3)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (3)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
          <td
            className={tableCell}
          >
            &#10004; (1)
          </td>
        </tr>
        <tr>
          <td>
            Featured & Mentioned on Sponsor slide at General Body Meetings &
            Professional Development Workshops
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
        </tr>
        <tr>
          <td>Company Logo & Link in Newsletter and Website</td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
          <td
            className={tableCell}
          >
            &#10004;{" "}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SponsorshipTable;
