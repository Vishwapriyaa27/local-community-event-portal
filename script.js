function validatePhone(input) {
    const regex = /^\d{10}$/;
    if (!regex.test(input.value)) {
        alert("Enter a valid 10-digit phone number.");
        input.focus();
    }
}

function showFee(select) {
    const fees = { workshop: "$10", seminar: "$15", concert: "$20" };
    document.getElementById("feeDisplay").innerText = "Fee: " + fees[select.value];
    localStorage.setItem("preferredEvent", select.value);
}

function confirmSubmit() {
    document.getElementById("formOutput").value = "Registration successful!";
}

function enlargeImage(img) {
    img.style.width = "200px";
}

function countCharacters(textarea) {
    document.getElementById("charCount").innerText = textarea.value.length;
}

function videoReady() {
    document.getElementById("videoStatus").innerText = "Video ready to play";
}

window.onbeforeunload = function() {
    return "You have unsaved changes. Are you sure you want to leave?";
};

window.onload = function() {
    const preferred = localStorage.getItem("preferredEvent");
    if (preferred) {
        document.getElementById("eventType").value = preferred;
    }
};

function findNearbyEvents() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            document.getElementById("location").innerText =
                `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        },
        (error) => {
            document.getElementById("location").innerText =
                "Error getting location: " + error.message;
        },
        { enableHighAccuracy: true, timeout: 5000 }
    );
}

function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences cleared.");
}
