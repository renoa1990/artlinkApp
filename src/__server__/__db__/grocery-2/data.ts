// categories nav list
export const categoryNavigation = [
  {
    icon: "Carrot",
    title: "Vegetables",
    href: "/products/search/vegetables"
  },
  {
    icon: "Apple",
    title: "Fruits & Vegetables",
    href: "/products/search/Fruits & Vegetables",
    child: [
      {
        title: "Fresh Frutes",
        href: "/products/search/Fresh Frutes",
        child: [
          { title: "Pears, apples, quinces", href: "/products/search/Pears, apples, quinces" },
          { title: "Peaches, plums, apricots", href: "/products/search/Peaches, plums, apricots" },
          { title: "Grapes", href: "/products/search/Grapes" }
        ]
      },
      {
        title: "Fresh Vegetables",
        href: "/products/search/Fresh Vegetables",
        child: [
          { title: "Onion", href: "/products/search/Onion" },
          { title: "Potato", href: "/products/search/Potato" },
          { title: "Vegetable Pack", href: "/products/search/Vegetable Pack" }
        ]
      }
    ]
  },
  { icon: "Milk", title: "Dariry & Eggs", href: "/products/search/Dariry & Eggs" },
  { icon: "Breakfast", title: "Breakfast", href: "/products/search/Breakfast" },
  { icon: "Yogurt", title: "Frozen", href: "/products/search/Frozen" },
  { icon: "Honey", title: "Organic", href: "/products/search/Organic" },
  { icon: "Beer", title: "Canned Food", href: "/products/search/Canned Food" },
  { icon: "Snack", title: "Coffee & Snacks", href: "/products/search/Coffee & Snacks" },
  { icon: "Bottle", title: "Sauces & Jems", href: "/products/search/Sauces & Jems" },
  { icon: "Honey", title: "Organic", href: "/products/search/Organic" },
  { icon: "Beer", title: "Canned Food", href: "/products/search/Canned Food" },
  { icon: "Snack", title: "Coffee & Snacks", href: "/products/search/Coffee & Snacks" },
  { icon: "Bottle", title: "Sauces & Jems", href: "/products/search/Sauces & Jems" }
];

// carousel-data
export const mainCarouselData = [
  {
    id: 1,
    title: "Get Your Grocery Within 40 Minutes",
    imgUrl: "/assets/images/products/garlic.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed pellentesque nibh tortor.`,
    playStoreLink: "/",
    appStoreLink: "/"
  },
  {
    id: 2,
    title: "Get Your Grocery Within 40 Minutes",
    imgUrl: "/assets/images/products/garlic.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed pellentesque nibh tortor.`,
    playStoreLink: "/",
    appStoreLink: "/"
  }
];

// service list
export const serviceList = [
  {
    id: "a363c53d-9d1e-41c9-9ba3-4001a1832215",
    icon: "Truck",
    title: "Fast Delivery",
    description: "Start from $10"
  },
  {
    id: "828a0143-5368-4c0f-bbbb-00e0ebd12b9b",
    icon: "FeedbackThumbsUp",
    title: "Feedback",
    description: "97% positive"
  },
  {
    id: "13cc2e20-acd8-481d-8e23-91090ef17109",
    icon: "Shield",
    title: "Payment",
    description: "100% secured"
  }
];

// top categories
export const categories = [
  {
    id: "3a9c3d66-f3e3-413f-ae98-b50086caecd9",
    name: "Fruits & Vegatables",
    icon: null,
    image: "/assets/images/icons/healthy-food.svg",
    slug: "fruits-and-vegatables",
    parent: [],
    description: "Upto 60% off",
    for: { demo: "grocery-2", type: "top-categories" }
  },
  {
    id: "5d915d18-bb8a-4003-85ea-75b82d11efb0",
    name: "Fish & meat",
    icon: null,
    image: "/assets/images/icons/fish.svg",
    slug: "fish-and-meat",
    parent: [],
    description: "Upto 30% off",
    for: { demo: "grocery-2", type: "top-categories" }
  },
  {
    id: "6cbe6d04-606e-4d80-99f1-0f8439bb21bc",
    name: "Rice & Flour",
    icon: null,
    image: "/assets/images/icons/wheat-flour.svg",
    slug: "rice-and-flour",
    parent: [],
    description: "Upto 40% off",
    for: { demo: "grocery-2", type: "top-categories" }
  },
  {
    id: "5c65740a-73e5-4de4-8bfc-22698413b090",
    name: "Fruits & Vegatables",
    icon: null,
    image: "/assets/images/products/Orange 1kg 2.png",
    slug: "fruits-and-vegatables",
    parent: [],
    description: "Upto 40% off",
    for: { demo: "grocery-2", type: "top-categories" }
  },
  {
    id: "130c51ab-c814-4075-8ecd-b49d4558c8c7",
    name: "Baby Food",
    icon: null,
    image: "/assets/images/icons/feeding-bottle.svg",
    slug: "baby-food",
    parent: [],
    description: "Upto 30% off",
    for: { demo: "grocery-2", type: "top-categories" }
  },
  {
    id: "ed98259a-d8c9-43f7-9e10-46a53cd6f606",
    name: "Personal Care",
    icon: null,
    image: "/assets/images/icons/skincare.svg",
    slug: "personal-care",
    parent: [],
    description: "Upto 60% off",
    for: { demo: "grocery-2", type: "top-categories" }
  }
];

