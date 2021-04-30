import React, { Component } from 'react';
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';

class PostalCodeInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postalCode: ''
        };
        // this.onKeyUp = this.onChange.bind(this);
    }

    onChange(event) {        
        const currValue = event.currentTarget.value;
        if (postcodeValidator(currValue, 'CA') === true) {
            this.setState({
                postalCode: currValue
            });
        }
    }

    render() {        
        return <p><label>Enter a postal code: </label><input name='postalCode' type='text' maxLength='6' onKeyUp={(event) => this.onChange(event)}></input></p>;
    }

}

export default PostalCodeInput;