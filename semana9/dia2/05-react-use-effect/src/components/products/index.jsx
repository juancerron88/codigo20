import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URL_API_STORE } from '../../constants';
import Product from '../product';
import { UserContext } from '../context/ContextCarrito';

const Products = () => {
	const { agregarAlCarrito } = useContext(UserContext);

	const [productos, setProductos] = useState([]);
	const [limit, setLimit] = useState(5);
	const [loading, setLoading] = useState(true);

	const getProducts = async () => {
		const response = await axios.get(
			`${URL_API_STORE}/products?limit=${limit}`
		);
		setProductos(response.data);
		setLoading(false);
	};

	console.log('hola');

	useEffect(() => {
		console.log('ejecutando useEffect');
		getProducts();
	}, [limit]);

	return (
		<>
			<div className="row">
				{loading ? (
					<div>cargando...</div>
				) : (
					productos.map((prod) => {
						return (
							<div className="col-md-3 mb-3" key={prod.id}>
								<Product item={prod} agregarAlCarrito={agregarAlCarrito} />
							</div>
						);
					})
				)}
			</div>
			<div className="row">
				<div className="col">
					<button
						className="btn btn-outline-primary w-100"
						onClick={() => setLimit(limit + 5)}
						disabled={loading}
					>
						Cargar más...
					</button>
				</div>
			</div>
		</>
	);
};

export default Products;
