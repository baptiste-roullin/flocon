
<script lang="ts">
import { ref, h } from 'vue'

export default {

  setup() {
    const count = ref(1)

    return () => h('div', { onClick: () => { return count.value++ } }, count.value)
  }
}
</script>
