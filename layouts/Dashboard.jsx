import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import JobTitlesList from "../pages/JobTitlesList";
import UsersList  from "../pages/UsersList";
import EmployeeList  from "../pages/EmployeeList";
import EmployersList  from "../pages/EmployersList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
           <Grid.Column width={5}>
            <Route exact path="/" component={UsersList} />
            <Route exact path="/users" component={UsersList} />
          </Grid.Column  >
          <Grid.Column width={5}>
            <Route exact path="/" component={JobTitlesList} />
            <Route exact path="/JobTitles" component={JobTitlesList} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Route exact path="/" component={EmployeeList} />
            <Route exact path="/Employees" component={EmployeeList} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Route exact path="/" component={EmployersList} />
            <Route exact path="/Employers" component={EmployersList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
