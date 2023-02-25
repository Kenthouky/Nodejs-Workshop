const express = require('express');
const app = express();

//defining an array of courses
const courses = [
	{ id: 1, name: 'course1' }
	{ id: 2, name: 'course2' }
	{ id: 3, name: 'course3' }
];

//defining the route
app.get('/', (req, res) => {
	res.send('Hello World');
});
//app.post()
//app.put()
//app.delete()

// defining a new route - for getting the list of courses
app.get('/api/courses', (req, res) => {
	res.send(courses);
});

// route for single courses
//  /api/coures/1
app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

//app.get('/api/posts/:year/:month', (req, res) => {
//	res.send(req.query);
//});

//environment variable - PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
