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
import Tab from "./components/Tab/Tab";

const listGroup = [
	{
		title: "paid services 1",
		name: "service1",
	},
	{
		title: "paid services 2",
		name: "service2",
	},
	{
		title: "paid services 3",
		name: "service3",
	},
	{
		title: "paid services 4",
		name: "service4",
	},
	{
		title: "paid services 5",
		name: "service5",
	},
];

const App = () => {
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

		for (const [key, value] of data.entries()) {
			dataArr.push(`${key} : ${value}`);
		}

		// for (const key of data.entries()) {
		// 	dataArr.push( const {end, } = data.entries());
		// }
		setFormD(dataArr);
	};

	const trySubmitFile = (e) => {
		//const { files } = e.target;
		if (e.target.files.length > 5) {
			alert("Only 5 files accepted.");
			e.preventDefault();
		}
	};

	const checkPhone = () => {
		if (phone !== "") {
			setActiveTab("3");
		}
		setPhoneError("Поле должно быть заполнено!");
	};

	const listGroupItem = ({ title, name }) => {
		return (
			<ListGroupItem key={name}>
				<label htmlFor={name}>{title}</label>
				<Input id={name} name={name} type="checkbox" />
			</ListGroupItem>
		);
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
						<Tab
							header={header}
							headerError={headerError}
							setHeader={setHeader}
							setActiveTab={setActiveTab}
							setHeaderError={setHeaderError}
						/>
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
											onChange={(e) =>
												setPhone(e.target.value)
											}
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
											onClick={checkPhone}
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
										{listGroup
											? listGroup.map((item) =>
													listGroupItem(item)
											  )
											: null}
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
};

export default App;
