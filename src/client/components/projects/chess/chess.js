import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board'

class Chess extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            selectedPiece: {
                x: null,
                y: null
            },
		    pieces: [
		        [{},{},{},{},{},{},{},{}],
		        [{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'}],
		        [{},{},{},{},{},{},{},{}],
		        [{},{},{},{},{},{},{},{}],
		        [{},{},{},{},{},{},{},{}],
		        [{},{},{},{},{},{},{},{}],
                [{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'},{pieceType: 'P'}],
		        [{},{},{},{},{},{},{},{}]
		    ]
		};
	}

	render() {

		return (
		    <div>
		        <h1>Chess</h1>
                <p>So stylish. almost like it's a work in progress. One day I'll come back and finish this...</p>
                <Board
                    selectedPiece={this.state.selectedPiece}
                    pieces={this.state.pieces}
                    selectSquare={this.selectSquare}
                />
		    </div>
        )
	}


    selectSquare = (x, y) => {
        this.setState({selectedPiece: {x,y}});
    }
}

export default Chess;