const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', async () => {
    try {
        if (navigator.share) {
            await navigator.share({
                title: 'Share this website',
                url: 'https://spiritualguitar.netlify.app'
            });
        } else {
            // Fallback for browsers that do not support the Share API
            alert('Your browser does not support the share feature. You can manually share the website URL.');
        }
    } catch (error) {
        console.error('Error sharing:', error);
    }
});