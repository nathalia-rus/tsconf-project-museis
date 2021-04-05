import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import {archiveTask} from "../../redux/actions";


const PageContainer = styled.div`

  @media (max-width: 768px) {
    display: none;
  }

`
const actionCreators = {
  archiveTask,
}


const mapStateToProps = state => {
  return { tasks: state.tasks };
};

class Home extends React.Component {
  render() {
    return (
    <PageContainer>
      
      <div>This is the main page</div>

      <button onClick={() => {
      this.props.archiveTask(3)
    }}>
      Example button: on clicking this, you archive the task of ID 3.
      </button>

    </PageContainer>)
  }
};


export default connect(mapStateToProps, actionCreators)(Home);
