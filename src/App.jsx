import { Button, Menu, MenuItem, MenuItemRadioGroup, Modal } from "@carbon/react";
import { useCallback, useState } from "react";

export default function App() {

	const [showModal, setShowModal] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});

	const onCloseModal = useCallback(() => {
		setShowModal(false);
		setShowMenu(false);
	});

	const onOpenMenu = useCallback((e) => {
		setMenuPosition({
			x: e.clientX,
			y: e.clientY
		});
		setShowMenu(true);
	});

	return (
		<div style={{
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			gap: 50,
			height: '120vh',
			justifyContent: 'center'
		}}>
			<div>Scroll down, then click this button:</div>
			<Button
				onClick={() => setShowModal(!showModal)}
			>
				Show Modal
			</Button>
			<Modal
				modalHeading="Modal"
				onRequestClose={onCloseModal}
				onRequestSubmit={onCloseModal}
				open={showModal}
				primaryButtonText="OK"
				secondaryButtonText="Cancel"
			>
				<Button
					onClick={onOpenMenu}
				>
					Open action menu
				</Button>
				{(
					<Menu
						open={showMenu}
						x={menuPosition.x}
						y={menuPosition.y}
					>
						<MenuItem
							label="MenuItem"
						>
							<MenuItemRadioGroup
								items={['A', 'B', 'C']}
							/>
						</MenuItem>
					</Menu>
				)}
			</Modal>
		</div>
	);
}
