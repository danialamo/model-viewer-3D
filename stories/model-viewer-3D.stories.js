import { html } from 'lit';
import '../src/model-viewer-3D.js';

export default {
  title: 'ModelViewer3D',
  component: 'model-viewer-3d',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <model-viewer-3d
      style="--model-viewer-3D-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </model-viewer-3d>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
