import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './Board';
import '../css/index.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.props.squares}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  squares: PropTypes.array.isRequired
};

function mapStateToProps( state, ownProps ) {
  return { squares: state.squares}
};

export default connect( mapStateToProps)(Game);

// ========================================
//ReactDOM.render(
//  <Game />,
//  document.getElementById('root')
// );
