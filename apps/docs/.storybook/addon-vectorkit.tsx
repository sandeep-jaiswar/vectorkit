import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { tokens } from '@vectorkit/design-tokens';

// We can't easily use the actual Button from @vectorkit/ui because it might have complex 
// dependencies or look weird in the manager's small toolbar space without the full CSS.
// But we can use the TOKENS to style manager components.

const ADDON_ID = 'vectorkit-addon';
const TOOL_ID = `${ADDON_ID}/tool`;

const VectorKitTool = () => {
  return (
    <IconButton
      key={TOOL_ID}
      title="Vectorkit Brand"
      onClick={() => window.open('https://github.com/sandeepjaiswar/vectorkit', '_blank')}
      style={{
        color: tokens.colors.primary,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Vectorkit',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: VectorKitTool,
  });
});
