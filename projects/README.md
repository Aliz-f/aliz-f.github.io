# Training projects

Standalone page served by GitHub Pages at https://arfadaei.ir/projects/.
There are no links to this page from the portfolio. The page requests that search
engines do not index it; this does not make it private.

## Add or update a project

Edit `projects/projects.js`. Add an object inside `window.trainingProjects = []`:

```js
window.trainingProjects = [
  {
    title: "Your project name",
    description: "What visitors can try in this project.",
    url: "https://your-project.example.com",
    tags: ["Python", "Practice"],
  },
];
```

Copy the object to add more projects, separating objects with commas. Projects
appear in array order; put a new entry first to show it first. Only `title` and
`url` are required. Use an absolute HTTP or HTTPS URL. Remove an object to remove
a project. Commit and push the files to publish changes through GitHub Pages.

No build step, dependencies, or backend are required. Open `projects/index.html`
locally to preview. The empty collection displays a short message until projects
are added.
