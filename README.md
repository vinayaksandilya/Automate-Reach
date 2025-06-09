



# Automate-Reach

Automate-Reach is a white-labeled automation platform based on Activepieces. It provides a customizable workflow engine that can be embedded into your SaaS or enterprise application.

## What is Activepieces?

Activepieces is an open-source no-code automation platform that lets users create workflows with triggers, actions, loops, and branching. It supports many integrations and AI-powered steps.

## Features of Automate-Reach

- Full branding customization (logo, colors, fonts)  
- Embed the workflow builder and dashboard into your app  
- Multi-tenant support with user and project management  
- Manage available integrations and custom templates  
- AI-powered automation steps (OpenAI, Claude, etc.)  
- Enterprise features like audit logs, retries, and version history  

## Getting Started

1. Deploy Activepieces on your server or cloud using Docker or other methods.  
2. Clone this repo and customize branding and authentication settings.  
3. Configure JWT tokens for user authentication and multi-tenant management.  
4. Use the Activepieces embed SDK to integrate the builder into your app.

## Basic Embed Example

```html
<script src="https://cdn.activepieces.com/sdk/embed/0.4.0.js"></script>
<script>
  activepieces.configure({
    instanceUrl: 'https://your-automate-reach-url.com',
    jwtToken: 'YOUR_JWT_TOKEN',
    embedding: {
      containerId: 'ap-builder',
    },
  });
</script>
<div id="ap-builder"></div>
````

## Project Structure

* `server/` — Backend for authentication and provisioning
* `client/` — Frontend wrapper for branding
* `templates/` — Prebuilt workflow templates
* `docker/` — Deployment configurations

## Contribution

Feel free to fork and submit pull requests. Contributions to UI, templates, or integrations are welcome.

## License

MIT License

## Author

Vinayak Sandilya
[vinayaksandilya@gmail.com](mailto:vinayaksandilya@gmail.com)
[vinayaksandilya.com](https://vinayaksandilya.com)



---
