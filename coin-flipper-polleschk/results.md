## Chrome
- 1000000 flips of 10 coins
  - 180 ms
- 30 flips of 8 coins
  - 0.2 0ms


## Firefox
- 1000000 flips of 10 coins
  - 145 ms
- 30 flips of 8 coins
  - 1 ms

## Q&A
- Was JavaScript faster or slower than Java? Why do you think this is the case?
  - To be totally honest I was not exactly sure what I was thinking and if it was going to be faster or slower.
- What browsers did you use in your evaluation? Which one was the fastest, slowest?
  - In my evaluation I used chrome and firefox, for the larger one firefox was faster, but for the smaller one chrome was faster
- Research your browsers JavaScript execution engine to determine why you got those execution speeds? Do not forget to cite your resources.
  - [Firefox Engine](https://blog.mozilla.org/javascript/) The code is a little more complex than a regular backbone that would run a browser. It seems to make longer things take shorter times hence why it seemed to run a little faster than chrome in the longer task.
  - [Chrome Engine](https://dev.to/shishsingh/inside-the-v8-engine-unveiling-the-core-of-chrome-browsers-performance-4gn1) Their code is designed as a mark-and-sweep algorithm, where it saves everything in a heap and then will sweep back through it all. showing why the longer task took a bit longer and the shorter one took a little bit less time.
