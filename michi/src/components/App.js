import React from 'react';
import { connect } from 'react-redux';
import InfoBar from '../containers/InfoBar';
import Matrix from '../containers/Matrix';
import End from '../containers/End';

const styles = {
  app: {
    position: 'relative',
  },
};

export default ({ juegoTerminado }) => (
  <div className="app" style={styles.app}>
    {juegoTerminado && <End />}
    <InfoBar />
    <Matrix />
  </div>
);