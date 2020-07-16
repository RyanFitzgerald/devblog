# DevBlog

DevBlog is a fully customizable blog template designed for developers (or anyone else) wanting to get into blogging. It comes ready to go and deploy (with ease) or can be edited and extended however you like. The blog is completely statically generated via GatsbyJS, comes with syntax highlighting (via PrismJS) out of the box, and has server-side rendering built-in, among other things.

To view a live demo, [click here](https://ryanfitzgerald.github.io/devblog/).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RyanFitzgerald/devblog)

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

#### 3. Edit or use the template as needed

Now you that you are setup, you can simply use the blog or make edits as needed. For example, run ```gatsby develop``` to start up a hot-reloaded development environment available at localhost:8000 or run ```gatsby build``` to build an optimized production build. For a complete list of CLI commands for Gatsby, take a look at their [documentation](https://www.gatsbyjs.org/docs/).

#### Alternative Setup

Alternatively, if you wish to simply fork this repo or clone it, then you simply need to run ```npm install``` and then ```gatsby develop``` afterwards and you'll be up and running.

### Configuration

Basic configuration can be done via the ```config.js``` file in the root of the project repo. Through this file you can make edits to the primary color of the blog, add a blog author and description, and more. The defaults are as follows:

```javascript
export default {
  title: 'Dev Blog', // Required
  author: 'Ryan Fitzgerald', // Required
  description: 'Full-stack Web Developer',
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
| description | The description of the author. This is used for the header under the author. |
| primaryColor | The primary color of the blog. |
| showHeaderImage | Flag to show the header image or not. |
| showShareButtons  | Flag to show social media share buttons on each blog post or not. |
| postsPerPage | The number of posts per page on the blog homepage. This is used for pagination. |
| social | Social media profiles of the blog author. Currently only personal website, GitHub, Twitter, and LinkedIn are supported.|

#### Changing the main header image

To change the default header image, simply override the ```main.jpg``` file in the ```/src``` folder.

#### Changing the favicon

To change the default favicon, simply override the ```favicon.ico``` file in the ```/src``` folder.

## Creating New Posts

All blog posts can be found in ```/src/pages``` and are statically built once the ```gatsby build``` command is run. To create a new post, simply create a new folder in ```/src/pages``` with the name of the url you'd like to have. For example, if you wish to have the url appear as ```myblog.com/hello-world``` you would create the folder as ```hello-world```. Once the folder is created, simply create an ```index.md``` file within it.

The top of the pages must all contain the same markdown which tells Gatsby the needed information about the specific post. The basic template is:

```markdown
---
title: New Beginnings
date: "2018-07-01"
featuredImage: './featured.jpg'
---

This top portion is the beginning of the post and will show up as the excerpt on the homepage.

<!-- end -->
```

In the above code snippet all that is required is the **title** and the **date**. The featured image is optional and can be added by simply adding an image to the page folder you just created and referencing like the above example. The excerpt portion is optional as well and if you do not use the ```<!-- end -->``` marker, the first bit of the post will be used as the excerpt automatically.

This template ships with 3 blog post examples which contain everything from code snippet usage, inserting images, using featured images and excerpts, and more.

## Deploying

Once you are ready to deploy the blog and make it live, you have a couple of options available to you.

### Manual Deploy

Manually deploying the blog simply requires you run a ```gatsby build``` in order to create a production build. After that, you can use any server you'd normally a React app to, such as a Digital Ocean droplet or an AWS instance. All that is required is some way to serve the static files.

If you are unfamiliar with deploying React applications, there are a number of other options.

### GitHub Pages

In order to deploy to GitHub pages, you need to first set your path prefix in ```gatsby-config.js```. The default is ```pathPrefix: '/devblog'``` however this should be changed to whatever the repo name you chose is. For example, if you have the blog located in ```https://github.com/YOURUSERNAME/myblog``` and want it deployed to ```https://YOURUSERNAME.github.io/myblog``` then you would set the path prefix to ```pathPrefix: '/myblog'```.

Next, simply run ```npm run deploy``` and your blog will be deployed.

Alternatively, if you wish to deploy it to ```https://YOURUSERNAME.github.io``` (i.e. your user / organization site and not a project site), then a couple addition changes are required. The official Gatsby documentation has them outlined well [here](https://YOURUSERNAME.github.io).

### Netlify

One of the easiest methods of deploying the blog would be to use [Netlify](https://www.netlify.com/). To deploy to Netlify, simply click the button below and follow the prompts.

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RyanFitzgerald/devblog)

### Other

The options outlined above are not the only options available to you to deploy the blog. The official Gatsby documentation goes into detail about a number of other options. In order to read more about deployment options, [click here](https://www.gatsbyjs.org/docs/deploy-gatsby).

## Changelog

### 1.0.0
* Initial release

### 2.0.0
* Upgrade to Gatsby 2.0.31 (Big thanks to [ttristan](https://github.com/ttristan) for the help)
* Remove deprecated functions

## License

Licensed under MIT License. See [LICENSE.md](LICENSE.md) for more.
