# 日本国会年齢分析ビジュアライザー (Japan Diet Age Visualizer)

## 概要

本プロジェクトは、日本の国会（衆議院および参議院）議員の年齢分布、世代構成、および人口に対する代表性比率を可視化するためのオープンソースWebアプリケーションです。

---

## 1. データの取得メカニズム (Mechanism)

データの収集には、インターネット上の巨大な共同編集型知識ベースである「Wikidata（ウィキデータ）」を利用しています。国会議員のデータをリアルタイムでWebから抽出するプログラム（スクレイパー）の仕組みは以下の通りです。

### データの検索方法 (SPARQLクエリ)
Wikidataに登録されている世界中の情報から、日本の国会議員のみを特定するために「SPARQL（スパークル）」という専用のデータベース言語を使用します。プログラムは以下の条件で問い合わせを行います。
* 日本の衆議院議員（識別子: Q1148818）または参議院議員（識別子: Q1148821）の地位にある、または過去にあった人物。
* 現在もその役職が有効である人物（任期の終了日が記録されていない人物）。

### 抽出する属性情報 (Properties)
特定された議員に対して、以下の詳細情報を自動的に取得します。
* **生年月日 (P569):** 議員の正確な年齢を算出するために使用します。
* **所属政党の履歴 (P102):** 議員が所属してきた政党のタイムライン（加入日、脱退日など）を取得します。
* **各種リンク:** 議員個人のWikipedia記事リンク、および各所属政党のWikipedia記事リンクを取得します。

### 言語の多言語化処理
Wikidataのラベル翻訳APIを利用して、議員名や政党名を「日本語」「英語」「スペイン語」の3言語で同時に取得し、利用者のブラウザ設定や選択言語に合わせて動的に切り替えられるようにしています。

---

## 2. データベースの構造 (Database: data.js)

本アプリケーションでは、外部のデータベースサーバーに毎回アクセスするのではなく、事前に抽出されたデータが `data.js` という1つのJavaScriptファイルに保存されています。

### なぜJSONではなくJSファイルなのか
通常、データはJSON形式で保存されますが、Webブラウザのセキュリティ制限（CORS制限）により、ローカル環境でHTMLファイルを直接ダブルクリックして起動した際、外部JSONファイルをセキュリティの理由で読み込めない制限が発生します。
データをJavaScriptのグローバル変数として定義し、`<script src="data.js"></script>` として読み込むことで、インターネット接続やローカルサーバーがない環境でも、HTMLファイルをダブルクリックするだけで瞬時に安全に動作します。

### データレコードの構造例
`data.js` 内には、以下のような構造のデータが配列として並んでいます。

```javascript
{
  "qid": "Q440000",
  "name_ja": "河村たかし",
  "name_en": "Takashi Kawamura",
  "dob": "1948-11-03",
  "age": 77,
  "chamber": "House of Representatives",
  "wikipedia_url": "https://ja.wikipedia.org/wiki/河村たかし",
  "parties": [
    {
      "ja": "減税日本",
      "en": "Genzei Nippon",
      "es": "Genzei Nippon",
      "wiki_url": "https://ja.wikipedia.org/wiki/減税日本"
    },
    {
      "ja": "減税日本・ゆうこく連合",
      "en": "Tax Cuts Japan and Yukoku Alliance",
      "es": "Genzei Nippon-Alianza Yūkoku",
      "wiki_url": "https://ja.wikipedia.org/wiki/減税日本・ゆうこく連合"
    }
  ]
}
```

* **qid:** Wikidata内での固有IDです。
* **chamber:** 「House of Representatives（衆議院）」または「House of Councillors（参議院）」のいずれかを示します。
* **parties:** 所属政党の配列です。時系列順に並んでおり、配列の最後の要素が最新の所属政党（現職政党）となります。

---

## 3. フロントエンドの仕組み (Frontend: index.html, app.js, style.css)

フロントエンドは、フレームワーク（ReactやVueなど）を一切使用せず、ブラウザ標準のHTML5、CSS3、およびバニラJavaScript（生のJavaScript）のみで構築された超軽量なシングルページアプリケーション（SPA）です。

