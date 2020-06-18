# ネットワーク層
<p style="margin-top:6px !important;color: #999">© 2020 Kubota Hideya All Rights Reserved. </p>

## ネットワーク層の役割
ネットワーク層はTCP/IPの5階層のちょうど真ん中に位置します。
この層は別名「インターネット層」とも呼ばれており、複数のネットワークを超えて宛先のコンピュータへ情報を届ける役割を持っています。

この層の具体的な役割は以下の通りです。
### 通信相手の特定
ネットワーク層では「誰が誰に届けるのか？」という、通信に置いて最も重要な情報を扱います。

### 宛先までの経路の決定
ネットワークは文字通り「 **蜘蛛の巣** 」のようにコンピュータが相互に接続されています。その為、あるコンピュータからあるコンピュータまでの **経路が複数パターン存在する** 場合があります。宛先までの経路が複数ある場合に、適切なルートを決定するして届けるのもネットワーク層の役割です。

## IPアドレス
ネットワーク層には「通信相手を特定する」という大事な役割があります。ネットワーク状に存在する **全てのコンピュータに「住所」のようなものを割り振る** 必要があります。
その **コンピュータの住所** という役割を担うものこそが「 **IPアドレス** 」です。

IPアドレスですが仕組みが少々複雑なので最初はスライドで雰囲気を掴みましょう！<br>
( 練習問題もあるので挑戦してみよう )
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS33egHaLtBE1nL8qoOC7XHMhSRMPgQYAWFC2vHzQG9mVRErEbdcMEwi_hYx6r5S0WP0u03_TLcZyFB/embed?start=false&loop=false&delayms=60000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="margin:18px 0;width: 100%; height:420px;"></iframe>

このスライドの内容を要約すると
- IPアドレスは **ネットワーク状のコンピュータの固有の住所**
- IPアドレスには **IPv4** と **IPv6** という規格がある
- IPv4における内容
  - IPアドレスは **32桁のビット列** で構成されいてる
  - IPアドレスは **ネットワーク層** と **ホスト部** と呼ばれる場所がある
    - ネットワーク層は **宛先のネットワーク(LAN相当)** を表す。
    - ホスト層は ネットワーク内の **特定の機器** を表す。
  - 表示形式は **8bitずつをピリオド** で区切り, **10進数** で表される。
  - IPアドレスでは **ホスト部が全て 0 or 1 のアドレスに機器を割り振ることができない** 。
    - ホスト部が全て 0 のアドレスは **ネットワークアドレス** と呼ばれる。
      - 用途：**ネットワーク自体** を表す。
    - ホスト部が全て 1 のアドレスは **ブロードキャストアドレス** と呼ばれる。
      - 用途：ネットワーク内の **全ての機器に一斉にデータを送信する** ときに使用される。
  - ネットワーク部とホスト部の識別は **サブネットマスク** で行われる。
    - ネットワーク部に対応するbitは **全て1** で、ホスト部は **全て0** 。
  - IPアドレスは一般的に CIDR形式 で表現される。
    - CIDR形式は **IPアドレスにネットワーク部のbit列の長さをくっつけたもの**
    - ネットワーク部のbit列の長さ = **サブネットマスクの1の数**

## DHCPサーバー
コンピュータがインターネットに接続するには必ずIPアドレスが必要です。ですが、コンピュータは初期状態だとIPアドレスを持っていません。そのようなコンピュータに対してIPアドレスの割り当てを行うコンピュータをDHCPサーバーと呼びます。
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQlS2GfmfBBx_iWw865Q7nqpAlqcMQgAbsHP59loFrHkoll-XIIp0p0JhgDgl3kVjIn4YpdE5PaEgMa/embed?start=false&loop=false&delayms=60000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="margin:18px 0;width: 100%; height:420px;"></iframe>

このスライドの内容を要約すると
- コンピュータがインターネットに接続するには **IPアドレス** が必要。
- DHCPサーバーはコンピュータに **IPアドレスを割り当てるサーバー** 。
- DHCPの設定する際にDHCPクライアントは **ブロードキャスト** で　ネットワーク内のDHCPサーバーに問い合わせる。
- 割り当てられるIPアドレスは「 **譲渡** 」ではなく「 **レンタル** 」。 

## ルーター
ネットワーク層の大きな役割の一つに「 **ルーティング** 」と呼ばれるものがあります。これはあるコンピュータからあるコンピュータまでの経路を決定することを指します。
そして、そのルーティングを行ってくれる装置を **ルーター** と呼びます。

ルータはネットワーク間を繋いで、 **パケットが宛先に届くまでの道案内をする** 機器です。ルータのネットワーク層では、IPヘッダーに記載された宛先のIPアドレスをみて、**次の転送先を決定** します。当然ですが、ルーターの次の転送の決定先は最終到着地点のこともあれば、次のルーターの場合もあります。

ネットワークの世界では、コンピュータ同士の距離を **通過したルータの数** で表します。この時に使用する単位を **ポップ** と言います。

## まとめ
- ネットワーク層の役割は主に「　**通信相手の特定**　」と「 **宛先までの経路の決定** 」の2つ。
- IPアドレスは **ネットワーク状のコンピュータの固有の住所**
- IPアドレスには **IPv4** と **IPv6** という規格がある
- IPアドレスは **ネットワーク層** と **ホスト部** と呼ばれる場所がある
  - ネットワーク層は **宛先のネットワーク(LAN相当)** を表す。
  - ホスト層は ネットワーク内の **特定の機器** を表す。
  - ネットワーク部とホスト部の識別は **サブネットマスク** で行われる。
- CIDR形式は **IPアドレスにネットワーク部のbit列の長さをくっつけたもの**
- DHCPサーバーはコンピュータに **IPアドレスを割り当てるサーバー** 。
- ルータはネットワーク間を繋いで、 **パケットが宛先に届くまでの道案内をする** 機器。
- コンピュータ間の距離は **通過したルータの数(ポップ)** で表される。