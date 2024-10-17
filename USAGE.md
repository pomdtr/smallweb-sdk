<!-- Start SDK Example Usage [usage] -->
```typescript
import { Smallweb } from "smallweb";

const smallweb = new Smallweb();

async function run() {
  const result = await smallweb.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->