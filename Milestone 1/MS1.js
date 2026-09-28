// NOMI Main JavaScript

// Destinations

const destinations = [
    {
        name: "Baguio",
        tagline: "Pines, cafés & mountain escapes",
        image: "images/baguio.webp"
    },
    {
        name: "La Union",
        tagline: "Surf, sunsets & slow mornings",
        image: "images/launion.jpg"
    },
    {
        name: "Tagaytay",
        tagline: "Cool weather & weekend escapes",
        image: "images/picnic.jpeg"
    },
    {
        name: "Manila",
        tagline: "History, culture & city discoveries",
        image: "images/manila.jpeg"
    },
    {
        name: "Cebu",
        tagline: "Culture, city & tropical adventures",
        image: "images/cebu.jpg"
    },
    {
        name: "Bohol",
        tagline: "Nature, wildlife & island adventures",
        image: "images/bohol.jpg"
    },
    {
        name: "Siargao",
        tagline: "Island life starts here",
        image: "images/siargao.avif"
    },
    {
        name: "Puerto Princesa",
        tagline: "Palawan's natural wonders",
        image: "images/puertoprincesa.jpg"
    }
];


// Experiences

const experiences = [

    // Baguio

    {
        name: "Burnham Park",
        destination: "Baguio",
        category: "Nature & Leisure",
        description: "Enjoy boating, biking and a relaxing walk around one of Baguio's most iconic parks.",
        image: "images/burham.jpeg"
    },
    {
        name: "Camp John Hay",
        destination: "Baguio",
        category: "Nature",
        description: "Spend an afternoon surrounded by Baguio's famous pine trees and mountain atmosphere.",
        image: "images/camp.jpg"
    },
    {
        name: "Mines View Park",
        destination: "Baguio",
        category: "Sightseeing",
        description: "Take in mountain views from one of Baguio's classic sightseeing destinations.",
        image: "images/mines.jpg"
    },
    {
        name: "Tam-awan Village",
        destination: "Baguio",
        category: "Culture & Art",
        description: "Discover Cordilleran-inspired art, culture and traditional architecture.",
        image: "images/tam-awan.jpg"
    },


    // La Union

    {
        name: "Urbiztondo Surfing",
        destination: "La Union",
        category: "Surfing",
        description: "Experience the surf culture of San Juan's famous Urbiztondo area.",
        image: "images/urbiztondo.jpg"
    },
    {
        name: "Tangadan Falls",
        destination: "La Union",
        category: "Nature & Adventure",
        description: "Take a nature trip to one of La Union's popular waterfall destinations.",
        image: "images/tangadan.jpeg"
    },


    // Tagaytay

    {
        name: "Sky Ranch Tagaytay",
        destination: "Tagaytay",
        category: "Theme Park",
        description: "Enjoy amusement rides and Tagaytay's cool mountain atmosphere.",
        image: "images/skyranch.webp"
    },
    {
        name: "Tagaytay Picnic Grove",
        destination: "Tagaytay",
        category: "Nature",
        description: "Relax, picnic and enjoy scenic views in one of Tagaytay's classic destinations.",
        image: "images/picnic.jpeg"
    },


    // Manila

    {
        name: "Intramuros",
        destination: "Manila",
        category: "History",
        description: "Walk through Manila's historic walled city and discover centuries of Philippine history.",
        image: "images/intra.webp"
    },
    {
        name: "Fort Santiago",
        destination: "Manila",
        category: "History & Heritage",
        description: "Explore one of the most important historical sites within Intramuros.",
        image: "images/fort.webp"
    },


    // Cebu

    {
        name: "Magellan's Cross",
        destination: "Cebu",
        category: "History",
        description: "Visit one of Cebu City's most recognized historic landmarks.",
        image: "images/magellan.jpeg"
    },
    {
        name: "Fort San Pedro",
        destination: "Cebu",
        category: "History",
        description: "Explore Cebu's historic Spanish-era military fort.",
        image: "images/fortsanpedro.jpg"
    },
    {
        name: "Temple of Leah",
        destination: "Cebu",
        category: "Sightseeing",
        description: "Visit this well-known Cebu highlands attraction overlooking the city.",
        image: "images/temple.jpg"
    },


    // Bohol

    {
        name: "Chocolate Hills",
        destination: "Bohol",
        category: "Nature",
        description: "See Bohol's world-famous landscape of naturally formed hills.",
        image: "images/choco.avif"
    },
    {
        name: "Philippine Tarsier Sanctuary",
        destination: "Bohol",
        category: "Wildlife",
        description: "Learn about and responsibly observe the Philippine tarsier.",
        image: "images/tarsier.jpg"
    },
    {
        name: "Loboc River",
        destination: "Bohol",
        category: "Nature",
        description: "Experience Bohol's lush riverside scenery along the Loboc River.",
        image: "images/loboc.jpeg"
    },


    // Siargao

    {
        name: "Cloud 9",
        destination: "Siargao",
        category: "Surfing",
        description: "Visit Siargao's internationally known surfing destination.",
        image: "images/cloud.jpg"
    },
    {
        name: "Daku Island",
        destination: "Siargao",
        category: "Island Hopping",
        description: "Spend part of your Siargao island-hopping adventure on beautiful Daku Island.",
        image: "images/daku.jpeg"
    },
    {
        name: "Guyam Island",
        destination: "Siargao",
        category: "Island Hopping",
        description: "Discover a small tropical island during Siargao's popular island-hopping route.",
        image: "images/guyam.avif"
    },
    {
        name: "Magpupungko Rock Pools",
        destination: "Siargao",
        category: "Nature",
        description: "Explore Siargao's natural tidal pools and dramatic coastal rock formations.",
        image: "images/magpupungko.jpg"
    },


    // Puerto Princesa

    {
        name: "Puerto Princesa Underground River",
        destination: "Puerto Princesa",
        category: "Nature",
        description: "Discover the spectacular underground river system of Puerto Princesa.",
        image: "images/underground.jpg"
    },
    {
        name: "Honda Bay",
        destination: "Puerto Princesa",
        category: "Island Hopping",
        description: "Explore islands and tropical waters around Puerto Princesa's Honda Bay.",
        image: "images/honda.webp"
    },
    {
        name: "Iwahig Firefly Watching",
        destination: "Puerto Princesa",
        category: "Eco Experience",
        description: "Experience an evening river journey while observing fireflies in their natural habitat.",
        image: "images/firefly.jpg"
    }
];


// Stays