### 議席レイアウトの幾何学計算 (Hemicircle)
画面中央に表示される半円状の議席レイアウト（ヘミサイクル）は、SVG（スケーラブル・ベクター・グラフィックス）技術を用いて描画されています。
* **座標計算:** `app.js` 内で、極座標系（半径 $r$ と角度 $\theta$）から直交座標系（画面上の $X$ 座標と $Y$ 座標）への変換公式を用いて各シートの配置を計算します。
  $$X = \text{centerX} + r \cdot \cos(\theta)$$
  $$Y = \text{centerY} - r \cdot \sin(\theta)$$
* **描画方法:** 各議員を表す小さな円（`<circle>` タグ）を計算された座標に配置します。円の塗りつぶし色は、選択されているカラーモード（年齢層別または世代別）に応じて動的に変化します。
* **インタラクション:** マウスを円の上に重ねる（ホバーする）と、その円に対応する議員データが瞬時に検索され、画面右側の詳細サイドパネルにWikipediaのリンクや政党ロゴとともに表示されます。

### 代表性比率の可視化モード (Representativeness)
「代表性」タブでは、実際の日本国内の有権者人口（約1億200万人）の年齢データと、国会議員の年齢構成を比較する3つの視覚化機能を提供します。

#### A. 代表比率 (Representation Ratio)
各世代（ミレニアル世代、団塊の世代など）について、「議員1人あたり、何人の国民を代表しているか」の絶対数を計算してカード形式で表示します。
* 国民人口の割合と議員数の割合のズレを計算し、平均値と比較して「過剰代表（国民の数に対して議員が多すぎる状態）」や「過小代表（国民の数に対して議員が少なすぎる状態）」であるかを算出します。データは過剰代表の順に自動でソートされます。

#### B. 流路 (Flow Chart / Sankey)
3次元ベジェ曲線（Cubic Bezier Curves）の数式を用いて、左側の「国民人口比率」から右側の「国会議員数比率」へとつながる帯（リボン）を描画します。これにより、どの世代の代表権が国会に流れ込み、どの世代の代表権が細くなっているかが直感的に理解できます。

#### C. 格子 (Waffle Chart)
$10 \times 10$ の合計100個のセルで構成されるグリッドを2つ並べ、左側（国民）と右側（国会）で各世代が占める割合をブロック状に塗りつぶします。セル1個が全体の1%を表すため、直感的な面積の比較が可能です。

### デザインシステムとアクセシビリティ (Theme & Accessibility)
* **ダークモード:** 視覚疲労を抑えるために、コントラストを抑えたダークセピアおよび温かみのある炭色（`#181613`）を基調とした配色を採用しています。
* **コントラスト比の最適化 (WCAG AA準拠):** 操作ボタンや文字の色は、背景色とのコントラスト比が4.5:1以上になるように設計されており、明るいボタン背景には暗い文字が、暗いボタン背景には明るい文字が自動的に適用されるため、すべての人が快適に閲覧できます。

---
---

# Japan Diet Age Analysis Visualizer

## Overview

This project is an open source web application designed to visualize the age distribution, generational cohorts, and representativeness ratios of the members of the National Diet of Japan (both the House of Representatives and the House of Councillors).

---

## 1. Data Retrieval Mechanism

Information is gathered using Wikidata, a large collaborative open knowledge base connected to Wikipedia. The pipeline that extracts and compiles this data operates as follows:

### Data Querying (SPARQL Query)
To isolate Japanese parliamentarians from millions of global entities in Wikidata, a query language called SPARQL is utilized. The program queries the system for individuals matching the following criteria:
* Held the position of Member of the House of Representatives of Japan (identifier: Q1148818) or Member of the House of Councillors of Japan (identifier: Q1148821).
* The position remains currently active (no term end date is recorded).

### Property Extraction
Once the target legislators are identified, the program retrieves the following specific attributes:
* **Date of Birth (P569):** Used to dynamically compute the current age of each politician.
* **Party Affiliation History (P102):** Retrieves the timeline of their political memberships (start and end dates).
* **Reference Links:** Extracts individual biography links on Wikipedia and official article links for their political parties.

### Multilingual Processing
Using the Wikidata label translation API, names of politicians and parties are fetched in Japanese, English, and Spanish simultaneously. This allows the user interface to translate all components dynamically based on the viewer's language selection.

---

