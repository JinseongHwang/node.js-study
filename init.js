import app from "./app"
import dotenv from "dotenv"
import db from "./db"

dotenv.config();
const port = process.env.PORT;


app.listen(port, () => {
// express의 내부 메서드
// port의 접속을 관찰한다. listen하고 있는다.
     console.log(`Example app listening at http://localhost:${port}`)
})