import PageMain from "../pages/page-main";
import PageProject from "../pages/page-projects";
import PagePassword from "../pages/page-password";
import PageStendhal from "../pages/page-stendhal";
import PageEmoji from "../pages/page-emoji";

export const publicRoutes = [
  { path: "/", component: PageMain },
  { path: "/projects", component: PageProject },
  { path: "/password-generator", component: PagePassword },
  { path: "/stendhal-editor", component: PageStendhal },
  { path: "/emoji-after-words", component: PageEmoji },
];
