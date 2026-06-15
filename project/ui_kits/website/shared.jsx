/* Shared helpers for the St Philomena website UI kit.
   Icon — renders a Lucide glyph (loaded via CDN UMD as window.lucide). */

function Icon({ name, size = 16, color, strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    window.lucide.createIcons({
      attrs: { width: size, height: size, "stroke-width": strokeWidth, stroke: color || "currentColor" },
    });
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, color, ...style }} />;
}

const ASSETS = {
  logo: "../../assets/logo-full.png",
  chapel: "../../assets/chapel-interior.jpg",
  statue: "../../assets/st-philomena-statue.jpg",
  classroom: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/hero-classroom-7wyiCEKTwN6vYWCSsmSaRG.webp",
  garden: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/hero-garden-axKgWznFwSKqriqWxEDbr5.webp",
  books: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/feature-books-JMwxXe4geHc3fqomKHJoYc.webp",
  students: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/school-photo-1_b292adba.jpg",
  statue2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/school-photo-2_50501a39.jpg",
  campus: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413087806/55wBVxrGbCQaoGXKotXahV/campus-aerial_9d641911.jpg",
};

Object.assign(window, { Icon, ASSETS });
