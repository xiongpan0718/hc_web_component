<template>
	<div class="hc-dialog-examples">
		<!-- 示例 1: 无按钮 / Example 1: No buttons -->
		<div class="text-subtitle-2 mb-2">无按钮 / No Buttons</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog1 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog1"
				title="隐私政策"
				title-icon="info"
				:closable="true"
                persistent
			>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</HcDialog>
		</div>

		<!-- 示例 2: 一个按钮 / Example 2: One button -->
		<div class="text-subtitle-2 mb-2">一个按钮 / One Button</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog2 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog2"
				title="确认操作"
				title-icon="info"
				:actions="{
					rightButton: {
						text: '确认',
						onClick: () => { dialog2 = false; }
					}
				}"
			>
				<p>您确定要执行此操作吗？</p>
			</HcDialog>
		</div>

		<!-- 示例 3: 两个按钮 / Example 3: Two buttons -->
		<div class="text-subtitle-2 mb-2">两个按钮 / Two Buttons</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog3 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog3"
				title="删除确认"
				title-icon="info"
				:actions="{
					centerButton: {
						text: '取消',
						onClick: () => { dialog3 = false; }
					},
					rightButton: {
						text: '删除',
						onClick: () => { 
							dialog3 = false;
						}
					}
				}"
			>
				<p>删除后无法恢复，确定要继续吗？</p>
			</HcDialog>
		</div>

		<!-- 示例 4: 三个按钮 / Example 4: Three buttons -->
		<div class="text-subtitle-2 mb-2">三个按钮 / Three Buttons</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog4 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog4"
				title="隐私政策"
				title-icon="info"
				:actions="{
					leftButton: {
						text: '保存',
						onClick: () => { 
							dialog4 = false;
						}
					},
					centerButton: {
						text: '取消',
						onClick: () => { dialog4 = false; }
					},
					rightButton: {
						text: '继续',
						onClick: () => { 
							dialog4 = false;
						}
					}
				}"
			>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			</HcDialog>
		</div>

		<!-- 示例 5: 无图标和关闭按钮 / Example 5: No icon and close button -->
		<div class="text-subtitle-2 mb-2">无图标和关闭按钮 / No Icon and Close Button</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog5 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog5"
				title="简单对话框"
				:title-icon="''"
				:closable="false"
				:actions="{
					rightButton: {
						text: '确定',
						onClick: () => { dialog5 = false; }
					}
				}"
			>
				<p>这是一个简单的对话框示例。</p>
			</HcDialog>
		</div>

		<!-- 示例 6: 带图标的三个按钮 / Example 7: Three buttons with icons -->
		<div class="text-subtitle-2 mb-2">带图标的三个按钮 / Three Buttons with Icons</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog6 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog6"
				title="保存确认"
				title-icon="info"
				:actions="{
					leftButton: {
						text: '保存',
						prependIcon: 'save',
						onClick: () => { 
							dialog6 = false;
						}
					},
					centerButton: {
						text: '取消',
						onClick: () => { dialog6 = false; }
					},
					rightButton: {
						text: '继续',
						appendIcon: 'chevron_right',
						onClick: () => { 
							dialog6 = false;
						}
					}
				}"
			>
				<p>左侧按钮带前置图标，右侧按钮带后置图标。</p>
			</HcDialog>
		</div>

		<!-- Example 7: Custom maxWidth -->
		<div class="text-subtitle-2 mb-2">自定义 maxWidth / Custom maxWidth</div>
		<div>
			<v-btn color="primary" @click="dialog7 = true">打开对话框 (自定义 800px)</v-btn>
			<HcDialog
				v-model="dialog7"
				title="自定义宽度"
				title-icon="info"
				:max-width="800"
			>
				<p>这是自定义 max-width 为 800px 的对话框。</p>
			</HcDialog>
		</div>

        <!-- 示例 8: 滚动 / Example 8: scroll  -->
		<div class="text-subtitle-2 mb-2">三个按钮 / scroll</div>
		<div style="margin-bottom: 24px;">
			<v-btn color="primary" @click="dialog8 = true">打开对话框</v-btn>
			<HcDialog
				v-model="dialog8"
				title="隐私政策"
				title-icon="info"
				:actions="{
					leftButton: {
						text: '保存',
						onClick: () => { 
							dialog8 = false;
						}
					},
					centerButton: {
						text: '取消',
						onClick: () => { dialog8 = false; }
					},
					rightButton: {
						text: '继续',
						onClick: () => { 
							dialog8 = false;
						}
					}
				}"
			>
				<p style="height: 163px; overflow-y: auto;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			</HcDialog>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const dialog1 = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
const dialog4 = ref(false);
const dialog5 = ref(false);
const dialog6 = ref(false);
const dialog7 = ref(false);
const dialog8 = ref(false);
</script>

<style scoped>
.hc-dialog-examples {
	margin-top: 15px;
	background-color: #f5f5f5;
	padding: 24px;
}
</style>

