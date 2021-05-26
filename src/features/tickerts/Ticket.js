import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  Redirect } from 'react-router-dom';

import {
    setNumberOfSeats,
    setNextTo,
    selectTicketNumbers,
    selectNextTo
} from './ticketSlice';

const Ticket = () => {
    const numberOfTickets = useSelector(selectTicketNumbers);
    const nextToChecked = useSelector(selectNextTo);
    const dispatch = useDispatch();

    const [redirect, setRedirect] = useState(false);


   

    const handleSubmit = e => {
        e.preventDefault();
        setRedirect(true);
    }
    
    
    return (
        <div>
            {redirect && <Redirect to="/seats" />}
            <h1>Hello ReservationPage</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" min="1" max="5" value={numberOfTickets} onChange={(e)=>dispatch(setNumberOfSeats({value: Number(e.target.value)}))} />

                <input type="checkbox" id="closeSeats" defaultChecked={nextToChecked} onChange={()=>dispatch(setNextTo())} />
                <label htmlFor="closeSeats">Czy miejsca mająbyć obok siebie? </label>

                <button>Wybierz miejsca</button>
            </form>

        </div>
    )


}

export default Ticket;