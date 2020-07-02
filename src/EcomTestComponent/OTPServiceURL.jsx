import React, { Component } from 'react'
import OtpInput from "react-otp-input";
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormMaskedTextBoxForPassword,FormMaskedTextBox, FormInput, FormDropDownList, FormComboBox, FormDatePicker, FormPasswordInput
} from './form-component.jsx';

import {
    requiredValidator, cardValidator, cvcValidator
} from './validators.jsx'

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { Link } from "react-router-dom";

import {
    langCode, Cardholderstatus, requesttype
} from './data.jsx'


import "./otpstyles.css";

export default class OTPServiceURL extends Component {
    handleSubmitOTPAuthServlet = (dataItem) => {


        console.log(dataItem)
        // console.log(dataItem.requestType)

        alert(JSON.stringify(dataItem, null, 4));




    }

    
    render() {
        return (
            <div style={{
                width: 780,
                marginTop: '140px',
                marginLeft: '200px',
                padding: '14px 10px',
                boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
            }}
            >
               <h3>OTP Page</h3>
               <Form
                            onSubmit={this.handleSubmitOTPAuthServlet}
                            render={(formRenderProps) => (
                                <FormElement style={{ width: 500 }} horizontal={true}>
                                    <fieldset className={'k-form-fieldset'}>

                                        <Field
                                            id={'otp'}
                                            name={'otp'}
                                            label={'Enter OTP:'}
                                            hint={'Hint: Hint message aligned start'}
                                            mask={'00000'}
                                            component={FormMaskedTextBoxForPassword}
                                            validator={requiredValidator}
                                        />
                                    




                                        <div className="k-form-buttons">
                                            <Button
                                                primary={true}
                                                type={'submit'}
                                                disabled={!formRenderProps.allowSubmit}
                                            >
                                                Submit
                                </Button>
                                            <Button onClick={formRenderProps.onFormReset}>
                                                Clear
                                </Button>
                                        </div>
                                    </fieldset>
                                </FormElement>
                            )}
                        />
            </div>
        )
    }
}
