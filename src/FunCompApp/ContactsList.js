import React from "react";
let ContactsList=()=>{
    let pushData=(contacts)=>{
        props.pullData(contacts);
    }
    return(
        <>
        <div className="container">
        <div className="row">
        <div className="col">
        <table className="table table-hover striped table-info">
        <thead>
        <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Loc</th>
        <th>Age</th>
        </tr>
        </thead>
        <tbody>
        {props.contacts.length > 0 ?(
            <>
            {props.contacts.map((contacts)=>{
                return(
                    <tr key={contacts.login.uuid} onClick={pushData.bind(this,contacts)}>
                    <td>{contacts.name.first}</td>
                    <td><img src={contacts.picture.medium} alt="message"/></td>
                    <td>{contacts.email}</td>
                    <td>{contacts.location.city}</td>
                    <td>{contacts.dob.age}</td>
                    </tr>
                )
            })}
            </>) : null 
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </>
    );
};
export default ContactsList;