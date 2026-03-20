<template>
	<div class="hc-progress-linear-examples">
		<!-- 示例 1: 基础用法 / Example 1: Basic Usage -->
		<div class="text-subtitle-2 mb-2">基础用法 / Basic Usage</div>
		<div style="margin-bottom: 24px;">
			<HcProgressLinear 
				v-model="progress1" 
			/>
		</div>

		<!-- 示例 2: 三种尺寸 / Example 2: Three Sizes -->
		<div class="text-subtitle-2 mb-2">三种尺寸 / Three Sizes</div>
		<div style="margin-bottom: 24px;">
			<div style="margin-bottom: 16px;">
				<div class="text-caption mb-1">Large (32px)</div>
				<HcProgressLinear 
					v-model="progress2" 
					size="large" 
				/>
			</div>
			<div style="margin-bottom: 16px;">
				<div class="text-caption mb-1">Medium (24px) - 默认</div>
				<HcProgressLinear 
					v-model="progress2" 
					size="medium" 
				/>
			</div>
			<div>
				<div class="text-caption mb-1">Small (8px)</div>
				<HcProgressLinear 
					v-model="progress2" 
					size="small" 
				/>
			</div>
		</div>

		<!-- 示例 3: 带 Label 和 Caption / Example 3: With Label and Caption -->
		<div class="text-subtitle-2 mb-2">带 Label 和 Caption / With Label and Caption</div>
		<div style="margin-bottom: 24px;">
			<HcProgressLinear 
				v-model="progress3"
				size="medium"
				label="Vehicle registration"
				:show-label="true"
				caption="60% achieved"
				:show-caption="true"
			/>
		</div>

		<!-- 示例 4: 带 Icons / Example 4: With Icons -->
		<div class="text-subtitle-2 mb-2">带 Icons / With Icons</div>
		<div style="margin-bottom: 24px;">
			<HcProgressLinear 
				v-model="progress4"
				size="medium"
				label="Label"
				:show-label="true"
				:icons="['file_download', { icon: 'delete', color: 'error' }]"
				:show-icons="true"
				caption="60% achieved"
				:show-caption="true"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const progress1 = ref(40);
const progress2 = ref(60);
const progress3 = ref(60);
const progress4 = ref(40);
</script>

<style scoped>
.hc-progress-linear-examples {
	margin-top: 15px;
	background-color: #f5f5f5;
	padding: 24px;
}
</style>

