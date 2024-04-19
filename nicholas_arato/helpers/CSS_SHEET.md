# **CSS CHEAT SHEET**

## Basic Syntax

### Selectors

- **Usage**: Selects HTML elements to style.
- **Definition**: Patterns used to select the elements you want to style.

```css
selector {
  property: value;
}
```

### Comments

- **Usage**: Add comments to CSS code.
- **Definition**: Notes to yourself or other developers, ignored by browsers.

```css
/* This is a CSS comment */
```

## Properties and Values

### Colors

- **Usage**: Defines the color of text and backgrounds.
- **Definition**: Colors can be specified in various formats including hex, RGB, and named colors.

```css
color: #ff0000; /* Hex */
background-color: rgb(255, 0, 0); /* RGB */
```

### Fonts

- **Usage**: Sets the font family, size, weight, and style.
- **Definition**: Defines how text appears in terms of typeface, size, and weight.

```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
```

### Text

- **Usage**: Controls text properties like alignment, decoration, and spacing.
- **Definition**: Defines how text is displayed, including alignment, decoration, and spacing.

```css
text-align: center;
text-decoration: underline;
line-height: 1.5;
```

### Box Model

- **Usage**: Sets properties related to element dimensions and spacing.
- **Definition**: Describes the space around an element, including padding, border, and margin.

```css
padding: 10px;
border: 1px solid #000;
margin: 20px;
```

### Display

- **Usage**: Defines how an element is displayed.
- **Definition**: Determines the type of box an element generates.

```css
display: block;
display: inline;
display: inline-block;
```

### Positioning

- **Usage**: Controls the positioning of elements.
- **Definition**: Specifies the type of positioning method used for an element.

```css
position: relative;
position: absolute;
position: fixed;
```

### Flexbox

- **Usage**: Provides a flexible way to layout and align elements.
- **Definition**: A layout model that allows elements to align and distribute space within a container.

```css
display: flex;
justify-content: center;
align-items: center;
```

### Grid

- **Usage**: Defines a grid layout.
- **Definition**: A layout system that allows you to create complex grids for positioning elements.

```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 10px;
```

### Media Queries

- **Usage**: Apply styles based on the device's characteristics.
- **Definition**: Allows you to apply different styles for different screen sizes and devices.

```css
@media screen and (max-width: 600px) {
  /* Styles for screens up to 600px wide */
}
```

## Units

### Length

- **Usage**: Specifies a length value.
- **Definition**: Units used to measure length, such as pixels, ems, and percentages.

```css
width: 100px;
padding: 1em;
margin: 10%;
```

### Colors

- **Usage**: Defines color values.
- **Definition**: Units used to specify colors, including hex, RGB, and HSL.

```css
color: #ff0000; /* Hex */
background-color: rgb(255, 0, 0); /* RGB */
```

### Others

- **Usage**: Various units for different properties.
- **Definition**: Units like degrees for angles, seconds for time, etc.

```css
transform: rotate(45deg);
animation-duration: 2s;
```

## Box Model

### Margin

- **Usage**: Sets the margin space on all four sides of an element.
- **Definition**: Creates space outside the border of an element.

```css
margin: 10px;
margin-top: 10px;
```

### Padding

- **Usage**: Sets the padding space on all four sides of an element.
- **Definition**: Creates space inside the border of an element.

```css
padding: 10px;
padding-left: 20px;
```

### Border

- **Usage**: Sets the border properties of an element.
- **Definition**: Creates a border around an element's content.

```css
border: 1px solid #000;
border-radius: 5px;
```

## Miscellaneous

### Transitions

- **Usage**: Adds smooth transitions between property changes.
- **Definition**: Animates changes to CSS properties.

```css
transition: property duration timing-function delay;
```

### Animations

- **Usage**: Creates keyframe animations.
- **Definition**: Animates elements through keyframe sequences.

```css
@keyframes name {
  from {
    property: value;
  }
  to {
    property: value;
  }
}
```

### Transform

- **Usage**: Applies 2D or 3D transformations to elements.
- **Definition**: Changes the appearance and position of an element.

```css
transform: rotate(45deg);
```
