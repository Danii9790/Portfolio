export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'github',
        title: 'GitHub Link',
        type: 'url',
      },
      {
        name: 'live',
        title: 'Live Link',
        type: 'url',
      },
    ],
  };
  