# rime_tangutcjkk

學者 河崎啓剛（KAWASAKI Keigo）在其論文中提出一種頗爲便捷的西夏文倉頡輸入法系統，在此將其引介入 RIME 輸入引擎，以便利西夏文輸入。

本人在這裏的工作是：翻譯原論文爲中文、修訂論文訛誤、導入RIME碼表、補齊所有Unicode西夏文字符與部件（按 p 輸入部件，與 poly 四角相同）

原始論文與翻譯版均已放在 Repo 中。

該方案與原版倉頡有不同，詳見下圖：

![image](https://user-images.githubusercontent.com/32562298/159518779-70efdbf9-414e-47c8-8518-983971bcccca.png)

# Install this scheme on TRIME (同文輸入法, RIME on Android)

**!! Make sure you have the latest files !!**

- Ensure the existence and full-functuation of TRIME in your Android system
- Put `tangutcjkk.schema.yaml` and `tangutcjkk.dict.yaml` into your TRIME folder (`/rime` as default)
- Create a folder `fonts` there
- Put your favourite Tangut font (in .ttf format) into `fonts` and rename it to `Tangut.ttf`
- Launch TRIME, enable the schema, and enjoy


輸入演示：

Windows:

![gif](https://user-images.githubusercontent.com/32562298/159846588-dff4a21f-b3cf-4a57-8e80-0aa91f692ceb.gif)

Android:

![000000](https://user-images.githubusercontent.com/32562298/162569642-1d994ca4-c8c0-4f8a-89d2-603f9904ca89.gif)
