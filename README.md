# Weeblog

## Installation

Instal Node by downloading it from https://nodejs.org/en/download/current.

Install the Yarn CLI from https://yarnpkg.com/lang/en/docs/install.

1. Clone project

```
git clone https://github.com/leoancap/weeblog
```

2. cd into folder

```
cd weeblog
```

3. Download and install dependencies

```
yarn
```

## View app in development mode

```
yarn start
```

## Build app for production

```
yarn build
```

## Run Tests

```
yarn test
```

## Tech Stack

- React
- Redux
- Typescript
- Styled-Components

## Devopment Steps

1. Add app specific types(Post items)
2. Create action types(FETCH_POSTS,SET_POSTS)
3. Create app state types(data in reducers)
4. Hook up types to actions
5. Hook up types to reducers
6. Hook up types to store
7. Hook up types to middleware(Thunk)
8. Hook up types to components

## Requirements

- [x] The main view of the application shows a list of pre-existing blog posts.

 -[x] Each blog post has the following properties:
        * Title
        * Date posted
        * Category(one or more categories which can be used to group posts)
        * Content

- [x] In the item list of the main view, the title, date posted, and tags of each blog posts are
displayed.

- [] Clicking on a blog post item in the list will show all the details about that blog post, including
the actual content.

- [] On each item there is a delete button which when clicked will delete the blog post from the list of 
blog posts.

- [] New blog posts can be added via a form, which will ask for the Title, Categoriesand the Content of
the blog post.