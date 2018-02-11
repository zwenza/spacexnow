<template>
  <div>
    <b-card :title="launch.rocket.rocket_name + ' - ' + launch.rocket.second_stage.payloads[0].payload_id"
            :img-src="image"
            style="max-width: 25rem;">
      <b-badge v-b-tooltip.hover title="Customer" v-for="customer in launch.rocket.second_stage.payloads[0].customers" pill variant="secondary" v-bind:key="customer"> {{customer}}</b-badge>
      <sp-rocket-preview :rocket="launch.rocket"/>
      <br/>
      <i class="fas fa-map-marker-alt"></i> <i>{{launch.launch_site.site_name}}</i>
      <br/>
      <i class="fas fa-calendar-alt"></i> <b>{{launch.launch_date_utc}} UTC</b>
      <hr/>
      <a :href="launch.links.reddit_campaign"><i class="fab fa-reddit"></i></a>
    </b-card>
    <br/>
  </div>
</template>

<script>
import RocketPreview from '@/components/space/RocketPreview';

export default {
  name: 'sp-launch',
  props: ['launch'],
  components: {
    'sp-rocket-preview': RocketPreview
  },
  data: function() {
    return {
      image: ''
    };
  },
  mounted: function() {
    this.image =
      this.launch.rocket.rocket_id === 'falcon9'
        ? 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2016/05/spacexheader.jpg'
        : 'https://cdn.vox-cdn.com/thumbor/PcunTSHRJTT7JXLMAowXIL0sW5U=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/58547073/38583830575_eb67b89fa2_o.0.jpg';
  }
};
</script>
