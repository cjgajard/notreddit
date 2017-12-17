import { Story } from './mocks';

const StoryService = class {
  static create(data) {
    /*
    A library to send http requests to the backend such as jQuery,
    axios, etc. is supposed to be used here.
    */
    // return jQuery.ajax({ url: this.resource, method: 'post', data })

    return Promise.resolve({ data: Story.generate(data) });
  }
};

export default StoryService;
