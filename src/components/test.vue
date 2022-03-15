
<script lang="ts">
import { h } from 'vue'
export default {
  props: {
    /* ... */
  },
  setup() {
    // use an array to return multiple root nodes
    return () => [
      h('div'),
      h('div'),
    ]
  }
}

</script>
