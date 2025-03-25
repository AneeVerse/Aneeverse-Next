import { designBlog } from "@/___BlogData/designBlog/index/index-design";
import { ebayBlog } from "@/___BlogData/ebayBlog/index/index-ebay";
import { ecommerceBlog } from "@/___BlogData/ecommerceBlog/index/index-ecommerce";
import { SeoBlog } from "@/___BlogData/seoBlog/index/index-seo";
import { UiuxBlog } from "@/___BlogData/uiuxBlog/index-uiux";

// data/blogs.js
export const blogs = [
...designBlog,
...SeoBlog,
...ecommerceBlog,
...ebayBlog,
...UiuxBlog
];
