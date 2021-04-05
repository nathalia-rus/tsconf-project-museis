import React from 'react'
import styled from 'styled-components';
import { connect } from "react-redux";
import {archiveTask} from "../../redux/actions";

// Dont worry about mobile UI. Pretend this is only for Desktop.
// Hence why the media query below has been added.
// Feel free to add styling to the Desktop page wrapper on this styled component directly 
// rather than creating another one underneath.


const DesktopPageContainer = styled.div`
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
    <DesktopPageContainer>
      
      <div>This is the main page</div>

      <button onClick={() => {
      this.props.archiveTask(3)
    }}>
      Redux action example: by clicking this, you archive the task of ID 3. Check what happens in the Redux Dev Tools.
      </button>

    </DesktopPageContainer>)
  }
};


export default connect(mapStateToProps, actionCreators)(Home);
