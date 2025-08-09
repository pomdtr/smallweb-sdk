# Smallweb SDK

## Usage

```ts
import Smallweb from "jsr:@smallweb/sdk"

// initialize the sdk with the path to your smallweb directory
const smallweb = new Smallweb("/smallweb")

const apps = await smallweb.apps.list()
console.log(apps)
```

## Using the SDK from a smallweb app

First, create a symlink to give your app read/write access to the whole smallweb directory.

```sh
smallweb link .. ./data
```

Then, import the sdk from your app:

```ts
import Smallweb from "jsr:@smallweb/sdk"

const smallweb = new Smallweb("./data")

export default {
    async fetch() {
        const apps = await smallweb.apps.list()
        return Response.json(apps)
    }
}
```
