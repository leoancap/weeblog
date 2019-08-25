// Global
import moment from 'moment';
import React from 'react';
// Local
import { Container, FullDate, MonthsAgo } from './styles';

interface IProps {
  datePosted: number
  centered?: boolean
}

export default function Date({ datePosted, centered = false }:IProps) {
  const currentDate = moment(datePosted);
  return (
    <Container centered={centered}>
      <FullDate>{currentDate.format('MMM Do, YYYY')}</FullDate>
      <MonthsAgo>{`(${currentDate.fromNow()} )`}</MonthsAgo>
    </Container>
  );
}
