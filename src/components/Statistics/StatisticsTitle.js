import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const StatisticsTitle = ({ title }) => {
  return <h2 className={css.title}> {title}</h2>;
};

StatisticsTitle.protoTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
