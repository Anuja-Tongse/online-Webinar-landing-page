function showWebinarDetails() {
    document.getElementById('webinar-details').style.display = 'block';
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('confirmation-reminder').style.display = 'none';
    document.getElementById('agenda-speaker-info').style.display = 'none';
    document.getElementById('thank-you').style.display = 'none';
}

function showRegistrationForm() {
    document.getElementById('webinar-details').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('confirmation-reminder').style.display = 'none';
    document.getElementById('agenda-speaker-info').style.display = 'none';
    document.getElementById('thank-you').style.display = 'none';
}

function showAgendaAndSpeakerInfo() {
    document.getElementById('webinar-details').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('confirmation-reminder').style.display = 'block';
    document.getElementById('agenda-speaker-info').style.display = 'block';
    document.getElementById('thank-you').style.display = 'none';
}

function showThankYouPage() {
    document.getElementById('webinar-details').style.display = 'none';
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('confirmation-reminder').style.display = 'none';
    document.getElementById('agenda-speaker-info').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
}

// You can add form submission handling and other JavaScript functionalities here if needed.