import { PropTypes } from 'prop-types';
import {
  Button,
  ButtonHeart,
  CardInfo,
  ImageWrapper,
  Title,
} from './CarItem.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export const CarItem = ({ car }) => {
  const {
    year,
    make,
    model,
    type,
    mileage,
    img,
    rentalPrice,
    rentalCompany,
    accessories,
  } = car;

  const address = car.address.split(', ');

  return (
    <>
      <ImageWrapper>
        <img src={img} alt={make + ' ' + model} />

        <ButtonHeart>
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </ButtonHeart>
      </ImageWrapper>

      <Title>
        <span>{make}</span>
        <span className="model">{model}</span>
        <span>{year}</span>
        <span>{rentalPrice}</span>
      </Title>

      <CardInfo>
        <span>{address[address.length - 2]}</span>
        <span>{address[address.length - 1]}</span>
        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{model}</span>
        <span>{mileage}</span>
        <span>{accessories[0]}</span>
      </CardInfo>

      <Button>Learn more</Button>
    </>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
