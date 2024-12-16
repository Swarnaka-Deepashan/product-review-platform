import imgHero1 from "../assets/images/img-hero1.jpg";
import imgHero2 from "../assets/images/img-hero2.jpg";
import imgHero3 from "../assets/images/img-hero3.jpg";

const heroData = [
  {
    id: 1,
    image: imgHero1,
    title: "Your Trusted Product Reviews, All in One Place",
    description:
      "Dive into comprehensive, unbiased reviews written by real users and industry experts to help you make confident and informed decisions every step of the way",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: imgHero2,
    title: "Uncover the Best, Every Time",
    description:
      "Browse through detailed product insights and comparisons to find items that not only meet but exceed your expectations, saving you time and money",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: imgHero3,
    title: "Your Guide to Quality Products",
    description:
      "Get honest feedback, practical advice, and user-driven ratings to guide you in discovering the best products tailored to your unique needs",
    link: "https://www.twitter.com",
  },
];

// Import images explicitly
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";

const featuresData = [
  {
    id: 1,
    image: feature1,
    title: "Authentic Reviews",
    description:
      "Discover genuine, unbiased reviews from real users to help you find the products that suit your lifestyle and needs perfectly.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: feature2,
    title: "Top Product Picks",
    description:
      "Stay ahead with our expertly curated selection of top-rated products across every category, ensuring you make the best choice.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: feature3,
    title: "Easy Comparisons",
    description:
      "Compare features, prices, and user ratings effortlessly to find the perfect product for your budget and preferences.",
    link: "https://www.twitter.com",
  },
];

var reviewsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "I have been using this service for a while now, and the level of support and product quality is exceptional. Every aspect of the experience has been streamlined and efficient.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "This platform has made my work so much easier. The products are always top-notch, and the attention to detail in every review makes it easy to make informed decisions.",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "As a business owner, I’m always looking for solutions that are reliable and effective. This service has truly exceeded my expectations with its thoroughness and commitment to quality.",
    designation: "CEO",
  },
];

export { heroData, featuresData, reviewsData };
