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
          'Ocp-Apim-Subscription-Key': 'XXXX-XXXX-XXXX-XXXX',
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