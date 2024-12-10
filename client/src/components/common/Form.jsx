import React from 'react'
import { Form } from '../ui/form'
import { Label } from '../ui/label'

function CommonForm({formControls}) {

    function renderInputsByComponentType(getControlItem){
        let element = null;
        switch (getControlItem.componentType) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
  return (
    <Form>
        <div>
            {
                formControls.map(controlItem => <div key={controlItem.name}></div>)
                <Label>{controlItem.label}</Label>
                {
                    renderInputsByComponentType(controlItem)
                }
            }
        </div>
    </Form>
  )
}

export default CommonForm
