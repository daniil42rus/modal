import React, { useState } from 'react';
import { Modal, ModalAnimated } from './components/Modal';
import './index.scss';

function App() {
	const [open, setOpen] = useState(false);
	const [openAnimated, setOpenAnimated] = useState(false);

	return (
		<div className="App">
			<button onClick={() => setOpen(true)} className="open-modal-btn">
				✨ Открыть окно
			</button>
			{open && (
				<Modal open={open} setOpen={setOpen}>
					{/* <h2>Привет</h2> */}
					<img src="./giphy.webp" alt="" />
				</Modal>
			)}

			<button onClick={() => setOpenAnimated(true)} className="open-modal-btn">
				✨ Открыть окно с анимацией 
			</button>

			<ModalAnimated open={openAnimated} setOpen={setOpenAnimated}>
				<img src="./giphy.webp" alt="" />
			</ModalAnimated>
		</div>
	);
}

export default App;
