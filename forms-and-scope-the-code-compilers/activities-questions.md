1. Describe the HTML iframe in your own words. Give an example (include an HTML code file in your submission) of a use for an iframe.
   - An HTML iframe is a tag where the developer embed another document within the current HTML document.
   - One way this could be used for would be to embed a PDF document (resume into a person website)
2. Research HTML iframes specifically focusing on security. What is one potential security vulnerability/concern with using an iframe? 
    - From [this Stackoverflow website](https://stackoverflow.com/questions/7289139/why-are-iframes-considered-dangerous-and-a-security-risk) risks come up when either some malicious website is displaying your document/website which is known as "clickjacking", or if your website is displaying malicious website using an iframe.
3. Research the following attributes for an iframe. What does each attempt so solve from a security perspective. Describe (no code required) a use for each attribute.
   - [allow](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allow)
     - This attribute allows control over the small details of which the iframe can access. One use case would be ```allow="geolocation"```
   - [referrerpolicy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
     - This attribute can control how much referrer information can be sent in requests. One use case would be ```referrerpolicy="origin"```
   - [sandbox](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/sandbox)
     - This attribute districts what is viewable from its parent webpage. One use case would be ```sandbox="allow-same-origin allow-scripts'```
