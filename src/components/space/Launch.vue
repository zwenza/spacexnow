<template>
    <b-card :title="launch.rocket.rocket_name"
            style="max-width: 20rem;">
         📌 {{launch.launch_site.site_name_long}}
    </b-card>
</template>

<script>
export default {
  name: 'sp-launch',
  props: ['launch']
};
</script>
