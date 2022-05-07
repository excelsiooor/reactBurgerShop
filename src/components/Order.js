import React from 'react';
import Shipment from './Shipment';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';
import { func } from 'prop-types';

class Order extends React.Component {

    static propTypes = {
        burgers: PropTypes.object,
        order: PropTypes.object,
        deleteFromOrder: func,
    }

    renderOrder = (key) => {
        const burger = this.props.burgers[key];
        const count = this.props.order[key];
        const isAvailable = burger && burger.status === 'available';
        const transitionOptions = {
            classNames: 'order',
            key,
            timeout: {enter: 500, exit: 500}
        }

        if(!burger) return null;

        if (!isAvailable){
            return (
            <CSSTransition {...transitionOptions}>

            <li className='unavailable' key={key}>
                Sorry, {burger ? burger.name: 'burger'} temporarily unavailable
            </li>

            </CSSTransition>
            );
        }
        return (
            <CSSTransition {...transitionOptions}>

            <li key={key}>
            <span>
                <TransitionGroup 
                component='span' 
                className='count'>

                <CSSTransition 
                classNames='count' 
                key={count} 
                timeout={{enter:500, exit:500}}>

                <span>
                    {count}
                </span>
                </CSSTransition>
                </TransitionGroup>

                {` : ${burger.name} - `}
                <span>
                    {count * burger.price} ₴
                </span>

                <button 
                className='cancellItem'
                onClick={() => this.props.deleteFromOrder(key)}>
                &times;
                </button>
            </span>

            </li>
            </CSSTransition>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];

            const isAvailable = burger && burger.status === 'available';
            if(isAvailable) {
                return prevTotal + burger.price * count;
            }
            return prevTotal;
        }, 0)

        return (
            <div className='order-wrap'>
                <h2>Your Order</h2>

                <TransitionGroup component='ul' className='order'>
                {orderIds.map(this.renderOrder)}
                </TransitionGroup>

                {total > 0 ? (
                    <Shipment total={total}/>
                ) : (
                    <div className='nothingSelected'>
                        Choise your dish and add to the order
                    </div>
                )}
            </div>
        )
    }
}

export default Order;