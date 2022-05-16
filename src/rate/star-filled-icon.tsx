import Vue, { VNode } from 'vue';

export default Vue.extend({
  name: 'TStar',

  render(): VNode {
    return (
      <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.73207 1.54509C7.84211 1.32212 8.16006 1.32212 8.27011 1.5451L10.2053 5.46619L14.5325 6.09496C14.7785 6.13072 14.8768 6.43311 14.6987 6.60667L11.5675 9.65881L12.3067 13.9685C12.3488 14.2136 12.0915 14.4005 11.8714 14.2848L8.00109 12.25L4.13074 14.2848C3.91065 14.4005 3.65342 14.2136 3.69546 13.9685L4.43463 9.65881L1.30345 6.60667C1.12539 6.43311 1.22365 6.13072 1.46971 6.09496L5.79689 5.46619L7.73207 1.54509Z"
          fill="currentColor"
          fill-opacity="0.9"
        ></path>
      </svg>
    );
  },
});