import { CarList, Section } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsThunk } from '../../redux/car/carOperations';
import { selectedCars } from '../../redux/car/carSelectors';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectedCars);

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  return (
    <Section>
      <CarList cars={cars} />
    </Section>
  );
};
