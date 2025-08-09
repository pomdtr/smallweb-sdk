import { Hono } from "npm:hono@4.7.8"
import { Smallweb } from "./pkg/mod.ts"

const smallweb = new Smallweb("./data")

const app = new Hono()

app.get("/", (c) => {
    return c.text("Welcome to Smallweb SDK!")
})

app.get("/domain", (c) => {
    return c.text(smallweb.domain)
})

app.get("/apps", async (c) => {
    return c.json(await smallweb.apps.list())
})

app.get("/apps/:app", async (c) => {
    return c.json(await smallweb.apps.get(c.req.param("app")))
})


export default app
