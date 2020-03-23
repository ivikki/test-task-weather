// outsource dependencies
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// local dependencies
import s from './style.module.scss';

export default class Card extends PureComponent {
    render () {
        const { weather, title } = this.props;
        return (
            <div className={s.wrapper}>
                {title}
                <div className={s.card}>
                    <p>Температура: {_.get(weather, 'main.temp')}&deg;С</p>
                    <p>Минимальная температура: {_.get(weather, 'main.temp_min')}&deg;С</p>
                    <p>Максимальная температура: {_.get(weather, 'main.temp_max')}&deg;С</p>
                    <p>Скорость ветра: {_.get(weather, 'wind.speed')} м/с</p>
                    <p>Давление: {_.get(weather, 'main.pressure')} мм.рт.ст</p>
                    <p>Влажность: {_.get(weather, 'main.humidity')}%</p>
                </div>
            </div>
        );
    }
}
Card.propTypes = {
    weather: PropTypes.object.isRequired,
    title: PropTypes.node,
};
Card.defaultProps = {
    title: ''
};
