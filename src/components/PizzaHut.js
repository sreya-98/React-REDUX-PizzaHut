import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyPizza} from "../redux/pizzahut/pizzahut.actions";

let PizzaHut = () => {
    let dispatch = useDispatch();

    let pizzaInfo = useSelector((state) => {
        return state['pizza'];
    })

    let clickBuyPizza = () => {
        //dispatch an action to update the state
        dispatch(buyPizza());
    };

    return(
        <Fragment>
            <section className="p3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-danger">PizzaHut</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti deserunt dolorem error iusto minima necessitatibus nemo, qui rem! Accusantium cum dolor ducimus ea exercitationem magni maiores mollitia repudiandae sint?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
                                 alt="" className="img-fluid img-thumbnail"/>
                        </div>
                        <div className="col-md-7 ">
                            <p className="h2 text-danger">Chicken Pizza</p>
                            <p className="h4">Available :
                                <span className="font-weight-bold"> {pizzaInfo.count}</span>
                            </p>
                            <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Order Now</button>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid animi consectetur cumque dolore, doloribus ea esse fugiat natus nesciunt obcaecati optio pariatur quam quos reiciendis saepe sint, ut vero?</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default PizzaHut;