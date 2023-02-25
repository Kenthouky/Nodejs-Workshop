const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

//defining an array of courses
const courses = [
	{ id: 1, name: 'course1' },
	{ id: 2, name: 'course2' },
	{ id: 3, name: 'course3' },
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

// creating a new course using POST request
app.post('/api/courses', (req, res) => {
	const {error} = validateCourse(req.body); // result.error	
	if (error) return res.status(400).send(result.error.details[0].message);

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});

// how to update a course
app.put('/api/courses/:id', (req, res) => {
	// Look up the course
	// If not exisiting, return 404
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');

	// Validate
	// If invalid, return 400 - Bad request
// object destructuring
	const { error } = validateCourse(req.body); // result.error	
	if (error) return res.status(400).send(error.details[0].message);

	// Update course
	// Return the updated course
	course.name = req.body.name;
	res.send(course);
});

// delete course
app.delete('/api/courses/:id', (req, res) => {
	// Look up the course
	// Not existing, return 404
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');

	// Delete
	const index = courses.indexOf(course);
	courses.splice(index, 1);

	// Return the same cours
	res.send(course);

});





function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(course, schema);	
}



// route for single courses
//  /api/coures/1
app.get('/api/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) return res.status(404).send('The course with the given ID was not found.');
	res.send(course);
});

//app.get('/api/posts/:year/:month', (req, res) => {
//	res.send(req.query);
//});

//environment variable - PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

