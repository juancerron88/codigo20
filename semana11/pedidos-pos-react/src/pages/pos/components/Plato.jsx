import PropTypes from 'prop-types';
import { useContext } from 'react';
import { PosContext } from '../context/PosState';

const Plato = (props) => {
	const { platoObj } = props;
	const { modificarPedido } = useContext(PosContext);

	return (
		<div className="carta__plato">
			<img src={platoObj.url} alt="" />
			<h4 className="carta__titulo">{platoObj.nombre}</h4>
			<span className="carta__precio">S/ {platoObj.precio}</span>
			<div className="carta__botones">
				<button
					className="boton boton-outline-primary boton-restar"
					onClick={() => modificarPedido(platoObj.id, 'restar')}
				>
					-1
				</button>
				<button
					className="boton boton-outline-primary boton-sumar"
					onClick={() => modificarPedido(platoObj.id, 'sumar')}
				>
					+1
				</button>
			</div>
		</div>
	);
};

Plato.propTypes = {
	platoObj: PropTypes.object.isRequired
};
export default Plato;
