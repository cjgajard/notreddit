let storyID = 0;

export const randomDate = (start, end = new Date()) => {
  const newTime = Math.random() * (end.getTime() - start.getTime());
  return new Date(newTime + start.getTime());
};

export const createStory = (create = false, data = {}) => {
  storyID += 1;
  const id = storyID;
  const createdAt = create ? new Date() : (
    data.createdAt || randomDate(new Date(2017, 0, 1))
  );

  return {
    id,
    title: data.title || `Example title ${id}`,
    body: data.body || `Example body ${id}`,
    createdAt,
    user: {
      username: data.username || (
        Math.random().toString(36).replace(/[0-9]/g, '').substring(1)
      ),
      id: data.userID || 1,
    },
    commentsCount: create ? 0 : Math.floor(Math.random() * 100),
  };
};

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

export const createLinkStory = (data = {}) => {
  const link = exampleLinks[Math.floor(Math.random() * exampleLinks.length)];
  const story = createStory();
  story.title = data.title || link.title;
  story.url = data.url || link.url;
  story.domain = data.domain || link.domain;
  return story;
};

// export const STORIES_MOCK = [];
// for (let i = 1; i <= 5; i += 1) {
//   if (Math.random() > 0.8) {
//     STORIES_MOCK.push(createLinkStory());
//   } else {
//     STORIES_MOCK.push(createStory());
//   }
// }
