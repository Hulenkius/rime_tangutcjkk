# 一種參考倉頡輸入法設計的西夏文形碼輸入法

[English Version](README_en.md)

日本學者河崎啓剛（KAWASAKI Keigo）於 2016 年在其學術彙報《[A suggestion for encoding Tangut glyphs](https://drive.google.com/file/d/1VYDGptwJ2uCF-xjuD0qT413YrMr9XpHv/view?usp=sharing)》中提出了一種高效的西夏文形碼輸入方案。這種方案參考倉頡輸入法設計，所以叫做「西夏文倉頡輸入法」。但該方案的面貌同倉頡輸入法有較大的不同，其輔助字形表如下圖所示：

![image](https://user-images.githubusercontent.com/32562298/159518779-70efdbf9-414e-47c8-8518-983971bcccca.png)

講義的中譯本見此：[一項關於編碼西夏文的提議——西夏文倉頡輸入法開發報告](https://drive.google.com/file/d/19bWOvPcwu5YjQuGDLxOyabDqPyQNfFvy/view?usp=sharing)。可作爲輸入法的說明書進行參照。

- 本方案的優勢在於：重碼率極低，在熟諳輸入方式之後能夠達到極高的輸入速度。
- 本方案的劣勢在於：學習成本過大。在處理模糊不清的西夏文原典時顯得力不從心。

本倉庫從河崎氏講義的檔案中攫取出整個輸入法編碼碼表，導入 RIME 輸入方案中。原方案中未包含的 Unicode 西夏文新加字以及西夏文部件均已在本 RIME 輸入方案中補足。撳 <kbd>P</kbd> 鍵即可輸入部件。

**原方案中包含錯誤編碼，如有發現，歡迎在 [Issues](https://github.com/Hulenkius/rime_tangutcjkk/issues/new) 提出，我將不定期更正。**

本方案支持全平臺的西夏文輸入。

- 點擊 [此處](https://codeload.github.com/Hulenkius/rime_tangutcjkk/zip/refs/heads/main) 下載本方案的檔案。
- 參照 [此處](http://blog.ccamc.org/?p=243) 在對應的平臺上安裝 [RIME 輸入法](http://rime.im/) 並配置方案。安卓端可參考 [英文版 README](README_en.md)。

# 使用範例

![weasel](https://user-images.githubusercontent.com/32562298/159846588-dff4a21f-b3cf-4a57-8e80-0aa91f692ceb.gif)