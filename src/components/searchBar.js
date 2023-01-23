import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
                    term:''
                   }
    }
    onSubmitChange=(event)=>{
        event.preventDefault();
       // console.log(this.state.term);
      this.props.onSubmitSearch(this.state.term);
    }
render(){
       return (
         <div className ="search-bar ui segment">
           <form  className="ui form" onSubmit={this.onSubmitChange}> 
                 <div className="field">
                  <label>Video Search</label>
                   <input 
                   type="text"  
                   value ={this.state.term} 
                   onChange={(e) => this.setState({ term: e.target.value })}
                   />
                   </div>
             <button className="ui button primary" onClick={this.onSubmitChange}>Enter</button>

           </form>
           </div>
       );
 }
}

export default SearchBar;