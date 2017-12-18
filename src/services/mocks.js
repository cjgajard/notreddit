let storyID = 0;
export const STORIES_LIST = [];
const exampleLinks = [
  {
    title: 'Google, a web search engine',
    url: 'https://www.google.cl/',
    domain: 'google.cl',
  },
  {
    title: 'reddit: the front page of the internet',
    url: 'https://www.reddit.com/',
  },
  {
    title: 'Clean – A functional programming language',
    url: 'http://clean.cs.ru.nl/Clean',
    domain: 'ru.nl',
  },
];

export const Story = class {
  constructor(options) {
    storyID += 1;
    Object.assign(this, options, {
      id: storyID,
      createdAt: new Date(),
      commentsCount: 0,
    });
  }

  static generate(data = {}) {
    const story = new Story(data);
    const faked = {
      title: `Example title ${story.id}`,
      body: `Example body ${story.id}`,
      createdAt: this.randomDate(new Date(2017, 0, 1)),
      username: this.randomName(),
      commentsCount: Math.floor(Math.random() * 100),
    };
    return Object.assign({}, story, faked, data);
  }

  static generateWithLink(data = {}) {
    const story = this.generate();
    const link = exampleLinks[Math.floor(Math.random() * exampleLinks.length)];
    story.title = data.title || link.title;
    story.url = data.url || link.url;
    story.domain = data.domain || link.domain;
    return story;
  }

  static get list() {
    return STORIES_LIST;
  }

  static randomDate(start, end = new Date()) {
    const newTime = Math.random() * (end.getTime() - start.getTime());
    return new Date(newTime + start.getTime());
  }

  static randomName() {
    return Math.random().toString(36).replace(/[0-9]/g, '').substring(1);
  }
};

// for (let i = 1; i <= 20; i += 1) {
//   if (Math.random() > 0.8) {
//     STORIES_MOCK.push(Story.generateWithLink());
//   } else {
//     STORIES_MOCK.push(Story.generate());
//   }
// }