const stays = [
    {
        name: "NOMI Pine Stay",
        destination: "Baguio",
        area: "Camp John Hay Area",
        guests: 4,
        price: 3200,
        image: "images/Pine Stay.jpeg"
    },
    {
        name: "NOMI Surf House",
        destination: "La Union",
        area: "San Juan",
        guests: 4,
        price: 3500,
        image: "images/surfhouse.avif"
    },
    {
        name: "NOMI Ridge Stay",
        destination: "Tagaytay",
        area: "Tagaytay City",
        guests: 2,
        price: 2900,
        image: "images/ridge stay.jpg"
    },
    {
        name: "NOMI Heritage Stay",
        destination: "Manila",
        area: "Ermita",
        guests: 2,
        price: 2400,
        image: "images/heritage.jpg"
    },
    {
        name: "NOMI City Loft",
        destination: "Cebu",
        area: "Cebu City",
        guests: 3,
        price: 2800,
        image: "images/cityloft.avif"
    },
    {
        name: "NOMI Island Home",
        destination: "Bohol",
        area: "Panglao",
        guests: 4,
        price: 3800,
        image: "images/island home.jpeg"
    },
    {
        name: "NOMI Surf Villa",
        destination: "Siargao",
        area: "General Luna",
        guests: 4,
        price: 4200,
        image: "images/surf village.jpg"
    },
    {
        name: "NOMI Palawan Stay",
        destination: "Puerto Princesa",
        area: "Puerto Princesa City",
        guests: 4,
        price: 3300,
        image: "images/palawan stay.jpg"
    }
];

// LOCAL STORAGE

// Get saved data

function getSavedData(key, defaultValue) {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    }

    return defaultValue;
}


// Save data

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


// Get saved stay

function getSavedStay() {
    return getSavedData("nomiSavedStay", null);
}


// Get saved experiences

function getSavedExperiences() {
    return getSavedData("nomiSavedExperiences", []);
}


// Get saved itinerary

function getSavedTrip() {
    return getSavedData("nomiSavedTrip", null);
}

// DESTINATIONS

function renderDestinations() {
    const container = document.getElementById("destinationGrid");

    if (!container) {
        return;
    }

    let html = "";

    destinations.forEach(function (destination) {
        html += `
            <article
                class="destination-card"
                onclick="selectDestination('${destination.name}')"
            >
                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                >

                <div class="destination-overlay"></div>

                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.tagline}</p>
                </div>
            </article>
        `;
    });

    container.innerHTML = html;
}


// Open experiences for selected destination

function selectDestination(destination) {
    localStorage.setItem(
        "nomiDestination",
        destination
    );

    window.location.href =
        "experiences.html?destination=" +
        encodeURIComponent(destination);
}

// EXPERIENCES

// Create one experience card

