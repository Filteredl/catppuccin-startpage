// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Blanes",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-03.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "soundcloud",
              url: "https://soundcloud.com/",
              icon: "brand-soundcloud",
              icon_color: palette.peach,
            },
            {
              name: "4chan",
              url: "http://4chan.org",
              icon: "brand-4chan",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "proton mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "mail-opened",
              icon_color: palette.lavender,
            },
            {
              name: "calendar",
              url: "https://calendar.proton.me/u/0/",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "filen",
              url: "https://filen.io/",
              icon: "brand-onedrive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "phoronix",
              url: "https://www.phoronix.com/",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "gaminfonlinux",
              url: "https://www.gamingonlinux.com/",
              icon: "badge-filled",
              icon_color: palette.peach,
//            },
//            {
//             name: "куток",
//              url: "https://kutok.io",
//              icon: "border-radius",
//              icon_color: palette.red,
//            },
//            {
//              name: "ґрунт",
//              url: "https://grnt.media",
//              icon: "eye-bolt",
//              icon_color: palette.blue,
//            },
//            {
//              name: "village",
//              url: "https://www.village.com.ua",
//              icon: "home-2",
//              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-06.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
            {
              name: "publicapi",
              url: "https://publicapis.io/",
              icon: "api",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "agora",
              url: "https://forum.agoraroad.com/index.php",
              icon: "brand-finder",
              icon_color: palette.green,
            },
            {
              name: "bluesky",
              url: "https://bsky.app/",
              icon: "brand-bluesky",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "protondb",
              url: "https://www.protondb.com/",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steamdb",
              url: "https://steamdb.info/",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
//            {
//              name: "epicgames",
//              url: "https://store.epicgames.com",
//              icon: "brand-fortnite",
//              icon_color: palette.red,
//            },
//            {
//              name: "nintendo",
//              url: "https://store.nintendo.co.uk",
//              icon: "device-nintendo",
//              icon_color: palette.blue,
//            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "anime nexus",
              url: "https://anime.nexus/es",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "",
              url: "",
              icon: "",
              icon_color: palette.yellow,

            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
