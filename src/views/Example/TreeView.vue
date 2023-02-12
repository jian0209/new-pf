<script setup>
import "../../design/effect.scss";
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
</script>

<template>
  <nav>
    <RouterLink to="/example/main">Back</RouterLink>
  </nav>

  <div class="folder-structure">
    <ul>
      <li>
        <!-- Content -->
        ...somehtnignsd

        <!-- Sub items -->
        <ul>
          <li>
            <!-- Content -->
            ...

            <!-- Sub items -->
            <ul>
              <li>...</li>
              <li>..a.</li>
              ...
            </ul>
          </li>
          <li>...</li>
          ...
        </ul>
      </li>

      <!-- Repeat other items -->
      ...
    </ul>
  </div>
</template>

<script>
export default defineComponent({
  name: "TreeView",
  components: {
    RouterLink,
  },
});
</script>
