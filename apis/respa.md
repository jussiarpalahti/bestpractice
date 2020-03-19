
# Respa API

## An API for making resource reservations, such as booking a music studio, meeting room or a 3D printer

Reservation booking system or Respa is a service that provide citizens with easier access to public spaces and other public resources. Respa works as a booking application that enables users to find and reserve public resources the city has to offer which can include everything from meeting rooms to 3D-printers.

The Respa API is a citywide reservation booking system backend, allowing for easy searching and filtering of resources based on resource type, purpose, location and availability. To make and change reservations, OAuth2 authentication is provided for both city employees and citizens who wish to reserve a room through a frontend application.

The current development and test API can be found [https://respa.koe.hel.ninja](here). To obtain an API key for testing purposes, contact us on [https://gitter.im/City-of-Helsinki/heldev](Gitter).

<div class="api-explorer">
    <h3>Explore the API</h3>
    <div class='input'><input placeholder="api_key" id="input_apiKey" name="apiKey" type="text"/></div>
    <div id="message-bar" class="swagger-ui-wrap" data-sw-translate>&nbsp;</div>
    <div id="swagger-ui-container" class="swagger-ui-wrap"></div>
</div>

<link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@3.20.9/swagger-ui.css">
<script src="https://unpkg.com/swagger-ui-dist@3.20.9/swagger-ui-bundle.js"></script>
<script>

  const ui = SwaggerUIBundle({
    url: "https://raw.githubusercontent.com/City-of-Helsinki/respa/master/openapi.yaml",
    dom_id: "#swagger-ui-container"
  })
</script>
