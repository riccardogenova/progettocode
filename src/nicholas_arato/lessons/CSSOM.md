<!-- @format -->

# **CSSOM (CSS Object Model)**

> CSSOM stands for CSS Object Model. It is a programming interface that represents CSS styles applied to a document. The CSSOM API provides a structured way to interact with and manipulate CSS stylesheets in a web document. It is closely related to the Document Object Model (DOM) and is part of the broader set of web APIs used for web development.

> The CSSOM API specification is maintained by the World Wide Web Consortium (W3C), the main international standards organization for the World Wide Web. It is designed to be implemented in web browsers and other environments that support web technologies.

## **Purpose uses of CSSOM:**

> The primary purpose of CSSOM is to allow developers to programmatically access, manipulate, and apply CSS styles to HTML elements in a web document. It enables dynamic styling of web pages, such as changing styles based on user interactions, adjusting layouts in response to different screen sizes, or creating animated effects.

Some common use cases and functionalities of CSSOM include:

1. **Accessing Stylesheet Rules**: Developers can retrieve individual CSS rules from stylesheets, allowing them to inspect and modify specific style properties.

2. **Modifying Styles Dynamically**: CSSOM enables the modification of CSS styles dynamically through JavaScript. This includes changing properties like color, size, position, visibility, etc.

3. **Creating and Applying Styles**: Developers can programmatically create new CSS rules and apply them to HTML elements. This is particularly useful for generating dynamic styles based on user input or other conditions.

4. **Managing Stylesheets**: CSSOM provides methods for adding, removing, and manipulating stylesheets within a document. This allows developers to load stylesheets dynamically or adjust their order and priority.

## **Benefits of CSSOM:**

> Using CSSOM offers several benefits for web developers:

1. **Dynamic Styling**: CSSOM enables developers to create interactive and dynamic web experiences by dynamically adjusting styles in response to user actions or other events.

2. **Programmatic Control**: Developers have fine-grained control over CSS styles, allowing for more complex and flexible styling logic than static stylesheets alone.

3. **Improved Performance**: By modifying stylesheets programmatically, developers can optimize performance by avoiding unnecessary reflows and repaints caused by frequent DOM manipulations.

4. **Cross-Browser Compatibility**: CSSOM is supported by most modern web browsers, ensuring consistent behavior across different platforms and devices.

## **Example of CSSOM Code/Structure:**

> Below is a simplified example of how CSSOM can be used to dynamically change the background color of an HTML element using JavaScript:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSSOM Example</title>
    <style id="custom-style"></style>
  </head>
  <body>
    <div id="target-element">This is the target element</div>
    <button onclick="changeBackgroundColor()">Change Background Color</button>

    <script>
      function changeBackgroundColor() {
        // Accessing the CSSOM
        var styleElement = document.getElementById('custom-style');
        var rule = '#target-element { background-color: blue; }';

        // Creating and applying a new CSS rule
        if (styleElement.sheet) {
          styleElement.sheet.insertRule(rule, 0);
        } else {
          styleElement.appendChild(document.createTextNode(rule));
        }
      }
    </script>
  </body>
</html>
```

In this example:

- The HTML document contains a `<div>` element with the id `target-element` and a button.
- The `<style>` element with the id `custom-style` is initially empty but will be used to dynamically add CSS rules.
- When the button is clicked, the `changeBackgroundColor` JavaScript function is executed.
- Inside this function, a new CSS rule is created to set the background color of the `target-element` to blue.
- The rule is then added to the `<style>` element using the CSSOM API, dynamically changing the background color of the element.

This example demonstrates how CSSOM can be used to modify CSS styles dynamically, allowing for interactive styling of web elements based on user actions or other conditions.
