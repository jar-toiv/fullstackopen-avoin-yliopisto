# Altering data in server

## REST

[wiki](https://en.wikipedia.org/wiki/Representational_state_transfer)

#### Client–Server Architecture:

Separates user interface from data storage.
Improves user interface portability.
Simplifies server components for better scalability.
Allows components to evolve independently.

#### Statelessness:

No session information is retained by the server.
Every data packet can be understood without context from previous packets.
Ideal for high-volume applications due to reduced server load.

#### Cacheability:

Responses can be cached by clients or intermediaries.
Responses indicate if they are cacheable or not.
Reduces client-server interactions, improving scalability and performance.
Caching can be done at the client, in memory, browser, or in a CDN.

#### Layered System:

Clients don't know if they're communicating directly with the server or an intermediary.
Proxies or load balancers can be added without affecting communication.
Enables load balancing, shared caches, and adding security layers.

#### Code on Demand (Optional):

Servers can send executable code to clients, like Java applets or JavaScript.
Temporarily extends or customizes client functionality.

#### Uniform Interface:

Fundamental for RESTful systems, simplifying and decoupling the architecture.
Resource Identification in Requests: Resources are identified in requests, like using URIs.
Resource Manipulation through Representations: Clients can modify or delete a resource's state with its representation.
Self-descriptive Messages: Messages include information on how to process them.
Hypermedia as the Engine of Application State (HATEOAS): Clients use server-provided links to discover resources dynamically without hardcoded knowledge of the server's structure.

## Sending data to server

Axios post is used to send data to server.

````
 axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      console.log(response)
    })
    ```
````
