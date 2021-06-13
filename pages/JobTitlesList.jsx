import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

export default function JobTitlesList() {
    const [JobTitles, setJobTitles] = useState([]);
    return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İd</Table.HeaderCell>
            <Table.HeaderCell>İş Ünvanı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobTitles.map((JobTitles) => (
            <Table.Row key={JobTitles.id}>
              <Table.Cell><Link to={`/JobTitles/${JobTitles.titles}`}>{JobTitles.titles}</Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
