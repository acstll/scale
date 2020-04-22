import React from 'react';
import { ScaleButton, ScaleCard, ScaleLink, ScaleTag } from '@scaleds/react-wrapper';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <h1>React App</h1>
    <p>Using <code>@scaleds/components</code> via <code>@scaleds/react-wrapper</code>.</p>
    <div>
      <ScaleButton variant="primary">Label here</ScaleButton>
    </div>
    <div>
      <ScaleCard>This is the Card component.</ScaleCard>
    </div>
    <div>
      <ScaleLink href="http://example.com" target="_blank" variant="success">Success kind of link</ScaleLink>
    </div>
    <div>
      <ScaleTag dismissable size="small">A tag</ScaleTag>
    </div>
  </div>
);

export default App;
