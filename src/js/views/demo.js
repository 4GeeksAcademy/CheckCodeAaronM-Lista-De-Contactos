import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [name, setname] = useState("")
	const [phone, setphone] = useState("")
	const [email, setemail] = useState("")
	const [address, setaddress] = useState("")

	useEffect(() => {
		if (store.temp.length === 0) {
			console.log("se vacio el componente temporal")
		} else {
			setname(store.temp.name)
			setemail(store.temp.email)
			setphone(store.temp.phone)
			setaddress(store.temp.address)
		}
	}, [store.temp.name, store.temp.email, store.temp.phone, store.temp.address, store.temp.id])
	return (
		<>

			<div className="container text-center mt-5 text-start">
				<h1>Add new contact</h1>
			</div>
			<div className="container w-75 text-start">
				<form>
					<div className="mb-3">
						<label htmlFor="inputName" className="form-label">Full Name</label>
						<input className="form-control" id="inputName" placeholder="Full Name" value={name} onChange={(e) => { (setname(e.target.value)) }} />
					</div>
					<div className="mb-3">
						<label htmlFor="InputEmail" className="form-label">Email address</label>
						<input className="form-control" id="InputEmail" placeholder="Email address" value={email} onChange={(e) => (setemail(e.target.value))} />
					</div>
					<div className="mb-3">
						<label htmlFor="InputPhone" className="form-label ">Phone</label>
						<input className="form-control" id="InputPhone" placeholder="Phone" value={phone} onChange={(e) => (setphone(e.target.value))} />
					</div>
					<div className="mb-3">
						<label htmlFor="InputAddress" className="form-label ">Address</label>
						<input type="Phone" className="form-control" id="InputAddress" placeholder="Address" value={address} onChange={(e) => (setaddress(e.target.value))} />
					</div>
					<button className="btn btn-primary w-100" onClick={(e) => { e.preventDefault(); actions.addContact({ name, phone, email, address }); }}>Save</button>
					<Link to="/">
						get back to contacts
					</Link>

				</form>
			</div>
		</>

	);
};




