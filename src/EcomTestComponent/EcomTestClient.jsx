
import React from 'react';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormMaskedTextBox, FormInput, FormDropDownList, FormComboBox, FormDatePicker , FormPasswordInput
} from './form-component.jsx';

import {
    requiredValidator, cardValidator, cvcValidator
} from './validators.jsx'


import {
    langCode, Cardholderstatus, requesttype
} from './data.jsx'
import { auth_init_call } from './Auth_init_Calls.js';

const EcomTestClient = () => {
    //const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    const handleSubmit = (dataItem) => {

        console.log(dataItem)
        console.log(dataItem.languagecode.text)
        console.log(dataItem.requesttype.value)

       // alert(JSON.stringify(dataItem, null, 4));


        auth_init_call(dataItem).then(res=>{
            if(res.status===200){
              alert("response"+res)
            }
            else{
              alert("Error Occured")
            }
          })

    }

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement style={{ width: 400 }} horizontal={true}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Ecom Test Client</legend>

                        {/* <Field
                            id={'requestType'}
                            name={'requestType'}
                            label={'Request Type'}
                            component={FormDropDownList}
                            data={requesttype}
                            validator={requiredValidator}
                        /> */}

                        <Field
                            id={'requesttype'}
                            name={'requesttype'}
                            label={'Request Type'}
                            component={FormComboBox}
                            textField={'text'}
                            data={requesttype}
                            validator={requiredValidator}
                        />
                        <Field
                            id={'username'}
                            name={'username'}
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
                            id={'cardNumber'}
                            name={'cardNumber'}
                            label={'Card Number'}
                            hint={'Hint: Your Credit Card Number'}
                            mask={'0000-0000-0000-0000'}
                            component={FormMaskedTextBox}
                            validator={cardValidator}
                        />
                        <Field
                            id={'expirydate'}
                            name={'expirydate'}
                            label={'Expiry Date'}
                            component={FormDatePicker}
                            validator={requiredValidator}
                        />
                        <Field
                            id={'cvc'}
                            name={'cvc'}
                            label={'CVC Number'}
                            hint={'Hint: The last 3 digids on the back of the Card'}
                            mask={'000'}
                            component={FormMaskedTextBox}
                            validator={cvcValidator}
                        />
                        <Field
                            id={'languagecode'}
                            name={'languagecode'}
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
                            id={'tranid'}
                            name={'tranid'}
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
    );
};


export default EcomTestClient;

// ReactDOM.render(
//     <App />,
//     document.querySelector('my-app')
// );