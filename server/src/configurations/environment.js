import * as dotenv from "dotenv";
dotenv.config();

// Export the environment object
export const ENVIRONMENT_CONFIGS = {
  PORT: process.env.PORT || 3020,
  DB_URL: process.env.DB_URL || "mongodb+srv://ashishSocial:Shivam@cluster0.yzsw1ma.mongodb.net/apnacollege",

  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  // SERVER: process.env.SERVER || `http://localhost:3020`,
  SERVER: process.env.SERVER || `https://ashish2-1.onrender.com`,
  JWT_SECRET: process.env.JWT_SECRET || "ManVsWildIsAwsomeShow",
  
};

export default ENVIRONMENT_CONFIGS;
