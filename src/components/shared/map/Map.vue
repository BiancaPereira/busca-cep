<template>
  <div id="map"></div>
</template>

<script>
import gmapsInit from '../../../utils/maps'
export default {
  props: [
    'street',
    'district',
    'city',
    'state'
  ],
  async mounted () {
    try {
      let marker
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)

      geocoder.geocode({ address: `${this.street}, ${this.district}, ${this.city} - ${this.state}` }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        if (status === google.maps.GeocoderStatus.OK) {
          var myResult = results[0].geometry.location

          if (marker !== undefined && marker !== '') {
            marker.setMap(null)
            marker = ''
          }

          marker = new google.maps.Marker({
            map: map,
            position: myResult
          })

          map.setCenter(myResult)
          map.setZoom(6)
        }

        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
      })
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
#map {
  height: 250px;
}
</style>
