import React from 'react';


class SearchBar extends React.Component {
    state = { term: ""}

    onInputChange = (event) => {
        this.setState({term: event.target.value});
        console.log(this.state.term);
    };  

    onFormSubmit = event => {
        // Prevent the application from submiting
        event.preventDefault();
        
        // TODO: Make sure we call 
        // Callback from parent component
        // Submit the class state(term) value
        // This is called in the onSubmit call of the form
        console.log("onFormSubmit-" + this.state.term);
        this.props.onFormSubmit(this.state.term);

    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );   
    }
}

export default SearchBar;

