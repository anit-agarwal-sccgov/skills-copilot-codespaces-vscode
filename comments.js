// Create web server

// Import modules

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create web server

const app = express();

// Set up body parser

app.use(bodyParser.json());

// Set up routes

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
      return;
    }
    res.send(data);
  });
}

app.post('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
        res.status(500).send('Error reading comments.json');
        return;
        }
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            res.status(500).send('Error writing comments.json');
            return;
        }
        res.send('Comment added');
        });
    });
    }


// Start web server

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    }
```

### 3.2.2. Test the web server

1. Run the web server by executing the following command:

```bash
node comments.js
```

2. Open a web browser and navigate to http://localhost:3000/comments. You should see the following message:

```json
[]
```

3. Use a REST client to send a POST request to http://localhost:3000/comments with the following JSON body:

```json
{
    "name": "John Doe",
    "comment": "This is a test comment"
}
```

4. Refresh the web browser and you should see the following message:

```json
[
    {
        "name": "John Doe",
        "comment": "This is a test comment"
    }
]
```

### 3.2.3. Summary

In this section, you learned how to create a simple web server using Express and how to read and write data to a JSON file. You also learned how to use a REST client to test the web server.

## 3.3. Create a simple web application

In this section, you will create a simple web application that displays a list of comments and allows users to add new comments.

### 3.3.1. Create the web application

1. Create a new file called `index.html` with the following content:

```html
<!DOCTYPE html>
<html>
</html>

<head>
    
</head>