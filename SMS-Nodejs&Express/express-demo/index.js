const express = require('express');
const app = express();

//defining the route
app.get('/', (req, res) => {
	res.send('Hello World');
});
//app.post()
//app.put()
//app.delete()

// defining a new route
app.get('/api/courses', (req, res) => {
	res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));
