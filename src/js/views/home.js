import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.createAgenda()
		actions.getData()


	}, [])
	let itemid = 0

	return (
		<>
			<div className="contaier d-flex justify-content-center">
				<div className="list-group w-75 p-5">
					<Link to="/demo" className="d-flex justify-content-end pb-2">
						<button className="btn btn-success ">crate contact</button>
					</Link>
					{store.contacts.map((item, index) => (

						<div className="card mb-3p-0 m-0" key={index}>
							<div className="row g-0">
								<div className="col-md-4">
									<img src="https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png" className="img-fluid rounded-start" />
								</div>
								<div className="col-md-8">
									<div className="card-body row">
										<ul className="p-0 m-0 col-10">
											<li className="list-group-item border border-0 p-0 fs-2">{item.name}</li>
											<li className="list-group-item border border-0 p-0 fs-3">{item.address}</li>
											<li className="list-group-item border border-0 p-0 fs-5">{item.phone}</li>
											<li className="list-group-item border border-0 p-0 fs-6">{item.email}</li>
										</ul>
										<Link to="/demo" className="col-1 h-50 ">
											<button type="button" style={{ border: 'none', background: 'none' }} className="btn btn-outline-light text-secondary" onClick={() => actions.setid(item)}><i className="fa-solid fa-pencil"></i></button>
										</Link>
										<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => itemid = item.id} style={{ border: 'none', background: 'none' }} className="col-1 btn btn-outline-light h-50 text-secondary"><i className="fa-solid fa-trash"></i></button>


										<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-header">
														<h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
														<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													</div>
													<div className="modal-body">
														if you delete this the entire universe will go down
													</div>
													<div className="modal-footer">
														<button type="button" className="btn btn-primary" onClick={() => actions.deleteContact(itemid)} data-bs-dismiss="modal">yes baby!</button>
														<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">oh no!</button>
													</div>
												</div>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
					))}

				</div>
			</div>

		</>
	)

}


/* 		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			</div> */