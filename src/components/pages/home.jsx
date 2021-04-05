import React from 'react'
import styled from 'styled-components';

const PageContainer = styled.div`

  @media (max-width: 768px) {
    display: none;
  }


`



class Home extends React.Component {
  render() {
    return <PageContainer>This is your workspace</PageContainer>;
  }
};

export default Home;