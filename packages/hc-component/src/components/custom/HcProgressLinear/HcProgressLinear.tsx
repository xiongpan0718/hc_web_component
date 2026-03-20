import { defineComponent, computed } from 'vue';
import { VProgressLinear, VIcon } from 'vuetify/components';
import type { PropType } from 'vue';
import './HcProgressLinear.scss';

type Size = 'small' | 'medium' | 'large';

// 图标配置类型 / Icon configuration type
type IconConfig = string | { icon: string; color?: string };

// Props type
interface HcProgressLinearProps {
  color?: string;
  clickable?: boolean;
  size?: Size;
  label?: string;
  showLabel?: boolean;
  caption?: string;
  showCaption?: boolean;
  icons?: IconConfig[];
  showIcons?: boolean;
  height?: number | string;
  modelValue?: number;
  [key: string]: any; // Allow other VProgressLinear props
}

export const HcProgressLinear = defineComponent({
  name: 'HcProgressLinear',
  inheritAttrs: false,
  props: {
    ...VProgressLinear.props,
    color: {
      type: String,
      default: 'primary',
    },
    // 是否可点击 / Whether clickable
    clickable: {
      type: Boolean,
      default: true,
    },
    // 尺寸 / Size
    size: {
      type: String as PropType<Size>,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value),
    },
    // 标签文本 / Label text
    label: {
      type: String,
      default: '',
    },
    // 是否显示标签 / Whether to show label
    showLabel: {
      type: Boolean,
      default: false,
    },
    // 标题文本 / Caption text
    caption: {
      type: String,
      default: '',
    },
    // 是否显示标题 / Whether to show caption
    showCaption: {
      type: Boolean,
      default: false,
    },
    // Icons array (supports string or object config, object can configure color)
    icons: {
      type: Array as PropType<IconConfig[]>,
      default: () => [],
    },
    // 是否显示图标 / Whether to show icons
    showIcons: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'iconClick'],
  setup(props: HcProgressLinearProps, { attrs, slots, emit }) {
    // 根据尺寸计算高度 / Calculate height based on size
    const computedHeight = computed(() => {
      // 如果用户明确设置了 height，使用用户设置的值
      // If user explicitly set height, use user's value
      if (props.height !== undefined && props.height !== 4) {
        return props.height;
      }
      
      // 根据 size prop 设置默认高度 / Set default height based on size prop
      const sizeMap: Record<Size, number> = {
        small: 8,
        medium: 24,
        large: 32,
      };
      
      return sizeMap[props.size as Size] || 24;
    });

    // 处理 modelValue 更新 / Handle modelValue update
    const handleUpdateModelValue = (value: number) => {
      emit('update:modelValue', value);
    };

    // 处理图标点击事件 / Handle icon click event
    const handleIconClick = (iconConfig: IconConfig, index: number) => {
      const iconName = typeof iconConfig === 'string' ? iconConfig : iconConfig.icon;
      emit('iconClick', iconName, index);
    };

    // 获取图标名称 / Get icon name
    const getIconName = (iconConfig: IconConfig): string => {
      return typeof iconConfig === 'string' ? iconConfig : iconConfig.icon;
    };

    // 获取图标颜色 / Get icon color
    const getIconColor = (iconConfig: IconConfig): string | undefined => {
      return typeof iconConfig === 'string' ? undefined : iconConfig.color;
    };

    // 过滤自定义 props / Filter custom props
    const filteredProps = computed(() => {
      const { 
        size, 
        label, 
        showLabel, 
        caption, 
        showCaption, 
        icons, 
        showIcons,
        height,
        ...rest 
      } = props;
      return rest;
    });

    // 计算类名 / Calculate class names
    const componentClasses = computed(() => {
      return [
        'hc-progress-linear',
        `hc-progress-linear--${props.size}`,
        {
          'hc-progress-linear--with-label': props.showLabel && props.label,
          'hc-progress-linear--with-caption': props.showCaption && props.caption,
          'hc-progress-linear--with-icons': props.showIcons && props.icons && props.icons.length > 0,
        },
      ];
    });

    return () => (
      <div class={componentClasses.value}>
        {/* Label 和 Icons 区域 / Label and Icons area */}
        {(props.showLabel && props.label) || (props.showIcons && props.icons && props.icons.length > 0) ? (
          <div class="hc-progress-linear__header">
            {props.showLabel && props.label && (
              <span class="hc-progress-linear__label">
                {slots.label ? slots.label() : props.label}
              </span>
            )}
            {props.showIcons && props.icons && props.icons.length > 0 && (
              <div class="hc-progress-linear__icons">
                {props.icons.map((iconConfig: IconConfig, index: number) => {
                  const iconName = getIconName(iconConfig);
                  const iconColor = getIconColor(iconConfig);
                  return (
                    <VIcon 
                      key={index} 
                      size="24" 
                      color={iconColor}
                      class="hc-progress-linear__icon"
                      onClick={() => handleIconClick(iconConfig, index)}
                      style={{ cursor: 'pointer' }}
                    >
                      {iconName}
                    </VIcon>
                  );
                })}
              </div>
            )}
          </div>
        ) : null}

        {/* Progress Bar / 进度条 */}
        <VProgressLinear
          {...filteredProps.value}
          {...attrs}
          height={computedHeight.value}
          clickable={props.clickable !== undefined ? props.clickable : true}
          onUpdate:modelValue={handleUpdateModelValue}
          class="hc-progress-linear__bar"
        >
          {slots.default && slots.default()}
        </VProgressLinear>

        {/* Caption 区域 / Caption area */}
        {props.showCaption && props.caption && (
          <span class="hc-progress-linear__caption">
            {slots.caption ? slots.caption() : props.caption}
          </span>
        )}
      </div>
    );
  },
});

