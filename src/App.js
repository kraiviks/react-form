import { useState } from "react";
import "./App.css";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Button,
	Row,
	Col,
	Input,
	Form,
	ListGroup,
	ListGroupItem,
} from "reactstrap";

function App() {
	const [header, setHeader] = useState("");
	const [phone, setPhone] = useState("");
	const [headerError, setHeaderError] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [activeTab, setActiveTab] = useState("1");
	const [message, setMessage] = useState("");
	const [formD, setFormD] = useState([]);
	const getFormsData = (e) => {
		e.preventDefault();

		const data = new FormData(e.target);
		const dataArr = [];
		setMessage("Данные формы сохранены в formData");

		for (const key of data.entries()) {
			dataArr.push(`${key[0]} : ${key[1]}`);
		}
		setFormD(dataArr);
	};

	const trySubmitFile = (e) => {
		if (e.target.files.length > 5) {
			alert("Only 5 files accepted.");
			e.preventDefault();
		}
	};

	return (
		<div className="App">
			<Form
				encType="multipart/form-data"
				method="post"
				onSubmit={getFormsData}
			>
				<div className="tabs">
					<Nav tabs>
						<NavItem>
							<NavLink
								className={activeTab === "1" ? "active" : ""}
							>
								Основная информация
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === "2" ? "active" : ""}
							>
								Контактная информация{" "}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === "3" ? "active" : ""}
							>
								Фотография
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={activeTab === "4" ? "active" : ""}
							>
								Публикация{" "}
							</NavLink>
						</NavItem>
					</Nav>
					<TabContent activeTab={activeTab}>
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
											invalid={
												header !== "" ? false : true
											}
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
									<label
										htmlFor="status"
										className="mt-3 mb-3"
									>
										Статус: on|off
										<Input
											id="status"
											name="status"
											type="checkbox"
										/>
									</label>
									<Button
										color="primary"
										onClick={() => {
											if (header !== "") {
												setActiveTab("2");
											}
											setHeaderError(
												"Поле должно быть заполнено!"
											);
										}}
									>
										Next step
									</Button>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="2">
							<Row>
								<Col sm="12" className="inputs_wrapp mt-5">
									<label htmlFor="tel">
										Телефон:
										<Input
											id="tel"
											name="tel"
											type="text"
											required
											invalid={
												phone !== "" ? false : true
											}
											onChange={(e) => {
												setPhone(e.target.value);
											}}
										/>
										<div className="error">
											{phone === "" ? phoneError : ""}
										</div>
									</label>
									<label htmlFor="tel">
										Email:
										<Input
											id="email"
											name="email"
											type="text"
										/>
									</label>
									<div className="buttons">
										<Button
											color="primary"
											onClick={() => setActiveTab("1")}
										>
											Prev step
										</Button>
										<Button
											color="primary"
											onClick={() => {
												if (phone !== "") {
													setActiveTab("3");
												}
												setPhoneError(
													"Поле должно быть заполнено!"
												);
											}}
										>
											Next step
										</Button>
									</div>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="3">
							<Row>
								<Col sm="12" className="inputs_wrapp mt-5">
									<label htmlFor="photo">
										Photos: выберите до 5 фото
										<Input
											id="photo"
											name="photo"
											type="file"
											accept="image/png, image/jpeg"
											multiple
											onChange={trySubmitFile}
										/>
									</label>
									<div className="buttons">
										<Button
											color="primary"
											onClick={() => setActiveTab("2")}
										>
											Prev step
										</Button>
										<Button
											color="primary"
											onClick={() => {
												setActiveTab("4");
											}}
										>
											Next step
										</Button>{" "}
									</div>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="4">
							<Row>
								<Col sm="12" className="inputs_wrapp mt-5">
									<ListGroup>
										<ListGroupItem>
											<label htmlFor="services1">
												Paid services 1:
											</label>
											<Input
												id="services1"
												name="services1"
												type="checkbox"
											/>
										</ListGroupItem>
										<ListGroupItem>
											<label htmlFor="services2">
												Paid services 2:
											</label>
											<Input
												id="services2"
												name="services2"
												type="checkbox"
											/>
										</ListGroupItem>
										<ListGroupItem>
											<label htmlFor="services3">
												Paid services 3:
											</label>
											<Input
												id="services3"
												name="services3"
												type="checkbox"
											/>
										</ListGroupItem>
										<ListGroupItem>
											<label htmlFor="services4">
												Paid services 4:
											</label>
											<Input
												id="services4"
												name="services4"
												type="checkbox"
											/>
										</ListGroupItem>
										<ListGroupItem>
											<label htmlFor="services5">
												Paid services 5:
											</label>
											<Input
												id="services5"
												name="services5"
												type="checkbox"
											/>
										</ListGroupItem>
									</ListGroup>

									<div className="buttons">
										<Button
											color="primary"
											onClick={() => setActiveTab("3")}
										>
											Prev step
										</Button>
										<Button color="primary" type="submit">
											Save
										</Button>
									</div>
									<div className="message-box">{message}</div>
									<ListGroup>
										{formD
											? formD.map((item, index) => (
													<ListGroupItem key={index}>
														{item}
													</ListGroupItem>
											  ))
											: null}
									</ListGroup>
								</Col>
							</Row>
						</TabPane>
					</TabContent>
				</div>
			</Form>
		</div>
	);
}

export default App;