// discount banner list
export const discountCardList = [
  {
    id: 1,
    title: "25% Special Off Today Only for Vegetables",
    subtitle: "Till 10 Sept, 2021",
    imgUrl: `/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png`,
    shopUrl: "/",
    bgColor: "#F6FFE5"
  },
  {
    id: 2,
    title: "15% Off for All Product Only Need to Subscribe",
    subtitle: "Subscribe Us",
    imgUrl: `/assets/images/products/kisspng-organic-food-milk-food-gift-baskets-grocery-5abeaffc1e5b25 1.png`,
    shopUrl: "/",
    bgColor: "#FFF8E5"
  },
  {
    id: 3,
    title: "25% Special Off Today Only for Vegetables",
    subtitle: "Till 10 Sept, 2021",
    imgUrl: `/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png`,
    shopUrl: "/",
    bgColor: "#F6FFE5"
  }
];

// testimonial list
export const testimonialList = [
  {
    rating: 5,
    id: "aa95e3fd-c170-431a-b9cd-abaac45a048f",
    user: { name: "Jonathon Doe", avatar: "/assets/images/faces/7.png" },
    comment: `Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !`
  },
  {
    rating: 5,
    id: "72c79d90-abc7-467d-b7b2-e94905a9e18a",
    user: { name: "Jonathon Doe", avatar: "/assets/images/faces/7.png" },
    comment: `Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !`
  },
  {
    rating: 5,
    id: "fc39e3b3-de7b-4ffa-aa64-63ca0c21c5c8",
    user: { name: "Jonathon Doe", avatar: "/assets/images/faces/7.png" },
    comment: `Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !`
  }
];

