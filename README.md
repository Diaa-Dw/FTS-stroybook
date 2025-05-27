# 🧩 Button Component Library

A flexible, theme-ready React button component built with accessibility, performance, and reusability in mind. Styled in multiple variants, states, and sizes — and fully documented with **Storybook**.

🔗 **Live Docs**: [View Storybook](https://682ae6cca19fa0f31878516a-ghcflcgzut.chromatic.com/?path=/docs/components-button--docs)

---

## 🚀 Features

* 🎨 4 design variants: `solid`, `outlined`, `soft`, and `plain`
* 🌈 5 color themes: `primary`, `neutral`, `danger`, `success`, `warning`
* 📏 3 sizes: `sm`, `md`, `lg`
* 🔁 States: `disabled`, `loading`
* 🧩 Support for decorators/icons
* ♿ Accessible by default
* 📘 Interactive documentation via Storybook

---

## 📦 Tech Stack

* React + TypeScript
* Styled Components
* [Storybook](https://storybook.js.org/) for UI documentation
* [Chromatic](https://www.chromatic.com/) for live previews

---

## 🖼️ Variants Preview

| Variant      | Appearance                                 |
| ------------ | ------------------------------------------ |
| **Solid**    | Filled background with strong emphasis     |
| **Outlined** | Transparent background with colored border |
| **Soft**     | Light tinted background                    |
| **Plain**    | Minimal, text-like style                   |

![Button Variants and States](https://github.com/user-attachments/assets/84184853-197a-4f21-ba12-a96c5bde0205)
<sub>🖼️ Example showcasing all variants, sizes, states, and decorators</sub>

---

## 🧰 Props Reference

| Prop       | Type                                                           | Default     | Description                          |
| ---------- | -------------------------------------------------------------- | ----------- | ------------------------------------ |
| `variant`  | `'solid' \| 'outlined' \| 'soft' \| 'plain'`                   | `'solid'`   | Button style variant                 |
| `color`    | `'primary' \| 'neutral' \| 'danger' \| 'success' \| 'warning'` | `'primary'` | Color theme                          |
| `size`     | `'sm' \| 'md' \| 'lg'`                                         | `'md'`      | Size of the button                   |
| `disabled` | `boolean`                                                      | `false`     | Disables the button                  |
| `loading`  | `boolean`                                                      | `false`     | Shows a loading spinner              |
| `icon`     | `ReactNode`                                                    | `null`      | Optional icon (e.g. upload/download) |
| `onClick`  | `() => void`                                                   | –           | Click handler                        |

---

## 🔍 Development

### Run Storybook locally

```bash
npm install
npm run storybook
```

---

## 🧪 Visual Testing

Deployed and versioned using **Chromatic**, enabling visual regression testing and live previews.

---

## 📄 License

MIT © 2025 Diaa Dwikat
