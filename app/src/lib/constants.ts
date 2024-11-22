interface Bookmark {
  name: string;
  favicon: string;
  url: string;
}

function bm(name: string, url: string): Bookmark {
  return {
    name: name,
    url: url,
    favicon: "",
  };
}
export const workBookmarks: Bookmark[] = [
  bm("Github", "https://github.com/"),
  bm(
    "Notion Developer Notes",
    "https://www.notion.so/Developer-Notes-1130e35001fb80a48eddc045bf20ee42",
  ),
  bm("Gmail", "https://mail.google.com/mail/u/0/#inbox"),
  bm("LinkedIn", "https://www.linkedin.com/feed/"),
  bm(
    "Google Wallet Console",
    "https://pay.google.com/business/console/u/1/products/passes/BCR2DN4T2P47N437",
  ),
  bm(
    "Google Cloud Console",
    "https://console.cloud.google.com/welcome?project=classifii-dev",
  ),
  bm(
    "Classifii Invoices",
    "https://www.notion.so/cb4d8334bb8640d9a7185eed944ced5e?v=11533439c9bf4985b02403d6bbad455a",
  ),
  bm(
    "Classifii Timesheet",
    "https://docs.google.com/spreadsheets/d/1edlQIwYt5JY_7Z5I9PyEC-ajlea_0z5Y9FsTUXnoBAc/edit?gid=0#gid=0",
  ),
  bm("ChatGPT", "https://chatgpt.com/"),
  bm("Calude", "https://claude.ai/new"),
  bm(
    "Cpanel",
    "https://sv70.ifastnet.com:2083/cpsess8060342479/frontend/jupiter/index.html?login=1&post_login=55101796439551",
  ),
  bm(
    "Cpanel Files",
    "https://sv70.ifastnet.com:2083/cpsess8060342479/frontend/jupiter/filemanager/index.html",
  ),
  bm(
    "Wordpress",
    "https://sv70.ifastnet.com:2083/cpsess8060342479/frontend/jupiter/softaculous/index.live.php?act=wordpress",
  ),
  bm("Classifii", "https://classifii.com"),
  bm(
    "Figma",
    "https://www.figma.com/design/q117SVTDDDuA37C8BgtFgJ/Kelendy?node-id=0-1&node-type=canvas&t=fF4Ju0SqRABYIjrt-0",
  ),
  bm(
    "Shadcn",
    "https://next.shadcn-svelte.com",
  ),
  bm("Lucide", "https://lucide.dev/icons/"),
  bm("Calendar", "https://calendar.google.com/calendar/u/0/r"),
  bm("Messenger", "https://www.messenger.com/e2ee/t/8778745138839838/"),
];
