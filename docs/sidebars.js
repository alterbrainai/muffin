/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {type: 'category', 
      label: 'Getting Sarted',
      items: ['getting-started/prerequisites', 'getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Backend',
      items: ['backend/backend-dev-docs'],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: ['frontend/frontend-dev-docs'],
    },
  ],
  // But you can create a sidebar manually
  // Add more categories and items as needed
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
