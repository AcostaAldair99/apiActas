import { createPool } from "mysql2/promise";

export const pool=createPool({
    host:'localhost',
    user:'root',
    password:'YesterdaY1964a-',
    port:3306,
    database:'actasdb'
})