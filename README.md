# [FULLSTACKOPEN - Great Oportunity](https://fullstackopen.com/en/)
This is the repository of mine solved exercises from fulstack's course by Helsinki University 
Part0 contains some diagrams(mermaid markdown) like that:
```mermaid
sequenceDiagram
    participant dotcom
    participant iframe
    participant viewscreen
    dotcom->>iframe: loads html w/ iframe url
    iframe->>viewscreen: request template
    viewscreen->>iframe: html & javascript
    iframe->>dotcom: iframe ready
    dotcom->>iframe: set mermaid data on iframe
    iframe->>iframe: render mermaid
```
