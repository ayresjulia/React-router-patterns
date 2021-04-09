import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {
	const [ formData, setFormData ] = useState({ color: "" });
	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ ...formData });
		setFormData({ color: "" });
		history.push("/colors");
	};

	return (
		<Form className="Form" onSubmit={handleSubmit}>
			<FormGroup>
				<Label htmlFor="color">Pick a color</Label>
				<Input name="color" id="color" value={formData.color} onChange={handleChange} />
			</FormGroup>
			<Button className="Form-btn">Add color</Button>

			<Link to="/colors" className="btn btn-secondary">
				Go Back
			</Link>
		</Form>
	);
};

export default NewColorForm;