// get all products
export const products = [
  {
    id: "f8cb19ae-6761-45dc-80bd-57b22c49aba6",
    slug: "premium-grocery-collection",
    shop: {
      id: "44f51c75-74b5-49f0-b5b8-9b62b4534946",
      slug: "anytime-buys",
      user: {
        id: "88c8daa1-340c-475d-a1f1-3038951ae76d",
        email: "Adaline_Steuber@gmail.com",
        phone: "572.876.1950",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1180.jpg",
        password: "TfmXzIKQYEo3gKH",
        dateOfBirth: "1943-05-27T09:11:02.553Z",
        verified: true,
        name: {
          firstName: "Ruby",
          lastName: "Koelpin"
        }
      },
      email: "Freda.Dach@hotmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Premium Grocery Collection",
    brand: null,
    price: 188,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
    images: [
      "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
      "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
      "/assets/images/products/Groceries/2.PremiumGroceryCollection.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "b891b491-f2e1-4931-92c6-854c0e9968af",
    slug: "premium-grocery-pack",
    shop: {
      id: "e9e943d9-6f01-40c6-bf1c-bf5ca4920497",
      slug: "scarlett-beauty",
      user: {
        id: "3fcb5f26-1835-4690-945d-811c989fdb2f",
        email: "Brandon43@gmail.com",
        phone: "(719) 908-1322",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/764.jpg",
        password: "lgXLZvzah43QqbV",
        dateOfBirth: "1999-04-19T04:50:21.181Z",
        verified: true,
        name: {
          firstName: "Juana",
          lastName: "Ritchie"
        }
      },
      email: "Camryn.Stark7@hotmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Premium Grocery Pack",
    brand: null,
    price: 253,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
    images: [
      "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
      "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
      "/assets/images/products/Groceries/3.PremiumGroceryPack.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "e2e2a54b-7f05-42e5-ba1f-d18634daec7d",
    slug: "freshandreal-chole-masala",
    shop: {
      id: "44f51c75-74b5-49f0-b5b8-9b62b4534946",
      slug: "anytime-buys",
      user: {
        id: "88c8daa1-340c-475d-a1f1-3038951ae76d",
        email: "Adaline_Steuber@gmail.com",
        phone: "572.876.1950",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1180.jpg",
        password: "TfmXzIKQYEo3gKH",
        dateOfBirth: "1943-05-27T09:11:02.553Z",
        verified: true,
        name: {
          firstName: "Ruby",
          lastName: "Koelpin"
        }
      },
      email: "Freda.Dach@hotmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Fresh&Real CHole Masala",
    brand: null,
    price: 145,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
    images: [
      "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
      "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
      "/assets/images/products/Groceries/4.FreashRealCholeMasala.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "f820d748-4ade-45b2-8366-14f011b45c6e",
    slug: "gum-pack",
    shop: {
      id: "af42cf50-b392-4bbb-89f3-7010ee540868",
      slug: "word-wide-wishes",
      user: {
        id: "2114d7a5-3668-4986-b1a5-f0b09ba578d6",
        email: "Robert_Braun@yahoo.com",
        phone: "1-497-368-6465 x15259",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/58.jpg",
        password: "W5Vcu0CyK95EIUB",
        dateOfBirth: "1986-12-07T04:54:18.308Z",
        verified: true,
        name: {
          firstName: "Deja",
          lastName: "Ledner"
        }
      },
      email: "Selina.Medhurst24@yahoo.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Gum Pack",
    brand: null,
    price: 267,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/5.GumPack.png",
    images: [
      "/assets/images/products/Groceries/5.GumPack.png",
      "/assets/images/products/Groceries/5.GumPack.png",
      "/assets/images/products/Groceries/5.GumPack.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "1732fbb7-9caf-4a1b-9ec5-62ad83b903b3",
    slug: "indian-grocery-products-pack",
    shop: {
      id: "3f4edd17-211f-484b-86a5-59a90ea14960",
      slug: "keyboard-kiosk",
      user: {
        id: "2114d7a5-3668-4986-b1a5-f0b09ba578d6",
        email: "Robert_Braun@yahoo.com",
        phone: "1-497-368-6465 x15259",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/58.jpg",
        password: "W5Vcu0CyK95EIUB",
        dateOfBirth: "1986-12-07T04:54:18.308Z",
        verified: true,
        name: {
          firstName: "Deja",
          lastName: "Ledner"
        }
      },
      email: "Asha31@gmail.com",
      name: "Keyboard Kiosk",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-5.png",
      profilePicture: "/assets/images/faces/propic(4).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Indian Grocery Products Pack",
    brand: null,
    price: 121,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
    images: [
      "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
      "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png",
      "/assets/images/products/Groceries/6.IndianGroceryProductsPack.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "12bdbd70-f516-43ff-8ad4-1a0601fd28c4",
    slug: "saffola-gold-oil",
    shop: {
      id: "44f51c75-74b5-49f0-b5b8-9b62b4534946",
      slug: "anytime-buys",
      user: {
        id: "88c8daa1-340c-475d-a1f1-3038951ae76d",
        email: "Adaline_Steuber@gmail.com",
        phone: "572.876.1950",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1180.jpg",
        password: "TfmXzIKQYEo3gKH",
        dateOfBirth: "1943-05-27T09:11:02.553Z",
        verified: true,
        name: {
          firstName: "Ruby",
          lastName: "Koelpin"
        }
      },
      email: "Freda.Dach@hotmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Saffola Gold Oil",
    brand: null,
    price: 234,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
    images: [
      "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
      "/assets/images/products/Groceries/7.SaffolaGoldOil.png",
      "/assets/images/products/Groceries/7.SaffolaGoldOil.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "63a96052-eede-4eaa-8524-10a87c860260",
    slug: "colgate-advance-protection-toothpaste",
    shop: {
      id: "44f51c75-74b5-49f0-b5b8-9b62b4534946",
      slug: "anytime-buys",
      user: {
        id: "88c8daa1-340c-475d-a1f1-3038951ae76d",
        email: "Adaline_Steuber@gmail.com",
        phone: "572.876.1950",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1180.jpg",
        password: "TfmXzIKQYEo3gKH",
        dateOfBirth: "1943-05-27T09:11:02.553Z",
        verified: true,
        name: {
          firstName: "Ruby",
          lastName: "Koelpin"
        }
      },
      email: "Freda.Dach@hotmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Colgate Advance Protection Toothpaste",
    brand: null,
    price: 284,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
    images: [
      "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
      "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png",
      "/assets/images/products/Groceries/8.ColgateAdvanceProtectionToothpaste.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "4143b23b-0ead-43c5-a119-528aaa9e8e58",
    slug: "catch-sprinklers-chat-masala",
    shop: {
      id: "6a495283-3606-4235-8580-042e727dcf1d",
      slug: "scarlett-beauty",
      user: {
        id: "306068ed-8b15-4c78-a9c7-251ed628c70c",
        email: "Isai.Crooks@gmail.com",
        phone: "342-877-7699 x19078",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/119.jpg",
        password: "ZRdK3T62VBe0AoL",
        dateOfBirth: "1997-05-16T04:11:37.963Z",
        verified: true,
        name: {
          firstName: "Emiliano",
          lastName: "Feeney"
        }
      },
      email: "Euna89@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Catch Sprinklers Chat Masala",
    brand: null,
    price: 164,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
    images: [
      "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
      "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png",
      "/assets/images/products/Groceries/9.CatchSprinklersChatMasala.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },
  {
    id: "76522777-2f48-46a7-a901-db1bc212881b",
    slug: "catch-italian-seasoning-grinder",
    shop: {
      id: "6e20af2d-375d-4807-be00-a847e8915766",
      slug: "constant-shoppers",
      user: {
        id: "0c1517f9-d394-4d5a-ac65-c8bd2b33f8fe",
        email: "Nadia.Howell47@yahoo.com",
        phone: "439.332.8866 x856",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/695.jpg",
        password: "6AN0vrdibdvGUYj",
        dateOfBirth: "1957-05-22T05:47:30.841Z",
        verified: true,
        name: {
          firstName: "Ardith",
          lastName: "Olson"
        }
      },
      email: "Sim_Dickinson@gmail.com",
      name: "Constant Shoppers",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-4.png",
      profilePicture: "/assets/images/faces/propic(3).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Catch Italian Seasoning Grinder",
    brand: null,
    price: 184,
    size: null,
    colors: [],
    discount: 5,
    thumbnail: "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
    images: [
      "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
      "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png",
      "/assets/images/products/Groceries/10.CatchItalianSeasoningGrinder.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "featured-items"
    }
  },

  {
    id: "328baad5-51e9-46c2-88db-317ef68b386d",
    slug: "koreal-kids-extra-gentle-shampoo",
    shop: {
      id: "2145ef2f-35fe-45bb-b934-86201633c178",
      slug: "word-wide-wishes",
      user: {
        id: "25d1ab9a-0f10-4b42-8ee5-93c78834ae94",
        email: "Estefania67@gmail.com",
        phone: "766.220.7987 x47348",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
        password: "TmPnrTUfBkY4ww8",
        dateOfBirth: "1944-02-08T06:27:04.769Z",
        verified: true,
        name: {
          firstName: "Walker",
          lastName: "Cummings"
        }
      },
      email: "Cynthia.Grant@yahoo.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Koreal Kids Extra Gentle Shampoo",
    brand: null,
    price: 257,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
    images: [
      "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
      "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png",
      "/assets/images/products/Health&Beauty/24.LorealKidsExtraGentleShampoo.png"
    ],
    categories: ["health&beauty"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "d84918a8-ea53-4692-a617-4a92488c9f96",
    slug: "jario-badescu-skin-care-shampoo",
    shop: {
      id: "1702f58b-543a-4e82-aaee-8cc2e62fdaac",
      slug: "constant-shoppers",
      user: {
        id: "5e65eac9-2ca7-4dcc-bc63-6fd376ee75a5",
        email: "Guiseppe.Trantow60@gmail.com",
        phone: "283.842.9364 x8852",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1217.jpg",
        password: "eKOr9gcM9wwhTgP",
        dateOfBirth: "1994-02-11T19:26:08.734Z",
        verified: true,
        name: {
          firstName: "Colby",
          lastName: "Feest"
        }
      },
      email: "Bobbie_Beer@yahoo.com",
      name: "Constant Shoppers",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-4.png",
      profilePicture: "/assets/images/faces/propic(3).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Jario Badescu Skin Care Shampoo",
    brand: null,
    price: 191,
    size: null,
    colors: [],
    discount: 10,
    thumbnail: "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
    images: [
      "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
      "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png",
      "/assets/images/products/Health&Beauty/25.MarioBadescuSkinCareShampoo.png"
    ],
    categories: ["health&beauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "90f65275-71d0-41f4-8e4d-a281ec5a9fa1",
    slug: "the-poinsettia-plant",
    shop: {
      id: "1702f58b-543a-4e82-aaee-8cc2e62fdaac",
      slug: "constant-shoppers",
      user: {
        id: "5e65eac9-2ca7-4dcc-bc63-6fd376ee75a5",
        email: "Guiseppe.Trantow60@gmail.com",
        phone: "283.842.9364 x8852",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1217.jpg",
        password: "eKOr9gcM9wwhTgP",
        dateOfBirth: "1994-02-11T19:26:08.734Z",
        verified: true,
        name: {
          firstName: "Colby",
          lastName: "Feest"
        }
      },
      email: "Bobbie_Beer@yahoo.com",
      name: "Constant Shoppers",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-4.png",
      profilePicture: "/assets/images/faces/propic(3).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "The Poinsettia Plant",
    brand: null,
    price: 220,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
    images: [
      "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
      "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png",
      "/assets/images/products/Home&Garden/1.ThePoinsettiaPlant.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "cd0fabe7-87e6-4614-b998-5717891e0af0",
    slug: "devil's-ivy-indoor-plant",
    shop: {
      id: "f94edff2-d7b0-44ab-aa77-d4151ee56e9e",
      slug: "scarlett-beauty",
      user: {
        id: "e92d7dd8-046b-48b8-a7c8-de208f799ecb",
        email: "Marianne_Stanton@gmail.com",
        phone: "1-458-724-3019",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg",
        password: "neXm3X0b1CjJOit",
        dateOfBirth: "1961-03-24T19:35:13.341Z",
        verified: true,
        name: {
          firstName: "Elinore",
          lastName: "Heller"
        }
      },
      email: "Loyce_MacGyver@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Devil's Ivy Indoor Plant",
    brand: null,
    price: 236,
    size: null,
    colors: [],
    discount: 5,
    thumbnail: "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
    images: [
      "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
      "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png",
      "/assets/images/products/Home&Garden/2.Devil'sIvyIndoorPlant.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "ed25d086-8626-4fb4-93e4-55b6abd79ef6",
    slug: "aloe-vera-plant",
    shop: {
      id: "2145ef2f-35fe-45bb-b934-86201633c178",
      slug: "word-wide-wishes",
      user: {
        id: "25d1ab9a-0f10-4b42-8ee5-93c78834ae94",
        email: "Estefania67@gmail.com",
        phone: "766.220.7987 x47348",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
        password: "TmPnrTUfBkY4ww8",
        dateOfBirth: "1944-02-08T06:27:04.769Z",
        verified: true,
        name: {
          firstName: "Walker",
          lastName: "Cummings"
        }
      },
      email: "Cynthia.Grant@yahoo.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Aloe Vera Plant",
    brand: null,
    price: 237,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
    images: [
      "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
      "/assets/images/products/Home&Garden/3.AloeVeraPlant.png",
      "/assets/images/products/Home&Garden/3.AloeVeraPlant.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "086978f3-28ac-4fdd-8566-3679b0643c85",
    slug: "satin-pothos-plant",
    shop: {
      id: "edd458c0-36ad-4e9a-b1b2-374e28fe7b66",
      slug: "cybershop",
      user: {
        id: "49d4e6b8-cdce-4a54-9a32-2ec8fc05e2f5",
        email: "Lonnie.Weber@yahoo.com",
        phone: "268-930-2252",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/811.jpg",
        password: "aoldyc49CyoEGog",
        dateOfBirth: "1973-12-30T15:19:22.909Z",
        verified: true,
        name: {
          firstName: "Don",
          lastName: "Emmerich"
        }
      },
      email: "Gordon56@hotmail.com",
      name: "Cybershop",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-8.png",
      profilePicture: "/assets/images/faces/propic(7).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Satin Pothos Plant",
    brand: null,
    price: 131,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
    images: [
      "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
      "/assets/images/products/Home&Garden/4.SatinPothosPlant.png",
      "/assets/images/products/Home&Garden/4.SatinPothosPlant.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "58fbabb2-e3a2-4851-a6b9-0c905097dbfa",
    slug: "japanese-maple-plant",
    shop: {
      id: "2145ef2f-35fe-45bb-b934-86201633c178",
      slug: "word-wide-wishes",
      user: {
        id: "25d1ab9a-0f10-4b42-8ee5-93c78834ae94",
        email: "Estefania67@gmail.com",
        phone: "766.220.7987 x47348",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
        password: "TmPnrTUfBkY4ww8",
        dateOfBirth: "1944-02-08T06:27:04.769Z",
        verified: true,
        name: {
          firstName: "Walker",
          lastName: "Cummings"
        }
      },
      email: "Cynthia.Grant@yahoo.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Japanese Maple Plant",
    brand: null,
    price: 225,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
    images: [
      "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
      "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png",
      "/assets/images/products/Home&Garden/5.JapaneseMaplePlant.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "ff0f8a0a-32c7-4021-af7b-a5e97bbb370e",
    slug: "green-leaf-plant-in-glass-jar",
    shop: {
      id: "f94edff2-d7b0-44ab-aa77-d4151ee56e9e",
      slug: "scarlett-beauty",
      user: {
        id: "e92d7dd8-046b-48b8-a7c8-de208f799ecb",
        email: "Marianne_Stanton@gmail.com",
        phone: "1-458-724-3019",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg",
        password: "neXm3X0b1CjJOit",
        dateOfBirth: "1961-03-24T19:35:13.341Z",
        verified: true,
        name: {
          firstName: "Elinore",
          lastName: "Heller"
        }
      },
      email: "Loyce_MacGyver@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Green leaf Plant in Glass Jar",
    brand: null,
    price: 146,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
    images: [
      "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
      "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png",
      "/assets/images/products/Home&Garden/6.GreenLeafPlantinGlassJar.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "cb8911d3-6c58-4817-8927-6d7cf009e8e1",
    slug: "spider-plant-in-round-glass",
    shop: {
      id: "f94edff2-d7b0-44ab-aa77-d4151ee56e9e",
      slug: "scarlett-beauty",
      user: {
        id: "e92d7dd8-046b-48b8-a7c8-de208f799ecb",
        email: "Marianne_Stanton@gmail.com",
        phone: "1-458-724-3019",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg",
        password: "neXm3X0b1CjJOit",
        dateOfBirth: "1961-03-24T19:35:13.341Z",
        verified: true,
        name: {
          firstName: "Elinore",
          lastName: "Heller"
        }
      },
      email: "Loyce_MacGyver@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Spider Plant in Round Glass",
    brand: null,
    price: 193,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
    images: [
      "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
      "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png",
      "/assets/images/products/Home&Garden/7.SpiderPlantinRoundGlass.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "b68cb14f-8f5f-45c8-828a-2c212312356f",
    slug: "chamaedorea-elegance-plants-with-ceramic-pot",
    shop: {
      id: "96ce8490-64bd-4819-a453-aea0033ebd38",
      slug: "scroll-through",
      user: {
        id: "45f09b8b-bdc6-4eea-9f10-12e3cc23a632",
        email: "Nathaniel_Emmerich@hotmail.com",
        phone: "364.761.3572 x43375",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/454.jpg",
        password: "ZEcvsPY_Qbxz0zF",
        dateOfBirth: "1985-09-13T12:39:51.048Z",
        verified: true,
        name: {
          firstName: "Dale",
          lastName: "Casper"
        }
      },
      email: "Emile.Reilly3@gmail.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Chamaedorea Elegance Plants With Ceramic Pot",
    brand: null,
    price: 182,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
    images: [
      "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
      "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png",
      "/assets/images/products/Home&Garden/8.ChamaedoreaElegansPlantswithCeramicPot.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "85aaeadd-86d2-40c3-8381-716b95ac384a",
    slug: "houseplants-in-jpapanese-pot",
    shop: {
      id: "2145ef2f-35fe-45bb-b934-86201633c178",
      slug: "word-wide-wishes",
      user: {
        id: "25d1ab9a-0f10-4b42-8ee5-93c78834ae94",
        email: "Estefania67@gmail.com",
        phone: "766.220.7987 x47348",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
        password: "TmPnrTUfBkY4ww8",
        dateOfBirth: "1944-02-08T06:27:04.769Z",
        verified: true,
        name: {
          firstName: "Walker",
          lastName: "Cummings"
        }
      },
      email: "Cynthia.Grant@yahoo.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Houseplants in Jpapanese Pot",
    brand: null,
    price: 178,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
    images: [
      "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
      "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png",
      "/assets/images/products/Home&Garden/9.HouseplantinJapanesePot.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },
  {
    id: "bc6396ab-8e7c-4a5c-b83e-dad265a300eb",
    slug: "fiddle-leaf-plant-in-bamboo-basket",
    shop: {
      id: "2145ef2f-35fe-45bb-b934-86201633c178",
      slug: "word-wide-wishes",
      user: {
        id: "25d1ab9a-0f10-4b42-8ee5-93c78834ae94",
        email: "Estefania67@gmail.com",
        phone: "766.220.7987 x47348",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
        password: "TmPnrTUfBkY4ww8",
        dateOfBirth: "1944-02-08T06:27:04.769Z",
        verified: true,
        name: {
          firstName: "Walker",
          lastName: "Cummings"
        }
      },
      email: "Cynthia.Grant@yahoo.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Fiddle-Leaf Plant in Bamboo Basket",
    brand: null,
    price: 275,
    size: null,
    colors: [],
    discount: 5,
    thumbnail: "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
    images: [
      "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
      "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png",
      "/assets/images/products/Home&Garden/10.FiddleleafPlantinBambooBasket.png"
    ],
    categories: ["home&garden"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "best-sell-products"
    }
  },

  {
    id: "a746421c-b06f-417d-9b43-04cff001efaa",
    slug: "grocery-package-offer",
    shop: {
      id: "8249d1d7-ab3e-436b-947d-5c0ad13387fd",
      slug: "scarlett-beauty",
      user: {
        id: "18f92252-0209-43a4-a179-62515b6fea0b",
        email: "Alexandrine.Pouros4@gmail.com",
        phone: "221.489.5041 x6285",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/514.jpg",
        password: "LuDoALeH3Lsry8s",
        dateOfBirth: "1980-01-15T03:21:10.032Z",
        verified: true,
        name: {
          firstName: "Kelton",
          lastName: "Parker"
        }
      },
      email: "Linwood.Legros@gmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Grocery Package Offer",
    brand: null,
    price: 136,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
    images: [
      "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
      "/assets/images/products/Groceries/13.GroceryPackageOffer.png",
      "/assets/images/products/Groceries/13.GroceryPackageOffer.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "26c89072-6bbf-4f67-9d44-8853c27e4ecd",
    slug: "aci-products",
    shop: {
      id: "3fe48e3c-0d74-444b-a093-5ce0c9202178",
      slug: "anytime-buys",
      user: {
        id: "7b35e182-237c-47ed-9971-139feb0db006",
        email: "Cleve.Greenfelder@gmail.com",
        phone: "1-520-929-6390 x43363",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/438.jpg",
        password: "Ihowzx_bmBn6OIy",
        dateOfBirth: "1970-06-22T09:31:19.197Z",
        verified: true,
        name: {
          firstName: "Keeley",
          lastName: "Murray"
        }
      },
      email: "Mackenzie68@gmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "ACI Products",
    brand: null,
    price: 299,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Groceries/14.ACIProducts.png",
    images: [
      "/assets/images/products/Groceries/14.ACIProducts.png",
      "/assets/images/products/Groceries/14.ACIProducts.png",
      "/assets/images/products/Groceries/14.ACIProducts.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "9261974f-7f38-48f0-8109-c950d6560010",
    slug: "lightskin-soap",
    shop: {
      id: "8e5b5eac-e0ce-4695-a522-f9ae96431ac2",
      slug: "scroll-through",
      user: {
        id: "18f92252-0209-43a4-a179-62515b6fea0b",
        email: "Alexandrine.Pouros4@gmail.com",
        phone: "221.489.5041 x6285",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/514.jpg",
        password: "LuDoALeH3Lsry8s",
        dateOfBirth: "1980-01-15T03:21:10.032Z",
        verified: true,
        name: {
          firstName: "Kelton",
          lastName: "Parker"
        }
      },
      email: "Leopold31@yahoo.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "LIghtskin Soap",
    brand: null,
    price: 244,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/15.LightskinSoap.png",
    images: [
      "/assets/images/products/Groceries/15.LightskinSoap.png",
      "/assets/images/products/Groceries/15.LightskinSoap.png",
      "/assets/images/products/Groceries/15.LightskinSoap.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "047350c1-d9fc-441f-866c-d34575173ae0",
    slug: "artidoro-rodriguez-coffee",
    shop: {
      id: "d4bee926-89fa-4301-abe0-91515befec43",
      slug: "word-wide-wishes",
      user: {
        id: "fbf08130-3549-4e4c-8cd9-1e7f0815b5af",
        email: "Iva_Rosenbaum@yahoo.com",
        phone: "1-485-793-1996 x643",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/27.jpg",
        password: "4U9jIUvwZDrsNJs",
        dateOfBirth: "1981-05-19T16:50:46.390Z",
        verified: true,
        name: {
          firstName: "Merl",
          lastName: "Schuppe"
        }
      },
      email: "Carlo_Lang@hotmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Artidoro Rodriguez Coffee",
    brand: null,
    price: 236,
    size: null,
    colors: [],
    discount: 5,
    thumbnail: "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
    images: [
      "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
      "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png",
      "/assets/images/products/Groceries/16.ArtidoroRodriguezCoffee.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "b710e399-bbdb-464d-a2dd-bd3f985dffc2",
    slug: "dove-sensitive-skin-soap",
    shop: {
      id: "552165a8-ea43-405e-8f91-68095736958c",
      slug: "scarlett-beauty",
      user: {
        id: "c0b7beb7-a03d-47d3-a610-aaa154f3eb3d",
        email: "Camron_Osinski@hotmail.com",
        phone: "1-946-876-3759",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/206.jpg",
        password: "qvuLxETzHO7EW_k",
        dateOfBirth: "1980-01-03T12:11:44.001Z",
        verified: true,
        name: {
          firstName: "Lindsey",
          lastName: "Mills"
        }
      },
      email: "Ali.Hansen@hotmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Dove Sensitive Skin Soap",
    brand: null,
    price: 182,
    size: null,
    colors: [],
    discount: 10,
    thumbnail: "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
    images: [
      "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
      "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png",
      "/assets/images/products/Groceries/17.DoveSensitiveSkinSoap.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "aeff492a-2fc4-4b7d-bc6c-0805ad502841",
    slug: "aniket-garam-masala",
    shop: {
      id: "8e5b5eac-e0ce-4695-a522-f9ae96431ac2",
      slug: "scroll-through",
      user: {
        id: "18f92252-0209-43a4-a179-62515b6fea0b",
        email: "Alexandrine.Pouros4@gmail.com",
        phone: "221.489.5041 x6285",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/514.jpg",
        password: "LuDoALeH3Lsry8s",
        dateOfBirth: "1980-01-15T03:21:10.032Z",
        verified: true,
        name: {
          firstName: "Kelton",
          lastName: "Parker"
        }
      },
      email: "Leopold31@yahoo.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Aniket Garam Masala",
    brand: null,
    price: 138,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Groceries/18.AniketGaramMasala.png",
    images: [
      "/assets/images/products/Groceries/18.AniketGaramMasala.png",
      "/assets/images/products/Groceries/18.AniketGaramMasala.png",
      "/assets/images/products/Groceries/18.AniketGaramMasala.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "f7202e2e-eedb-4bbd-91a9-e43d76f59309",
    slug: "portsmouth-soap",
    shop: {
      id: "8e5b5eac-e0ce-4695-a522-f9ae96431ac2",
      slug: "scroll-through",
      user: {
        id: "18f92252-0209-43a4-a179-62515b6fea0b",
        email: "Alexandrine.Pouros4@gmail.com",
        phone: "221.489.5041 x6285",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/514.jpg",
        password: "LuDoALeH3Lsry8s",
        dateOfBirth: "1980-01-15T03:21:10.032Z",
        verified: true,
        name: {
          firstName: "Kelton",
          lastName: "Parker"
        }
      },
      email: "Leopold31@yahoo.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Portsmouth Soap",
    brand: null,
    price: 163,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
    images: [
      "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
      "/assets/images/products/Groceries/19.PortsmouthSoaps.png",
      "/assets/images/products/Groceries/19.PortsmouthSoaps.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "da667974-12db-4e36-b8f4-0f06732afd8c",
    slug: "premium-kitchen-pack",
    shop: {
      id: "8249d1d7-ab3e-436b-947d-5c0ad13387fd",
      slug: "scarlett-beauty",
      user: {
        id: "18f92252-0209-43a4-a179-62515b6fea0b",
        email: "Alexandrine.Pouros4@gmail.com",
        phone: "221.489.5041 x6285",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/514.jpg",
        password: "LuDoALeH3Lsry8s",
        dateOfBirth: "1980-01-15T03:21:10.032Z",
        verified: true,
        name: {
          firstName: "Kelton",
          lastName: "Parker"
        }
      },
      email: "Linwood.Legros@gmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Premium Kitchen Pack",
    brand: null,
    price: 161,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
    images: [
      "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
      "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
      "/assets/images/products/Groceries/20.PremiumKitchenPack.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },
  {
    id: "89a67c19-d608-476b-b96a-7db53d4162e4",
    slug: "mega-ssardines",
    shop: {
      id: "552165a8-ea43-405e-8f91-68095736958c",
      slug: "scarlett-beauty",
      user: {
        id: "c0b7beb7-a03d-47d3-a610-aaa154f3eb3d",
        email: "Camron_Osinski@hotmail.com",
        phone: "1-946-876-3759",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/206.jpg",
        password: "qvuLxETzHO7EW_k",
        dateOfBirth: "1980-01-03T12:11:44.001Z",
        verified: true,
        name: {
          firstName: "Lindsey",
          lastName: "Mills"
        }
      },
      email: "Ali.Hansen@hotmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Mega Ssardines",
    brand: null,
    price: 242,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Groceries/21.MegaSardines.png",
    images: [
      "/assets/images/products/Groceries/21.MegaSardines.png",
      "/assets/images/products/Groceries/21.MegaSardines.png",
      "/assets/images/products/Groceries/21.MegaSardines.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "home-essentials-products"
    }
  },

  {
    id: "ad56e910-1361-4d49-aeae-81ca22929ff1",
    slug: "premium-kitchen-pack",
    shop: {
      id: "b243b27c-eb7b-4d38-a50a-2608578f4e30",
      slug: "scarlett-beauty",
      user: {
        id: "b4960c17-a3b7-4e26-b2d6-aa75ef101d99",
        email: "Tom.Von@gmail.com",
        phone: "1-613-513-3627 x5972",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
        password: "eDzpcTn4KHdE7In",
        dateOfBirth: "1985-01-06T19:16:03.869Z",
        verified: true,
        name: {
          firstName: "Dawn",
          lastName: "Pfannerstill"
        }
      },
      email: "Boyd.Hackett35@gmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Premium Kitchen Pack",
    brand: null,
    price: 161,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
    images: [
      "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
      "/assets/images/products/Groceries/20.PremiumKitchenPack.png",
      "/assets/images/products/Groceries/20.PremiumKitchenPack.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "aaea854a-f074-4a66-a929-ab7ea77cd849",
    slug: "mega-ssardines",
    shop: {
      id: "240e4c7f-0509-4654-8372-227391852e36",
      slug: "scarlett-beauty",
      user: {
        id: "30170c0d-ccb8-4979-9cb3-9e09757ed838",
        email: "Trevion_Grady1@hotmail.com",
        phone: "590-841-7711",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/60.jpg",
        password: "cR9DTt_OTzTYFEs",
        dateOfBirth: "1955-01-15T05:20:09.724Z",
        verified: true,
        name: {
          firstName: "Stephen",
          lastName: "Roberts"
        }
      },
      email: "Rodrick26@hotmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Mega Ssardines",
    brand: null,
    price: 242,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Groceries/21.MegaSardines.png",
    images: [
      "/assets/images/products/Groceries/21.MegaSardines.png",
      "/assets/images/products/Groceries/21.MegaSardines.png",
      "/assets/images/products/Groceries/21.MegaSardines.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "e64aa45a-6485-4c50-98ee-52286ecdc942",
    slug: "organic-company-products",
    shop: {
      id: "ccf2b3fc-2d3d-425e-b347-88bfc5d2fad0",
      slug: "scroll-through",
      user: {
        id: "b4960c17-a3b7-4e26-b2d6-aa75ef101d99",
        email: "Tom.Von@gmail.com",
        phone: "1-613-513-3627 x5972",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
        password: "eDzpcTn4KHdE7In",
        dateOfBirth: "1985-01-06T19:16:03.869Z",
        verified: true,
        name: {
          firstName: "Dawn",
          lastName: "Pfannerstill"
        }
      },
      email: "Joy6@yahoo.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Organic Company Products",
    brand: null,
    price: 158,
    size: null,
    colors: [],
    discount: 10,
    thumbnail: "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
    images: [
      "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
      "/assets/images/products/Groceries/22.OrganicCompanyProducts.png",
      "/assets/images/products/Groceries/22.OrganicCompanyProducts.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "3567b9ee-2f31-46a0-9c16-91dc66cd1f32",
    slug: "earnest-sardines",
    shop: {
      id: "b243b27c-eb7b-4d38-a50a-2608578f4e30",
      slug: "scarlett-beauty",
      user: {
        id: "b4960c17-a3b7-4e26-b2d6-aa75ef101d99",
        email: "Tom.Von@gmail.com",
        phone: "1-613-513-3627 x5972",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
        password: "eDzpcTn4KHdE7In",
        dateOfBirth: "1985-01-06T19:16:03.869Z",
        verified: true,
        name: {
          firstName: "Dawn",
          lastName: "Pfannerstill"
        }
      },
      email: "Boyd.Hackett35@gmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Earnest Sardines",
    brand: null,
    price: 192,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Groceries/23.EarnestSardines.png",
    images: [
      "/assets/images/products/Groceries/23.EarnestSardines.png",
      "/assets/images/products/Groceries/23.EarnestSardines.png",
      "/assets/images/products/Groceries/23.EarnestSardines.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "8e47a07f-75ec-486b-ba1e-08ed61fdb352",
    slug: "parachute-coconut-oil",
    shop: {
      id: "b243b27c-eb7b-4d38-a50a-2608578f4e30",
      slug: "scarlett-beauty",
      user: {
        id: "b4960c17-a3b7-4e26-b2d6-aa75ef101d99",
        email: "Tom.Von@gmail.com",
        phone: "1-613-513-3627 x5972",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
        password: "eDzpcTn4KHdE7In",
        dateOfBirth: "1985-01-06T19:16:03.869Z",
        verified: true,
        name: {
          firstName: "Dawn",
          lastName: "Pfannerstill"
        }
      },
      email: "Boyd.Hackett35@gmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Parachute Coconut Oil",
    brand: null,
    price: 136,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
    images: [
      "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
      "/assets/images/products/Groceries/24.ParachuteCoconutOil.png",
      "/assets/images/products/Groceries/24.ParachuteCoconutOil.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "646af0b9-0cf3-45c7-8b28-b6d5b0a47c04",
    slug: "cafe-torrefaction-fraiche",
    shop: {
      id: "2bb9d89a-baf1-4380-9162-05ad1ab0b6bf",
      slug: "cybershop",
      user: {
        id: "715f544c-ea85-4230-86cc-91990436c014",
        email: "Eva43@hotmail.com",
        phone: "241.340.1717",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/81.jpg",
        password: "WsjMeX8LTVWuwWb",
        dateOfBirth: "1986-03-30T04:08:23.136Z",
        verified: true,
        name: {
          firstName: "Rocky",
          lastName: "Corwin"
        }
      },
      email: "Darlene.Blanda@gmail.com",
      name: "Cybershop",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-8.png",
      profilePicture: "/assets/images/faces/propic(7).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Cafe Torrefaction Fraiche",
    brand: null,
    price: 186,
    size: null,
    colors: [],
    discount: 10,
    thumbnail: "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
    images: [
      "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
      "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png",
      "/assets/images/products/Groceries/25.CafeTorrefactionFraiche.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "f9d2031a-dc82-4cea-9318-271907587e70",
    slug: "madina-soaps",
    shop: {
      id: "ccf2b3fc-2d3d-425e-b347-88bfc5d2fad0",
      slug: "scroll-through",
      user: {
        id: "b4960c17-a3b7-4e26-b2d6-aa75ef101d99",
        email: "Tom.Von@gmail.com",
        phone: "1-613-513-3627 x5972",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
        password: "eDzpcTn4KHdE7In",
        dateOfBirth: "1985-01-06T19:16:03.869Z",
        verified: true,
        name: {
          firstName: "Dawn",
          lastName: "Pfannerstill"
        }
      },
      email: "Joy6@yahoo.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Madina Soaps",
    brand: null,
    price: 147,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/products/Groceries/26.MadinaSoaps.png",
    images: [
      "/assets/images/products/Groceries/26.MadinaSoaps.png",
      "/assets/images/products/Groceries/26.MadinaSoaps.png",
      "/assets/images/products/Groceries/26.MadinaSoaps.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "202668f7-49c1-4a7a-9f9a-8f8375c272aa",
    slug: "sardines-pack",
    shop: {
      id: "e3cca5be-21ff-461c-9da4-6ad4e7ae9b34",
      slug: "constant-shoppers",
      user: {
        id: "b7e6ea09-4222-47e1-a262-50f84ff5feb2",
        email: "Armani75@gmail.com",
        phone: "(879) 259-9353 x46887",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/139.jpg",
        password: "gU49Pm1bnm7rq2w",
        dateOfBirth: "2000-03-04T00:03:44.641Z",
        verified: true,
        name: {
          firstName: "Darien",
          lastName: "Spencer"
        }
      },
      email: "Mitchel.Koss@hotmail.com",
      name: "Constant Shoppers",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-4.png",
      profilePicture: "/assets/images/faces/propic(3).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Sardines Pack",
    brand: null,
    price: 100,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/products/Groceries/27.SardinesPack.png",
    images: [
      "/assets/images/products/Groceries/27.SardinesPack.png",
      "/assets/images/products/Groceries/27.SardinesPack.png",
      "/assets/images/products/Groceries/27.SardinesPack.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 2,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  },
  {
    id: "0cece955-fd9d-45a5-ab10-1e4d8c7e049d",
    slug: "turmeric-powder",
    shop: {
      id: "fe4c3afb-781c-4a42-83ca-fd74887fec0f",
      slug: "word-wide-wishes",
      user: {
        id: "6077bd0e-0641-4962-a971-5044c8b6ac4b",
        email: "Pat98@yahoo.com",
        phone: "211.326.6001",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/440.jpg",
        password: "Z2B2_wjNyaTfI83",
        dateOfBirth: "1981-07-05T03:37:44.102Z",
        verified: true,
        name: {
          firstName: "Benjamin",
          lastName: "Crona"
        }
      },
      email: "Kenna.Cartwright@gmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Turmeric Powder",
    brand: null,
    price: 238,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/products/Groceries/28.TurmericPowder.png",
    images: [
      "/assets/images/products/Groceries/28.TurmericPowder.png",
      "/assets/images/products/Groceries/28.TurmericPowder.png",
      "/assets/images/products/Groceries/28.TurmericPowder.png"
    ],
    categories: ["groceries"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "grocery-2",
      type: "more-products"
    }
  }
];
