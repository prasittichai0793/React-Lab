import { Component } from "react";


class Counter extends Component{
    render() {
        return (
        <div className="d-block">
            <p className="d-inline m-2"><b>{this.props.item.itemname}</b> {this.formatCount()}</p>
            <button
                className="btn btn-success btn-sm d-inline m-2"
                onClick={() => this.props.onIncrement(this.props.item)}> <b>+</b> </button>
             <button
                className="btn btn-danger btn-sm d-inline m-2"
                onClick={() => this.props.onReduce(this.props.item)}> <b>-</b> </button>
        </div>
        );
    };
    decrement = () => {}
    increment = () => {
        //this.setState({ count :  this.state.count + 1 });
        //console.log(this.state.count);
    }
    formatCount(){
        return this.props.item.value === 0 ? <b> 0 </b> : this.props.item.value;
    }


}


export default Counter;