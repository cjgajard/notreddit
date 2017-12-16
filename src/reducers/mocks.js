let storyID = 0;

export const createStory = (data = {}) => {
  storyID += 1;
  const id = storyID;

  return {
    id,
    title: data.title || `Example title ${id}`,
    body: data.body || `Example body ${id}`,
    user: {
      username: data.username || (
        Math.random().toString(36).replace(/[0-9]/g, '').substring(1)
      ),
      id: data.userID || 1,
    },
    commentsCount: Math.floor(Math.random() * 100),
  };
};

export const createLinkStory = (data = {}) => {
  const story = createStory();
  story.url = data.title || 'https://www.google.cl';
  story.domain = data.domain || 'google.cl';
  return story;
};

export const STORIES_MOCK = [];

for (let i = 1; i <= 20; i += 1) {
  if (Math.random() > 0.8) {
    STORIES_MOCK.push(createLinkStory());
  } else {
    STORIES_MOCK.push(createStory());
  }
}
