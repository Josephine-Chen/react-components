class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  onMouseEnterHandler() {
    this.setState({
      hover: true
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      hover: false
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}
      onMouseEnter={this.onMouseEnterHandler.bind(this)}
      onMouseLeave={this.onMouseLeaveHandler.bind(this)}>{
        this.props.groceryItem}
        </li>
      );
  }
}

var GroceryList = (props) => (
  <ul>
      {props.groceryItems.map(groceryItem =>
        <GroceryListItem groceryItem={groceryItem} />
        )}
  </ul>
);

var App = () => (
  <div>
  <h2>Grocery List</h2>
  <GroceryList groceryItems={['Bread', 'Eggs', 'Chicken']}/>
  </div>
);

var Bread = () => (<div>Bread</div>);

var Eggs = () => (<div>Eggs</div>);


ReactDOM.render(<App />, document.getElementById("app"));
