---
title: "A test file to see markdown formatting"
date: 2026-10-17
description: "A test file to see markdown formatting."
tags:
  - Test
draft: false
cover: "https://images.jarrodscherer.au/2026/October/starting-the-hobby-journal/hobby-desk.webp"
coverAlt: "Two Space Marine bikes on my hobby desk beside paints and brushes."
coverWidth: 1600
coverHeight: 1000
---

# Markdown Formatting Test

This page tests various Markdown formatting features to ensure they render correctly on the website.

---

## 1. Headings

The following examples demonstrate all six heading levels.

# Heading Level 1

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

---

## 2. Text Formatting

### Basic Formatting

This is normal paragraph text.

**This text is bold.**

*This text is italic.*

***This text is both bold and italic.***

~~This text has a strikethrough.~~

This sentence contains **bold**, *italic*, and ***bold italic*** text together.

### Inline Code

Here is some `inline code`.

You can also reference variables such as `const name = "test";` within a sentence.

### Escaped Characters

\*This text should display literal asterisks.\*

\*\*This should not be bold.\**

\# This should not be a heading.

### Special Characters

Ampersand: &

Less than: &lt;

Greater than: &gt;

Copyright: ©

Trademark: ™

Em dash: —

En dash: –

Ellipsis: … 

### Emoji

🚀 🎮 💻 🎨 ⚔️

---

## 3. Paragraphs and Line Breaks

This is the first paragraph. It contains enough text to demonstrate how normal paragraphs appear when they wrap onto multiple lines. The purpose is to test line height, spacing, and readability.

This is the second paragraph. There should be a visible gap between the first and second paragraphs.

This line
continues on the next source line without an explicit Markdown line break.

This line ends with two spaces.  
This text should begin on a new line without a paragraph gap.

---

## 4. Blockquotes

### Simple Blockquote

> This is a basic blockquote.

### Multiline Blockquote

> This is a longer blockquote.
>
> It contains multiple paragraphs.
>
> The formatting should remain consistent throughout.

### Nested Blockquote

> This is the outer blockquote.
>
> > This is a nested blockquote.
> >
> > It should have additional indentation.
>
> Back to the outer blockquote.

### Formatted Blockquote

> **Important:** Blockquotes can contain **bold text**, *italic text*, and `inline code`.
>
> - First list item
> - Second list item
> - Third list item

---

## 5. Unordered Lists

### Basic Unordered List

- First item
- Second item
- Third item
- Fourth item

### Alternative Markers

* Asterisk item one
* Asterisk item two
* Asterisk item three

### Nested Unordered List

- First level
  - Second level
    - Third level
    - Another third-level item
  - Back to second level
- Back to first level

### Formatted List Items

