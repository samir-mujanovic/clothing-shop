const INITIAL_STATE = {
  sections: [
    {
      title: "Hats",
      imageUrl: "./assets/img/hero-1.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "Jackets",
      imageUrl: "./assets/img/hero-2.jpg",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "Sneakers",
      imageUrl: "./assets/img/hero-3.jpg",
      id: 3,
      linkUrl: "shop/sneakers"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
