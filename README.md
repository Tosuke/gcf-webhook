# gcf-webhook
easy and powerful webhook 'middleware'

## Example
```js
const webhook = require("gcf-webhook");

// Google Cloud Function(HTTP trigger) entry point
exports.entry = webhook(
  body => {
    return {
      text: body.message
    }
  },
  "https://webhook.example.com",
  // common fields
  {
    channel: "#general"
  },
  // axios options(see https://github.com/axios/axios#request-config)
  {
    headers: {}
  }
) 
```
