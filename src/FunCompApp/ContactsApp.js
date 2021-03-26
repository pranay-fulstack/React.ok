import React,{useEffect,useState} from "react";
import ContactsList from "./ContactsList";
import ContactsCard from "./ContactsCard";
import Axios from "axios";
let ContactsApp=()=>{
    let [contacts,setContacts]=useState({
        contacts:[],
        errMessage:null,
        selectedContact:{},
    });
    useEffect(()=>{
        Axios.get(
            "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
            )
            .then((response)=>{
                setContacts({...contacts, contacts:response.data});
                })
            .catch((err)=>{
                setContacts({...contacts,errMessage:err})
            })
            });
            
            let pullData = (selcontact) => {
                
                console.log(selcontact);
                console.log(selcontact.name.first, "getting data from child ...");
                console.log(contacts.selectedContact, ".....");
                setContacts({ ...contacts, selectedContact: selcontact });
                console.log(contacts.selectedContact, ".....");
            }

    return(
        <>
        <div className="container mt-4">
        <div className="row">
        <div className="col md-8">
        {contacts.contacts.length>0?(<>
         
            <ContactsList contacts={contacts.contacts} pullData={pullData} />   
            
            </>):null}
        </div>
        <div className="col md-4">
        {Object.keys(contacts.selectedContact).length > 0 ? (
            <>
              <ContactsCard selectedContact={contacts.selectedContact} />
            </>
          ) : null}
        
        </div>
        </div>
        </div>
      
        <ContactsCard/>
        </>
    )
}
export default ContactsApp;