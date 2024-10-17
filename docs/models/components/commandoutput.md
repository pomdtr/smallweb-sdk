# CommandOutput

## Example Usage

```typescript
import { CommandOutput } from "smallweb/models/components";

let value: CommandOutput = {
  success: false,
  code: 423655,
  stdout: "<value>",
  stderr: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `code`             | *number*           | :heavy_check_mark: | N/A                |
| `stdout`           | *string*           | :heavy_check_mark: | N/A                |
| `stderr`           | *string*           | :heavy_check_mark: | N/A                |