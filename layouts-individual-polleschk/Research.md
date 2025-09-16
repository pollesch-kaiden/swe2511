# SWE2511-111 Kaiden Pollesch

## Positioning Research

Research the following values for the position attribute.
- Describe each in your own words 
- Describe a situation when you'd use each 
- Support your descriptions with a CSS code example for each

### Position Values:

1. static
   1. **Description:** The default positioning for elements. Elements are positioned according to the normal flow of the document.
   2. **Use Case:** Use when the elements should follow the natural flow of the document.
   3. **Example:**
      ```css
        .static {
            position: static;
        }
      ```
2. absolute
   1. **Description:** Positioned relative to the nearest positioned ancestor or the initial containing block if no positioned ancestor exists.
   2. **Use Case:** Use when the elements need to be positioned at a specific location within the parent container. 
   3. **Example:**
      ```css
        .absolute {
            position: absolute;
            top: 10px;
            left: 10px;
        }
      ```
3. relative
   1. **Description:** Positioned relative to its normal position, and still takes up space in the document flow. 
   2. **Use Case:** Use when the elements need to adjust the position of an element without affecting the layout of other elements.
   3. **Example:**
      ```css
        .relative {
            position: relative;
            top: 10px;
            left: 10px;
        }
      ```
4. fixed
   1. **Description:** Positioned relative to the viewport, element is anchored in place when document is moved.
   2. **Use Case:** Use for elements that should always be visible on the screen, regardless of the user's scroll position, such as nav bar.
   3. **Example:**
      ```css
        .fixed {
            position: fixed;
            top: 0;
            width: 100%;
        }
      ```
5. sticky
    1.**Description:** Positioned between relative and fixed, depending on the scroll position. When in view it will act as a relative positioned element, and when scrolled out of view it will act as a fixed positioned element.
   2. **Use Case:** Use when you want an element to stick to the corner of the viewport when the user scrolls past it, such as a sticky header.
   3. **Example:**
      ```css
        .sticky {
            position: sticky;
            top: 0;
        }
      ```
      
---

### What does "nearest positioned ancestor" mean? Provide a description AND an example.

#### Description:
The nearest positioned ancestor is the closest parent element that has a position value other than `static`. This ancestor serves as the reference point for the positioning of the child element with a position value of absolute or fixed.
If no positioned ancestor exists, the initial containing block is used as the reference point.
#### Example:

```CSS
   .parent {
      position: relative;
      width: 200px;
      height: 200px;
      background-color: lightblue;
   }
   
   .child {
      position: absolute;
      top: 50px;
      left: 50px;
      width: 100px;
      height: 100px;
      background-color: lightcoral;
   }
```
```html
    <div class="ancestor">
        <div class="child">Child</div>
    </div>
```

---

### Research the flow layout manager and describe how elements are laid out using the manager.

The flow layout manager arranges components in a directional flow, much like lines of text in a paragraph. It places components in a row, and when the row is filled, it moves to the next row. The alignment and spacing can be controlled using properties such as `align-items`, `justify-content`, and `gap`.

Example:
```css
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
}
```
```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
```
---

## Display Property Research

Research the following values for the display attribute.
- Describe each in your own words 
- Describe a situation when you'd use each

### Display values:
- block 
  - **Description:** Elements are displayed as blocks, taking up the full width available.
  - **Use Case:** Use for elements that should start on a new line and take up the full width available, such as `div` or `p`.
- inline 
  - **Description:** Elements are displayed as inline elements, taking up only the space that is needed.
  - **Use Case:** Use for elements that should be displayed inline with other elements, such as `span` or `a`.
- inline-block
  - **Description:** Elements are displayed as inline elements, but have a set width and height.
  - **Use Case:** Use for elements that should be inline but need to have width and height properties, such as `button` or `img`.

---

## Research the `writing-mode` attribute and describe it in your own words. 
- Describe `writing-mode`
  - The `writing-mode` attribute specifies the direction in which text and other inline elements are laid out in a block container.
- What does "directionality of script" mean? Support your answer with a specific example of left-to-right (ltr) and right-to-left (rtl).
  - The "directionality of script" refers to the direction in which the text is written and read. 
    - In left-to-right (ltr) scripts, such as English, text is written and read from left to right. 
    - In right-to-left (rtl) scripts, such as Arabic, text is written and read from right to left.
- Example:
  - Left-to-right (ltr):
    ```css
    .ltr {
        writing-mode: horizontal-tb;
    }
    ```
  - Right-to-left (rtl):
    ```css
    .rtl {
        writing-mode: vertical-rl;
    }
    ```

