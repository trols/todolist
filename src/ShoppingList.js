
import { Component }from 'react';
import shop from'./shop.png';
export class ShoppingList extends Component{
    state={
userInput:"",
shoppingList:[]
}
onChangeEvent(e){
        this.setState({userInput: e})
    }
addItem(input){
    if(input===''){
        alert("Please enter an item")
    }
    else{
    let listArray=this.state.shoppingList;
    listArray.push(input);
    this.setState({shoppingList: listArray,userInput:''})
}}

onFormSubmit(e){
    e.preventDefault();
}
crossedWord(event){
    const li=event.target;
    li.classList.toggle('crossed')
}
deleteItem(){
    let listArray=this.state.shoppingList;
    listArray.length=0;
    this.setState({shoppingList: listArray})
}

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                <input placeholder="What do you want to buy?" type="text" onChange={(e)=>{this.onChangeEvent(e.target.value)}}value={this.state.userInput}/>
                </div>
                <div className='container'>
                <button className='add' onClick={()=>this.addItem(this.state.userInput)}>Add</button>
                </div>
                <ul>
                    {this.state.shoppingList.map((item,index)=>(
<li onClick={this.crossedWord}key={index}><img src={shop} width="40px" alt='shop'/>{item}</li>
                    ))}
                </ul>
                <div className='container'>
<button className='delete'onClick={()=>this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>)

}}