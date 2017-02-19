import React, { PropTypes } from 'react';
import styles from './SearchBar.css';

const SearchBar = (props) => (
	<div className={styles.root}>
		<input 
			className={styles.input} 
			onChange={(e) => props.updateText(e.target.value)}
		/>
	</div>

)
SearchBar.propTypes = {
	updateText: PropTypes.func,
}

export default SearchBar;