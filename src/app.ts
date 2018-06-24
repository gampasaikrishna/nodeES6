import express = require("express");
import * as statusController  from './controllers/status';

const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/',statusController.hi);
// export our app
export default app;