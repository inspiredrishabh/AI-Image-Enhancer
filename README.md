# AI Image Enhancer

![AI Image Enhancer Banner](/src/assets/preview.png)

A powerful web application that uses artificial intelligence to enhance the quality of your images. Upload any image, and the AI will automatically improve its clarity, sharpness, and overall visual appeal.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

## Overview

AI Image Enhancer is a user-friendly web app that allows you to upload images and enhance them using advanced AI technology. The application processes your images through a specialized AI model that improves image quality, reduces noise, and enhances details.

## Features

- **Simple Interface**: Easy-to-use drag-and-drop interface for uploading images
- **AI Enhancement**: Advanced AI processing to improve image quality
- **Side-by-Side Comparison**: View your original image next to the enhanced version
- **Download Option**: Download your enhanced images with one click
- **Support for Multiple Formats**: Works with JPG, PNG, WEBP, and other common image formats
- **Responsive Design**: Works on desktop and mobile devices

## Installation

Follow these simple steps to set up the project on your local machine:

1. **Clone the repository**

   ```bash
   git clone https://github.com/inspiredrishabh/AI-Image-Enhancer
   cd AI-Image-Enhancer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up API key**

   - Sign up for a free API key at [PicWish](https://picwish.com/)
   - Open `src/utils/enhancedImageAPI.js` and replace the placeholder API key with your own:
     ```javascript
     const API_KEY = "your-api-key-here";
     ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or whatever port your Vite server uses)

## How It Works

The app works in a simple 3-step process:

1. **Upload Your Image**:

   - You can click the upload area to browse files or simply drag and drop an image
   - The app accepts common image formats like JPG, PNG, and WEBP (up to 15MB)

2. **AI Processing**:

   - Once uploaded, your image is sent to the PicWish API
   - The AI analyzes the image and applies multiple enhancement techniques
   - A loading spinner will show while the image is being processed

3. **View and Download Results**:
   - After processing, you'll see your original image alongside the enhanced version
   - Compare the differences to see the improvements
   - Click the "Download Enhanced Image" button to save the result

## Tech Stack

This project is built using the following technologies:

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next generation frontend tooling
- **Axios**: Promise-based HTTP client for API requests
- **PicWish API**: AI-powered image enhancement service

## API Integration

The app uses the PicWish API for image enhancement. Here's how the integration works:

1. **Image Upload**: When you upload an image, it's sent to the PicWish API via a POST request
2. **Task Creation**: The API creates a processing task and returns a task ID
3. **Polling**: The app checks the status of the task every few seconds
4. **Result Retrieval**: Once the task is complete, the enhanced image URL is returned
5. **Display**: The enhanced image is displayed in the app interface

The API integration code is located in `src/utils/enhancedImageAPI.js` and handles all the communication with the PicWish servers.

## Project Structure

The project has been simplified into a single component structure for easier understanding:

- **App.jsx**: The main component that contains all functionality
- **enhancedImageAPI.js**: Handles API communication

Previously, the app was divided into multiple components:

- Home: Main container component
- ImageUpload: Handled image upload functionality
- ImagePreview: Displayed original and enhanced images
- enhancedImageAPI: API integration utility

These were combined into a single file for simplicity.

## Troubleshooting

### Common Issues:

1. **API Key Invalid**

   - Make sure you've correctly set your API key in the enhancedImageAPI.js file
   - Ensure your API key is active and has enough credits

2. **Image Enhancement Failed**

   - Check that your image is in a supported format (JPG, PNG, WEBP)
   - Ensure the image size is under 15MB
   - Try a different image with better quality

3. **App Not Loading**
   - Check your internet connection
   - Make sure all dependencies are installed properly
   - Clear your browser cache and reload

For any other issues, please create a new issue on the GitHub repository.

---

Created with ❤️ by Rishabh | Powered by PicWish API
