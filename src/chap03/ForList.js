import React from "react";

// ハイフン付きISBN → ハイフンなしISBN13へ
const toIsbn13 = (isbn) => (isbn || "").replace(/-/g, "");

export default function ForList({ src }) {
  return (
    <dl>
      {src.map((b) => {
        const isbn13 = toIsbn13(b.isbn);
        const pageUrl = `https://www.amazon.co.jp/s?k=${isbn13}`;        // 書籍ページ
        const imgUrl  = `https://cover.openbd.jp/${isbn13}.jpg`;        // 表紙画像

        return (
          <React.Fragment key={b.isbn}>
            <dt style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <a href={pageUrl} target="_blank" rel="noreferrer">
                <img
                  src={imgUrl}
                  alt={b.title}
                  width={80}
                  height={110}
                  style={{ objectFit: "cover", border: "1px solid #ddd" }}
                  onError={(e) => {
                    // 画像が無い場合のフォールバック（プレースホルダー）
                    e.currentTarget.src = `https://placehold.co/80x110?text=No+Image`;
                  }}
                />
              </a>
              <div>
                <a href={pageUrl} target="_blank" rel="noreferrer">
                  {b.title}（{b.price}円）
                </a>
                <div style={{ marginTop: 6 }}>{b.summary}</div>
              </div>
            </dt>
            <dd style={{ margin: "0 0 18px 0" }} />
          </React.Fragment>
        );
      })}
    </dl>
  );
}
