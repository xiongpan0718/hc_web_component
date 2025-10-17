<template>
	<div class="d-flex" style="width: 100%;gap: 20px; margin-top: 20px;">
		<div style="flex: 1">
			<h4>3 rows (default)</h4>
			<hc-textarea :maxlength="300" label="label" counter no-resize />
		</div>
		<div style="flex: 1">
			<h4>4 rows</h4>
			<hc-textarea label="label" rows="4" no-resize />
		</div>
	</div>
	<div class="d-flex" style="width: 100%;gap: 20px; margin-top: 20px;">
		<div style="flex: 1">
			<h4>Disabled</h4>
			<hc-textarea label="label" disabled />
		</div>
		<div style="flex: 1">
			<h4>Disabled2</h4>
			<hc-textarea label="label" disabled v-model="Disabled" />
		</div>
	</div>
	<div class="d-flex" style="width: 100%;gap: 20px; margin-top: 20px;">
		<div style="flex: 1">
			<h4>Error1</h4>
			<hc-textarea append-inner-icon="error_outline"
				label="label" v-model="Error" error no-resize/>
		</div>
		<div style="flex: 1">
			<h4>Error2</h4>
			<hc-textarea 
				:rules="[v => v !== 'Error' || 'Input error: Error']"
				label="label"
				v-model="Error"
				validate-on="eager"
				counter persistent-counter no-resize/>
		</div>
	</div>
	<div style="margin-top: 50px">
		<h3>Style that cannot be modified</h3>
		<p>1、The icon at the lower right corner cannot be modified. It has been deleted</p>
	</div>
	<div style="margin-top: 50px;">
		<h3>无法修改的样式</h3>
		<p>1、无法修改右下角图标，已做删除</p>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const Disabled = ref('Disabled')
const Error = ref('Error')
</script>

<style scoped lang="scss">
h4 {
	margin-bottom: 10px;
}

.label {
	color: #1A1A1A;
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 2px;
}
</style>