## 2. Database Structure (data.js)

Instead of making external database requests on every page load, all extracted records are saved locally in a single pre-compiled JavaScript file named `data.js`.

### Why a JS file instead of JSON
Data is typically structured as JSON. However, modern web browser security policies (CORS restrictions) prevent local HTML files from reading external JSON files when double-clicked directly from the file explorer.
By storing the data array inside a global JavaScript variable and importing it via `<script src="data.js"></script>`, the application can run instantly and securely on any computer simply by opening the HTML file, without needing an active internet connection or local web server.

### Example Data Record
Inside `data.js`, the array contains records structured as follows:

```javascript
{
  "qid": "Q440000",
  "name_en": "Takashi Kawamura",
  "name_ja": "河村たかし",
  "dob": "1948-11-03",
  "age": 77,
  "chamber": "House of Representatives",
  "wikipedia_url": "https://ja.wikipedia.org/wiki/河村たかし",
  "parties": [
    {
      "ja": "減税日本",
      "en": "Genzei Nippon",
      "es": "Genzei Nippon",
      "wiki_url": "https://ja.wikipedia.org/wiki/減税日本"
    },
    {
      "ja": "減税日本・ゆうこく連合",
      "en": "Tax Cuts Japan and Yukoku Alliance",
      "es": "Genzei Nippon-Alianza Yūkoku",
      "wiki_url": "https://ja.wikipedia.org/wiki/減税日本・ゆうこく連合"
    }
  ]
}
```

* **qid:** The unique Wikidata identifier.
* **chamber:** Specifies either "House of Representatives" or "House of Councillors".
* **parties:** The array of political affiliations listed chronologically. The last object in the array represents their current active party.

---

## 3. Frontend Architecture (index.html, app.js, style.css)

The frontend is a lightweight Single Page Application (SPA) built entirely using native HTML5, CSS3, and vanilla JavaScript (plain JS) without any third-party framework dependencies.

### Seat Layout Geometry (Hemicircle)
The semi-circular parliamentary seating layout is drawn dynamically using SVG (Scalable Vector Graphics).
* **Coordinate Math:** Inside `app.js`, the position of each seat is calculated by converting polar coordinates (radius $r$ and angle $\theta$) into Cartesian screen coordinates (X and Y) using the following trigonometric equations:
  $$X = \text{centerX} + r \cdot \cos(\theta)$$
  $$Y = \text{centerY} - r \cdot \sin(\theta)$$
* **Rendering:** Individual circles (`<circle>` elements) representing seats are drawn at the computed coordinates. The color of each circle is updated dynamically depending on the selected coloring mode (age groups or generational cohorts).
* **Interactions:** Hovering the mouse cursor over a seat queries the dataset for that specific legislator, immediately displaying their details, political history, party logo, and Wikipedia link in the right side panel.

### Representativeness Visualization Modes
The "Representativeness" tab provides three distinct sub-views that compare the demographic age distribution of the Japanese voting population (approx. 102 million citizens) against the current legislature.

#### A. Representation Ratio
Calculates the absolute ratio of citizens represented by a single politician in each generation.
* By comparing the population percentage to the legislative seat percentage, the app determines if a group is "Overrepresented" (more politicians relative to population size) or "Underrepresented" (fewer politicians relative to population size). The cards are automatically sorted starting with the most overrepresented cohort.

#### B. Flow (Sankey Diagram)
Using cubic Bezier curves, the app draws smooth visual ribbons connecting the population shares on the left to the legislative seat shares on the right. This highlights how representative authority flows from demographic cohorts into the halls of parliament.

#### C. Waffle Chart
Presents two adjacent $10 \times 10$ grids where each square cell represents 1% of the total. One grid shows the population cohort distribution, and the other shows the parliamentary cohort distribution. The comparative grid area makes representation gaps immediately clear.

### Theme and Accessibility
* **Dark Mode:** To minimize eye strain, the interface uses a low-glare dark sepia and charcoal theme (`#181613`) as its primary color scheme.
* **Contrast Compliance (WCAG AA):** Interactive elements such as buttons automatically adapt their text color depending on the background brightness (dark text on light blue buttons, and cream text on dark backgrounds) ensuring a minimum contrast ratio of 4.5:1 for maximum readability.
