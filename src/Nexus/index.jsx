import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// UI
import style from './style.scss';

const Nexus = ({ children }) => (
  <div className={cx('MarvelDevice', style.Device)}>
    <div className={cx('MarvelDevice_TopBar', style.TopBar)} />
    <div className={style.Sleep} />
    <div className={style.Volume} />
    <div className={style.Camera} />
    <div className={cx('MarvelDevice_Screen')}>
      {children}
    </div>
    <div className={cx('MarvelDevice_BottomBar', style.BottomBar)} />
  </div>
);

Nexus.propTypes = {
  children: PropTypes.node,
};

export default Nexus;
