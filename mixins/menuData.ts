import menuType from "~/types/menuType";

export default {
  data() {
    return {
      menuData: [
        {
          link: "/",
          title: "Home",
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: "/", title: "Home" },
            { link: "/About-us", title: "About Us" },
          ],
        },
        {
          link: "/shop",
          title: "Shop",
          hasDropdown: true,
          megamenu: true,
          dropdownItems: [
            {
              link: "/shop",
              title: "Shop Pages",
              dropdownMenu: [{ link: "/shop", title: "Products" }],
            },

            {
              link: "/shop",
              title: "Other Shop Pages",
              dropdownMenu: [
                { link: "/wishlist", title: "Wishlist" },

                { link: "/cart", title: "Shopping Cart" },
                { link: "/checkout", title: "Checkout" },
              ],
            },
          ],
        },

        {
          link: "/contact",
          title: "Contact",
        },
      ] as menuType[],
    };
  },
};
