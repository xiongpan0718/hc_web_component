<template>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>单选状态</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
      />
    </div>
    <div style="flex: 1">
      <h4>多选状态,增加checkbox效果，内容样式默认显示</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        focused
        multiple
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>Disabled</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        disabled
      />
    </div>
    <div style="flex: 1">
      <h4>多选状态，搜索图标，内容纸片显示</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        :menu-icon="null"
        append-inner-icon="search"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        chips
        clearable
        closable-chips
        multiple
      />
    </div>
  </div>
  <div class="d-flex" style="width: 100%;gap: 20px">
    <div style="flex: 1">
      <h4>error状态</h4>
      <v-autocomplete
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        error-messages="There is an error message"
        label="autocomplete"
        placeholder="please enter"
        variant="outlined"
        clearable
        error
      />
    </div>
    <div style="flex: 1">
      <h4>No Data</h4>
      <v-autocomplete
        :items="[]"
        no-data-text="No result"
        placeholder="please enter"
        variant="outlined"
        clearable
      />
    </div>
  </div>
  <div style="margin-top: 50px;">
    <h3>Style that cannot be modified</h3>
    <p>1、Cannot modify the position of the label</p>
    <p>2、The icon selected on the right side of the dropdown list cannot be modified</p>
    <p>3、Multiple selection, if the number exceeds a certain limit, hide and display the remaining part. The remaining number displayed cannot be modified</p>
    <p>4、Multiple selection. The close icon is inconsistent with the prototype and cannot be modified</p>
    <p>5、The close icon is inconsistent with the prototype and cannot be modified</p>
    <p>6、The up and down arrow icons on the right cannot be modified</p>
    <p>7、The initial state label is displayed in the center of the input box, while the placeholder (please enter) attribute value cannot be displayed，</p>
    <p style="text-indent: 25px">The placeholder will only display when the input box value is empty after obtaining the focus, and the label position will change from the middle to the top;</p>
    <p>8、Error status form, cannot automatically add red additional internal icon display</p>
    <p>9、The default text prompt cannot be modified without displaying the text as a result, but the property (no data text) can be used to specify the text to be displayed when there is no data</p>
    <h3>无法修改的样式</h3>
    <p>1、无法修改label的位置</p>
    <p>2、下拉列表选中后的右侧选中图标，无法修改</p>
    <p>3、多选，超出一定个数，隐藏显示剩余部分，显示的剩余的个数，无法修改</p>
    <p>4、多选close图标和原型不一致，无法修改</p>
    <p>5、close 图标于原型不一致，无法修改</p>
    <p>6、右侧上下箭头图标无法修改</p>
    <p>7、初始状态label显示在输入框中心位置，而placeholder（please enter）属性值无法显示，</p>
    <p style="text-indent: 25px">placeholder只会在获取焦点后判断输入框值为空才会显示，这时label位置发生变化由之前中间转移到头部；</p>
    <p>8、error状态表单，不可以自动增加红色附加内部图标显示</p>
    <p>9、没有结果显示文本无法修改默认文本提示，但是可以通过属性（no-data-text）指定没有数据时显示的文本</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
h4{
  margin-bottom: 10px;
}
</style>
