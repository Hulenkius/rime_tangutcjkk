# A Glyph-based Input Method for Tangut based on Cangjie

Japanese scholar KAWASAKI Keigo (河崎 啓剛) proposed a highly effective Tangut input method in his report *[A suggestion for encoding Tangut glyphs](https://drive.google.com/file/d/1VYDGptwJ2uCF-xjuD0qT413YrMr9XpHv/view?usp=sharing)* in 2016. Now this scheme is introduced into RIME, at the purpose of improving the convenience of inputting Tangut.

My personal works done were: [Chinese translation](https://drive.google.com/file/d/19bWOvPcwu5YjQuGDLxOyabDqPyQNfFvy/view?usp=sharing) and proofreading of the report, RIME scheme importing, completion of all Tangut glyphs and components in Unicode (press <kbd>P</kbd> to input the components).

**WARNING: THERE ARE SOME WRONGLY ENCODED CHARACTORS TO BE PROOFREADED. THE COMPLETE CORRECTNESS IS NOT GUARANTEED.** Therefore, if wrong codes were found, an [Issue](https://github.com/Hulenkius/rime_tangutcjkk/issues/new) would be welcome.

This method is slightly different from the original Cangjie. Details below:

![image](https://user-images.githubusercontent.com/32562298/159518779-70efdbf9-414e-47c8-8518-983971bcccca.png)

# Installation

**!! Make sure you have the latest files !!**

## Windows (Weasel 小狼毫)

- Install [RIME on Windows](https://github.com/rime/weasel/releases/download/0.14.3/weasel-0.14.3.0-installer.exe).
- Put `tangutcjkk.schema.yaml` and `tangutcjkk.dict.yaml` into `YOUR_RIME_INSTALLATION_FOLDER/data`
- Switch to RIME (小狼毫), right-click on the "中" icon, and click "輸入法設定" (IME Settings).
- Tick "Tangut Cangjie", then click "中" (OK) twice.
- Press <kbd>Ctrl</kbd>+<kbd>`</kbd> or press <kbd>F4</kbd> and switch to "Tangut Cangjie"
- The font has been pre-set. If you want to change it, just open `tangutcjkk.schema.yaml` and replace the existing setting in line 70 with the name of the font(s) you installed. Then right-click on the "中" icon in your taskbar and click "重新部署".

## Android (TRIME 同文輸入法)

- Install [RIME on Android](https://github.com/osfans/trime/releases) and enable it in your Android system.
- Put [`default.yaml`](https://drive.google.com/file/d/12vy_CjO82s3EVE0P9DOu-g98f62zMq5X/view?usp=sharing), `tangutcjkk.schema.yaml` and `tangutcjkk.dict.yaml` into your TRIME user folder (`/sdcard/rime` as default).
- Create a folder `fonts` in the user folder.
- Put your favourite Tangut font (in .ttf format) into `fonts` and rename it to `Tangut.ttf`. (e.g. [Noto Serif Tangut](https://drive.google.com/file/d/1KYDYfZc5d8hqFGhgTFRshKuArbKQOC-U/view?usp=sharing))
- Launch TRIME, enable the scheme, and enjoy.

# Screenshots

Windows:

![weasel](https://user-images.githubusercontent.com/32562298/159846588-dff4a21f-b3cf-4a57-8e80-0aa91f692ceb.gif)

Android:

![trime](https://user-images.githubusercontent.com/32562298/162569642-1d994ca4-c8c0-4f8a-89d2-603f9904ca89.gif)
