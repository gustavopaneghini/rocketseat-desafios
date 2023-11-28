require("express-async-errors");
const express = require("express");
const AppError = require("./utils/AppError");
const migrationsRun = require("./database/sqlite/migrations");

const usersRoutes = require("./routes");

const app = express();
app.use(express.json());

migrationsRun();

app.use(usersRoutes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",  
    message: "Internal server error",
  });
});

const PORT = 3333;
app.listen(PORT, () => `Server is running on PORT:${PORT}`);
