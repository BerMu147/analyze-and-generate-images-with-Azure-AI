import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

function App() {
 const [imageUrl, setImageUrl] = useState('');

 const handleSubmit = () => {
    // Perform any necessary actions here
    console.log('Image URL:', imageUrl);
 };

 return (
    <div className="App">
      <Typography variant="h4" align="center" gutterBottom>
        Image Viewer
      </Typography>
      <TextField
        id="outlined-full-width"
        label="Image URL"
        style={{ margin: 8 }}
        placeholder="Enter image URL"
        fullWidth
        margin="normal"
        variant="outlined"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<ImageIcon />}
        style={{ margin: 8 }}
        onClick={handleSubmit}
      >
        Load Image
      </Button>
      <Button
        variant="contained"
        color="default"
        style={{ margin: 8 }}
        onClick={handleSubmit}
      >
        Generate Image
      </Button>
    </div>
 );
}

export default App;