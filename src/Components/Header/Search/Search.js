import React from "react";

class Search extends React.Component {

    render(){
        const { searchName } = this.props;
        return(
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" onChange={searchName} type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0"  type="submit">Search</button>
        </form>
        )
    }
  
}
export default Search;