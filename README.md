# Facility-Booking-Module


This is a Facility/Common Amenities Booking Module developed to enable residents of an apartment complex to book facilities like Clubhouse and Tennis Court for their personal use. Each facility has a specific booking amount assigned to it, which can be either slot-based or hour-based.

# Scenarios
The module is designed to handle the following scenarios:

Clubhouse Booking:

Slot 1: 10:00 AM to 4:00 PM, Rs. 100/hour
Slot 2: 4:00 PM to 10:00 PM, Rs. 500/hour
Tennis Court Booking:

Rs. 50/hour
# Input/Output Scenarios
The module should handle the following input and provide the corresponding output:

Input: Clubhouse, 26-10-2020, 16:00 - 22:00
Output: Booked, Rs. 1000

Input: Tennis Court, 26-10-2020, 16:00 - 20:00
Output: Booked, Rs. 200

Input: Clubhouse, 26-10-2020, 16:00 - 22:00
Output: Booking Failed, Already Booked

Input: Tennis Court, 26-10-2020, 17:00 - 21:00
Output: Booking Failed, Already Booked

# Configuration
The configuration for the booking amounts and time slots is managed internally in the code and can be easily customized as per the requirements.

# Usage
To run the Facility Booking Module, follow these steps:

Ensure you have a modern web browser installed.

Clone the repository or download the source code from [GitHub repository](https://github.com/AnkithSharmaji/Facility-Booking-Module.git).
.

Open the index.html file in your web browser.

Select the desired facility (Clubhouse or Tennis Court) from the dropdown menu.

Choose the booking date and start/end time for your booking.

Click on the "Book Facility" button to make a booking.

If the booking is successful, you will see a confirmation message displaying the booking details and the booking amount.

If the selected time slot is already booked, you will receive an alert saying "Booking Failed, Already Booked."

# Hosted link

