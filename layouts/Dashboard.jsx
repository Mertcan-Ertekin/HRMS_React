import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import JobTitlesList from "../pages/JobTitlesList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Route exact path="/" component={JobTitlesList} />
            <Route exact path="/JobTitles" component={JobTitlesList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
