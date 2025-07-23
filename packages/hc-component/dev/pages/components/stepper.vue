<template>
  <div class="stepper-demo">
    <h2>Stepper 示例</h2>
    <v-card title="基础用法">
      <v-card-text>
        <v-stepper>
          <v-stepper-header>
            <v-stepper-item
              value="1"
              complete
            >
              <template v-slot:title>
                Ad type
              </template>
            </v-stepper-item>
    
            <v-divider></v-divider>
    
            <v-stepper-item
              value="2"
              complete
            >
              <template v-slot:title>
                Ad style
              </template>
            </v-stepper-item>
    
            <v-divider></v-divider>
    
            <v-stepper-item
              :rules="[() => false]"
              value="3"
            >
              <template v-slot:title>
                Custom channels
              </template>
    
              <template v-slot:subtitle>
                Alert message
              </template>
            </v-stepper-item>
    
            <v-divider></v-divider>
    
            <v-stepper-item value="46">
              <template v-slot:title>
                Get code
              </template>
            </v-stepper-item>
        </v-stepper-header>
      </v-stepper>
      </v-card-text>
    </v-card>
    <v-card title="动态步数">
      <v-card-text>
        <v-select
          v-model="steps"
          :items="[2, 3, 4, 5, 6]"
          label="# of steps"
        ></v-select>
        <v-stepper v-model="e1" alt-labels>
          <template v-slot:default="{ prev, next }">
            <v-stepper-header>
              <template v-for="n in steps" :key="`${n}-step`">
                <v-stepper-item
                  :complete="e1 > n"
                  :title="`Step ${n}`"
                  :value="n"
                ></v-stepper-item>
    
                <v-divider
                  :style="{
                    borderColor: e1 > n ? 'var(--Border-secondary)' : 'var(--Border-control)'
                  }"
                  v-if="n !== steps"
                  :key="n"
                ></v-divider>
              </template>
            </v-stepper-header>
    
            <v-stepper-window>
              <v-stepper-window-item
                v-for="n in steps"
                :key="`${n}-content`"
                :value="n"
              >
                <v-card
                  color="grey-lighten-1"
                  height="200"
                ></v-card>
              </v-stepper-window-item>
            </v-stepper-window>
    
            <v-stepper-actions
              :disabled="disabled"
              @click:next="next"
              @click:prev="prev"
            ></v-stepper-actions>
          </template>
        </v-stepper>
      </v-card-text>
    </v-card>
  </div>

</template>

<script setup>
  import { computed, ref } from 'vue'

  const e1 = ref(1)
  const steps = ref(2)

  const disabled = computed(() => {
    return e1.value === 1 ? 'prev' : e1.value === steps.value ? 'next' : undefined
  })
</script>

<style scoped>
.stepper-demo {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}



</style>
