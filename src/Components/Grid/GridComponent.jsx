import React, { useEffect, useState } from 'react';
import GameRow from './GameRow';
import { validateWord } from './Logic';

const GridComponent = (props) => {
	const {
		input = [],
		callback,
		gameOver
	} = props;

	const [pointer, setPointer] = useState({
		"col": 0,
		"row": 0
	})
	// const [word, setWord] = useState([])
	const [rowObjArr, setRowObjArr] = useState([])
	const [activeRow, setActiveRow] = useState(0);
	const [message, setMessage] = useState("")

	const msgArr = ["Exceptional", "Outstanding", "Amazing", "Great", "Very Good", "That was close", "Better luck next time"]

	useEffect(() => {
		let lastIndex = input.length - 1;
		let rowObj = rowObjArr[activeRow];
		let arr = []

		if (input.length > 0 && !gameOver) {
			if (input[lastIndex] !== "goback" && input[lastIndex] !== "submit") {

				// stop accepting input after 5 letters per row
				if (pointer.col < 5) {
					let rowWord = ""

					// Active row is empty
					if (rowObj === undefined) {
						let obj = {
							"rowWord": "",
							"letterStateArr": ["default", "default", "default", "default", "default"]
						}
						arr = rowObjArr;
						rowWord = input[lastIndex];
						obj.rowWord = rowWord;
						arr.push(obj)
						setRowObjArr(arr);
					}
					else {
						arr = rowObjArr;
						rowObj.rowWord = rowObj.rowWord + input[lastIndex];
						arr[activeRow] = rowObj;
						setRowObjArr(arr);
					}

				}
				let pObj = {
					"col": pointer.col <= 4 ? pointer.col + 1 : pointer.col,
					"row": pointer.row
				}
				setPointer(pObj)
			}
			else if (input[lastIndex] === "goback") {
				arr = rowObjArr;
				if (rowObj.rowWord !== undefined) {
					rowObj.rowWord = rowObj.rowWord.slice(0, -1);
					arr[activeRow] = rowObj;
					setRowObjArr(rowObjArr);
					let pObj = {
						"col": pointer.col > 0 ? pointer.col - 1 : pointer.col,
						"row": pointer.row
					}
					setPointer(pObj)
				}

			}
			else if (input[lastIndex] === "submit") {
				let respObj = validateWord(rowObj.rowWord);

				if (respObj.type === "correct") {
					callback();
				}
				arr = rowObjArr;
				rowObj.letterStateArr = respObj.letterStateArr;
				arr[activeRow] = rowObj;
				setRowObjArr(arr);

				if (respObj.isValid) {
					let pObj = {
						"col": 0,
						"row": pointer.row + 1
					}
					setPointer(pObj);
					setActiveRow(activeRow => activeRow + 1);
				}
			}
		}
	}, [input])

	useEffect(() => {
		if (activeRow === 6) {
			callback()
		}
	}, [activeRow]);

	useEffect(() => {
		if (gameOver) {
			setMessage(msgArr[activeRow - 1]);
		}
	}, [gameOver])

	const displayGrid = () => {
		let html = [];
		for (let i = 0; i < 6; i++) {
			html.push(
				<GameRow key={i} index={i} rowObjArr={rowObjArr} activeRow={activeRow} />
			)
		}
		return html;
	}

	const showMessage = () => {
		return (
			<div className="message-block">
				{message}
			</div>
		)
	}

	return (
		<div className='gridbody-wrapper'>
			{
				message.length > 0 ?
					showMessage() : ""
			}
			<div className='board'>
				{
					displayGrid()
				}
			</div>
		</div>
	)
}

export default GridComponent