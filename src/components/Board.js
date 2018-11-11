import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as squaresActions from '../actions/squaresActions';
import Square from './Square';

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.props.squares.slice();

    switch(squares[i]) {
      case null:
        this.props.actions.updateSquares(i,"X")
        break;
      case "X":
        this.props.actions.updateSquares(i, "O")
        break;
      default:
        this.props.actions.updateSquares(i, null)
    }
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.array.isRequired
};

function mapStateToProps( state, ownProps ) {
  return { squares: state.squares}
};
function mapDispatchToProps( dispatch ) {
  return {
    actions: bindActionCreators(squaresActions, dispatch)
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Board);
// ========================================

/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/
