import { ChangeEvent, useState } from 'react';
import customDictionary from './data/data';

const App = () => {
	const [inputText, setinputText] = useState('');
	const [suggestedText, setSuggestedText] = useState('');

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let texts = e.target.value;
		setinputText(texts);

		const words = texts.split(' ');

		const correctedWords = words.map((word) => {
			const correctedWord = customDictionary[word.toLowerCase()];
			return correctedWord || word;
		});

		correctedWords.join(' ');

		const firstCorrection = correctedWords.find((word, idx) => {
			return word !== words[idx];
		});

		setSuggestedText(firstCorrection || '');
	};

	return (
		<div>
			<h1>Spell Check and Auto-Correction</h1>
			<textarea
				value={inputText}
				cols={40}
				rows={5}
				placeholder='Enter Text...'
				onChange={handleInputChange}></textarea>
			{suggestedText && (
				<p>
					Did you mean: <span>{suggestedText}</span>?
				</p>
			)}
		</div>
	);
};

export default App;
