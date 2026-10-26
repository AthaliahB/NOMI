const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files from 'Milestone 1'
app.use(express.static(path.join(__dirname, "Milestone 1")));

// File paths for simple JSON database
const USERS_FILE = path.join(__dirname, "data", "users.json");
const TRIPS_FILE = path.join(__dirname, "data", "trips.json");
const DESTINATIONS_FILE = path.join(__dirname, "data", "destinations.json");

// Helper functions to read/write JSON files safely
function readData(filePath) {
    try {
        if (!fs.existsSync(filePath)) return [];
        const content = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(content || "[]");
    } catch (err) {
        console.error("Error reading " + filePath, err);
        return [];
    }
}

function writeData(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// ==========================================
// API Endpoints
// ==========================================

// 1. Health check
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "NOMI backend is running!" });
});

// 2. Get all destinations
app.get("/api/destinations", (req, res) => {
    const destinations = readData(DESTINATIONS_FILE);
    res.json(destinations);
});

// 3. User Registration
app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    const users = readData(USERS_FILE);
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existing) {
        return res.status(400).json({ error: "Email already registered." });
    }

    const newUser = {
        id: Date.now(),
        name: name || email.split("@")[0],
        email: email.trim().toLowerCase(),
        password: password
    };

    users.push(newUser);
    writeData(USERS_FILE, users);

    // Return user without password
    res.status(201).json({
        message: "Registration successful",
        user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
});

// 4. User Login
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    const users = readData(USERS_FILE);
    const user = users.find(
        u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password." });
    }

    res.json({
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email }
    });
});

// 5. Get Trips for a user
app.get("/api/trips", (req, res) => {
    const { email } = req.query;
    const trips = readData(TRIPS_FILE);

    if (email) {
        const filtered = trips.filter(t => t.userEmail && t.userEmail.toLowerCase() === email.toLowerCase());
        return res.json(filtered);
    }

    res.json(trips);
});

// 6. Create a new trip
app.post("/api/trips", (req, res) => {
    const { userEmail, destination, startDate, endDate, guests, notes } = req.body;

    if (!destination) {
        return res.status(400).json({ error: "Destination is required." });
    }

    const trips = readData(TRIPS_FILE);
    const newTrip = {
        id: Date.now(),
        userEmail: userEmail || "guest@nomi.com",
        destination,
        startDate: startDate || "",
        endDate: endDate || "",
        guests: Number(guests) || 1,
        notes: notes || "",
        createdAt: new Date().toISOString()
    };

    trips.push(newTrip);
    writeData(TRIPS_FILE, trips);

    res.status(201).json({
        message: "Trip created successfully",
        trip: newTrip
    });
});

// 7. Delete a trip
app.delete("/api/trips/:id", (req, res) => {
    const tripId = Number(req.params.id);
    let trips = readData(TRIPS_FILE);
    const initialLength = trips.length;

    trips = trips.filter(t => t.id !== tripId);

    if (trips.length === initialLength) {
        return res.status(404).json({ error: "Trip not found." });
    }

    writeData(TRIPS_FILE, trips);
    res.json({ message: "Trip deleted successfully." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT}/home.html to view the website`);
});
