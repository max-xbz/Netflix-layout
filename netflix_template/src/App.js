import React from 'react';
import logo from './headerlogo.png';
import MyList from './components/MyList';
import Recommendation from './components/Recommendation';
import BottomList from './components/BottomList';
import { connect } from 'react-redux';
import { fetchData, removeOne, addOne } from './actions';
class App extends React.Component {
  componentDidMount() {
    console.log("hello");
    this.props.fetchData();
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
              <img style={{height: "100px"}} src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="content-container">
            <MyList mylist={this.props.data.mylist} removeOne={this.props.removeOne}/>
            <Recommendation recom={this.props.data.recommendations} addOne={this.props.addOne}/>
            <BottomList list={this.props.data.mylist}/>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
    removeOne: (id) => dispatch(removeOne(id)),
    addOne: (id) => dispatch(addOne(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
