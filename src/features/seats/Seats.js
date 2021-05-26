import { useSelector, useDispatch } from 'react-redux';

import {
    selectTicketNumbers,
    selectNextTo
} from './seatsSlice';

const Seats = () => {
    const numberOfTickets = useSelector(selectTicketNumbers);
    const nextToChecked = useSelector(selectNextTo);
    const dispatch = useDispatch();

    
    return (
        <div>

            <h1>Wybór miejsc</h1>
            <h2>Liczna biletów: {numberOfTickets}</h2>
            <h2>Obok siebie: {nextToChecked?'TAK':'NIE'}</h2>
        </div>
    )


}

export default Seats;