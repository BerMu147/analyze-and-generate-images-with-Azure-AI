import axios from 'axios';

const analyzeImage = async (imageUrl) => {
 try {
    const response = await axios.post(
      'https://azure-vision-ai-service-for-generativai.cognitiveservices.azure.com/',
      {
        url: imageUrl,
      },
      {
        params: {
          visualFeatures: 'Categories,Description,Color',
        },
        headers: {
          'Ocp-Apim-Subscription-Key': '96e25644eb474739abc64da7016c16b1',
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
 } catch (error) {
    console.error('Error in analyzeImage:', error);
    throw error;
 }
};

export default analyzeImage;