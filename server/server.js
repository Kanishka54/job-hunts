import app from "./app.js";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get PORT from environment or default fallback
const PORT = process.env.PORT || 4000;

// Start server with host binding for better compatibility
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});