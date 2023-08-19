import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectDonationsState } from '../../redux';
import { style } from './style';

function DonationItem() {
  const { selectedDonationInformation } = useSelector(selectDonationsState);

  return (
    <Text>{selectedDonationInformation?.name}</Text>
  )
}

export default DonationItem;
