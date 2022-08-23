export default {
  name: 'user',
  title: 'User',
  type: 'document',
  // fields that document is going to have 
  // array of field objects
  fields: [
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
      // type of img is string bcoz its going to be an url
    },
  ],
};