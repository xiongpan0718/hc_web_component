<template>
	<div class="expansion-panels">
		<div class="text-subtitle-2 mb-2">Default with Switch</div>
		<div style="background-color: #F9F9F9; padding: 24px; border-radius: 8px;">
			<div style="width: 443px; margin-top: 8px;">
				<HcExpansionPanels>
					<HcExpansionPanel
						v-for="(item, index) in switchStates1"
						:key="index"
						:switch-value="item.switchValue"
						switch-label="Active"
						title="Title"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						@switch-toggle="val => item.switchValue = val"
					/>
				</HcExpansionPanels>
			</div>
		</div>

		<div class="text-subtitle-2 mt-4 mb-2">Accordion with Switch</div>
		<div style="padding: 24px;">
			<div style="width: 443px;">
				<HcExpansionPanels variant="accordion">
					<HcExpansionPanel
						v-for="(item, index) in switchStates2"
						:key="index"
						:switch-value="item.switchValue"
						switch-label="Active"
						title="Title"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						@switch-toggle="val => handleAccordionSwitch(index, val)"
					/>
				</HcExpansionPanels>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const switchStates1 = ref([
	{ switchValue: true },
	{ switchValue: false },
	{ switchValue: false }
]);

const switchStates2 = ref([
	{ switchValue: true },
	{ switchValue: false },
	{ switchValue: false }
]);

function handleAccordionSwitch(idx, val) {
	if (!val) {
		switchStates2.value[idx].switchValue = false;
	} else {
		switchStates2.value.forEach((item, i) => (item.switchValue = i === idx));
	}
}
</script>

<style scoped>
.expansion-panels {
	margin-top: 15px;
	background-color: #f5f5f5;
}
</style>
