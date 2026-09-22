# Dev Insights Mini Blog

A small React + TypeScript formative project that displays developer-focused blog posts in a clean, reusable component-based layout.

## Project Overview

Dev Insights Mini Blog is a simple internal blog interface built to demonstrate core React and TypeScript skills. The application includes a header, a list of sample posts, reusable post cards, typed post data, conditional styling, a Higher-Order Component, and a basic optimization pattern.

The project is intentionally focused on foundational concepts rather than a large production blog system. It demonstrates component composition, props typing, CSS organization, and simple UI logic without adding advanced backend or routing features.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- HTML

This project does not use JavaScript files for the app logic, and it does not include unnecessary frameworks or backend services.

## Installation

```bash
npm install
```

## Running the Project

```bash
npm run dev
```

Then open the local URL provided by Vite in the browser.

## Verification

The project includes standard Vite verification commands:

```bash
npm run build
npm run lint
```

No automated test suite is configured in this project, so build and lint checks are the current verification steps.

## Component Structure

```text
src/
├── App.tsx
├── App.css
├── index.css
├── main.tsx
├── components/
│   ├── Header.tsx
│   ├── Header.css
│   ├── PostList.tsx
│   ├── PostList.css
│   ├── Post.tsx
│   └── Post.css
├── hoc/
│   └── withLogger.tsx
├── types/
│   └── post.ts
└── assets/
```

### App
The root component renders the main blog layout and includes the Header and PostList.

### Header
Displays the `Dev Insights` title and a `New Post` nav link.

### PostList
Contains a small hardcoded array of blog posts and maps each item to a reusable `Post` component.

### Post
Displays individual post details: title, author, content preview, and date.

## TypeScript and Post Data

The project uses a typed interface for each blog post:

```ts
export interface PostType {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
}
```

The date is stored as a string in ISO format, which is a practical choice for this assignment because it is easy to serialize and display while still being converted to a JavaScript `Date` for conditional logic.

## Functional vs Class Components

Functional components were used throughout the project.

This was a deliberate choice because the app is small, presentational, and does not require class lifecycle methods. Hooks and typed props keep the code cleaner and easier to assess for a foundational React assignment.

## Styling

The project uses two approved styling methods:

### 1. External CSS
Each component is styled with separate CSS files such as:

- `App.css`
- `Header.css`
- `PostList.css`
- `Post.css`

### 2. Inline Styles
A small typed inline style is applied to the `New!` badge in the `Post` component:

```tsx
const badgeStyle: CSSProperties = {
  letterSpacing: '0.3px',
};
```

This shows that the project meets the requirement to use more than one styling approach.

## Conditional Styling and Rendering

The app demonstrates conditional rendering in a few ways:

- Posts written by `Benigne` receive a featured styling class.
- Posts published within the last 24 hours display a `New!` badge.

Example logic:

```tsx
const isFeaturedAuthor = post.author === 'Benigne';
const isNew = hoursSincePosted >= 0 && hoursSincePosted <= 24;
```

This changes the rendered UI based on real data values.

## Optimization

The `Post` component is wrapped with `React.memo`:

```tsx
export default memo(Post);
```

This prevents unnecessary re-renders when the same props are passed. The list also uses a stable unique key from each post ID:

```tsx
<Post key={post.id} post={post} />
```

## Higher-Order Component

The project includes a custom HOC named `withLogger`.

It accepts a component, wraps it, and logs when the component mounts and unmounts:

```tsx
function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string,
) {
  function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`);

      return () => {
        console.log(`${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  return LoggedComponent;
}
```

The HOC is applied to the `Header` component in `App.tsx`.

> Note: In React Strict Mode, development mount/unmount logs may appear more than once. This is expected behavior during development and is not a bug in the implementation.

## Challenges Encountered

A few practical challenges were addressed while building this project:

- ensuring the post data was strongly typed
- keeping the file structure clean and easy to assess
- using a date comparison that correctly shows the `New!` badge
- applying conditional styling without over-complicating the UI
- implementing a simple HOC without adding unnecessary application complexity

## External Libraries / Packages

The project uses only the standard React + TypeScript + Vite stack:

- `react`
- `react-dom`
- `vite`
- TypeScript tooling
- ESLint

No additional UI or backend libraries were required for this project.

## Final Notes

This assignment is a foundation-level React project intended to demonstrate a clear understanding of reusable components, typed data, styling, optimization, and higher-order components. It stays focused on the required learning outcomes rather than adding unnecessary advanced features.

