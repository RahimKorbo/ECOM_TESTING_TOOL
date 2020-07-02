
import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormMaskedTextBox, FormInput, FormDropDownList, FormComboBox, FormDatePicker, FormPasswordInput
} from './form-component.jsx';

import {
    requiredValidator, cardValidator, cvcValidator
} from './validators.jsx'

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

import { Link } from "react-router-dom";

import {
    langCode, Cardholderstatus, requesttype
} from './data.jsx'


import { auth_init_call } from './Auth_init_Calls.js';

class EcomTestClient extends React.Component {
    //const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }
    }

    handleSelect = (e) => {
        this.setState({ selected: e.selected });
    }


    handleSubmit = (dataItem) => {

        dataItem.requestType = "Auth_Initiate";

        console.log(dataItem)
        console.log(dataItem.langCode.text)
        // console.log(dataItem.requestType)

        // alert(JSON.stringify(dataItem, null, 4));


        auth_init_call(dataItem).then(res => {
            if (res.status === 200) {
                alert("response" + res)
            }
            else {
                alert("Error Occured")
            }
        })

    }


    handleSubmitOTPAuthServlet = (dataItem) => {


        console.log(dataItem)
        // console.log(dataItem.requestType)

        alert(JSON.stringify(dataItem, null, 4));




    }

    handleSubmitOTPServieURL = (dataItem) => {


        console.log(dataItem)
        // console.log(dataItem.requestType)

        alert(JSON.stringify(dataItem, null, 4));




    }

    render() {

        return (
            <div style={{
                width: 780,
                margin: 'auto',
                padding: '14px 10px',
                boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
            }}
            >
                <h2>ECOM Test Client</h2>
                <Link to="/OTPServiceURL">OTP Service URL</Link>
                
                <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>

                    <TabStripTab title="Auth_Initiate">
                        <Form
                            onSubmit={this.handleSubmit}
                            render={(formRenderProps) => (
                                <FormElement style={{ width: 400 }} horizontal={true}>
                                    <fieldset className={'k-form-fieldset'}>
                                        {/* <legend className={'k-form-legend'}>Ecom Test Client</legend> */}

                                        {/* <Field
                                id={'requestType'}
                                name={'requestType'}
                                label={'Request Type'}
                                component={FormDropDownList}
                                data={requesttype}
                                validator={requiredValidator}
                            /> */}
                                        {/* private String cardNo;

private String expDate;

private String cardHolderStatus;

private String cvv;

private String langCode;

private String tranId;

private String hkey;

private String userId;

private String password;

private String requestType; */}

                                        {/* <Field
                                id={'requesttype'}
                                name={'requesttype'}
                                label={'Request Type'}
                                component={FormComboBox}
                                textField={'text'}
                                data={requesttype}
                                validator={requiredValidator}
                            /> */}
                                       
                                        
                                        <Field
                                            id={'userId'}
                                            name={'userId'}
                                            label={'User Name'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'password'}
                                            name={'password'}
                                            label={'Password'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormPasswordInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'cardNo'}
                                            name={'cardNo'}
                                            label={'Card Number'}
                                            hint={'Hint: Your Credit Card Number'}
                                            mask={'0000-0000-0000-0000'}
                                            component={FormMaskedTextBox}
                                            validator={cardValidator}
                                        />
                                        <Field
                                            id={'expDate'}
                                            name={'expDate'}
                                            label={'Expiry Date'}
                                            component={FormDatePicker}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'cvv'}
                                            name={'cvv'}
                                            label={'CVV Number'}
                                            hint={'Hint: The last 3 digids on the back of the Card'}
                                            mask={'000'}
                                            component={FormMaskedTextBox}
                                            validator={cvcValidator}
                                        />
                                        <Field
                                            id={'langCode'}
                                            name={'langCode'}
                                            label={'Language Code'}
                                            component={FormComboBox}
                                            textField={'text'}
                                            data={langCode}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'cardholderstatus'}
                                            name={'cardholderstatus'}
                                            label={'Card Holder Status'}
                                            component={FormDropDownList}
                                            data={Cardholderstatus}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'tranId'}
                                            name={'tranId'}
                                            label={'Tran Id'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />
                                        <Field
                                            id={'hkey'}
                                            name={'hkey'}
                                            label={'h-key'}
                                            component={FormInput}
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
                    </TabStripTab>
                    <TabStripTab title="Auth_Result">
                        <p>Tab 2 Content</p>
                    </TabStripTab>
                    <TabStripTab title="OTP Service URL">
                        <Form
                            onSubmit={this.handleSubmitOTPServieURL}
                            render={(formRenderProps) => (
                                <FormElement style={{ width: 500 }} horizontal={true}>
                                    <fieldset className={'k-form-fieldset'}>
                                        {/* <legend className={'k-form-legend'}>Ecom Test Client</legend> */}

                                        {/* <Field
                                id={'requestType'}
                                name={'requestType'}
                                label={'Request Type'}
                                component={FormDropDownList}
                                data={requesttype}
                                validator={requiredValidator}
                            /> */}
                                        {/* private String cardNo;

private String expDate;

private String cardHolderStatus;

private String cvv;

private String langCode;

private String tranId;

private String hkey;

private String userId;

private String password;

private String requestType; */}

                                        {/* <Field
                                id={'requesttype'}
                                name={'requesttype'}
                                label={'Request Type'}
                                component={FormComboBox}
                                textField={'text'}
                                data={requesttype}
                                validator={requiredValidator}
                            /> */}
                                        <Field
                                            id={'AccuCardholderId'}
                                            name={'AccuCardholderId'}
                                            label={'AccuCardholderId'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'AccuGuid'}
                                            name={'AccuGuid'}
                                            label={'AccuGuid'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'session'}
                                            name={'session'}
                                            label={'session'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'AccuReturnURL'}
                                            name={'AccuReturnURL'}
                                            label={'AccuReturnURL'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'AccuRequestId'}
                                            name={'AccuRequestId'}
                                            label={'AccuRequestId'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
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
                    </TabStripTab>
                    <TabStripTab title="OTP Auth Servlet">
                        <Form
                            onSubmit={this.handleSubmitOTPAuthServlet}
                            render={(formRenderProps) => (
                                <FormElement style={{ width: 500 }} horizontal={true}>
                                    <fieldset className={'k-form-fieldset'}>

                                        <Field
                                            id={'mode'}
                                            name={'mode'}
                                            label={'mode'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'cardNum'}
                                            name={'cardNum'}
                                            label={'cardNum'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'customerPin'}
                                            name={'customerPin'}
                                            label={'customerPin'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
                                            validator={requiredValidator}
                                        />

                                        <Field
                                            id={'guid'}
                                            name={'guid'}
                                            label={'guid'}
                                            hint={'Hint: Hint message aligned start'}
                                            component={FormInput}
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
                    </TabStripTab>

                </TabStrip>
            </div>


        );
    }

};


export default EcomTestClient;

// ReactDOM.render(
//     <App />,
//     document.querySelector('my-app')
// );