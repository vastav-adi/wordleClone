import React from 'react';

const KeyboardComponent = (props) => {
	const {
		callBackFunction
	} = props

	return (
		<div className='keyboard'>
			<div className='row m-0'>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="Q" onClick={callBackFunction}>Q</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="W" onClick={callBackFunction}>W</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="E" onClick={callBackFunction}>E</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="R" onClick={callBackFunction}>R</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="T" onClick={callBackFunction}>T</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="Y" onClick={callBackFunction}>Y</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="U" onClick={callBackFunction}>U</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="I" onClick={callBackFunction}>I</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="O" onClick={callBackFunction}>O</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="P" onClick={callBackFunction}>P</button>
				</div>
			</div>
			<div className='row m-0'>
				<div className='col p-0 m-1'>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="A" onClick={callBackFunction}>A</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="S" onClick={callBackFunction}>S</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="D" onClick={callBackFunction}>D</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="F" onClick={callBackFunction}>F</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="G" onClick={callBackFunction}>G</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="H" onClick={callBackFunction}>H</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="J" onClick={callBackFunction}>J</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="K" onClick={callBackFunction}>K</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="L" onClick={callBackFunction}>L</button>
				</div>
				<div className='col p-0 m-1'>
				</div>
			</div>
			<div className='row m-0 pb-2'>
				<div className='col p-0 m-1'>
					<button className="btn-default btn-wide" value="submit" onClick={callBackFunction}>Enter</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="Z" onClick={callBackFunction}>Z</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="X" onClick={callBackFunction}>X</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="C" onClick={callBackFunction}>C</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="V" onClick={callBackFunction}>V</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="B" onClick={callBackFunction}>B</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="N" onClick={callBackFunction}>N</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default" value="M" onClick={callBackFunction}>M</button>
				</div>
				<div className='col p-0 m-1'>
					<button className="btn-default btn-wide" value="goback" onClick={callBackFunction}>Del</button>
				</div>
			</div>
		</div>
	)
}

export default KeyboardComponent