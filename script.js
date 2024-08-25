document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const musicListItems = document.querySelectorAll('.music-list li');
    const recentListItems = document.querySelectorAll('.recent-list li');

    // Function to play selected song
    function playSong(songSrc) {
        audioPlayer.src = songSrc;
        audioPlayer.style.display = 'block'; // Show the player
        audioPlayer.play();
    }

    // Event Listeners for Popular Songs
    musicListItems.forEach(item => {
        item.addEventListener('click', function () {
            const songSrc = item.getAttribute('data-src');
            playSong(songSrc);
        });
    });

    // Event Listeners for Recently Played Songs
    recentListItems.forEach(item => {
        item.addEventListener('click', function () {
            const songSrc = item.getAttribute('data-src');
            playSong(songSrc);
        });
    });

    // Custom behavior for audio player
    audioPlayer.addEventListener('play', function () {
        audioPlayer.style.height = '200px'; // Maintain square shape
        audioPlayer.style.backgroundColor = '#161a20';
        audioPlayer.style.color = '#fff';
        audioPlayer.style.borderRadius = '8px';
        audioPlayer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    audioPlayer.addEventListener('pause', function () {
        audioPlayer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});
