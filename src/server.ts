import createServer from "@utils/app/server";
import { connectDB } from '@config/db';

const app = createServer();
const port = process.env.PORT_ENV;

app.listen(port, async () => {
    await connectDB();
    console.log(`🚀 [server]: Server is running at http://localhost:${port}`);
});
