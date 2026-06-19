# Tasks Calendar Wrapper

Updated fork of [Leonezz/obsidian-tasks-calendar-wrapper](https://github.com/Leonezz/obsidian-tasks-calendar-wrapper), with compatibility fixes and usability polish.

This Obsidian plugin shows tasks in a timeline view, with quick entry, status counters, search, folder grouping, collapsible sections, and display settings for task metadata.

## Your Tasks Stay Yours

Tasks Calendar Wrapper is a view layer for plain Markdown tasks. If the plugin is disabled or breaks, your tasks remain readable and editable in Obsidian, Tasks, Dataview, and any other tool that understands normal Markdown task syntax.

## Compatibility

This updated build has been tested on desktop Obsidian. Mobile support is not verified yet.

![Tasks Calendar Wrapper demo](media/tasks-calendar-wrapper-demo.gif)

## Status

This project keeps the original plugin identity and credits, with compatibility fixes and timeline updates kept in this repository.

Original upstream history remains available at [Leonezz/obsidian-tasks-calendar-wrapper](https://github.com/Leonezz/obsidian-tasks-calendar-wrapper).

See [CHANGELOG.md](CHANGELOG.md) for the public list of changes and fixes in this fork.

## Current Focus

- Keep the timeline view from blanking on bad task data.
- Improve quick-entry behavior.
- Make settings easier to understand.
- Improve search and filtering inside the already-loaded task list.
- Preserve compatibility with common Tasks and Dataview task formats.

## Build

```bash
npm install
npm run build
```

The production build writes the bundled plugin files into `dist/`.

```bash
npm test
```

Runs the automated parser, timeline, interaction, and write-path checks.

## Release Bundle

A release should include these files:

- `main.js`
- `manifest.json`
- `styles.css`

The plugin id remains `tasks-calendar-wrapper` so existing installs can update without changing folders.

## Credits

Original plugin by [Leonezz](https://github.com/Leonezz).

This fork also vendors the small timeline source that was previously included as a submodule, so compatibility fixes can live in one repository.
