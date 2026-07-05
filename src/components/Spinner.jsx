import ClipLoader from 'react-Spinners/ClipLoader';

const override = {
	display: 'block',
	margin: '100px auto'
};

const Spinner = ({ Loading }) => {
	return (
		<ClipLoader 
			color = '#433ca'
			Loading = {Loading}
			cssOverride = {override}
			size = {150}
		/>
	);
};
export default Spinner;