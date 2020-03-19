
# Respa API

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
