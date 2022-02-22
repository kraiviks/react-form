import React from "react";
import { TabPane, Row, Col, Input, Button } from "reactstrap";

const Tab = ({
	header,
	headerError,
	setHeader,
	setActiveTab,
	setHeaderError,
}) => {
	return (
		<TabPane tabId="1">
			<Row>
				<Col sm="12" className="inputs_wrapp mt-5">
					<label htmlFor="inputHeader">
						Заголовок:
						<Input
							id="inputHeader"
							name="header"
							placeholder="Header"
							type="text"
							required
							invalid={header !== "" ? false : true}
							onChange={(e) => {
								setHeader(e.target.value);
							}}
						/>
						<div className="error">
							{header === "" ? headerError : ""}
						</div>
					</label>
					<label htmlFor="inputTextarea">
						Описание:
						<Input
							id="inputTextarea"
							name="textarea"
							type="textarea"
						/>
					</label>
					<label htmlFor="status" className="mt-3 mb-3">
						Статус: on|off
						<Input id="status" name="status" type="checkbox" />
					</label>
					<Button
						color="primary"
						onClick={() => {
							if (header !== "") {
								setActiveTab("2");
							}
							setHeaderError("Поле должно быть заполнено!");
						}}
					>
						Next step
					</Button>
				</Col>
			</Row>
		</TabPane>
	);
};

export default Tab;
