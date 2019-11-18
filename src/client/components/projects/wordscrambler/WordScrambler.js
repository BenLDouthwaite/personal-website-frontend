import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import copyToClipboard from '../../utils/ClipboardUtils';

class WordScrambler extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		    words: '',
		    scrambledWords: ''
		};
	}

	scrambleWords = () => {
	    let unshuffledWords = this.state.words.split("\n");
	    let scrambledWordsArray = unshuffledWords.map(word => this.shuffle(word));
	    let scrambledWords = scrambledWordsArray.join("\n");
	    this.setState({scrambledWords: scrambledWords});
    }

    wordChange = (event) => {
        this.setState({words: event.target.value});
    }

    shuffle = (word) => {
        var a = word.split(""),
            n = a.length;

        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    copyScrambledWordsToClipboard = () => {
        copyToClipboard(this.state.scrambledWords);
    }

	render() {
		return (
		    <div>
		        <h1>Word Scrambler Page</h1>
		        <FormControl rows="10" as="textarea" aria-label="With textarea" onChange={this.wordChange}/>
                <Button disabled={this.state.words.length == 0} onClick={this.scrambleWords}>Scramble</Button>
		        <FormControl rows="10" disabled={true} value={this.state.scrambledWords}
		            height={"400px"}
		            as="textarea"
		            aria-label="With textarea"
                />
                <Button disabled={this.state.scrambledWords.length == 0} onClick={this.copyScrambledWordsToClipboard}>Copy to clipboard</Button>
		    </div>
        )
	}
}

export default WordScrambler;