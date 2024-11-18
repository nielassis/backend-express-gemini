export const initializeRoutes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
  });
};
