import React, { useState } from 'react';

const Form = () => {

    const [form, setForm] = useState({});
    const [checked, setChecked] = useState([]);
    const [val, setVal] = useState([]);
    const [fie, setFie] = useState([]);

    const eduQual = ["10th", "12th", "B. Tech."];

    // Add/Remove checked item from list
    const handleCheck = (e) => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        }
        else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);
    };

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        })
    }

    const handleClick = (e) => {
        e.preventDefault();

        if(Object.keys(form).length === 0){
            alert("Fill in details");
        }

        if(Object.keys(form).length > 0){

            form.Education = checked;
            fie.forEach((key, value) => {form[key] = val[value]});
    
            let fieldValue = document.getElementById('fieldValue');
            let html = ``;
            for (let [key, value] of Object.entries(form)) {
                html += `<p id=${key}>${key}: ${value}</p>`;
            }
    
            fieldValue.innerHTML = html;
    
            let allInput = document.querySelectorAll('input');
            let selectOne = document.querySelector('select');
            
            allInput.forEach((item)=>{
                item.value = '';
                item.checked = false;
            })
            selectOne.innerHTML = `<select className="form-select" id="gender" name='gender' onChange={(e) => setField('gender', e.target.value)} required>
                                        <option value="choose">Choose...</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                `
            let addNew = document.getElementById('addNew');
            addNew.style.display = 'none';
            val.length = 0;
            fie.length = 0;
            for (let item in form) delete form[item];
        }

    }

    const handleAdd = () => {
        let addNew = document.getElementById('addNew');
        addNew.style.display = 'block'
        let valText = [...val, []];
        let fieText = [...fie, []];
        setVal(valText);
        setFie(fieText);
    }
    const handleChangeField = (newField, i) => {
        let inputDataFie = [...fie];
        inputDataFie[i] = newField.target.value;
        setFie(inputDataFie);
    }
    const handleChangeValue = (newValue, i) => {
        let inputDataVal = [...val];
        inputDataVal[i] = newValue.target.value;
        setVal(inputDataVal);
    }
    
    const handleOnBlurUsername = (e) => {
        let val = e.target.value;
            if(val.length < 5){
                alert("Atleast 5 letters.")
            }
    }
    
    const handleOnBlurEmail = (e) => {
        let val = e.target.value;
        let result = val.includes("@");
        let index = val.indexOf("@");
        index = val.includes(".", index);
        if(!result || !index){
            alert("Invalid Email")
        }
    }

    const handleOnBlurAge = (e) => {
        if(e.target.value <= 0){
            alert("Age should be greater than 0.");
        }
    }

    // (() => {

    //     'use strict'

    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     const forms = document.querySelectorAll(".needs-validation")

    //     // Loop over them and prevent submission
    //     Array.prototype.slice.call(forms).forEach(form => {
    //         form.addEventListener("submit", event => {
    //             if (!form.checkValidity()) {
    //                 event.preventDefault()
    //                 event.stopPropagation()
    //             }

    //             form.classList.add("was-validated")
    //         }, false)
    //     })
    // })()

    return (
        <div className="row align-items-start">
            <h1>Form Details</h1>
                <form className='needs-validation' noValidate>

                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name" onChange={(e) => setField('First Name', e.target.value)} onBlur={handleOnBlurUsername.bind(this)} required />
                        <div className="invalid-feedback">
                            Please enter a valid first name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lname" name='lname' placeholder="Last Name" onChange={(e) => setField('Last Name', e.target.value)} onBlur={handleOnBlurUsername.bind(this)} required />
                        <div className="invalid-feedback">
                            Please enter a valid last name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email ID</label>
                        <input type="email" className="form-control" id="email" name='email' placeholder="Email ID" onChange={(e) => setField('Email', e.target.value)} onBlur={handleOnBlurEmail.bind(this)} required />
                        <div className="invalid-feedback">
                            Please enter a valid email.
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender" name='gender' onChange={(e) => setField('Gender', e.target.value)} required>
                            <option value="choose">Choose...</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a gender.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" name='age' placeholder="Age" onChange={(e) => setField('Age', e.target.value)} onBlur={handleOnBlurAge.bind(this)} required />
                        <div className="invalid-feedback">
                            Please enter a valid age.
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label>Martial Status</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="married" id="married" onChange={(e) => setField('Marital Status', e.target.value)} />
                            <label className="form-check-label" htmlFor="married">
                                Married
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" value="unmarried" id="unmarried" onChange={(e) => setField('Marital Status', e.target.value)} />
                            <label className="form-check-label" htmlFor="unmarried">
                                Unmarried
                            </label>
                        </div>
                        <div className="invalid-feedback">
                            Please enter a valid martial status.
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label>Education Qualification</label>
                        {eduQual.map((item, i) => (
                            <div key={i} className="form-check">
                                <input className="form-check-input" type="checkbox" value={item} name='edu' onChange={handleCheck} />
                                <label className="form-check-label" htmlFor="tenth">
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div id='addNew'>
                        {val.map((data, i)=>{
                            return(
                                <div key={i} className='d-flex justify-content-between'>
                                    <input placeholder='Field' className="form-control" onChange={e => handleChangeField(e, i)} />
                                    <input placeholder='Value' className="form-control" onChange={e => handleChangeValue(e, i)} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Submit form</button>
                        <button className="btn btn-primary ms-3" type="button" onClick={()=>handleAdd()}>Add field</button>
                        <button className="btn btn-primary ms-3" onClick={()=>window.location.reload()} >Reset Form</button>
                    </div>
                </form>
                <div id='fieldValue'>
                </div>
        </div>
    )
}

export default Form;