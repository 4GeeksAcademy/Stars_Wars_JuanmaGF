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
			personas: [],
			vehiculos: [],
			planetas: [],
			favorites: []
			
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
			},
			obtenerPersonas: () => {
				const obtenerPersona = (numero) => {
					const url = `https://www.swapi.tech/api/people/${numero}`;
					return fetch(url)
						.then(response => {
							if (!response.ok) {
								throw new Error(`No se ha podido obtener la información de ${url}`);
							}
							return response.json();
						})
						.then(data => data.result);
				};
			
				const realizarSolicitud = (numero, resultados) => {
					return obtenerPersona(numero)
						.then(persona => {
							resultados.push(persona);
							if (numero < 10) {
								return realizarSolicitud(numero + 1, resultados);
							} else {
								setStore({ personas: resultados });
								console.log(resultados);
								return resultados; 
							}
						})
						.catch(error => {
							console.error(`Error al obtener datos de https://www.swapi.tech/api/people/${numero}:`, error);
							if (numero < 10) {
								return realizarSolicitud(numero + 1, resultados);
							} else {
								setStore({ personas: resultados });
								console.log(resultados);
								return resultados; 
							}
						});
				};
			
				return realizarSolicitud(1, []);
			},
			obtenerPlanetas: () => {
				const obtenerPlaneta = (numero) => {
					const url = `https://www.swapi.tech/api/planets/${numero}`;
					return fetch(url)
						.then(response => {
							if (!response.ok) {
								throw new Error(`No se ha podido obtener la información de ${url}`);
							}
							return response.json();
						})
						.then(data => data.result);
				};
			
				const realizarSolicitud = (numero, resultados) => {
					return obtenerPlaneta(numero)
						.then(planeta => {
							resultados.push(planeta);
							if (numero < 10) {
								return realizarSolicitud(numero + 1, resultados);
							} else {
								setStore({ planetas: resultados });
								console.log(resultados);
								return resultados; 
							}
						})
						.catch(error => {
							console.error(`Error al obtener datos de https://www.swapi.tech/api/planets/${numero}:`, error);
							if (numero < 10) {
								return realizarSolicitud(numero + 1, resultados);
							} else {
								setStore({ planetas: resultados });
								console.log(resultados);
								return resultados; 
							}
						});
				};
			
				return realizarSolicitud(1, []);
			},
			obtenerVehiculos: () => {
				const obtenerVehiculo = (numero) => {
					const url = `https://www.swapi.tech/api/vehicles/${numero}`;
					return fetch(url)
						.then(response => {
							if (!response.ok) {
								throw new Error(`No se ha podido obtener la información de ${url}`);
							}
							return response.json();
						})
						.then(data => data.result);
				};
			
				const realizarSolicitud = (numero, resultados) => {
					return obtenerVehiculo(numero)
						.then(vehiculo => {
							resultados.push(vehiculo);
							if (numero < 10) {
								return realizarSolicitud(numero + 1, resultados);
							} else {
								setStore({ vehiculos: resultados });
								console.log(resultados);
								return resultados; 
							}
						})
						.catch(error => {
							console.error(`Error al obtener datos de https://www.swapi.tech/api/vehicles/${numero}:`, error);
							if (numero < 10) {
								return realizarSolicitud(numero + 1, resultados);
							} else {
								setStore({ vehiculos: resultados });
								console.log(resultados);
								return resultados; 
							}
						});
				};
			
				return realizarSolicitud(1, []);
			},
			setFavorites: (element) =>{
				console.log(element);
				let store = getStore()
				if(!store.favorites.includes(element.properties.name) ){
					setStore({favorites: [...store.favorites, element.properties.name]})
					console.log(store.favorites)
				}
			},
			deleteFavorite: (element)  =>{
				let store = getStore()
				const filtrado = store.favorites.filter((e) => {
					return(e != element)
					
				}) 
				setStore({favorites: filtrado})
			}
			
			
	}
}};

export default getState;
