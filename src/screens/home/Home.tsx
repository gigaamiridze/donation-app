import React from 'react';
import { Header, Button } from '../../components';

function Home() {
  return (
    <>
      <Header title='Azzahri A.' type={1} />
      <Button title='Donate' />
      <Button title='Confirm Payment' isDisabled={true} />
    </>
  )
}

export default Home;