- **Bold list item**
- *Italic list item*
- ~~Strikethrough list item~~
- List item containing `inline code`
- List item containing a [link](https://example.com)

---

## 6. Ordered Lists

### Basic Ordered List

1. First item
2. Second item
3. Third item
4. Fourth item

### Nested Ordered List

1. First item
   1. Nested item one
   2. Nested item two
      1. Third-level item
2. Second item
3. Third item

### Mixed Lists

1. First numbered item
   - Bullet point
   - Another bullet point
2. Second numbered item
   - Nested bullet point
     1. Numbered sub-item
     2. Another numbered sub-item

---

## 7. Task Lists

### Completed and Incomplete Tasks

- [x] Create the Markdown test page
- [x] Test heading styles
- [ ] Test mobile formatting
- [ ] Test table responsiveness
- [ ] Test code highlighting

### Nested Task Lists

- [x] Website setup
  - [x] Configure Astro
  - [x] Configure Markdown
  - [ ] Test all formatting
- [ ] Final checks
  - [ ] Desktop
  - [ ] Mobile

---

## 8. Links

### External Link

[Visit GitHub](https://github.com)

### Link with Title

[Visit GitHub](https://github.com "GitHub Homepage")

### Internal Link

[Return to Homepage](/)

### Anchor Link

[Jump to the Headings Section](#1-headings)

### Automatic Link

https://example.com

### Email Link

<example@example.com>

### Reference-Style Link

This is a [reference-style link][example-link].

[example-link]: https://example.com "Example Website"

---

## 9. Images

### Standard Image

![Two Space Marine bikes on a hobby desk](https://images.jarrodscherer.au/2026/October/starting-the-hobby-journal/hobby-desk.webp)

### Image with Title

![Hobby Desk](https://images.jarrodscherer.au/2026/October/starting-the-hobby-journal/hobby-desk.webp "My Hobby Desk")

### Image with Caption

![Hobby desk with painting supplies](https://images.jarrodscherer.au/2026/October/starting-the-hobby-journal/hobby-desk.webp)

*Figure 1: My hobby desk with Warhammer miniatures and painting supplies.*

### Clickable Image

[![Hobby Desk](https://images.jarrodscherer.au/2026/October/starting-the-hobby-journal/hobby-desk.webp)](https://images.jarrodscherer.au/2026/October/starting-the-hobby-journal/hobby-desk.webp)

---

## 10. Horizontal Rules

Text above the rule.

---

Text between the rules.

***

More text between rules.

___

Text below the rule.

---

## 11. Code Blocks

### Inline Code

You can execute `npm run dev` to start the development server.

### JavaScript

```javascript
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greet("World");
```

### Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i))
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Markdown Test</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### CSS

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #1a1a1a;
  color: white;
}
```

### JSON

```json
{
  "name": "Markdown Test",
  "version": "1.0.0",
  "enabled": true,
  "features": [
    "headings",
    "tables",
    "code"
  ]
}
```

### Bash

```bash
git status
git add .
git commit -m "Add Markdown test page"
git push origin main
```

### Plain Code Block

```
This is a plain code block.
It should preserve spacing.

    Including indentation.

No syntax highlighting should be applied.
```

---

## 12. Tables

### Basic Table

| Name | Type | Status |
|---|---|---|
| Example One | Text | Complete |
| Example Two | Image | Pending |
| Example Three | Code | Complete |

### Column Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:---|:---:|---:|
| Text | Text | Text |
| 100 | 200 | 300 |
| Short | Medium | Long |

### Formatted Table Contents

| Feature | Example | Supported |
|---|---|---|
| Bold | **Bold text** | Yes |
| Italic | *Italic text* | Yes |
| Code | `npm run dev` | Yes |
| Links | [GitHub](https://github.com) | Yes |
| Strikethrough | ~~Removed~~ | Yes |

### Wide Table

| Column One | Column Two | Column Three | Column Four | Column Five | Column Six |
|---|---|---|---|---|---|
| A | B | C | D | E | F |
| 1 | 2 | 3 | 4 | 5 | 6 |

---

## 13. Footnotes

Here is a sentence containing a footnote.[^1]

Here is another sentence containing a longer footnote.[^longnote]

You can also reference the same footnote again.[^1]

[^1]: This is the first footnote.

[^longnote]: This is a longer footnote containing more information.

    It can also contain multiple paragraphs when supported by the Markdown processor.

---

## 14. HTML Elements

The following examples use HTML within Markdown. These may depend on the Markdown configuration and website CSS.

### Underlined Text

<u>This text should be underlined.</u>

### Highlighted Text

<mark>This text should be highlighted.</mark>

### Superscript and Subscript

E = mc<sup>2</sup>

H<sub>2</sub>O

### Keyboard Shortcuts

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Press <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.

### Abbreviations

<abbr title="HyperText Markup Language">HTML</abbr>

### Collapsible Content

<details>
<summary>Click to expand this section</summary>

This content should be hidden until the section is expanded.

It can contain additional text and formatting.

</details>

### Small Text

<small>This is smaller text.</small>

---

## 15. Long Text and Wrapping

### Long Paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Long Unbroken String

ThisIsAnExtremelyLongStringWithoutAnySpacesThatShouldBeUsedToTestWhetherTheWebsiteCorrectlyHandlesOverflowAndWordWrappingWithoutBreakingThePageLayoutOrCausingHorizontalScrollingOnMobileDevices12345678901234567890

### Long URL

https://example.com/this/is/a/very/long/example/url/designed/to/test/how/the/website/handles/long/links/that/might/otherwise/overflow/the/content/container

---

## 16. Combined Formatting

This section combines multiple formatting styles to test how they interact.

> ### Example Blockquote Heading
>
> This is a **bold sentence** containing *italic text* and `inline code`.
>
> 1. First numbered item
> 2. Second numbered item
>    - Nested bullet
>    - Another nested bullet
>
> [Visit Example](https://example.com)

### List with Multiple Paragraphs

1. **First item**

   This is an additional paragraph belonging to the first list item.

   It should remain properly indented.

2. **Second item**

   This item also contains a code block:

   ```javascript
   console.log("Nested code block");
   ```

3. **Third item**

   This is the final list item.

---

## 17. Final Formatting Check

**Bold text**

*Italic text*

***Bold and italic text***

~~Strikethrough text~~

`Inline code`

[Hyperlink](https://example.com)

> Blockquote

- Bullet list

1. Numbered list

- [x] Completed task
- [ ] Incomplete task

---

**End of Markdown formatting test.**
