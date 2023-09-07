import { Component } from "react";
import Counter from "./Counter";


class CounterList extends Component{
    state = {
        itemlist:[
            {id: 1, value: 0, itemname:"iPhone", price:12990 },
            {id: 2, value: 0, itemname:"iPad", price:23990 },
            {id: 3, value: 0, itemname:"iMac", price:45000 },
            {id: 4, value: 0, itemname:"iBook", price:12000 }
        ]
       
    };
    render () {
        return (
            <div>


                <div className="d-inline mx-2"> <b>ราคารวม</b> {this.state.totalPrice}</div>
                <button
                    onClick={this.resetButton}
                    className="btn btn-sm btn-warning d-inline"> <b>Reset</b> </button>
                {
                    this.state.itemlist.map((item) => {    
                        return (<Counter key={item.id} item={item} onIncrement={this.Increment} onReduce={this.reduce} />);            
                        }
                    )
                   
                }
            </div>    
        );
    }
   
    Increment = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value++;
        this.setState({ itemlist : _itemList }, this.calculateTotalPrice);
    }
    reduce = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value--;
        this.setState({ itemlist : _itemList }, this.calculateTotalPrice );
    }


    calculateTotalPrice() {
        const total = this.state.itemlist.reduce((acc, item) => {
            return acc + item.value * item.price;
        }, 0);
        this.setState({ totalPrice: total });
    }
   
    //function resetButton() {}
    resetButton = () => {
        var resetItem = this.state.itemlist.map((item) => {
            item.value = 0;
            return item;
        });
        this.setState({ resetItem, totalPrice: <b>0</b> });
    }
}
export default CounterList;
