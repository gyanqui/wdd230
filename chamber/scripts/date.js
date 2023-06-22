window.addEventListener('DOMContentLoaded', function() {
    const dateTimeField = document.getElementById('dateTime');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Convert date to string format

    dateTimeField.value = formattedDate;
});