import createServer from "@utils/app/server";

const app = createServer();
const port = process.env.PORT_ENV;

app.listen(port, () => { 
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
