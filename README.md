# Smallweb SDK

## Usage

```ts
import Smallweb from "jsr:@smallweb/sdk"

const dir = "/smallweb"

const smallweb = new Smallweb(dir)

const apps = await smallweb.apps.list()

console.log(apps)
```
