import React from 'react';
import PropTypes from 'prop-types';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

class MenuAdmin extends React.Component {

    static propTypes = {
        burgers: PropTypes.object,
        deleteBurger: PropTypes.func,
        updateBurger: PropTypes.func,
        addBurger: PropTypes.func,
        loadSampleBurgers: PropTypes.func
    };

    render() {
        return (
            <div className='menu-admin'>
                <h2>Menu Management</h2>
                {Object.keys(this.props.burgers).map(key =>{
                    return <EditBurgerForm
                    deleteBurger={this.props.deleteBurger}
                    key={key}
                    index ={key}
                    burger={this.props.burgers[key]}
                    updateBurger={this.props.updateBurger}
                    />;
                })}
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.loadSampleBurgers}>
                    Add Burger
                </button>
            </div>
        )
    }
}

export default MenuAdmin;