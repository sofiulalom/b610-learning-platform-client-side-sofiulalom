import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>what is cors?</h2>
                <p>(CORS) is an HTTP-header based mechanism that allows
                     a server to indicate any origins (domain, scheme, or port) 
                     other than its own from which a browser should permit 
                     loading resources. CORS also relies on a mechanism by 
                     which browsers make a "preflight" request to the server
                      hosting the cross-origin resource, in order to check 
                      that the server will permit the actual request. In that 
                      preflight, the browser sends headers that indicate the 
                      HTTP method and headers that will be used in the actual 
                      request.</p>
            </div>
            <div>
                <h2> Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>In the present era, user authentication is one of the most important requirements for Android apps. It is essential to authenticate users, and it is much harder if we have to write all this code on our own. This is done very easily with the help of Firebase.</p>
            </div>
            <div>
                <h2>How does the private route work?</h2>
                    <p>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

                    In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
            </div>
            <div>
                <h2> What is Node? How does Node work?</h2>
                <p>Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.

                In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.

                While spawning threads incurs less memory and CPU overhead than forking processes, it can still be inefficient. The presence of a large number of threads can cause a heavily loaded system to spend precious cycles on thread scheduling and context switching, which adds latency and imposes limits on scalability and throughput.</p>
            </div>
        </div>
    );
};

export default Blogs;