const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			temp: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getData: () => {

				fetch('https://playground.4geeks.com/contact/agendas/CodeAaronM')
					.then((Response) => Response.json())
					.then((data) => setStore({ contacts: data.contacts }))
					.catch((error) => {
						console.error("Error fetching the data:", error);
					});

			},
			createAgenda: () => {

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ title: 'Fetch POST Request Example' })
				}
				fetch("https://playground.4geeks.com/contact/agendas/CodeAaronM", requestOptions)
					.then(response => response.json())
					.then(data => console.log("se creo la agenda", data))

			},
			addContact: (props) => {
				const actions = getActions()
				const store = getStore();
				if (store.temp.length === 0) {
					const requestOptions = {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							"name": props.name,
							"phone": props.phone,
							"email": props.email,
							"address": props.address
						})
					}
					fetch('https://playground.4geeks.com/contact/agendas/CodeAaronM/contacts', requestOptions)
						.then((Response) => Response.json())
						.then(() => actions.getData())
						.catch((error) => {
							console.error("Error fetching the data:", error);
						});
				} else {
					actions.changeContact(props)
				}
			},
			deleteContact: (props) => {
				const actions = getActions()
				console.log("you are going to delete " + props)
				fetch(`https://playground.4geeks.com/contact/agendas/CodeAaronM/contacts/${props}`, { method: 'DELETE' })
					.then(() => { actions.getData() });

			},
			changeContact: (props) => {
				const store = getStore();
				const requestOptions = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"name": props.name,
						"phone": props.phone,
						"email": props.email,
						"address": props.address
					}),
					redirect: "follow"
				};
				fetch(`https://playground.4geeks.com/contact/agendas/CodeAaronM/contacts/${store.temp.id}`, requestOptions)
					.then(response => response.json())
					.then(data => {
						actions.getData()
						setStore({ temp: [] })
					});

			},
			setid: (props) => {
				setStore({ temp: props })
				console.log(props)
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
