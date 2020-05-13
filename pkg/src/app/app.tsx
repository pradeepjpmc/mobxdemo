import React from 'react';
import ReactDOM from 'react-dom';
import {DemoState, Demo} from './demo';
import{observable} from 'mobx';
import {observer} from 'mobx-react';

class AppState{
  @observable
  demo = new DemoState();
}

const appState = new AppState();

const App: React.FC<{ state:
  AppState }> =observer(({ state }) => {
  return (
    <>
    <Demo state={state.demo} />
    
      <div>ID ={state.demo.id.value}</div>
      <div>NAME = {state.demo.name.value}</div>
   </>
  );
});

ReactDOM.render(
  <App state={appState} />,
  document.getElementById("root")
);