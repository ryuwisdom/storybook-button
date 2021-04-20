import "@/assets/css/default.scss";
import  '@/assets/css/commonDisclosure.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout : 'centered'
}

