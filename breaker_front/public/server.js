const express = require('express');
const app = express();
const port = 8383;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });