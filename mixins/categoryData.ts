import CategoryType from "~/types/categoryType";
import cate_img_1 from "~/assets/img/safe.png";

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
          img: cate_img_1,
          parentTitle: "Accessories",
          children: ["Decoration", "Accessories"],
        },
        {
          id: 3,
          img: cate_img_1,
          parentTitle: "Phones",
          children: ["Iphone", "Samsung"],
        },
        {
          id: 4,
          img: cate_img_1,
          parentTitle: "Accessories",
          children: ["cables", "headphones"],
          smDesc:
            "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.",
        },
      ] as CategoryType[],
    };
  },
};
