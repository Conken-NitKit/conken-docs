# クライアントとサーバーの関係性
<p style="margin-top:6px !important;color: #999">© 2020 Kubota Hideya All Rights Reserved. </p>

## クライアントとサーバーの定義
**「クライアント」** と **「サーバー」** ってあまり聞きなれない言葉だと思うのでまずはその定義から行っていきましょう。この２つの言葉の意味を知るにはまずは「Server(サーバー)」という言葉の意味を知るのがもっとも早いです。

:::tip サーバー (広辞苑より引用)
(1) テニス・卓球・バレーボールなどで，サーブをする方の側。また，その人。<br>
(2) 飲食物を給仕する為に用いる具。皿に料理を取り分ける大型のフォーク・スプーンやコーヒーを注ぐポットなど。<br>
(3) ネットワーク上で他コンピュータやソフト，すなわちクライアントにサービスを提供するコンピュータ。
:::

これらより **「サーバー = 何かを提供する(または送りつける)役割をもつ」** ということが理解できたと思います。
そして，ここで指すサーバーは上記の(3)であり **ネットワーク上で他コンピュータやソフト，すなわちクライアントにサービスを提供するコンピュータ** ということになります。

「クライアント」とは受け取る側，すなわち **「サーバーから送られてきたサービス(Webページの情報など)を受け取るコンピュータやソフトウェア」** のことを指します。

前章を例にして説明すると，<br>
**「Webページの情報を送りつけるコンピュータ」** が **"サーバー"** <br>
**「その情報を受け取るコンピュータ，またはWebブラウザ」** が **"クライアント"** <br>
ということになります。

## Webサービスの処理の流れ
サーバーは，それ単体で動作するわけではなく，不特定多数のコンピュータに対して一方的にサービスを提供するわけでもありません。
**クライアントからのリクエスト (〇〇をしてほしいという要求) を受けて，初めて処理を開始して，サービスを提供** します。サーバーがクライアントに対してサービスを提供するとき，サーバーとクライアント間では，以下のような処理が行われます。

**(1) クライアントはサーバーに対して何らかのサービスを要求する。**<br>
**(2) サーバーは要求に応じた処理を行う。**<br>
**(3) サーバーは(2)で行なった処理結果をクライアントに返す。**<br>
**(4) クライアントは処理の結果を受け取る。**<br>

// ここにはスライドが入ります

このようにサーバーとクライアントで構成されているシステムのことを **「クライアント/サーバーシステム」** と言います。クライアント/サーバーシステムでは**サーバーを中心としてデータを一元的に，容易に管理できる** ことから多くのコンピュータシステムで採用されています。

## まとめ
- 「クライアント」は **その情報を受け取るコンピュータ，またはWebブラウザ**
- 「サーバー」とは **Webページの情報を送りつけるコンピュータ**
- サーバーは **クライアントからのリクエスト (〇〇をしてほしいという要求) を受けて，初めて処理を開始して，サービスを提供** する。
- 「クライアント/サーバーシステム」とは**サーバーとクライアントで構成されているシステム** 