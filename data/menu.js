export const menuItems = [
  {
    id: 1,
    text: "Home",
    url: "#",
    subMenu: [
      {
        text: "Home Social Media",
        url: "/",
        isActive: true,
      },
      {
        text: "Home Coding Assistant",
        url: "/home-2",
      },
      {
        text: "Home Image Generator",
        url: "/home-3",
      },
      {
        text: "Home AI Copywriting",
        url: "/home-4",
      },
    ],
    hasChildren: true,
    isActive: true,
  },
  {
    id: 2,
    text: "About Us",
    url: "#",
    subMenu: [
      {
        text: "About",
        url: "/about",
      },
      {
        text: "FAQs",
        url: "/faqs",
      },
      {
        text: "404",
        url: "/404",
      },
      {
        text: "Price",
        url: "/price",
      },
    ],
    hasChildren: true,
  },
  {
    id: 3,
    text: "Use Cases",
    url: "#",
    subMenu: [
      {
        text: "Use Cases",
        url: "/use-cases",
      },
      {
        text: "Use Cases Detail",
        url: "/use-cases-details/1",
      },
    ],
    hasChildren: true,
  },
  {
    id: 4,
    text: "Shop",
    url: "#",
    subMenu: [
      {
        text: "Shop",
        url: "/shop",
      },
      {
        text: "Single Product",
        url: "/single-product/1",
      },
    ],
    hasChildren: true,
  },
  {
    id: 5,
    text: "Blog",
    url: "#",
    subMenu: [
      {
        text: "Blog",
        url: "/blog",
      },
      {
        text: "Blog Detail",
        url: "/blog-detail/1",
      },
    ],
    hasChildren: true,
  },
  {
    id: 6,
    text: "Contact",
    url: "/contact-us",
  },
];
