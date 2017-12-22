// @flow

import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';

const MyComponent = ({store}) => {
  const {orders} = store;
  return (
    <div className="MyComponent">
      {orders.map(order => <div>
        {`${order.name} for ${order.value}`}
      </div>
      )}
    </div>
  );
};

MyComponent.propTypes = {
  store: PropTypes.object,
};

export default observer(MyComponent);
