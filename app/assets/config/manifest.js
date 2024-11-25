//= link tailwind.css
//= link application.js
//= link controllers/application.js
//= link controllers/hello_controller.js
//= link controllers/index.js


const manifest = {
    "name": "BeatMachine",
    "short_name": "BeatMachine",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
        {
        "src": "/images/Bass.png",
        "sizes": "192x192",
        "type": "image/png"
        },
        {
        "src": "/images/Bass1.png",
        "sizes": "512x512",
        "type": "image/png"
        }
    ]
};

export default manifest;