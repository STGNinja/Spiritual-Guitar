const express = require('express');
const app = express();
const port = 3000;

// Sample song data
const songs = [
    { name: 'Gesthemane', albumCover: 'url_to_album_cover_1.jpg' },
    { name: 'Song 2', albumCover: 'url_to_album_cover_2.jpg' },
    // Add more songs here
];

app.use(express.static('public'));

// API endpoint to get song data
app.get('/api/songs', (req, res) => {
    res.json(songs);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
