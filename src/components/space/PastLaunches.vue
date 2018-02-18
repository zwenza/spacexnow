<template>
  <div>
    <br/>
    <md-table v-if="launches" v-model="launches" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Past launches</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="launch">
        <md-table-cell md-label="Payload">{{launch.item.rocket.second_stage.payloads[0].payload_id}}</md-table-cell>
        <md-table-cell md-label="Rocket">{{launch.item.rocket.rocket_name}}</md-table-cell>
        <md-table-cell md-label="Date">{{launch.item.launch_date_utc}}</md-table-cell>
        <md-table-cell md-label="Success">
          <md-chip>
            {{launch.item.launch_success ? 'SUCCESS' : 'FAILURE'}}
          </md-chip>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'sp-past-launches',
  data: () => ({
    launches: []
  }),
  created() {
    axios
      .get(`https://api.spacexdata.com/v2/launches?order=desc`)
      .then(response => {
        this.launches = response.data;
      });
  }
};
</script>