---

## Research the following values for the `writing-mode` attribute
- Describe each in your own words
- Describe a situation when you'd use each

Writing mode values:
- horizontal-tb 
  - **Description:** Text is laid out horizontally from top to bottom.
  - **Use Case:** Use for languages that are read horizontally from left-to-right to bottom.
- vertical-rl 
    - **Description:** Text is laid out vertically from right to left.
    - **Use Case:** Use for languages that are read vertically from right to left.
- vertical-lr 
    - **Description:** Text is laid out vertically from left to right.
    - **Use Case:** Use for languages that are read vertically from left to right.
- sideways-rl 
    - **Description:** Text is laid out sideways (also vertical, just flipped) from right to left.
    - **Use Case:** Use for languages that are read sideways from right to left.
- sideways-lr
    - **Description:** Text is laid out sideways (also vertical, just flipped) from left to right.
    - **Use Case:** Use for languages that are read sideways from left to right.

--- 

Research the flex layout manager and describe how the layout of elements can be customized by altering the container CSS properties. For each of the following CSS properties for a flex container:
- Describe what each property does in your own words
- Describe a situation when you'd use each

## Flex Container Properties:
- grid-template-columns 
  - **Description:** Specifies the size and count of the columns in a grid layout.
  - **Use Case:** Use when you want to define the size and count of columns in a grid layout.
- flex-wrap 
  - **Description:** Specifies whether the flex items should wrap or not.
  - **Use Case:** Use when you want the flex items to wrap to the next line if they exceed the width of the container.
- justify-content
  - **Description:** Aligns the flex items along the main axis of the container.
  - **Use Case:** Use when you want to align the flex items horizontally within the container.
- align-items 
  - **Description:** Aligns the flex items along the cross axis of the container.
  - **Use Case:** Use when you want to align the flex items vertically within the container.
- align-content 
  - **Description:** Aligns the flex lines within the container when there is extra space in the cross axis.
  - **Use Case:** Use when you want to align multiple lines of flex items within the container.
- gap
  - **Description:** Specifies the gap between the rows and columns of a grid layout.
  - **Use Case:** Use when you want to create space between the rows and columns of a grid layout.

---

The flex layout also allows customization of individual items. This can be done by altering the CSS properties of the items contained within the container. For each of the following CSS properties for items in a flex container:
- Describe what each property does in your own words 
- Describe a situation when you'd use each

## Flex Item Properties:
- order
  - **Description:** Specifies the order in which the flex items are displayed.
  - **Use Case:** Use when you want to change the order of the flex items within the container.
- flex-grow 
  - **Description:** Specifies how much the flex items should grow relative to the other items.
  - **Use Case:** Use when you want certain flex items to grow more than others.
- flex-shrink
  - **Description:** Specifies how much the flex items should shrink relative to the other items.
  - **Use Case:** Use when you want certain flex items to shrink more than others.
- flex-basis 
  - **Description:** Specifies the initial size of the flex items.
  - **Use Case:** Use when you want to set the initial size of the flex items.
- align-self
  - **Description:** Aligns a single flex item along the cross axis of the container.
  - **Use Case:** Use when you want to align a specific flex item differently from the others.

---

Research the grid layout manager and describe how the layout of elements can be customized by altering the container CSS properties. For each of the following CSS properties for a flex container:
- Describe what each property does in your own words 
- Describe a situation when you'd use each

## Grid Container Properties:
- grid-template-columns 
  - **Description:** Specifies the size of the columns in a grid layout.
  - **Use Case:** Use when you want to define the size of columns in a grid layout.
- grid-template-rows 
  - **Description:** Specifies the size of the rows in a grid layout.
  - **Use Case:** Use when you want to define the size of rows in a grid layout.
- grid-template-areas
  - **Description:** Specifies the layout of the grid items by referencing the names of grid areas.
  - **Use Case:** Use when you want to define the layout of the grid items using named grid areas.
- grid-area
  - **Description:** Specifies the grid item's size and location within the grid layout.
  - **Use Case:** Use when you want to position a grid item at a specific location within the grid layout.

---

### Research track sizes and how they related to the grid layout, then answer the following:
- What is a fractional unit (fr)?
  - A fractional unit (fr) is a unit of measurement used in a CSS grid layouts that represents a fraction of the available space in the grid container.
- How is it used in a grid layout? (Support your answer with an example.)
  - It is used to distribute space among grid tracks. For example, `grid-template-columns: 1fr 2fr 1fr;` would create three columns, with the middle column taking up twice as much space as the other two.
