import { ChangeEvent, useState } from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (event: ChangeEvent<HTMLInputElement>)  => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	// const [currentText, setCurrentText] = useState('');


	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event)
	};

	return (
		<input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
