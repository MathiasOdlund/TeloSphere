// product images
import product_1 from "~/assets/img/product_1.png";

// banner img
import banner_img_1 from "~/assets/img/product_banner_1.jpg";

const productData = [
  {
    id: 1,
    img: product_1,
    trending: true,
    banner: false,
    related_images: [product_1, product_1, product_1],
    thumb_img: product_1,
    banner_img: banner_img_1,
    parentCategory: "Phones",
    category: "Phones",
    brand: "Iphone",
    title: "Iphone 14 Pro Max",
    price: 689,
    old_price: 739,
    rating: 3,
    quantity: 8,
    sm_desc:
      "Kampanje! Spar 1000,- på den nye iPhone 14-serien med Telenor! Kampanjen gjelder alle nye og eksisterende Telenorkunder med privat mobilabonnement!",
    sizes: ["128", "256", "512"],
    colors: ["Purple", "Black", "White", "Silver"],
    weight: 0.25,
    dimension: "62 × 56 × 12",

    details: {
      details_text:
        "iPhone 14 Pro Max gir en formskiftende, multitaskende, blikkfangende og altomveltende iPhone-opplevelse. Telefonen er designet for å vare og har en skjermstørrelse på 6,7’’, dekket med Ceramic Shield – sterkere enn noensinne. iPhone 14 Pro Max kommer i fire fantastiske farger med et splitter nytt utseende og en helt ny skjermopplevelse.",
      details_list: [
        "Claritas est etiam processus dynamicus.",
        "Qui sequitur mutationem consuetudium lectorum.",
        "Claritas est etiam processus dynamicus.",
        "Qui sequitur mutationem consuetudium lectorum.",
        "Claritas est etiam processus dynamicus.",
        "Qui sequitur mutationem consuetudium lectorum.",
      ],
      details_text_2:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    },
  },
];

export default productData;
