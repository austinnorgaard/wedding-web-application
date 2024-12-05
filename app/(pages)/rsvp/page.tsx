'use client';

import '@/app/ui/Styles/CSS/RSVPPageComponent.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RSVPPage() {
  const [guestList, setGuestList]: any[] = useState([])
  const [guests, setGuests] : any[] = useState([])
  const [load, setLoad] = useState("unloaded")
  const [isVerified, setIsVerified] = useState([-1, -1])
  const [selection, setSelection] = useState("none")
  const [name, setNameVal] = useState("")
  const [phone, setPhoneVal] = useState("")
  const [zip, setZipVal] = useState("")
  const [numberOfGuests, setNumberOfGuests] = useState(0)
  const [verificationVal, setVerificationVal] = useState("invalid")
  const [isAdmin, setIsAdmin] = useState(0)
  const [duplicateError, setDuplicateError] = useState(false)

  async function handleSubmit (e: any) {
    e.preventDefault()
    if (selection === "yes") {
      setIsVerified([2, isVerified[1]])
    }
    else {
      axios.put(`https://weddingbackend.norgaardfamily.com/guests`, { guestName: guests[isVerified[1]].name, guestCount: 0})
      .catch ((err) => {
        console.log("Error: " + err)
      })
      setIsVerified([3, isVerified[1]])
    }
  }

  async function handleNumber (e: any) {
    e.preventDefault()
    axios.put(`https://weddingbackend.norgaardfamily.com/guests`, { guestName: guests[isVerified[1]].name, guestCount: numberOfGuests})
    .catch ((err) => {
      console.log("Error: " + err)
    })
    if (numberOfGuests >= 0) {
      setIsVerified([3, isVerified[1]])
    }
    else {
      setIsVerified([-1, -1])
    }
  }

  async function handleVerify (e: any) {
    e.preventDefault()
    if (verificationVal === guests[isVerified[1]].phone) {
      setIsVerified([1, isVerified[1]])
    }
    else {
      setIsVerified([-1, isVerified[1]])
    }
  }

  async function handleRSVP (id: any) {
    setNumberOfGuests(0)
    setIsVerified([0, id])
    setVerificationVal("invalid")
    setSelection("none")
  }

  async function handleAddGuest(e: any) {
    e.preventDefault()
    axios.post(`https://weddingbackend.norgaardfamily.com/guests`, { guestName: name, guestPhoneNumber: phone, guestZip: zip })
    .then((res) => {
      if (res.data === 400) {
        console.log("Response: " + res.data)
        setDuplicateError(true)
      }
      else if (res.data === 201) {
        setDuplicateError(false)
        var form: any = document.getElementById("add-guest-wrapper");
        form.reset();
        setLoad("load")
      }
      else {
        console.log("Response: " + res.data)
      }
    })
    .catch ((err) => {
      console.log("Error: " + err)
    })
  }

  async function retrieveGuests() {
    await axios.get(`https://weddingbackend.norgaardfamily.com/guests`)
    .then((res) => {
      try {
        setGuestList([])
        setGuests([])
        const elements = document.getElementsByClassName("guestListing");

        // Convert HTMLCollection to Array to avoid issues with live collections
        const elementsArray = Array.from(elements);

        elementsArray.forEach(element => {
          element.remove();
        })
        setGuestList(res.data)
      } catch (Err) {
        console.log("Error handling: " + res.data);
      }
    }).then(() => {
      guestList.map((guest: any) => {
        guests.push({
          name: guest.guestName,
          phone: guest.guestPhoneNumber,
          zip: guest.guestZip,
          numberOfGuests: guest.guestCount
        })
      })
    })
    setGuests(guests)
    setLoad("loaded")
  }

  useEffect(() => {
    retrieveGuests()
    axios.get(`https://weddingbackend.norgaardfamily.com/users/${localStorage.getItem("id")}`)
    .then((res) => {
      if (res.data.isAdmin === 1) {
        setIsAdmin(1)
      }
      console.log(res.data.isAdmin)
    })
  },
  [load])

  return (
    <div className="RSVPPage">
        <div className="MainContainer" id="RSVPMainContainer">
            <h1>Guest List</h1>
            {/*isAdmin ?
              duplicateError ?
              <form onSubmit={handleAddGuest} id="add-guest-wrapper">
                <label>
                  <p id="badGuest">Duplicate Guest!</p>
                </label>
                <label>Party Name(s):</label>
                <input name="names" autoComplete='name' onChange={e => setNameVal(e.target.value)}/>
                <label>Phone Number:</label>
                <input name="phone" type="tel" autoComplete="tel-national" onChange={e => setPhoneVal(e.target.value)}/>
                <label>Zip Code:</label>
                <input name="zip" autoComplete="postal-code" onChange={e => setZipVal(e.target.value)}/>
                <button type="submit">Save</button>
              </form>
                :
              <form onSubmit={handleAddGuest} id="add-guest-wrapper">
                <label>Party Name(s):</label>
                <input name="names" autoComplete='name' onChange={e => setNameVal(e.target.value)}/>
                <label>Phone Number:</label>
                <input name="phone" type="tel" autoComplete="tel-national" onChange={e => setPhoneVal(e.target.value)}/>
                <label>Zip Code:</label>
                <input name="zip" autoComplete="postal-code" onChange={e => setZipVal(e.target.value)}/>
                <button type="submit">Save</button>
              </form>
              :
            null
            */}
            <div id="guest-list-wrapper">
            {guests.map((guest: any, id: any) => (
            <ul className="guestListing" id={'guest'+id} key={id}>
              <p id="guestName">{guest.name}</p>
              {isVerified[0] > -1 ?
                id === isVerified[1] ?
                  isVerified[0] === 0 ?
                    <form onSubmit={handleVerify} id="verify-guest-wrapper">
                      <label>Please verify your Phone Number</label>
                      <input onChange={e => setVerificationVal(e.target.value)}/>
                      <button type="submit">Save</button>
                      <button onClick={() => setIsVerified([-1, -1])}>Cancel</button>
                    </form>
                    :
                  isVerified[0] === 1 ?
                    <form onSubmit={handleSubmit} id="guest-attendance-wrapper">
                      <label>Will your party be attending?</label>
                      <input type="radio" value="yes" name="selection" onChange={e => setSelection(e.target.value)}/>
                      <label id="yes">Yes</label>
                      <input type="radio" value="no" name="selection" onChange={e => setSelection(e.target.value)}/>
                      <label id="no">No</label>
                      <button id="submit" type="submit">Save</button>
                      <button id="cancel" onClick={() => setIsVerified([-1, -1])}>Cancel</button>
                    </form>
                    :
                    isVerified[0] === 2 ?
                    <form onSubmit={handleNumber} id="guest-count-wrapper">
                        <label>How many (including yourself) will be attending?</label>
                        <input type="number" onChange={e => setNumberOfGuests(Number(e.target.value))}/>
                        <button type="submit">Save</button>
                        <button onClick={() => setIsVerified([-1, -1])}>Cancel</button>
                    </form>
                    :
                    isVerified[0] === 3 ?
                    <div id="completed-rsvp-wrapper">
                      <p>Thank you!</p>
                    </div>
                    :null: null :
                  isVerified[1] !== -1 && id === isVerified[1] ?
                  <div id="guestRighthand">
                    {isAdmin ?
                    <label id="guestCounter">Guest Count: {guest.numberOfGuests}</label>
                    : null}
                    <div id="rsvp-error-wrapper">
                      <p>Please Try Again!</p>
                      <button className="guestRSVP" id={`reserveButton${id}`} onClick={async () => await handleRSVP(id)}>RSVP</button>
                  </div>
                  </div>
                  :
                  <div id="guestRighthand">
                    {isAdmin ?
                    <label id="guestCounter">Guest Count: {guest.numberOfGuests}</label>
                    : null}
                    <button className="guestRSVP" id={`reserveButton${id}`} onClick={async () => await handleRSVP(id)}>RSVP</button>
                  </div>
              }
            </ul>
            ))}
            </div>
        </div>
    </div>
  );
}
