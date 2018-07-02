# DevBlog

DevBlog is a fully customizable and extendible blog template designed for developers (and anyone else) wanting to get into blogging. The template is built with React and GatsbyJS and can be very quickly setup. Moreover, the template comes with syntax highlighting (via PrismJS) out of the box as well as server-side rendering.

To view a live demo, [click here](https://ryanfitzgerald.github.io/devblog/).

## Features
* Fully responsive
* Minimalistic
* Customizable via a ```config.js``` file
* Easy to deploy
* Statically-generated via markdown files
* Server-side rendering
* Syntax highlighting via PrismJS

## Contents
* [Setup and Configuration](#setup-and-configuration)
  * [Setup](#setup)
  * [Configuration](#configuration)
* [Creating New Posts](#creating-new-posts)
* [Deploying](#deploying)
* [Changelog](#changelog)
* [License](#license)

## Setup and Configuration

### Setup

#### 1. Install Gatsby CLI

The first step is to get the GatsbyJS CLI installed locally. This can be accomplished by running the command ```npm install --global gatsby-cli```

#### 2. Create a new Gatsby Site using this repo

When creating a new Gatsby site, the CLI allows you to specify a starter, in this case simply provide the URL for this repo. This can be accomplished by running the command ```gatsby new YOUR_BLOG_NAME https://github.com/RyanFitzgerald/devblog```

#### 3. Edit or use the tempalte as needed

Now you that you are setup, you can simply use the blog or make edits as needed. For example, run ```gatsby develop``` to start up a hot-reloaded development environment availalbe at localhost:8000 or run ```gatsby build``` to build an optimized production build. For a complete list of CLI commands for Gatsby, take a look at their [documentation](https://www.gatsbyjs.org/docs/).

#### Alternative Setup

Alternatively, if you wish to simply fork this repo or clone it, then you simply need to run ```npm install``` and then ```gatsby develop``` afterwards and you'll be up and running.

### Configuration

Basic configuration can be done via the ```config.js``` file in the root of the project repo. Through this file you can make edits to the primary color of the blog, add a blog author and description, and more. The defaults are as follows:

```javascript
module.exports = {
  title: 'Dev Blog', // Required
  author: 'Ryan Fitzgerald', // Required
  tagline: 'Full-stack Web Developer',
  primaryColor: '#3498db', // Required
  showHeaderImage: true,
  showShareButtons: true,
  postsPerPage: 5, // Required
  social: {
    website: 'https://ryanfitzgerald.ca',
    github: 'https://github.com/ryanfitzgerald',
    twitter: 'https://twitter.com/ryanafitzgerald',
    linkedin: 'https://ca.linkedin.com/in/ryanafitzgerald'
  }
};
```

__Note:__ Any configuration option labelled as "Required" is needed for basic presentational purposes. Anything without the "Required" comment can be removed should you not want it used.

#### Understanding the configuration variables

The configuration variables referenced above are used as follows:

| Variable | Description of Use |
|----------|--------------------|
| title | The title of the blog. This is used for the page title primarily. |
| author | The author of the blog. This is used for the header name and page title. |
| tagline | The tagline of the author. This is used for the header under the author. |
| primaryColor | The primary color of the blog. |
| showHeaderImage | Flag to show the header image or not. |
| showShareButtons  | Flag to show social media share buttons on each blog post or not. |
| postsPerPage | The number of posts per page on the blog homepage. This is used for pagination. |
| social | Social media profiles of the blog author. Currently only personal website, Github, Twitter, and LinkedIn are supported.|

#### Changing the main header image

To change the default header image, simply override the ```main.jpg``` file in the ```/src``` folder.

#### Changing the favicon

To change the default favicon, simply override the ```favicon.ico``` file in the ```/src``` folder.

## Creating New Posts

_To Do_

## Deploying

_To Do_

## Changelog

_To Do_

## License

Licensed under MIT License. See [LICENSE.md](LICENSE.md) for more.
