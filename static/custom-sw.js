if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/static/custom-sw.js')
        .then(() => {
            console.log('service worker registered');
            
        })
}