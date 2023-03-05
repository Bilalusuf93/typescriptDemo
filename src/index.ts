class SeatAssignment {
    // index signature property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Bilal';
seats['A2'] = 'usma'