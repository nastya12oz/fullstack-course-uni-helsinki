```mermaid

sequenceDiagram
    participant User as User
    participant Browser as Browser
    participant Server as Server

    Note over User, Browser: User accesses the SPA version of the notes app

    User->>Browser: Navigate to https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML document (includes spa.js)
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: spa.js (JavaScript file)
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: main.css (CSS file)
    deactivate Server

    Note over Browser: Browser renders SPA structure using HTML and CSS

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: JSON data 
    deactivate Server

    Note over Browser: spa.js processes JSON data and renders notes dynamically without page reload
