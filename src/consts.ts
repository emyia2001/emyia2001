// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "Snark",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Snark",
    description: "摸鱼🐟"
  }
}


export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/emyia2001",
  },
  {
    icon: "mdi:wechat",
    friendlyName: "Wechat",
    link: "#",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "SnarkD@163.com",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  // {
  //   title: "Projects",
  //   path: '/projects'
  // },
  {
    title: "Archive",
    path: '/archive'
  }
];
