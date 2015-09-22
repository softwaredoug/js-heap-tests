## Heap Profiling Experimentation

This project just exists to answer some questions about Chrome's heap profiler. In particular, it's related to [this stackoverflow question](http://stackoverflow.com/questions/32698594/do-identical-chrome-object-ids-imply-the-same-object-in-the-heap-profiler).

This project contains heap-test.js which creates two references to one object. These references are named `child1` and `child1_again`. A copy called `child1_copy`. If you run a heap profiler, I wanted to confirm that the object id of the aliased references was identical and the copy recieved its own object id.

## To Run

$> python -m SimpleHTTPServer 5001

1. Browse to http://localhost:5001
2. Take a heap snapshot
3. Observe the object ids and other attributes of the variables above
