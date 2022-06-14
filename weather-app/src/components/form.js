import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherForForm}>
                <input type="text" name="city" placeholder="Город"/>
                <button> Узнать погоду</button>
            </form>
        );
    }
}

export default Form;