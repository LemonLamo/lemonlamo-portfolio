# CSS Variables System - Complete Guide

## Overview
Your portfolio now uses a **CSS Custom Properties (Variables) system** that automatically switches colors between light and dark modes. This eliminates the need for Tailwind classes like `text-gray-600 dark:text-gray-300` everywhere.

## How It Works

### 1. **Global CSS Variables** (in `app/globals.css`)

```css
:root {
  /* Light Mode Colors */
  --text-primary: #1a1a1a;      /* Darkest text - for main headings */
  --text-secondary: #4b5563;    /* Medium text - for emphasis, nav links */
  --text-tertiary: #6b7280;     /* Lighter text - for body text, descriptions */
  
  --card-bg: rgba(255, 255, 255, 0.7);
  --card-border: rgba(107, 114, 128, 0.2);
  
  --navbar-bg: rgba(255, 255, 255, 0.85);
  --navbar-border: rgba(229, 231, 235, 0.8);
}

.dark {
  /* Dark Mode Colors */
  --text-primary: #f5f5f7;      /* Lightest text - for main headings */
  --text-secondary: #d1d5db;    /* Medium text - for emphasis, nav links */
  --text-tertiary: #9ca3af;     /* Dimmer text - for body text, descriptions */
  
  --card-bg: rgba(30, 30, 30, 0.6);
  --card-border: rgba(255, 255, 255, 0.1);
  
  --navbar-bg: rgba(20, 20, 20, 0.85);
  --navbar-border: rgba(255, 255, 255, 0.05);
}
```

### 2. **Using Variables in Components**

Instead of:
```tsx
<p className="text-gray-600 dark:text-gray-300">Hello</p>
```

Now use:
```tsx
<p style={{ color: 'var(--text-tertiary)' }}>Hello</p>
```

## Variable Reference

### Text Colors
- **`--text-primary`**: Main headings, important text
  - Light: Very dark gray (#1a1a1a)
  - Dark: Very light gray (#f5f5f7)

- **`--text-secondary`**: Navigation links, emphasized text, labels
  - Light: Medium dark gray (#4b5563)
  - Dark: Light gray (#d1d5db)

- **`--text-tertiary`**: Body paragraphs, descriptions, captions
  - Light: Medium gray (#6b7280)
  - Dark: Medium light gray (#9ca3af)

### Card Styles
- **`--card-bg`**: Background for skill cards, about section
  - Light: White with 70% opacity
  - Dark: Dark gray with 60% opacity

- **`--card-border`**: Borders for cards
  - Light: Gray with 20% opacity
  - Dark: White with 10% opacity

### Navbar Styles (Appears on Scroll)
- **`--navbar-bg`**: Navbar background
  - Light: White with 85% opacity
  - Dark: Very dark gray with 85% opacity

- **`--navbar-border`**: Navbar bottom border
  - Light: Light gray with 80% opacity
  - Dark: White with 5% opacity

## Implementation Examples

### Example 1: Text in Hero Section
```tsx
<p style={{ color: 'var(--text-tertiary)' }}>
  Software Engineering Student at USTHB
</p>
```

### Example 2: Skills Cards
```tsx
<div
  style={{
    backgroundColor: 'var(--card-bg)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--card-border)',
  }}
>
  {/* Card content */}
</div>
```

### Example 3: Navbar with Scroll Effect
```tsx
<nav 
  style={{
    backgroundColor: isScrolled ? 'var(--navbar-bg)' : 'transparent',
    borderBottomColor: isScrolled ? 'var(--navbar-border)' : 'transparent',
  }}
>
  {/* Navbar content */}
</nav>
```

## Navbar Scroll Behavior

The navbar now:
1. **Starts transparent** when at the top of the page
2. **Shows background** with `--navbar-bg` when scrolled down
3. **Adds border** with `--navbar-border` when scrolled
4. **Includes backdrop blur** for a frosted glass effect

This is controlled by the `isScrolled` state in `Navbar.tsx`:
```tsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Benefits of This System

1. **Automatic Theme Switching**: Colors change automatically when toggling between light/dark mode
2. **Consistent Design**: All text follows the same color hierarchy
3. **Easy Maintenance**: Change one value in globals.css to update everywhere
4. **Better Readability**: Proper contrast in both modes
5. **Cleaner Code**: No more long Tailwind classes with dark: prefixes

## How to Customize Colors

### To change light mode text color:
Edit `globals.css` under `:root`:
```css
:root {
  --text-tertiary: #your-color-here;
}
```

### To change dark mode text color:
Edit `globals.css` under `.dark`:
```css
.dark {
  --text-tertiary: #your-color-here;
}
```

### To add a new variable:
1. Define it in both `:root` and `.dark` sections
2. Use it with `style={{ color: 'var(--your-variable-name)' }}`

## Components Updated

All these components now use CSS variables:
- ✅ Navbar.tsx
- ✅ Hero.tsx
- ✅ About.tsx
- ✅ Skills.tsx
- ✅ Projects.tsx
- ✅ Contact.tsx
- ✅ Footer.tsx
- ✅ ThemeToggle.tsx

## Testing Your Changes

After editing `globals.css`:
1. Save the file
2. The dev server will hot reload
3. Toggle between light/dark mode
4. Check that all text has proper contrast
5. Scroll the page to see navbar background appear

---

**Last Updated**: November 12, 2025
**System Type**: CSS Custom Properties with automatic theme switching
