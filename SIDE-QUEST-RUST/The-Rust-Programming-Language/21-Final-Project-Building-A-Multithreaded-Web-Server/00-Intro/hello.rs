Here is our plan for building the web server:

Learn a bit about TCP and HTTP.
Listen for TCP connections on a socket.
Parse a small number of HTTP requests.
Create a proper HTTP response.
Improve the throughput of our server with a thread pool.


The method we’ll use won’t be the best way to build a web server with Rust.

We will not be using async and await here.

What is a thread pool?

https://en.wikipedia.org/wiki/Thread_pool
