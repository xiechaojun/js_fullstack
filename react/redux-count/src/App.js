import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


class Count extends React.Component {
  state = {  }
  handleIn = () => {
    // store.dispatch({ type: 'INCREMENT'})
    this.props.increment();
  }
  handleDe = () => {
    // store.dispatch({ type: 'DECREMENT'})
    this.props.decrement();
  }
  handleAddFilm = () => {
    // store.dispatch({ 
    //   type: 'ADD_FILM',
    //   film:{ name:'葫芦娃大战哥斯拉' }
    // })
    this.props.addFilm()
  }
  render() { 
    console.log(this.props);
    const { count,films } = this.props;
    return (
      <div>
        count: {count}
        <button onClick={this.handleIn}>+</button>
        <button onClick={this.handleDe}>-</button>
        <button onClick={this.handleAddFilm}>添加电影</button>
        {
          films.map((film,i) => {
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count:state.count,
    films:state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => {
      console.log('foo')
    },
    increment: () => {dispatch({type:'INCREMENT'})},
    decrement: () => {dispatch({type:'DECREMENT'})},
    addFilm: () => {
      dispatch({
        type:'ADD_FILM',
        film:{name:'葫芦娃大战哥斯拉'}
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);