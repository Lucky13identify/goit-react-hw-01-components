import PropTypes from 'prop-types';
import { Section, List, Head, Listing } from './Statistics.styled';
import { getRandomHexColor } from '../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Head className="title">{title}</Head>}

      <List className="stat-list">
        {stats.map(item => (
          <Listing key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </Listing>
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
