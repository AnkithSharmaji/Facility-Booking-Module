// Array to store the booked slots
const bookedSlots = [];

// Function to book a facility
function bookFacility() {
    const facilitySelect = document.getElementById('facility');
    const dateInput = document.getElementById('date');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');

    const facility = facilitySelect.value;
    const date = dateInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    // Check if the slot is already booked
    const isAlreadyBooked = bookedSlots.some(slot => {
        return slot.facility === facility && slot.date === date &&
            ((startTime >= slot.startTime && startTime < slot.endTime) ||
                (endTime > slot.startTime && endTime <= slot.endTime));
    });

    if (isAlreadyBooked) {
        alert('Booking Failed, Already Booked');
        return;
    }

    // Calculate booking amount based on the facility
    let bookingAmount;
    if (facility === 'Clubhouse') {
        bookingAmount = calculateClubhouseBookingAmount(startTime, endTime);
    } else if (facility === 'Tennis Court') {
        bookingAmount = calculateTennisCourtBookingAmount(startTime, endTime);
    }

    // Create a new booked slot entry
    const bookedSlot = {
        facility,
        date,
        startTime,
        endTime,
        bookingAmount
    };

    // Add the booked slot to the list
    bookedSlots.push(bookedSlot);

    // Display the booked slot in the list
    displayBookedSlot(bookedSlot);

    // Show success message
    alert(`Booked, Rs. ${bookingAmount}`);
}

// Function to calculate clubhouse booking amount
function calculateClubhouseBookingAmount(startTime, endTime) {
    const startHour = parseInt(startTime.split(':')[0]);
    const endHour = parseInt(endTime.split(':')[0]);

    let bookingAmount = 0;
    if (startHour >= 10 && endHour <= 16) {
        bookingAmount = (endHour - startHour) * 100;
    } else if (startHour >= 16 && endHour <= 22) {
        bookingAmount = (endHour - startHour) * 500;
    } else {
        // Invalid time slot for clubhouse
        alert('Invalid time slot for Clubhouse');
    }

    return bookingAmount;
}

// Function to calculate tennis court booking amount
function calculateTennisCourtBookingAmount(startTime, endTime) {
    const startHour = parseInt(startTime.split(':')[0]);
    const endHour = parseInt(endTime.split(':')[0]);

    const bookingAmount = (endHour - startHour) * 50;
    return bookingAmount;
}

// Function to display the booked slot in the list
function displayBookedSlot(slot) {
    const bookedSlotsBox = document.getElementById('bookedSlotsBox');
    const bookedSlotDiv = document.createElement('div');
    bookedSlotDiv.classList.add('booked-slot');

    const slotDetails = document.createElement('p');
    slotDetails.textContent = `${slot.facility}, ${slot.date}, ${slot.startTime} - ${slot.endTime}, Rs. ${slot.bookingAmount}`;
    bookedSlotDiv.appendChild(slotDetails);

    bookedSlotsBox.appendChild(bookedSlotDiv);
}
