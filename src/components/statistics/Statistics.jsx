import PropTypes from 'prop-types';
import { Section, List, Head } from './Statistics.styled';
import { getRandomHexColor } from '../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Head className="title">{title}</Head>}

      <List className="stat-list">
        {stats.map(item => (
          <li
            style={{ backgroundColor: getRandomHexColor(), width: '70px' }}
            key={item.id}
            className="item"
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
