// @flow
import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';
import MyComponent from './MyComponent';
import '../styles/main.scss';

const App = ({store}) => (
  <div className="project">
    <h3>{store.description}</h3>
    <MyComponent store={store} />
    <form>
      <input
        name="name"
        ref={name => store.name = name}
        type="text"
      />
      <input
        name="value"
        ref={val => store.value = val}
        type="text"
      />
    </form>
    Total: {store.sum} <br />
    <button
      onClick={() => {
        store.addOrder(store.name.value, store.value.value);
      }}
    >
      +
    </button>
    <button onClick={store.removeOrder}>
      -
    </button>
  </div>
);

App.propTypes = {
  store: PropTypes.object,
};

export default observer(App);
