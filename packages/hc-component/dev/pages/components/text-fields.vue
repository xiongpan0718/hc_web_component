<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-17 17:56:38
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/text-fields.vue
 * @Description  :
-->
<template>
	<v-expansion-panels v-model="isShow">
		<v-expansion-panel value="orientation">
			<template #title>
				<h2>Normal</h2>
			</template>
			<template #text>
				<v-row>
					<v-col cols="3">Enabled, empty, hint</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" hint="The pressure must be between 0 and 20 bars.The pressure must be between 0 and 20 bars." persistent-hint/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Enabled, empty, prepend-inner-icon</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" prepend-inner-icon="person_4" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Enabled, empty, tips</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" error-messages="The pressure must be between 0 and 20 bars."
							tipmessages clearable />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Disabled, empty</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" disabled />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Disabled, filled</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" v-model="Disabled" disabled/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Error</v-col>
					<v-col cols="6">
						<hc-text-field
							:rules="[v => v !== 'Error' || 'Input error: Error']"
							label="Pressure"
							v-model="Error"
							validate-on="eager"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Number input:</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" type="number" />
					</v-col>
				</v-row>
			</template>
		</v-expansion-panel>
		<v-expansion-panel value="state">
			<template #title>
				<h2>Suffix</h2>
			</template>
			<template #text>
				<v-row>
					<v-col cols="3">Enabled, empty</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" suffix="bars" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Enabled, empty, prepend-inner-icon</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" prepend-inner-icon="person_4" suffix="bars" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Enabled, empty, prepend-inner-icon, append-inner-icon</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" prepend-inner-icon="person_4" append-inner-icon="visibility" suffix="bars" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Disabled, empty</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" disabled suffix="bars" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Disabled, filled</v-col>
					<v-col cols="6">
						<v-text-field label="Pressure" v-model="Disabled" disabled suffix="bars" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3">Number input:</v-col>
					<v-col cols="6">
						<hc-text-field 
							:rules="[
								v => !!v || 'Required',
								v => !isNaN(v) || 'Must be a number',
								v => (v >= 0 && v <= 100) || 'Must be between 0 and 100'
							]" 
							label="Pressure"
							v-model="pressure"
							type="number"
							suffix="bars"
							validate-on="eager"
						/>
					</v-col>
				</v-row>
			</template>
		</v-expansion-panel>
	</v-expansion-panels>
	<div style="margin-top: 50px">
		<h3>Style that cannot be modified</h3>
		<p>1、When inputting "Number Input", the element cannot be located, and it is difficult to customize. Use the default style of vuetify.</p>
	</div>
	<div style="margin-top: 50px">
		<h3>无法修改的样式</h3>
		<p>1、Number Input输入时，无法定位到元素，自定义难度较大，使用vuetify默认样式</p>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
const isShow = ref([
	'type',
	'orientation',
	'variant',
	'size',
	'state',
	'position',
	'menu',
])
const Disabled = ref('Disabled')
const Error = ref('Error')
const pressure = ref(500)
</script>

<style scoped lang="scss">
.v-expansion-panels {
	margin-bottom: 10px;
}

.btn-control {
	border-color: #cccccc;
	background-color: #f2f2f2 !important;
}

.description {
	padding: 15px;
	color: #ff0000;
}

.not-supported {
	padding: 15px 0;
	color: #ff0000;
}
</style>
