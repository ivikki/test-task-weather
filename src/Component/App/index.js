// outsource dependencies
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

// local dependencies
import Card from '../Card';
import { TYPE } from './types';
import Loader from '../Loader';
import s from './style.module.scss';

class App extends PureComponent {
  componentDidMount = () => this.props.init();

  componentWillUnmount = () => this.props.clear();

  render () {
      const {
          initialized,
          errorMessage,
          today,
          list,
          update,
          expectAnswer
      } = this.props;

      if (!initialized) {
          return <Loader />;
      }

      return (
          <div className={s.wrapper}>
              {errorMessage && <div className={s.error}>{errorMessage}</div>}
              <h3>Погода в Харькове сегодня:</h3>
              <Card weather={today} />
              {list.length ? (
                  <div className={s.spinner}>
                      <Loader expectAnswer={expectAnswer}>
                          <div>
                              <h3>Погода в Харькове на 5 дней:</h3>
                              <div className={s.cards}>
                                  {list.map(el => (
                                      <Card
                                          key={el.dt}
                                          weather={el}
                                          title={<h4>
                                              {moment(_.get(el, 'dt_txt')).format('DD-MM-YYYY')}
                                          </h4>}
                                      />
                                  ))}
                              </div>
                          </div>
                      </Loader>
                  </div>
              ) : (
                  <button className={s.button} type="button" onClick={update}>
            Показать погоду в Харькове на 5 дней
                  </button>
              )}
          </div>
      );
  }
}

export default connect(
    // mapStateToProps
    state => ({
        initialized: state.appReducer.initialized,
        errorMessage: state.appReducer.errorMessage,
        list: state.appReducer.list,
        today: state.appReducer.today
    }),
    // mapDispatchToProps
    dispatch => ({
        init: () => dispatch({ type: TYPE.INITIALIZE }),
        clear: () => dispatch({ type: TYPE.CLEAR }),
        update: () => dispatch({ type: TYPE.UPDATE_DATA })
    })
)(App);

App.propTypes = {
    initialized: PropTypes.bool.isRequired,
    errorMessage: PropTypes.bool.isRequired,
    today: PropTypes.array.isRequired,
    list: PropTypes.object.isRequired,
    update: PropTypes.bool.isRequired,
    expectAnswer: PropTypes.bool.isRequired,
    init: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired
};
