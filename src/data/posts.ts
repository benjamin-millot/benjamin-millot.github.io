import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '3',
    title: 'Building My Blog: A Developer\'s Journey',
    slug: 'building-my-blog',
    excerpt: 'A casual and developer-friendly look at how this blog came to be, from choosing the tech stack to overcoming challenges.',
    content: `# Building My Blog: A Developer's Journey

Hey there, fellow developers! Today, I want to take you on a little journey of how this blog came to life. It's been a fun ride, filled with code, coffee, and a few late nights. So grab your favorite beverage, and let's dive in!

## The Idea

It all started with a simple idea: to create a personal blog where I could share my thoughts, experiences, and projects with the world. As a developer, I wanted a platform that was not only easy to manage but also allowed me to showcase my skills. Enter Next.js, a powerful framework that offers server-side rendering, static site generation, and a fantastic developer experience.

## Choosing the Tech Stack

I wanted a modern tech stack that would make development a breeze. Here's what I chose:

- **Next.js**: For its amazing features and ease of use.
- **TypeScript**: Because type safety is a developer's best friend.
- **Tailwind CSS**: For a clean and responsive design without the hassle of writing custom CSS.
- **React Markdown**: To render markdown content beautifully.

## Building the Blog

With the tech stack in place, it was time to start building. I kicked things off by setting up a new Next.js project with TypeScript and Tailwind CSS. The initial setup was smooth, thanks to the \`create-next-app\` command.

Next, I created a simple data structure for my blog posts and added some sample content. I wanted the home page to display a list of blog post cards, so I built a \`BlogCard\` component to handle that.

For individual blog post pages, I used dynamic routing in Next.js. This allowed me to create a separate page for each post, complete with markdown rendering using \`react-markdown\`.

## Overcoming Challenges

Of course, no project is without its challenges. I ran into a few issues along the way, like handling dynamic route parameters and ensuring images loaded correctly. But with a bit of research and some trial and error, I was able to overcome these hurdles.

One of the key lessons I learned was the importance of reading the documentation. Next.js has fantastic docs that helped me understand how to properly handle dynamic routes and optimize images.

## The Final Touches

With the core functionality in place, it was time to add some polish. I created a navigation bar with links to different sections of the blog, including an "About" page and a "CV" page. I also added some SVG logos to give the blog a bit of personality.

## Looking Ahead

I'm thrilled with how the blog turned out, but there's always room for improvement. In the future, I plan to add more features, like a comment section and social media integration. But for now, I'm excited to start sharing my thoughts and projects with the world.

Thanks for joining me on this journey! I hope you enjoyed this behind-the-scenes look at how my blog came to be. If you're thinking about starting your own blog, I highly recommend giving Next.js a try. Happy coding!`,
    date: '2024-03-26',
    author: 'Benjamin',
    readingTime: '6 min read',
    tags: ['Next.js', 'TypeScript', 'Web Development', 'Personal Project']
  },
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    excerpt: 'Learn the basics of Next.js and how to create your first application.',
    content: `# Getting Started with Next.js

![Next.js Logo](/images/nextjs-logo.svg)

Next.js is a powerful framework for building React applications. It provides features like server-side rendering, static site generation, and API routes out of the box.

## Why Next.js?

- **Server-Side Rendering**: Better performance and SEO
- **Static Site Generation**: Fast static pages
- **API Routes**: Backend functionality
- **File-System Based Routing**: Easy to understand and maintain

## Getting Started

1. Create a new Next.js project
2. Add your pages
3. Deploy your application

That's it! You're ready to build amazing web applications with Next.js.`,
    date: '2024-03-25',
    author: 'John Doe',
    readingTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development', 'Tutorial']
  },
  {
    id: '2',
    title: 'The Power of TypeScript',
    slug: 'power-of-typescript',
    excerpt: 'Discover how TypeScript can improve your development experience and code quality.',
    content: `# The Power of TypeScript

![TypeScript Logo](/images/typescript-logo.svg)

TypeScript adds static typing to JavaScript, making your code more reliable and easier to maintain.

## Benefits of TypeScript

- **Type Safety**: Catch errors before runtime
- **Better IDE Support**: Improved autocomplete and documentation
- **Enhanced Code Quality**: More maintainable codebase
- **Better Team Collaboration**: Clear interfaces and types

## Getting Started with TypeScript

1. Install TypeScript
2. Configure your project
3. Start coding with types

TypeScript is a game-changer for JavaScript development.`,
    date: '2024-03-24',
    author: 'Jane Smith',
    readingTime: '4 min read',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Tutorial']
  }
]; 