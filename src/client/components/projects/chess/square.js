import React from 'react';
import ReactDOM from 'react-dom';

const itemStyle = {
  border: '1px solid rgba(0, 0, 0, 0.8)',
//  padding: '2px',
  height: '100px',
  'fontSize': '10px',
  'textAlign': 'center',
}

class Square extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
        };
	}

	debug = () => {
	    this.props.onSelect(this.props.x, this.props.y);
	}

	render() {
        let x = this.props.x;
        let y = this.props.y;

	    var backgroundColor;
        const odd = x % 2;
        if (y % 2) {
            backgroundColor = odd ? 'black' : 'white';
        } else {
            backgroundColor = odd ? 'white' : 'black';
        }

        if (this.props.selected) {
            backgroundColor = 'red';
        }

        const st = Object.assign({backgroundColor}, itemStyle);

		return (
		    <div style={st} onClick={this.debug}>
                {
                    this.props.pieceType != null &&
                    <h1>{this.props.pieceType}</h1>
                }
            </div>
        )
	}
}

export default Square;