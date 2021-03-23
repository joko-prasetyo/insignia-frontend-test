import React from "react";
import VideoSection from "./VideoSection";
import Grid from "@material-ui/core/Grid";
import ActivitySection from "./ActivitySection";
import ChannelSection from './ChannelSection';
import PeopleSection from "./PeopleSection";
import DocumentSection from "./DocumentSection";

export default function ContentSection() {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Grid item xs={8}>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <VideoSection />
          </Grid>
          <Grid item xs={12}>
            <PeopleSection />
          </Grid>
          <Grid item xs={12}>
            <DocumentSection />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <ActivitySection />
          </Grid>
          <Grid item xs={12}>
            <ChannelSection />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