function createExperienceCard(experience) {
    const saved = getSavedExperiences();

    let isSaved = false;

    saved.forEach(function (item) {
        if (item.name === experience.name) {
            isSaved = true;
        }
    });

    const safeName =
        experience.name.replace(/'/g, "\\'");

    let buttonText = "♡ Save to My Trip";
    let buttonClass = "primary-btn";

    if (isSaved) {
        buttonText = "✓ Saved to My Trip";
        buttonClass = "outline-btn";
    }

    return `
        <article class="experience-card">

            <img
                src="${experience.image}"
                alt="${experience.name}"
            >

            <div class="card-content">

                <span class="card-location">
                    ${experience.destination}
                </span>

                <h3>${experience.name}</h3>

                <p>
                    ${experience.description}
                </p>

                <div class="card-tags">
                    <span class="tag">
                        ${experience.category}
                    </span>

                    <span class="tag">
                        Explore Local
                    </span>
                </div>

                <button
                    type="button"
                    class="${buttonClass} trip-save-btn"
                    onclick="toggleSavedExperience('${safeName}')"
                >
                    ${buttonText}
                </button>

            </div>

        </article>
    `;
}


// Show featured experiences on Home

function renderFeaturedExperiences() {
    const container =
        document.getElementById("featuredExperiences");

    if (!container) {
        return;
    }

    let html = "";

    for (let i = 0; i < 6; i++) {
        html += createExperienceCard(experiences[i]);
    }

    container.innerHTML = html;
}


// Show all experiences

function renderExperiences(list) {
    const container =
        document.getElementById("experienceGrid");

    if (!container) {
        return;
    }

    if (!list) {
        list = experiences;
    }

    let html = "";

    list.forEach(function (experience) {
        html += createExperienceCard(experience);
    });

    container.innerHTML = html;
}


// Filter experiences

function filterExperiences() {
    const select =
        document.getElementById("experienceDestination");

    if (!select) {
        return;
    }

    const destination = select.value;

    if (destination === "all") {
        renderExperiences(experiences);
        return;
    }

    const filtered = experiences.filter(function (item) {
        return item.destination === destination;
    });

    renderExperiences(filtered);
}


// Save or remove experience

function toggleSavedExperience(experienceName) {
    const experience = experiences.find(function (item) {
        return item.name === experienceName;
    });

    if (!experience) {
        showToast("Experience not found.");
        return;
    }

    let saved = getSavedExperiences();

    const alreadySaved = saved.find(function (item) {
        return item.name === experienceName;
    });

    if (alreadySaved) {

        saved = saved.filter(function (item) {
            return item.name !== experienceName;
        });

        showToast(
            experienceName + " removed from My Trip."
        );

    } else {

        saved.push(experience);

        localStorage.setItem(
            "nomiDestination",
            experience.destination
        );

        showToast(
            experienceName + " saved to My Trip ♡"
        );
    }

    saveData(
        "nomiSavedExperiences",
        saved
    );

    renderFeaturedExperiences();
    renderExperiences();

    const select =
        document.getElementById("experienceDestination");

    if (select && select.value !== "all") {
        filterExperiences();
    }

    renderMyTrip();
}


// Remove experience from My Trip

function removeSavedExperience(experienceName) {
    let saved = getSavedExperiences();

    saved = saved.filter(function (item) {
        return item.name !== experienceName;
    });

    saveData(
        "nomiSavedExperiences",
        saved
    );

    renderFeaturedExperiences();
    renderExperiences();
    renderMyTrip();

    showToast(
        "Experience removed from My Trip."
    );
}


// ==============================
// STAYS
// ==============================


// Show stays

function renderStays(list) {
    const container =
        document.getElementById("stayGrid");

    if (!container) {
        return;
    }

    if (!list) {
        list = stays;
    }

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    🏡
                </div>

                <h3>No matching stays found</h3>

                <p>
                    Try another destination
                    or change the number of guests.
                </p>

            </div>
        `;

        return;
    }

    const selectedStay = getSavedStay();

    let html = "";

    list.forEach(function (stay) {

        let isSelected = false;

        if (
            selectedStay &&
            selectedStay.name === stay.name
        ) {
            isSelected = true;
        }

        const safeName =
            stay.name.replace(/'/g, "\\'");

        let buttonText = "+ Add to My Trip";
        let buttonClass = "primary-btn";

        if (isSelected) {
            buttonText = "✓ Added to My Trip";
            buttonClass = "outline-btn";
        }

        html += `
            <article class="stay-card">

                <img
                    src="${stay.image}"
                    alt="${stay.name}"
                >

                <div class="card-content">

                    <span class="card-location">
                        ${stay.destination}
                    </span>

                    <h3>${stay.name}</h3>

                    <p>
                        ${stay.area}
                        • Up to ${stay.guests} guests
                    </p>

                    <div class="card-tags">

                        <span class="tag">
                            Sample NOMI Stay
                        </span>

                        <span class="tag">
                            From ₱${stay.price.toLocaleString()}
                        </span>

                    </div>

                    <button
                        type="button"
                        class="${buttonClass} trip-save-btn"
                        onclick="saveStayToTrip('${safeName}')"
                    >
                        ${buttonText}
                    </button>

                </div>

            </article>
        `;
    });

    container.innerHTML = html;
}


// Filter stays

function filterStays() {
    const destinationSelect =
        document.getElementById("stayDestination");

    const guestSelect =
        document.getElementById("stayGuests");

    if (!destinationSelect || !guestSelect) {
        return;
    }

    const destination =
        destinationSelect.value;

    const guests =
        Number(guestSelect.value);

    const filtered = stays.filter(function (stay) {

        let destinationMatch = false;
        let guestMatch = false;

        if (
            destination === "all" ||
            stay.destination === destination
        ) {
            destinationMatch = true;
        }

        if (
            guests === 0 ||
            stay.guests >= guests
        ) {
            guestMatch = true;
        }

        return destinationMatch && guestMatch;
    });

    renderStays(filtered);
}


// Add a stay to My Trip

function saveStayToTrip(stayName) {
    const stay = stays.find(function (item) {
        return item.name === stayName;
    });

    if (!stay) {
        showToast("Stay not found.");
        return;
    }

    const currentStay = getSavedStay();

    // Clicking it again removes the stay
    if (
        currentStay &&
        currentStay.name === stay.name
    ) {
        removeSavedStay();
        return;
    }

    saveData(
        "nomiSavedStay",
        stay
    );

    localStorage.setItem(
        "nomiDestination",
        stay.destination
    );

    renderStays();
    renderMyTrip();

    showToast(
        stay.name + " added to My Trip ♡"
    );
}

// Remove stay

function removeSavedStay() {
    localStorage.removeItem(
        "nomiSavedStay"
    );

    renderStays();
    renderMyTrip();

    showToast(
        "Stay removed from My Trip."
    );
}

// HOME SEARCH

function searchTrip() {
    const destination =
        document.getElementById("heroDestination");

    const checkIn =
        document.getElementById("checkIn");

    const checkOut =
        document.getElementById("checkOut");

    const guests =
        document.getElementById("guests");


    if (!destination) {
        return;
    }


    // Check if a destination was selected

    if (
        destination.value === "" ||
        destination.value === "all"
    ) {
        showToast("Please choose a destination.");
        return;
    }


    // Check the dates

    if (
        checkIn &&
        checkOut &&
        checkIn.value &&
        checkOut.value
    ) {
        const startDate =
            new Date(checkIn.value);

        const endDate =
            new Date(checkOut.value);


        if (endDate <= startDate) {
            showToast(
                "Check-out must be after check-in."
            );

            return;
        }
    }


    // Save trip search

    const search = {
        destination: destination.value,
        checkIn: checkIn ? checkIn.value : "",
        checkOut: checkOut ? checkOut.value : "",
        guests: guests ? Number(guests.value) : 1
    };


    saveData(
        "nomiSearch",
        search
    );


    localStorage.setItem(
        "nomiDestination",
        destination.value
    );


    // Open Stays page

    window.location.href =
        "stays.html?destination=" +
        encodeURIComponent(destination.value);
}


// Simple search function

function searchNomi() {
    searchTrip();
}

// URL DESTINATION

// Read destination from the URL

function applyURLDestination() {
    const params =
        new URLSearchParams(window.location.search);

    const destination =
        params.get("destination");


    if (!destination) {
        return;
    }


    localStorage.setItem(
        "nomiDestination",
        destination
    );


    // Stays page

    const stayDestination =
        document.getElementById("stayDestination");

    if (stayDestination) {
        stayDestination.value = destination;

        loadHomeSearch();
        filterStays();
    }


    // Experiences page

    const experienceDestination =
        document.getElementById(
            "experienceDestination"
        );

    if (experienceDestination) {
        experienceDestination.value =
            destination;

        filterExperiences();
    }
}


// Load Home search details into Stays

function loadHomeSearch() {
    const search =
        getSavedData("nomiSearch", null);

    if (!search) {
        return;
    }


    const destination =
        document.getElementById("stayDestination");

    const guests =
        document.getElementById("stayGuests");


    if (
        destination &&
        search.destination
    ) {
        destination.value =
            search.destination;
    }


    if (
        guests &&
        search.guests
    ) {
        guests.value =
            search.guests;
    }
}

// TRIP PLANNER

function initializeItineraryForm() {
    const form =
        document.getElementById("itineraryForm");

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();

            generateItinerary();
        }
    );
}


// Generate itinerary

function generateItinerary() {
    const destination =
        document.getElementById(
            "plannerDestination"
        );

    const days =
        document.getElementById(
            "plannerDays"
        );

    const travelers =
        document.getElementById(
            "plannerTravelers"
        );

    const style =
        document.getElementById(
            "plannerStyle"
        );

    const budget =
        document.getElementById(
            "plannerBudget"
        );


    if (
        !destination ||
        !days ||
        !travelers
    ) {
        return;
    }


    if (!destination.value) {
        showToast(
            "Please choose a destination."
        );

        return;
    }


    const numberOfDays =
        Number(days.value);


    if (
        numberOfDays < 1 ||
        numberOfDays > 7
    ) {
        showToast(
            "Please choose between 1 and 7 days."
        );

        return;
    }


    const trip = {
        destination: destination.value,
        days: numberOfDays,
        travelers: Number(travelers.value),
        style: style ? style.value : "",
        budget: budget ? budget.value : "",
        schedule: []
    };


    // Get activities from selected destination

    const activities =
        experiences.filter(function (item) {
            return (
                item.destination ===
                trip.destination
            );
        });


    // Create each day

    for (
        let day = 1;
        day <= trip.days;
        day++
    ) {
        let activity;

        if (activities.length > 0) {
            activity =
                activities[
                    (day - 1) %
                    activities.length
                ];
        }


        const dayPlan = {
            day: day,
            title:
                activity
                    ? activity.name
                    : "Explore " +
                      trip.destination,

            description:
                activity
                    ? activity.description
                    : "Spend the day discovering local places, food and attractions."
        };


        trip.schedule.push(dayPlan);
    }


    // Keep generated trip temporarily

    window.generatedNomiTrip = trip;


    // Save destination

    localStorage.setItem(
        "nomiDestination",
        trip.destination
    );


    displayGeneratedItinerary(trip);


    showToast(
        trip.destination +
        " itinerary created ✦"
    );
}


// Show generated itinerary

function displayGeneratedItinerary(trip) {
    const section =
        document.getElementById(
            "generatedItinerary"
        );

    const title =
        document.getElementById(
            "itineraryTitle"
        );

    const subtitle =
        document.getElementById(
            "itinerarySubtitle"
        );

    const daysContainer =
        document.getElementById(
            "itineraryDays"
        );


    if (
        !section ||
        !daysContainer
    ) {
        return;
    }


    section.classList.remove("hidden");


    if (title) {
        title.textContent =
            trip.days +
            "-Day " +
            trip.destination +
            " Trip";
    }


    if (subtitle) {
        subtitle.textContent =
            trip.travelers +
            " traveler(s) • " +
            trip.style +
            " • " +
            trip.budget;
    }


    let html = "";


    trip.schedule.forEach(
        function (day) {

            html += `
                <article class="itinerary-day">

                    <h3>
                        Day ${day.day}
                    </h3>

                    <strong>
                        ${day.title}
                    </strong>

                    <p>
                        ${day.description}
                    </p>

                </article>
            `;
        }
    );


    daysContainer.innerHTML = html;


    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// Save itinerary to My Trip

function saveItinerary() {
    let trip =
        window.generatedNomiTrip;


    // Use displayed trip if page was refreshed

    if (!trip) {
        trip =
            getSavedData(
                "nomiGeneratedTrip",
                null
            );
    }


    if (!trip) {
        showToast(
            "Create an itinerary first."
        );

        return;
    }


    saveData(
        "nomiSavedTrip",
        trip
    );


    localStorage.setItem(
        "nomiDestination",
        trip.destination
    );


    renderMyTrip();


    showToast(
        "Itinerary saved to My Trip ♡"
    );
}


// Save generated itinerary temporarily

function saveGeneratedItinerary() {
    if (!window.generatedNomiTrip) {
        return;
    }


    saveData(
        "nomiGeneratedTrip",
        window.generatedNomiTrip
    );
}


// Remove saved itinerary

function clearSavedItinerary() {
    localStorage.removeItem(
        "nomiSavedTrip"
    );


    renderMyTrip();


    showToast(
        "Itinerary removed from My Trip."
    );
}


// Load generated itinerary after refresh

function loadGeneratedItinerary() {
    const trip =
        getSavedData(
            "nomiGeneratedTrip",
            null
        );


    if (!trip) {
        return;
    }

    window.generatedNomiTrip = trip;

        saveData(
         "nomiGeneratedTrip",
            trip
);

// Save destination

localStorage.setItem(
    "nomiDestination",
    trip.destination
);

    const section =
        document.getElementById(
            "generatedItinerary"
        );


    if (section) {
        displayGeneratedItinerary(trip);
    }
}

// MY TRIP

function renderMyTrip() {
    renderTripOverview();
    renderTripStay();
    renderSavedItinerary();
    renderSavedExperiences();
    renderTripTreasureHunt();
}

// TRIP OVERVIEW

function renderTripOverview() {
    const destinationText =
        document.getElementById(
            "tripDestination"
        );

    const details =
        document.getElementById(
            "tripDetails"
        );


    if (
        !destinationText &&
        !details
    ) {
        return;
    }


    const savedTrip =
        getSavedTrip();

    const savedStay =
        getSavedStay();

    const savedExperiences =
        getSavedExperiences();


    let destination =
        localStorage.getItem(
            "nomiDestination"
        );


    if (
        !destination &&
        savedTrip
    ) {
        destination =
            savedTrip.destination;
    }


    if (
        !destination &&
        savedStay
    ) {
        destination =
            savedStay.destination;
    }


    if (!destination) {
        destination = "Your Trip";
    }


    if (destinationText) {
        destinationText.textContent =
            destination;
    }


    if (details) {

        if (savedTrip) {
            details.textContent =
                savedTrip.days +
                " days • " +
                savedTrip.travelers +
                " traveler(s)";
        } else {
            details.textContent =
                "Start building your NOMI adventure.";
        }
    }


    updateTripStats(
        destination,
        savedTrip,
        savedExperiences
    );
}

// TRIP STATS

function updateTripStats(
    destination,
    trip,
    savedExperiences
) {
    const destinationStat =
        document.getElementById(
            "tripStatDestination"
        );

    const daysStat =
        document.getElementById(
            "tripStatDays"
        );

    const travelersStat =
        document.getElementById(
            "tripStatTravelers"
        );

    const activitiesStat =
        document.getElementById(
            "tripStatActivities"
        );


    if (destinationStat) {
        destinationStat.textContent =
            destination;
    }


    if (daysStat) {
        daysStat.textContent =
            trip ? trip.days : "—";
    }


    if (travelersStat) {
        travelersStat.textContent =
            trip ? trip.travelers : "—";
    }


    if (activitiesStat) {
        activitiesStat.textContent =
            savedExperiences.length;
    }
}

// SAVED STAY

function renderTripStay() {
    const container =
        document.getElementById(
            "myStayContainer"
        );


    if (!container) {
        return;
    }


    const stay =
        getSavedStay();


    if (!stay) {
        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    🏡
                </div>

                <h3>
                    No stay added yet
                </h3>

                <p>
                    Find a place to stay
                    and add it to your trip.
                </p>

                <a
                    href="stays.html"
                    class="primary-btn"
                >
                    Find a Stay
                </a>

            </div>
        `;

        return;
    }


    container.innerHTML = `
        <article class="saved-stay-card">

            <img
                src="${stay.image}"
                alt="${stay.name}"
            >

            <div class="saved-stay-info">

                <span class="eyebrow dark">
                    ${stay.destination}
                </span>

                <h3>
                    ${stay.name}
                </h3>

                <p>
                    ${stay.area}
                </p>

                <p>
                    Up to ${stay.guests} guests
                    • ₱${stay.price.toLocaleString()}
                </p>

                <button
                    type="button"
                    class="outline-btn"
                    onclick="removeSavedStay()"
                >
                    Remove Stay
                </button>

            </div>

        </article>
    `;
}

