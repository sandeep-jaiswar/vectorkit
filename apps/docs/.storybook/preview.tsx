import type { Preview } from "@storybook/react";

import "@vectorkit/design-tokens/tokens.css";
// import "@vectorkit/ui/styles.css"; // The UI building step outputs CSS to dist/index.css, which we map to "styles.css".
import "@vectorkit/ui/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        {
          name: "surface",
          value: "#f9f9fb",
        },
      ],
    },
  },
};

export default preview;
