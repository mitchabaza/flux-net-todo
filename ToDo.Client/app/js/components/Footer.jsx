
var React = require("react")
var _ = require('underscore');
var Actions = require("../Actions/Actions.js"); 

var ListFooter = React.createClass({


	 

	handleFilter: function(e){
	
		filter=e.target.getAttribute('href').replace('#/','');
		Actions.filter(filter)
	 
	},
    render: function() {
     
	    var incomplete =_.filter(this.props.items, function(item){return item.completed==false?true:false});
		 

		var buttonStyle = {
			display: 'none'
		};

		 
        return (
		<footer id="footer"><span id="todo-count"><strong>{incomplete.length}</strong> {incomplete.length==1?"item":"items"} left</span>
		<ul id="filters" ref="filters">
	 		<li><a href='#/none' className={this.props.filter=='none'?'selected':''} onClick={this.handleFilter}>All</a></li>
			<li><a href='#/incomplete' className={this.props.filter=='incomplete'?'selected':''}  onClick={this.handleFilter}>Active</a></li>
			<li><a href='#/complete' className={this.props.filter=='complete'?'selected':''}  onClick={this.handleFilter}>Completed</a></li>
		</ul>
	 
		 
		</footer>
		);
    }

})

module.exports = ListFooter;