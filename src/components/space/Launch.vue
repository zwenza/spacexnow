<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-area>
          <md-card-media>
            <img :src="image">
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{launch.rocket.rocket_name}} - {{getWholePayload()}}</div>
            <div class="md-subhead">
              <md-icon>location_on</md-icon> <span>{{launch.launch_site.site_name_long}}</span>
            </div>
          </md-card-header>

          <md-card-content>
            <md-icon>date_range</md-icon> <b>{{toDate(launch.launch_date_utc)}} UTC</b>
            <br/>
            <md-icon>av_timer</md-icon> <span>{{getDifference(launch.launch_date_utc)}}</span>
            <br/>
            <br/>
            <md-icon>person</md-icon> <span v-for="customer in launch.rocket.second_stage.payloads[0].customers" :key="customer">{{customer}}</span>
            <br/>
            <br/>
            <sp-booster :rocket="launch.rocket"></sp-booster>
          </md-card-content>
        </md-card-area>
        <md-card-actions>
          <md-button :href="launch.links.reddit_campaign">Reddit</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    <br/>
  </div>
</template>

<script>
import Booster from '@/components/space/Booster';
import { format, distanceInWords } from 'date-fns';
import falcon9 from '@/assets/falcon9.jpg';
import falconheavy from '@/assets/falconheavy.jpg';

export default {
  name: 'sp-launch',
  props: ['launch'],
  components: {
    'sp-booster': Booster
  },
  data: function() {
    return {
      image: this.launch.rocket.rocket_id === 'falcon9' ? falcon9 : falconheavy
    };
  },
  methods: {
    getWholePayload: function() {
      return this.launch.rocket.second_stage.payloads
        .map(payload => payload.payload_id)
        .join(', ');
    },
    toDate: function(date) {
      return format(date, 'DD.MM.YYYY HH:mm Z');
    },
    getDifference: function(date) {
      return distanceInWords(date, new Date());
    }
  }
};
</script>
