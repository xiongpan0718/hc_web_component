import { defineComponent, toRef } from 'vue'

export const HcTireIcon = defineComponent({
  name: 'HcTireIcon',
  props: {
    level: {
      type: [Number, String],
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  emits: [],
  setup (props) {
    const level = toRef(props, 'level')
    
    return () => (
        <>
          { /* eslint-disable-next-line eqeqeq */ }
              { level.value == '1' && (
                <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 16 16" fill="none">
                  { /* eslint-disable-next-line max-len */ }
                  <path d="M7.99967 1.33334C4.31967 1.33334 1.33301 4.32 1.33301 8C1.33301 11.68 4.31967 14.6667 7.99967 14.6667C11.6797 14.6667 14.6663 11.68 14.6663 8C14.6663 4.32 11.6797 1.33334 7.99967 1.33334ZM11.333 8.66667H4.66634V7.33334H11.333V8.66667Z" fill="#B71C1C" />
                </svg>
              )}
          { /* eslint-disable-next-line eqeqeq */ }
              { level.value == '2' && (
                <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 16 16" fill="none">
                  { /* eslint-disable-next-line max-len */ }
                  <path d="M8.83397 16C6.66064 16 4.7073 14.6733 3.90064 12.6533L1.88064 7.58C1.67397 7.05333 2.1673 6.52667 2.7073 6.7L3.23397 6.87333C3.6073 6.99333 3.91397 7.28 4.06064 7.64667L5.00064 10H5.50064V2.16667C5.50064 1.70667 5.87397 1.33333 6.33397 1.33333C6.79397 1.33333 7.1673 1.70667 7.1673 2.16667V8H7.83397V0.833333C7.83397 0.373333 8.2073 0 8.6673 0C9.1273 0 9.50064 0.373333 9.50064 0.833333V8H10.1673V1.83333C10.1673 1.37333 10.5406 1 11.0006 1C11.4606 1 11.834 1.37333 11.834 1.83333V8H12.5006V3.83333C12.5006 3.37333 12.874 3 13.334 3C13.794 3 14.1673 3.37333 14.1673 3.83333V10.6667C14.1673 13.6133 11.7806 16 8.83397 16Z" fill="#B71C1C"/>
                </svg>
              )}
          { /* eslint-disable-next-line eqeqeq */ }
              { level.value == '3' && (
                <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 16 16" fill="none">
                  { /* eslint-disable-next-line max-len */ }
                  <path d="M8.49967 1.33333C4.81967 1.33333 1.83301 4.32 1.83301 8C1.83301 11.68 4.81967 14.6667 8.49967 14.6667C12.1797 14.6667 15.1663 11.68 15.1663 8C15.1663 4.32 12.1797 1.33333 8.49967 1.33333ZM9.16634 11.3333H7.83301V10H9.16634V11.3333ZM9.16634 8.66667H7.83301V4.66667H9.16634V8.66667Z" fill="#9E6100" />
                </svg>
              )}
          { /* eslint-disable-next-line eqeqeq */ }
              { level.value == '0' && (
                <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 16 16" fill="none">
                  { /* eslint-disable-next-line max-len */ }
                  <path d="M15.0705 3.76262C15.4609 4.15317 15.4609 4.78622 15.0704 5.17669L7.07039 13.1767C6.67986 13.5672 6.0467 13.5672 5.65617 13.1767L1.92933 9.44984C1.53783 9.05834 1.53895 8.42325 1.93182 8.03314L2.87872 7.09289C3.26969 6.70466 3.90103 6.70583 4.29056 7.09549L6.3623 9.16797L12.7166 2.82161C13.1072 2.43144 13.7402 2.4317 14.1305 2.82219L15.0705 3.76262Z" fill="#2E7D32"/>
                </svg>
              )}
            </>
    )
  },
})
