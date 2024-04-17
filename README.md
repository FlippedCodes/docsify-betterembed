# Better Embed

A docsify.js plugin to embed selective areas from another markdown file.

## Installation

How to install this plugin.

### Production

For production, please use the numbered version to prevent breaking changes in production.

``` html
<script src="https://unpkg.com/docsify-betterembed@1.1.1/dist/betterEmbed.min.js"></script>
```

### Development

If you are developing on a doc, you can use the latest. Make sure you switch it to production later, or the production one right away.

``` html
<script src="https://unpkg.com/docsify-betterembed@latest/dist/betterEmbed.min.js"></script>
```

## Usage

> [!NOTE]
> Sorry for not providing a demo, but I thought this is a very self explanatory setup. But I am using this activly in [another projects](https://github.com/FlippedCodes/Unofficial-Resonite-Docs/blob/c92cd4baf050c3316924b4af71ec59b9defaef66/gameplay/botCommands.md?plain=1#L78).

### Basic instructions

1. Surround the part you want *to embed* in the following comment:

   ``` markdown
   <!-- embed:start:exampleName -->

   YOUR CONTENT HERE

   <!-- embed:end:exampleName -->
   ```

> [!IMPORTANT]
> Make sure you respect the spaces between the comments and your content. It can mess with the html (specifically tables), if they are left out.

2. Embed the content like this:

   ``` markdown
   [Some Name](path/to/markdown/file/with/embed.md#exampleName ':include')
   ```

--> The link will then be replaced with the content.
If it doesn't the selector, it will embed the whole page. Aka, you might have done something wrong.

### Tips

- Setup 2 just converts to a different text, you can also use this to keep the link for Markdown, vanilla-feeling:
  
  ``` markdown
  <!-- embedImport:start:exampleName -->
  [Some Name](path/to/markdown/file/with/embed.md ':include')
  <!-- embedImport:end:exampleName -->
  ```

- Because the selector is what decides the beginning and the end, you can nest and overlay the embed selections, however you like it.

  ``` markdown
  <!-- embed:start:expl3 -->
  <!-- embed:start:expl1 -->

  Very original stuff.

  <!-- embed:start:expl2 -->

  Oh, So much content

  <!-- embed:end:expl1 -->

  uhm.. hows your day?

  <!-- embed:end:expl2 -->
  <!-- embed:end:expl3 -->
  ```

## Contributing

I'm always happy, if someone has improvements to this little plugin. If you want to help, anything goes, but preferred is what is on the roadmap below or maybe discuss it as a GitHub issue first. ^^

### Roadmap

Nothing much here, but I'm planning to add the following features at some point:

- [ ] Support for [docsify-mustache](https://docsify-mustache.github.io) so Docsify can have proper templating.
- [ ] Being able to use header as a selector and not use comments to mark the start and end.
- [ ] Offset header levels to either fit the current layout, or being able to select it.
- [ ] Rewrite links to point at their embeded version (eg. Youtube)

## License

This repo is using the [MIT license](LICENSE).

## Credit

Thanks to the [docsify.js](https://docsify.js.org/#/) team to make writing plugins so simple. I usually don't front end, but this was a breeze to get working.
