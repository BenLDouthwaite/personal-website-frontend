import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const boardStyle = {
  display: 'grid',
  'gridTemplateColumns': 'auto auto auto auto auto auto auto auto',
}

const itemStyle = {
  border: '1px solid rgba(0, 0, 0, 0.8)',
  padding: '2px',
  height: '100px',
  'fontSize': '10px',
  'textAlign': 'center',
}


const colStyle = {
  padding: '0px',
}

class Board extends React.Component {

  onSelect = (x, y) => {
    this.props.selectSquare(x,y);
  }

  render() {

    let rowLimit = 8;

    return (
      <div>
        {
          Array.from({ length: rowLimit }, (_, i) => (
            <Row key={i}>
                {
                  Array.from({ length: rowLimit }, (_, j) => {
                    let selected = (
                        i === this.props.selectedPiece.x &&
                        j === this.props.selectedPiece.y
                    )

                    return(

                          <Col key={j} style={colStyle}>
                              <Square
                                key={i * rowLimit + j}
                                x={i}
                                y={j}
                                selected={selected}
                                onSelect={this.onSelect}
                                pieceType={this.props.pieces[i][j].pieceType}/>
                          </Col>
                        )

                  })
                }
            </Row>
          ))
        }
      </div>
    );
  }
}

export default Board;