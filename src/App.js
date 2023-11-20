import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import analyzeImage from './azure-image-analysis'
import axios from 'axios';

function App() {
 const [imageUrl, setImageUrl] = useState('');
 const [analysis, setAnalysis] = useState('');
 const [result, setResult] = useState(null)

  /**
  * Handles the form submission.
  * @param {Event} e - The event object.
  * @return {Promise} A promise that resolves with the result data.
  */
 const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await analyzeImage(imageUrl);
  setResult(result);
  setAnalysis(JSON.stringify(result.analysis));
};

/**
 * This function displays the results of an OCR operation.
 * @param {object} result - The result object containing the parsed results and OCRExitCode.
 * @returns {JSX.Element|null} - The JSX element to display the result or null if the result is falsy.
 */
const DisplayResults = () => {
  if (!result) return null;

  const {
    ParsedResults: [parsedResult],
    OCRExitCode,
  } = result;
// If the OCRExitCode is not equal to 1, display an error message
  if (OCRExitCode !== 1) {
    return <h3>OCR Failed. Please try again.</h3>;
  }
  const { TextOverlay: { Paragraphs } } = parsedResult;
}

// Returns the UI elements
 return (
    <div className="App">
      <Typography variant="h4" align="center" gutterBottom>
        Image Viewer
      </Typography>
      <form onSubmit={handleSubmit}>
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
        type='submit'
        variant="contained"
        color="primary"
        startIcon={<ImageIcon />}
        style={{ margin: 8 }}
        onClick={handleSubmit}
      >
        Analyze Image
      </Button>
      </form>
      <Button
        variant="contained"
        color="default"
        style={{ margin: 8 }}
        onClick={handleSubmit}
      >
        Generate Image
      </Button>
      {result && (
      <div>
        <Typography variant="h6">Image Description</Typography>
        <p>{result.description.captions[0].text}</p>

        <Typography variant="h6">Analysis Data</Typography>
        <pre>{analysis}</pre>
      </div>
    )}
    </div>
 );
}

export default App;