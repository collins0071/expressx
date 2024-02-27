const express = require('express');
const app = express();

// Custom middleware to verify the time of the request
const timeMiddleware = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours();

    console.log("Middleware called. Current hour:", hour);

    // Check if it's between 9 AM and 5 PM
    if (hour >= 9 && hour < 17) {
        next(); // Continue to the next middleware/route handler
    } else {
        res.status(403).send('Access allowed only between 9 AM and 5 PM');
    }
};

// Use the custom middleware for all routes
app.use(timeMiddleware);

// Routes
app.get('/', (req, res) => {
    res.send('home');
});

app.get('/contact', (req, res) => {
    res.send('Contact us');
});

app.get('/about', (req, res) => {
    res.send('Our Services');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
