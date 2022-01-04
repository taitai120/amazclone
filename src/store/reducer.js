export const initialState = {
  productList: [
    {
      tv: [
        {
          id: "90829332",
          title:
            "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
          price: 1094.98,
          rating: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
        },
      ],
    },

    {
      smart: [
        {
          id: "23445930",
          title:
            "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
          price: 98.99,
          rating: 5,
          image:
            "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
        },
        {
          id: "3254354345",
          title:
            "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
          price: 598.99,
          rating: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
        },
        {
          id: "4903850",
          title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
          price: 199.99,
          rating: 3,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
        },
      ],
    },
    {
      others: [
        {
          id: "12321341",
          title:
            "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
          price: 11.96,
          rating: 5,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
        },
        {
          id: "49538094",
          title:
            "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
          price: 239.0,
          rating: 4,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
        },
      ],
    },
    {
      pc: [
        {
          id: "90829335",
          title:
            "PowerColor Red Devil AMD Radeon RX 6700 XT Gaming Graphics Card with 12GB GDDR6 Memory, Powered by AMD RDNA 2, Raytracing, PCI Express 4.0, HDMI 2.1, AMD Infinity Cache",
          price: 899.99,
          rating: 5,
          image:
            "https://m.media-amazon.com/images/I/61cO8bBORoL._AC_SL1200_.jpg",
        },
        {
          id: "32132312312",
          title:
            "AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor",
          price: 355.99,
          rating: 4,
          image:
            "https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg",
        },
        {
          id: "4324234234234",
          title:
            "SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN",
          price: 20.99,
          rating: 3,
          image:
            "https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SL1500_.jpg",
        },
        {
          id: "90829332",
          title:
            "Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or Late (10GAA9901)",
          price: 143.0,
          rating: 4,
          image:
            "https://m.media-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg",
        },
      ],
    },
  ],
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return { ...state, basket: [...state.basket, action.item] };
    }

    case "REMOVE_ITEM": {
      let basket = [...state.basket];
      let index = basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        basket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      state.basket = basket;

      return { ...state };
    }

    case "SET_USER": {
      return { ...state, user: action.user };
    }

    case "CLEAR_BASKET": {
      return { ...state, basket: [] };
    }

    default:
      return state;
  }
};

export default reducer;