// SAVED ITINERARY

function renderSavedItinerary() {
    const container =
        document.getElementById(
            "savedItineraryContainer"
        );


    if (!container) {
        return;
    }


    const trip =
        getSavedTrip();


    if (!trip) {
        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-state-icon">
                    ✦
                </div>

                <h3>
                    No itinerary saved yet
                </h3>

                <p>
                    Create a simple itinerary
                    for your next trip.
                </p>

                <a
                    href="itinerary.html"
                    class="primary-btn"
                >
                    Plan My Trip
                </a>

            </div>
        `;

        return;
    }


    let daysHTML = "";


    trip.schedule.forEach(
        function (day) {

            daysHTML += `
                <div class="timeline-item">

                    <strong>
                        DAY ${day.day}
                    </strong>

                    <p>
                        ${day.title}
                    </p>

                </div>
            `;
        }
    );


    container.innerHTML = `
        <div class="saved-itinerary">

            <span class="eyebrow dark">
                Saved Itinerary
            </span>

            <h3>
                ${trip.days}-Day
                ${trip.destination} Trip
            </h3>

            <p>
                ${trip.travelers}
                traveler(s)
            </p>

            <div class="saved-itinerary-content">
                ${daysHTML}
            </div>

            <button
                type="button"
                class="outline-btn"
                onclick="clearSavedItinerary()"
            >
                Remove Itinerary
            </button>

        </div>
    `;
}

// SAVED EXPERIENCE

function renderSavedExperiences() {
    const container =
        document.getElementById(
            "savedExperiencesGrid"
        );

    const empty =
        document.getElementById(
            "emptyExperiences"
        );


    if (!container) {
        return;
    }


    const saved =
        getSavedExperiences();


    if (saved.length === 0) {

        container.innerHTML = "";


        if (empty) {
            empty.classList.remove(
                "hidden"
            );
        }


        return;
    }


    if (empty) {
        empty.classList.add(
            "hidden"
        );
    }


    let html = "";


    saved.forEach(
        function (experience) {

            const safeName =
                experience.name.replace(
                    /'/g,
                    "\\'"
                );


            html += `
                <article class="experience-card">

                    <img
                        src="${experience.image}"
                        alt="${experience.name}"
                    >

                    <div class="card-content">

                        <span class="card-location">
                            ${experience.destination}
                        </span>

                        <h3>
                            ${experience.name}
                        </h3>

                        <p>
                            ${experience.description}
                        </p>

                        <button
                            type="button"
                            class="outline-btn trip-save-btn"
                            onclick="removeSavedExperience('${safeName}')"
                        >
                            Remove
                        </button>

                    </div>

                </article>
            `;
        }
    );


    container.innerHTML = html;
}

// TRIP CHECKLIST

function initializeTripChecklist() {
    const checklistIDs = [
        "checkStay",
        "checkTransport",
        "checkActivities",
        "checkBudget",
        "checkEssentials"
    ];


    const savedChecklist =
        getSavedData(
            "nomiChecklist",
            {}
        );


    checklistIDs.forEach(
        function (id) {

            const checkbox =
                document.getElementById(id);


            if (!checkbox) {
                return;
            }


            // Load saved checkbox

            if (
                savedChecklist[id] === true
            ) {
                checkbox.checked = true;
            }


            // Save when changed

            checkbox.addEventListener(
                "change",
                function () {

                    savedChecklist[id] =
                        checkbox.checked;


                    saveData(
                        "nomiChecklist",
                        savedChecklist
                    );
                }
            );
        }
    );
}

// TREASURE HUNT

// Treasure Hunt information

const treasureHunts = {

    Baguio: {
        title: "Baguio Strawberry Hunt",
        description:
            "Take a photo during your Baguio strawberry experience.",
        type: "photo",
        icon: "🍓",
        achievement: "Strawberry Explorer"
    },

    Manila: {
        title: "Intramuros History Hunt",
        description:
            "Answer questions about Intramuros and Philippine history.",
        type: "quiz",
        icon: "🏰",
        achievement: "History Explorer"
    },

    Cebu: {
        title: "Cebu Wildlife Hunt",
        description:
            "Find your assigned animal and upload a photo.",
        type: "animal",
        icon: "🦁",
        achievement: "Wildlife Explorer"
    },

    Bohol: {
        title: "Bohol Tarsier Hunt",
        description:
            "Upload a photo from your Bohol wildlife adventure.",
        type: "photo",
        icon: "🐒",
        achievement: "Bohol Explorer"
    },

    "La Union": {
        title: "La Union Surf Hunt",
        description:
            "Upload a short video from your La Union surf experience.",
        type: "video",
        icon: "🏄",
        achievement: "Surf Explorer"
    },

    Siargao: {
        title: "Siargao Island Hunt",
        description:
            "Upload a video from your Siargao island adventure.",
        type: "video",
        icon: "🌴",
        achievement: "Island Explorer"
    }
};


// Manila quiz questions

const intramurosQuestions = [
    {
        question:
            "What does the word Intramuros mean?",
        choices: [
            "Inside the walls",
            "Old city",
            "Spanish town",
            "Fortress"
        ],
        answer: "Inside the walls"
    },

    {
        question:
            "Which famous fort is located inside Intramuros?",
        choices: [
            "Fort Santiago",
            "Fort San Pedro",
            "Fort Bonifacio",
            "Fort Magsaysay"
        ],
        answer: "Fort Santiago"
    },

    {
        question:
            "Which Philippine national hero was imprisoned in Fort Santiago?",
        choices: [
            "Andres Bonifacio",
            "Jose Rizal",
            "Emilio Aguinaldo",
            "Apolinario Mabini"
        ],
        answer: "Jose Rizal"
    }
];


// Animals for Cebu challenge

const cebuAnimals = [
    {
        name: "Giraffe",
        emoji: "🦒"
    },
    {
        name: "Lion",
        emoji: "🦁"
    },
    {
        name: "Zebra",
        emoji: "🦓"
    },
    {
        name: "Monkey",
        emoji: "🐒"
    }
];


// Current Treasure Hunt information

let activeHunt = null;
let huntCompleted = false;

let currentQuizQuestion = 0;
let selectedQuizAnswer = "";

let assignedAnimal = null;

// SAVE TREASURE HUNT

function saveTreasureHunt() {

    if (!activeHunt) {
        return;
    }


    const progress = {
        destination: activeHunt,
        completed: huntCompleted,
        quizQuestion: currentQuizQuestion,
        animal: assignedAnimal
    };


    saveData(
        "nomiTreasureHunt",
        progress
    );
}


// Load saved Treasure Hunt

function loadSavedTreasureHunt() {

    const saved =
        getSavedData(
            "nomiTreasureHunt",
            null
        );


    if (!saved) {
        return;
    }


    if (!treasureHunts[saved.destination]) {
        return;
    }


    activeHunt =
        saved.destination;

    huntCompleted =
        saved.completed === true;

    currentQuizQuestion =
        Number(saved.quizQuestion || 0);

    assignedAnimal =
        saved.animal || null;
}

// START TREASURE HUNT

function startTreasureHunt(destination) {

    const hunt =
        treasureHunts[destination];


    if (!hunt) {
        showToast(
            "Challenge not found."
        );

        return;
    }


    activeHunt = destination;

    huntCompleted = false;

    currentQuizQuestion = 0;

    selectedQuizAnswer = "";

    assignedAnimal = null;


    // Cebu needs a random animal

    if (hunt.type === "animal") {

        const randomNumber =
            Math.floor(
                Math.random() *
                cebuAnimals.length
            );


        assignedAnimal =
            cebuAnimals[randomNumber];
    }


    saveTreasureHunt();

    renderTreasureHunt();

    renderMyTrip();


    const activeSection =
        document.getElementById(
            "activeHunt"
        );


    if (activeSection) {

        activeSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    showToast(
        hunt.title + " started ✦"
    );
}

// DISPLAY TREASURE HUNT

function renderTreasureHunt() {

    if (!activeHunt) {
        return;
    }


    const hunt =
        treasureHunts[activeHunt];


    if (!hunt) {
        return;
    }


    const activeSection =
        document.getElementById(
            "activeHunt"
        );


    if (!activeSection) {
        return;
    }


    activeSection.classList.remove(
        "hidden"
    );


    setText(
        "huntTitle",
        hunt.title
    );

    setText(
        "huntDescription",
        hunt.description
    );

    setText(
        "challengeIcon",
        hunt.icon
    );

    setText(
        "challengeType",
        activeHunt
    );

    setText(
        "challengeTitle",
        hunt.title
    );

    setText(
        "challengeText",
        hunt.description
    );


    hideChallengeModes();


    // Show completed challenge

    if (huntCompleted) {

        showCompletedHunt();

        return;
    }


    const completedSection =
        document.getElementById(
            "huntComplete"
        );


    if (completedSection) {
        completedSection.classList.add(
            "hidden"
        );
    }


    // Show correct challenge type

    if (hunt.type === "quiz") {
        showQuizChallenge();
    }


    if (hunt.type === "photo") {
        showPhotoChallenge();
    }


    if (hunt.type === "video") {
        showVideoChallenge();
    }


    if (hunt.type === "animal") {
        showAnimalChallenge();
    }


    updateChallengeStatus();
}

// SMALL TREASURE HUNT FUNCTIONS

// Change text if element exists

function setText(id, text) {

    const element =
        document.getElementById(id);


    if (element) {
        element.textContent = text;
    }
}


// Hide all challenge sections

function hideChallengeModes() {

    const sections = [
        "quizChallenge",
        "photoChallenge",
        "videoChallenge",
        "animalChallenge"
    ];


    sections.forEach(
        function (id) {

            const section =
                document.getElementById(id);


            if (section) {
                section.classList.add(
                    "hidden"
                );
            }
        }
    );
}

// MANILA QUIZ

function showQuizChallenge() {

    const section =
        document.getElementById(
            "quizChallenge"
        );


    if (!section) {
        return;
    }


    section.classList.remove(
        "hidden"
    );


    renderQuizQuestion();
}


// Show current quiz question

function renderQuizQuestion() {

    const question =
        intramurosQuestions[
            currentQuizQuestion
        ];


    // Finish when there are no questions left

    if (!question) {

        completeTreasureHunt();

        return;
    }


    setText(
        "quizProgress",
        "Question " +
        (currentQuizQuestion + 1) +
        " of " +
        intramurosQuestions.length
    );


    setText(
        "quizQuestion",
        question.question
    );


    const options =
        document.getElementById(
            "quizOptions"
        );


    if (!options) {
        return;
    }


    selectedQuizAnswer = "";


    let html = "";


    question.choices.forEach(
        function (choice) {

            const safeChoice =
                choice.replace(
                    /'/g,
                    "\\'"
                );


            html += `
                <button
                    type="button"
                    class="quiz-option"
                    onclick="selectQuizAnswer(this, '${safeChoice}')"
                >
                    ${choice}
                </button>
            `;
        }
    );


    options.innerHTML = html;
}


// Select quiz answer

function selectQuizAnswer(
    button,
    answer
) {

    selectedQuizAnswer = answer;


    const options =
        document.querySelectorAll(
            ".quiz-option"
        );


    options.forEach(
        function (option) {

            option.classList.remove(
                "selected"
            );
        }
    );


    button.classList.add(
        "selected"
    );
}


// Submit quiz answer

function submitQuizAnswer() {

    if (!selectedQuizAnswer) {

        showToast(
            "Choose an answer first."
        );

        return;
    }


    const question =
        intramurosQuestions[
            currentQuizQuestion
        ];


    if (
        selectedQuizAnswer !==
        question.answer
    ) {

        showToast(
            "Not quite. Try again."
        );

        return;
    }


    currentQuizQuestion++;


    // Quiz finished

    if (
        currentQuizQuestion >=
        intramurosQuestions.length
    ) {

        completeTreasureHunt();

        return;
    }


    saveTreasureHunt();

    renderQuizQuestion();


    showToast(
        "Correct! Next question ✦"
    );
}

// PHOTO CHALLENGE

function showPhotoChallenge() {

    const section =
        document.getElementById(
            "photoChallenge"
        );


    if (section) {
        section.classList.remove(
            "hidden"
        );
    }
}


// Preview uploaded photo

function previewChallengePhoto(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    if (
        !file.type.startsWith("image/")
    ) {

        showToast(
            "Please choose an image file."
        );

        event.target.value = "";

        return;
    }


    const preview =
        document.getElementById(
            "photoPreview"
        );

    const container =
        document.getElementById(
            "photoPreviewContainer"
        );


    if (
        !preview ||
        !container
    ) {
        return;
    }


    preview.src =
        URL.createObjectURL(file);


    container.classList.remove(
        "hidden"
    );
}


// Submit photo

function submitPhotoChallenge() {

    const input =
        document.getElementById(
            "challengePhoto"
        );


    if (
        !input ||
        input.files.length === 0
    ) {

        showToast(
            "Upload your challenge photo first."
        );

        return;
    }


    completeTreasureHunt();
}

// VIDEO CHALLENGE

function showVideoChallenge() {

    const section =
        document.getElementById(
            "videoChallenge"
        );


    if (section) {
        section.classList.remove(
            "hidden"
        );
    }
}


// Preview uploaded video

function previewChallengeVideo(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    if (
        !file.type.startsWith("video/")
    ) {

        showToast(
            "Please choose a video file."
        );

        event.target.value = "";

        return;
    }


    const preview =
        document.getElementById(
            "videoPreview"
        );

    const container =
        document.getElementById(
            "videoPreviewContainer"
        );


    if (
        !preview ||
        !container
    ) {
        return;
    }


    preview.src =
        URL.createObjectURL(file);


    container.classList.remove(
        "hidden"
    );
}


// Submit video

function submitVideoChallenge() {

    const input =
        document.getElementById(
            "challengeVideo"
        );


    if (
        !input ||
        input.files.length === 0
    ) {

        showToast(
            "Upload your challenge video first."
        );

        return;
    }


    completeTreasureHunt();
}

// CEBU ANIMAL CHALLENGE

function showAnimalChallenge() {

    const section =
        document.getElementById(
            "animalChallenge"
        );


    if (!section) {
        return;
    }


    section.classList.remove(
        "hidden"
    );


    // Give the user an animal
    // if they do not have one yet

    if (!assignedAnimal) {

        const randomNumber =
            Math.floor(
                Math.random() *
                cebuAnimals.length
            );


        assignedAnimal =
            cebuAnimals[randomNumber];


        saveTreasureHunt();
    }


    setText(
        "animalEmoji",
        assignedAnimal.emoji
    );


    setText(
        "animalName",
        assignedAnimal.name
    );
}


// Preview animal photo

function previewAnimalPhoto(event) {

    const file =
        event.target.files[0];


    if (!file) {
        return;
    }


    if (
        !file.type.startsWith("image/")
    ) {

        showToast(
            "Please choose an image file."
        );

        event.target.value = "";

        return;
    }


    const preview =
        document.getElementById(
            "animalPreview"
        );

    const container =
        document.getElementById(
            "animalPreviewContainer"
        );


    if (
        !preview ||
        !container
    ) {
        return;
    }


    preview.src =
        URL.createObjectURL(file);


    container.classList.remove(
        "hidden"
    );
}


// Submit animal challenge

function submitAnimalChallenge() {

    const input =
        document.getElementById(
            "animalPhoto"
        );


    if (
        !input ||
        input.files.length === 0
    ) {

        showToast(
            "Upload a photo of your assigned animal first."
        );

        return;
    }


    completeTreasureHunt();
}

// COMPLETE CHALLENGE

function completeTreasureHunt() {

    if (!activeHunt) {
        return;
    }


    const hunt =
        treasureHunts[activeHunt];


    huntCompleted = true;


    saveTreasureHunt();

    showCompletedHunt();

    renderMyTrip();


    showToast(
        hunt.achievement +
        " unlocked ✦"
    );
}


// Show completion message

function showCompletedHunt() {

    const hunt =
        treasureHunts[activeHunt];


    if (!hunt) {
        return;
    }


    // Hide challenge activities

    hideChallengeModes();


    const completeSection =
        document.getElementById(
            "huntComplete"
        );


    if (completeSection) {
        completeSection.classList.remove(
            "hidden"
        );
    }


    setText(
        "achievementName",
        hunt.achievement
    );


    setText(
        "challengeStatusIcon",
        "✓"
    );


    setText(
        "challengeStatus",
        "Challenge Complete"
    );


    setText(
        "challengeStatusText",
        "You completed the " +
        hunt.title +
        "."
    );
}


// Show challenge in progress

function updateChallengeStatus() {

    setText(
        "challengeStatusIcon",
        "✦"
    );


    setText(
        "challengeStatus",
        "Challenge in Progress"
    );


    setText(
        "challengeStatusText",
        "Complete the activity to unlock your NOMI achievement."
    );
}

// RESET TREASURE HUNT

function resetTreasureHunt() {

    if (!activeHunt) {
        return;
    }


    huntCompleted = false;

    currentQuizQuestion = 0;

    selectedQuizAnswer = "";


    // Give Cebu a new animal

    if (
        treasureHunts[activeHunt].type ===
        "animal"
    ) {

        const randomNumber =
            Math.floor(
                Math.random() *
                cebuAnimals.length
            );


        assignedAnimal =
            cebuAnimals[randomNumber];

    } else {

        assignedAnimal = null;
    }


    saveTreasureHunt();

    clearChallengePreviews();

    renderTreasureHunt();

    renderMyTrip();


    showToast(
        "Treasure Hunt progress reset."
    );
}


// Clear uploaded files and previews

function clearChallengePreviews() {

    const inputIDs = [
        "challengePhoto",
        "challengeVideo",
        "animalPhoto"
    ];


    inputIDs.forEach(
        function (id) {

            const input =
                document.getElementById(id);


            if (input) {
                input.value = "";
            }
        }
    );


    const previewIDs = [
        "photoPreviewContainer",
        "videoPreviewContainer",
        "animalPreviewContainer"
    ];


    previewIDs.forEach(
        function (id) {

            const preview =
                document.getElementById(id);


            if (preview) {
                preview.classList.add(
                    "hidden"
                );
            }
        }
    );
}

// SCROLL TO CHALLENGES

function scrollToHunts() {

    let section =
        document.getElementById(
            "availableHunts"
        );


    if (!section) {
        section =
            document.querySelector(
                ".hunt-grid"
            );
    }


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// TREASURE HUNT ON MY TRIP

function renderTripTreasureHunt() {

    const name =
        document.getElementById(
            "tripHuntName"
        );

    const description =
        document.getElementById(
            "tripHuntDescription"
        );

    const progress =
        document.getElementById(
            "tripHuntProgress"
        );

    const progressText =
        document.getElementById(
            "tripHuntProgressText"
        );


    // Stop if we are not on My Trip

    if (
        !name &&
        !description &&
        !progress &&
        !progressText
    ) {
        return;
    }


    // No challenge started

    if (!activeHunt) {

        if (name) {
            name.textContent =
                "No active challenge";
        }


        if (description) {
            description.textContent =
                "Choose a NOMI Treasure Hunt challenge to begin.";
        }


        if (progress) {
            progress.style.width =
                "0%";
        }


        if (progressText) {
            progressText.textContent =
                "Not started";
        }


        return;
    }


    const hunt =
        treasureHunts[activeHunt];


    if (!hunt) {
        return;
    }


    if (name) {
        name.textContent =
            hunt.title;
    }


    if (description) {

        if (huntCompleted) {

            description.textContent =
                hunt.achievement +
                " unlocked.";

        } else {

            description.textContent =
                hunt.description;
        }
    }


    if (progress) {

        if (huntCompleted) {
            progress.style.width =
                "100%";
        } else {
            progress.style.width =
                "50%";
        }
    }


    if (progressText) {

        if (huntCompleted) {

            progressText.textContent =
                "Challenge complete";

        } else {

            progressText.textContent =
                "Challenge in progress";
        }
    }
}
// Login

function getNomiUser() {
    return getSavedData("nomiUser", null);
}


// Login form

function initializeLogin() {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const remember = document.getElementById("rememberMe");
    const passwordToggle = document.getElementById("passwordToggle");
    const demoLogin = document.getElementById("demoLogin");

    const rememberedEmail =
        localStorage.getItem("nomiRememberedEmail");

    if (email && rememberedEmail) {
        email.value = rememberedEmail;

        if (remember) {
            remember.checked = true;
        }
    }


    // Show or hide password

    if (passwordToggle && password) {
        passwordToggle.addEventListener("click", function () {

            if (password.type === "password") {
                password.type = "text";
                passwordToggle.textContent = "Hide";
            } else {
                password.type = "password";
                passwordToggle.textContent = "Show";
            }
        });
    }


    // Submit login form

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailValue = email.value.trim();
            const passwordValue = password.value;

            const emailError =
                document.getElementById("emailError");

            const passwordError =
                document.getElementById("passwordError");


            if (emailError) {
                emailError.textContent = "";
            }

            if (passwordError) {
                passwordError.textContent = "";
            }


            let valid = true;

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(emailValue)) {

                if (emailError) {
                    emailError.textContent =
                        "Enter a valid email address.";
                }

                valid = false;
            }


            if (passwordValue.length < 6) {

                if (passwordError) {
                    passwordError.textContent =
                        "Password must be at least 6 characters.";
                }

                valid = false;
            }


            if (!valid) {
                return;
            }


            // Remember email

            if (remember && remember.checked) {

                localStorage.setItem(
                    "nomiRememberedEmail",
                    emailValue
                );

            } else {

                localStorage.removeItem(
                    "nomiRememberedEmail"
                );
            }


            // Save user

            const user = {
                name: emailValue.split("@")[0],
                email: emailValue,
                loggedIn: true
            };


            saveData(
                "nomiUser",
                user
            );


            showToast("Welcome to NOMI ✦");


            setTimeout(function () {
                window.location.href = "trip.html";
            }, 500);
        });
    }


    // Demo login

    if (demoLogin) {
        demoLogin.addEventListener("click", function () {

            const user = {
                name: "Demo Traveler",
                email: "demo@nomi.ph",
                loggedIn: true,
                demo: true
            };


            saveData(
                "nomiUser",
                user
            );


            showToast(
                "Demo Traveler mode activated ✦"
            );


            setTimeout(function () {
                window.location.href = "trip.html";
            }, 500);
        });
    }
}


// Create account

function showSignupMessage() {

    const name = prompt(
        "Enter your name:"
    );


    if (!name) {
        return;
    }


    const email = prompt(
        "Enter your email address:"
    );


    if (!email) {
        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.trim())) {

        showToast(
            "Please enter a valid email address."
        );

        return;
    }


    const password = prompt(
        "Create a password with at least 6 characters:"
    );


    if (
        !password ||
        password.length < 6
    ) {

        showToast(
            "Password must be at least 6 characters."
        );

        return;
    }


    const user = {
        name: name.trim(),
        email: email.trim(),
        loggedIn: true
    };


    saveData(
        "nomiUser",
        user
    );


    showToast(
        "Welcome to NOMI, " +
        user.name +
        " ✦"
    );


    setTimeout(function () {
        window.location.href = "trip.html";
    }, 500);
}


// Open login page

function openLogin() {
    window.location.href = "login.html";
}


// Logout

function logoutNomi() {

    localStorage.removeItem(
        "nomiUser"
    );


    showToast(
        "You've been logged out."
    );


    setTimeout(function () {
        window.location.href = "home.html";
    }, 500);
}


// Update navigation

function updateNomiNavigation() {

    const user = getNomiUser();

    const navActions =
        document.querySelector(".nav-actions");


    if (
        !user ||
        !user.loggedIn ||
        !navActions
    ) {
        return;
    }


    let loginButton =
        navActions.querySelector(
            '[onclick="openLogin()"]'
        );


    if (!loginButton) {
        loginButton =
            navActions.querySelector(
                'a[href="login.html"]'
            );
    }


    if (!loginButton) {
        return;
    }


    let firstName = "Traveler";


    if (user.name) {
        firstName =
            user.name.split(" ")[0];
    }


    loginButton.textContent =
        "Hi, " + firstName;


    // Open My Trip when name is clicked

    if (loginButton.tagName === "A") {

        loginButton.href = "trip.html";

        loginButton.removeAttribute(
            "onclick"
        );

    } else {

        loginButton.onclick = function () {
            window.location.href = "trip.html";
        };
    }


    // Add logout button

    const existingLogout =
        navActions.querySelector(
            ".logout-btn"
        );


    if (!existingLogout) {

        const logoutButton =
            document.createElement("button");


        logoutButton.type = "button";

        logoutButton.className =
            "outline-btn logout-btn";

        logoutButton.textContent =
            "Log Out";


        logoutButton.addEventListener(
            "click",
            logoutNomi
        );


        navActions.appendChild(
            logoutButton
        );
    }
}


// Mobile menu

function initializeMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenu"
        );

    const navigation =
        document.getElementById(
            "navigation"
        );


    if (
        !button ||
        !navigation
    ) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "mobile-open"
            );


            if (
                navigation.classList.contains(
                    "mobile-open"
                )
            ) {

                button.textContent = "✕";

            } else {

                button.textContent = "☰";
            }
        }
    );


    // Close menu after clicking a link

    const links =
        navigation.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "mobile-open"
                );

                button.textContent = "☰";
            }
        );
    });
}


// Partner application

function becomePartner() {

    const name = prompt(
        "Enter your name or business name:"
    );


    if (!name) {
        return;
    }


    const email = prompt(
        "Enter your email address:"
    );


    if (!email) {
        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.trim())) {

        showToast(
            "Please enter a valid email address."
        );

        return;
    }


    const partner = {
        name: name.trim(),
        email: email.trim(),
        date: new Date().toLocaleDateString()
    };


    saveData(
        "nomiPartnerApplication",
        partner
    );


    showToast(
        "Thanks, " +
        partner.name +
        "! Your application was saved ✦"
    );
}


// Automatic filters

function initializeFilters() {

    const stayDestination =
        document.getElementById(
            "stayDestination"
        );

    const stayGuests =
        document.getElementById(
            "stayGuests"
        );

    const experienceDestination =
        document.getElementById(
            "experienceDestination"
        );


    if (stayDestination) {

        stayDestination.addEventListener(
            "change",
            filterStays
        );
    }


    if (stayGuests) {

        stayGuests.addEventListener(
            "change",
            filterStays
        );
    }


    if (experienceDestination) {

        experienceDestination.addEventListener(
            "change",
            filterExperiences
        );
    }
}


// Set minimum dates on Home

function initializeDates() {

    const checkIn =
        document.getElementById(
            "checkIn"
        );

    const checkOut =
        document.getElementById(
            "checkOut"
        );


    if (
        !checkIn ||
        !checkOut
    ) {
        return;
    }


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    checkIn.min = today;
    checkOut.min = today;


    // Change minimum check-out date

    checkIn.addEventListener(
        "change",
        function () {

            checkOut.min =
                checkIn.value;


            if (
                checkOut.value &&
                checkOut.value <= checkIn.value
            ) {

                checkOut.value = "";
            }
        }
    );
}


// Toast message

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) {
        console.log(message);
        return;
    }


    clearTimeout(toastTimer);


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


// Start website

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Load saved Treasure Hunt

        loadSavedTreasureHunt();


        // Home page

        renderDestinations();

        renderFeaturedExperiences();

        initializeDates();


        // Experiences page

        renderExperiences();


        // Stays page

        renderStays();

        loadHomeSearch();


        // URL filters

        applyURLDestination();

        initializeFilters();


        // Trip Planner

        initializeItineraryForm();

        loadGeneratedItinerary();


        // Treasure Hunt

        renderTreasureHunt();


        // Login

        initializeLogin();


        // Navigation

        updateNomiNavigation();

        initializeMobileMenu();


        // My Trip

        renderMyTrip();

        initializeTripChecklist();
    }
);