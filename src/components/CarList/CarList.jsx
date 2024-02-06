import { PropTypes } from 'prop-types';
import { Item, List } from './CarList.styled';
import { CarItem } from 'components';

export const CarList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => (
        <Item key={car.id}>
          <CarItem car={car} />
        </Item>
      ))}
    </List>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};
