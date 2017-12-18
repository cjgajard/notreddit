import { Story } from './mocks';

const StoryService = class {
  static create(data) {
    /*
    A library to send http requests to the backend such as jQuery,
    axios, etc. is supposed to be used here.
    */
    // return jQuery.ajax({ url: this.resource, method: 'post', data })
    const story = new Story(data);
    Story.list.unshift(story);
    return Promise.resolve({ data: story });
  }

  static list() {
    // return jQuery.ajax({ url: this.resource, method: 'get' })
    return Promise.resolve({ data: Story.list });
  }
};

export default StoryService;
