export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "پودر بندکشی و چسب کاشی پرومر (PROMER)",
        "image": "https://promer.ir/promer-500g.jpg",
        "description": "پودر بندکشی نانو و ضد آب پرومر، آماده مصرف برای ترمیم و اجرای بندکشی سرامیک و کاشی.",
        "brand": {
          "@type": "Brand",
          "name": "PROMER"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "IRT",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "HowTo",
        "name": "آموزش بندکشی سرامیک با پرومر",
        "description": "مراحل ساده و سریع اجرای پودر بندکشی پرومر بدون نیاز به نصاب حرفه‌ای.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "آماده‌سازی",
            "text": "سطح و درز بین کاشی‌ها را کاملاً تمیز و خشک کنید."
          },
          {
            "@type": "HowToStep",
            "name": "ترکیب مواد",
            "text": "مواد کیت پرومر را طبق دستورالعمل با آب ترکیب کنید تا یکدست شود."
          },
          {
            "@type": "HowToStep",
            "name": "اجرا",
            "text": "مواد را روی درزها کشیده و بلافاصله سطح روی کاشی را با کاردک مخصوص تمیز کنید."
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}