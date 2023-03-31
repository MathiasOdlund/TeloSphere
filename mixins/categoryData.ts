import CategoryType from "~/types/categoryType";
import cate_img_1 from "~/assets/img/safe.png";
import cate_img_2 from "~/assets/img/shop/banner/banner-sm-1.jpg";
import cate_img_3 from "~/assets/img/shop/banner/banner-sm-1.jpg";
import cate_img_4 from "~/assets/img/shop/banner/banner-sm-1.jpg";
export default {
  data() {
    return {
      categoryData: [
        {
          id: 1,
          img: cate_img_1,
          parentTitle: "Subscriptions",
          children: ["Subscription", "prepaid"],
        },
        {
          id: 2,
          img: cate_img_2,
          parentTitle: "Accessories",
          children: ["Decoration", "Accessories"],
        },
        {
          id: 3,
          img: cate_img_3,
          parentTitle: "Phones",
          children: ["Iphone", "Samsung"],
        },
        {
          id: 4,
          img: cate_img_4,
          parentTitle: "Accessories",
          children: ["cables", "headphones"],
          smDesc:
            "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        },
      ] as CategoryType[],
    };
  },
};
