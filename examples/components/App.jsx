import React, { Component } from 'react';
import style from './App.scss';

import { Nexus } from '../../dist';
import '../../dist/style.css';

const DEVICES = [
  {
    NAME: 'Nexus',
    COMPONENT: Nexus,
  },
];

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <section className={style.Wrapper}>
        <h1>
          React Mobile Devices
        </h1>

        <hr />

        {DEVICES.map((ITEM, index) => (
          <section key={index}>

            <div className={style.ComponentWrapper}>
              <ITEM.COMPONENT>
                Test!
              </ITEM.COMPONENT>
            </div>

            <h3>
              {ITEM.NAME}
            </h3>
          </section>
        ))}
      </section>
    );
  }
}

export default App;
