multi-thread: single-threaded event-loop + i/o thread pool
event queue -> single-threaded event-loop
concurrent application -> single thread
Nodejs is C-application, libuv -> multi-platform
UV_THREADPOOL_SIZE=16 node app.js
