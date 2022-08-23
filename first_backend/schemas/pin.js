export default{
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'about',
            title: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            // hotspot makes it possible for images to adopt a specific aspect ratio while they are being displayed
            options: {
              hotspot: true,
            },
          },
          {
            name: 'userId',
            title: 'UserId',
            type: 'string',
          },
          {
            name: 'postedBy',
            title: 'PostedBy',
            // sanity is smart enough to give the reference to the user by using posted by
            type: 'postedBy',
          },
          {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{ type: 'save' }],
          },
          {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }],
          },
    ]
}