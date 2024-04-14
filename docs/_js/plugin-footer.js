// Edit on Github https://github.com/docsifyjs/docsify/blob/167596be51d8918efa2238a0e12eab14445e4022/docs/index.html#L193C16-L193C16
// footer https://github.com/boopathikumar018/docsify-darklight-theme/blob/master/docs/index.html        
function footer(hook, vm) {
  const footer = [
    '<footer style="text-align: center; padding-top: 40px;">',
    "<br/>",
    'Made with ❤ by <a href="https://github.com/FlipperLP" target="_blank">@Phil</a>  &copy; 2024',
    "</footer>",
  ].join("");

  // TODO: Look into what this does
  hook.beforeEach((html) => {
    if (/githubusercontent\.com/.test(vm.route.file)) {
      url = vm.route.file
        .replace("raw.githubusercontent.com", "github.com")
        .replace(/\/master/, "/blob/master");
    } else if (/jsdelivr\.net/.test(vm.route.file)) {
      url = vm.route.file
        .replace("cdn.jsdelivr.net/gh", "github.com")
        .replace("@master", "/blob/master");
    } else {
      url =
        "https://github.com/FlippedCodes/docsify-betterembed/blob/main/" +
        vm.route.file;
    }
    const editText = `\n\<div style="text-align: right"><a href="${url}" target="_blank">:memo: Edit on GitHub</a></div>`;

    return html + editText + footer;
  });
}
// Add plugin to docsify's plugin array
window.$docsify = window.$docsify || {};
$docsify.plugins = [footer, ...($docsify.plugins || [])];