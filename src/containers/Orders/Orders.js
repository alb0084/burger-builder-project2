import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        console.log('LA PERE STROICA')
        axios.get('/orders.json')
            .then(res => {
                //RES RETURN AN PAIR OBJECT,IN THIS CASE THEREFORE,
                //WE WANT TO TRASFORM IT IN AN ARRAY.
                let fetchedOrder = [];
                for (let key in res.data) {
                    fetchedOrder.push({
                        ...res.data[key],
                        id: key
                    })

                }
                this.setState({ loading: false, orders: fetchedOrder })
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                })}

            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);