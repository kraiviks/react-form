import { useState } from "react";
import "./App.css";
import classnames from "classnames";
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
				id="form"
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
								<Col sm="12" className="inputs_wrapp">
									<label htmlFor="inputHeader">
										Заголовок:
										<Input
											id="inputHeader"
											name="header"
											placeholder="Header"
											type="text"
											required
											onChange={(e) => {
												setHeader(e.target.value);
											}}
										/>
										<div className="error">
											{headerError}
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
									<label htmlFor="status">
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
								<Col sm="12" className="inputs_wrapp">
									<label htmlFor="tel">
										Телефон:
										<Input
											id="tel"
											name="tel"
											type="text"
											required
											onChange={(e) => {
												setPhone(e.target.value);
											}}
										/>
										<div className="error">
											{phoneError}
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
								<Col sm="12" className="inputs_wrapp">
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
								<Col sm="12" className="inputs_wrapp">
									<label htmlFor="services1">
										Paid services 1
										<Input
											id="services1"
											name="services1"
											type="checkbox"
										/>
									</label>
									<label htmlFor="services2">
										Paid services 2
										<Input
											id="services2"
											name="services2"
											type="checkbox"
										/>
									</label>
									<label htmlFor="services3">
										Paid services 3
										<Input
											id="services3"
											name="services3"
											type="checkbox"
										/>
									</label>
									<label htmlFor="services4">
										Paid services 4
										<Input
											id="services4"
											name="services4"
											type="checkbox"
										/>
									</label>
									<label htmlFor="services5">
										Paid services 5
										<Input
											id="services5"
											name="services5"
											type="checkbox"
										/>
									</label>
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
									<ul>
										{formD
											? formD.map((item, index) => (
													<li key={index}>{item}</li>
											  ))
											: null}
									</ul>
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
