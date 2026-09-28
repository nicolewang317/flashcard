# Molecule Study 逐卡审查

日期：2026-09-27。范围：BIOL 112 四套 + CHEM 121 四套；以网站仓库的原始题库为基准。

原有 **516** 张：**保留 151、重写 75、合并移除 270、删除 20**；最终 **226** 张，净减少 **290** 张。没有新增卡。

“合并 270”指移入另一张现有卡并从活动题库移除的旧卡数，不是合并组数。一个知识点可保留识别、连接、位置、作用等不同目标；同知识的同义、正反问或重复例题不再单列。

| 套题 | 原有 | 最终 |
|---|---:|---:|
| Functional groups & linkages | 155 | 68 |
| Structures & directionality | 85 | 30 |
| Lipids & membranes | 82 | 47 |
| Hydrophobic effect | 57 | 19 |
| AXE & parent shapes | 24 | 15 |
| Molecular shapes | 61 | 18 |
| Bond angles | 24 | 11 |
| Visual recognition | 28 | 18 |

## Functional groups / linkages 的目标覆盖

以下编号一直引用原始卡序号，便于逐卡核对。位置或作用并不一定需要另一张定义卡；若一个具体例子已检验该目标，不再添加近义卡。

| 内容 | 结构识别 / 比较 | 连接或位置 | 为什么重要 / 应用 |
|---|---|---|
| Hydroxyl | 1.4、1.8 | 糖 1.9；酯形成 1.69 | 氢键 1.45；整体溶解性 1.48 |
| Carboxyl | 1.11、1.20、1.81 | 脂肪酸 1.18；肽形成 1.53 | 去质子化 1.13；水相作用 1.46 |
| Amino | 1.21；与 amide 比较 1.63 | 氨基酸 / 肽连接 1.53；端点 2.45 | 接受H⁺ 1.23；净电荷 2.43 |
| Carbonyl / methyl | 1.34、1.40 | 含羰基的连接比较 1.138 | 羰基极性 1.36；碳氢区域 1.44 |
| Phosphate | 1.88、1.102 | DNA/RNA 1.32；磷脂 1.33 | 亲水性 1.30；电荷条件 1.31 |
| Ester | 1.1；与 ether / carboxyl 比较 1.129、1.81 | 连接基团 1.69；TAG 3.9；磷脂 1.77 | 水解恢复基团 1.75；不能仅凭酯判断 TAG 1.144 |
| Amide / peptide | 1.54、1.56、1.63 | 蛋白质 1.52；连接原子来源 1.53 | 断裂的后果 1.67 |
| Thioester | 1.82、1.86、1.138 | acetyl-CoA 1.87 | 酰基转移 1.87；不归为重复单体聚合物 |
| Phosphoester / phosphodiester | 1.88、1.96、1.102 | C–O–P 1.89；核苷酸 1.93；3′–5′ 1.99 | 链骨架 1.97；断裂后果 1.104；不是碱基配对 1.107 |
| Glycosidic | 1.113、1.118、1.124、1.125 | 形成 1.110；淀粉 / 纤维素 / 分枝 1.121–123 | 几何与酶 1.126、2.82、2.83 |
| Ether | 1.127、1.129 | 糖的含氧连接语境 1.141（具体名称为 O-glycosidic） | 需检查邻近羰基 / 异头碳；不能把所有 C–O–C 都当同一种连接 |

## 事实与表达校正

- 羟基不是 carboxyl；修正了几张卡的知识点分类。
- 羧基、氨基的质子化和羰基部分电荷分开；净电荷不等于极性。参见 [OpenStax Biology 2e: Carbon](https://openstax.org/books/biology-2e/pages/2-3-carbon)。
- 细胞中实际聚合机制不等同于简单净脱水方程；保留 1.148 的模型边界。核酸连接参考 [Nucleic Acids](https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids)。
- 核膜有内外两层膜，外膜与 ER 连续。参见 [Eukaryotic Cells](https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells)。
- VSEPR 理想亲本角度和实际角度不同。AX₇ 另外存在非相邻赤道方向的144°（2×72°）；原表列的是相邻72°。参考 [Molecular Structure and Polarity](https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity)。
- acetyl-CoA 的 thioester 用于酰基转移；不是为了把所有连接强行对应到四类大分子。参见 [Chemistry of Thioesters](https://openstax.org/books/organic-chemistry/pages/21-8-chemistry-of-thioesters-and-acyl-phosphates-biological-carboxylic-acid-derivatives)。

## 数据与更新说明

- 活动题库 226 张，选择题 114 道。选择题只保留仍有效的目标，并补充关键连接机制、断键后果和计算题。不是每张卡都有选择题；全部卡均可翻面和滑动自测。
- 合并的旧编号会映射到保留卡：收藏取并集、错误次数累计、历史保留；任一旧卡尚需练习时，合并后先保留该状态。之后新的复习结果更新合并卡。
- 删除卡的进度仍留在备份 / 云端事件中，不进入活动题库。既有完成测试成绩保留；包含已删除或改动选择题的未完成测试可能需要重新开始。
- 网站图片题保留真实图像；纯文本 Quizlet 导出无法保留图片，CHEM 图像题因此明确标为文字替代版，使用网站练看图识别。
- 本报告与代码修改在本地完成。没有代替用户上传 GitHub 或部署线上。

## 验证结果

- 30项本地自动检查通过：题库引用、原卡决策、导出数量、图片答案遮蔽、收藏/错误记录合并、双设备模拟同步、备份重复导入、原有登录流程。
- `npm run build` 成功。没有在你的真实账户上进行写入或声称线上部署已更新。
- 审查前本地 `src/library.js` 与 GitHub `nicolewang317/flashcard` 同路径文件一致，Git blob SHA 为 `a2c1aea676b172d489e20fcb09880906cf84c4a7`。

## 全部 516 张原卡的决定

每张条目包括原题 / 原答案、决定、原因；重写附新题 / 新答案，合并注明唯一目标。保留卡按原题作答。

### 1.1 · 保留

- 原题：Identify the linkage R–C(=O)–O–R′.
- 原答案：Ester.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.2 · 保留

- 原题：In a structural formula, what does R usually represent?
- 原答案：An unspecified organic group or the rest of the molecule.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.3 · 保留

- 原题：In R–C(=O)–O–R′, what do the parentheses mean?
- 原答案：The carbon is double-bonded to the oxygen inside the parentheses.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.4 · 保留

- 原题：Which functional group is –OH when attached to a carbon outside a carboxyl group?
- 原答案：Hydroxyl group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.5 · 合并

- 原题：Write the structural shorthand for a hydroxyl group.
- 原答案：–OH.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.4 — Which functional group is –OH when attached to a carbon outside a carboxyl group?

### 1.6 · 合并

- 原题：What property does a hydroxyl group usually add to a carbon-containing region?
- 原答案：Polarity, allowing favorable interactions with water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.45 — Which interacts more favorably with water: –CH₂–CH₂– or –CH₂–OH, and why?

### 1.7 · 合并

- 原题：How can a hydroxyl group interact with water?
- 原答案：By forming hydrogen bonds.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.45 — Which interacts more favorably with water: –CH₂–CH₂– or –CH₂–OH, and why?

### 1.8 · 保留

- 原题：Is an ordinary alcohol –OH group charged as drawn?
- 原答案：No; it is polar but uncharged.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.9 · 保留

- 原题：Which functional group appears repeatedly on a typical sugar?
- 原答案：Hydroxyl.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.10 · 合并

- 原题：Which functional group on glycerol reacts with a fatty acid?
- 原答案：A hydroxyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.69 — What two functional groups react to form an ester in the course model?

### 1.11 · 保留

- 原题：Identify the group in R–C(=O)–OH.
- 原答案：Carboxyl group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.12 · 合并

- 原题：Write the two course-relevant forms of a carboxyl group.
- 原答案：–COOH and –COO⁻.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 1.13 · 重写

- 原题：What happens to –COOH when it donates H⁺?
- 原答案：It becomes –COO⁻.
- 理由：把电荷辨认和酸性机制合为一个因果问题。
- 新题：Why does a carboxyl group become negatively charged after donating H⁺?
- 新答案：It loses H⁺ but retains the bonding electrons, forming carboxylate (–COO⁻).

### 1.14 · 合并

- 原题：Why can a carboxyl group acquire a negative charge?
- 原答案：It can lose H⁺ while retaining the bonding electrons.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 1.15 · 合并

- 原题：Which is negatively charged: –COOH or –COO⁻?
- 原答案：–COO⁻.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 1.16 · 合并

- 原题：What is the name of the deprotonated form of a carboxyl group?
- 原答案：Carboxylate.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 1.17 · 合并

- 原题：A hydrocarbon chain ends in –C(=O)–OH. Which end can donate H⁺?
- 原答案：The carboxyl end.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 1.18 · 保留

- 原题：Which functional group occurs at the end of a fatty acid?
- 原答案：Carboxyl.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.19 · 合并

- 原题：Which group of an amino acid supplies the carbonyl carbon of a peptide linkage?
- 原答案：The carboxyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.53 — Which groups supply the C and N of a peptide bond?

### 1.20 · 保留

- 原题：Does a C=O bond alone identify a carboxyl group?
- 原答案：No; a carboxyl group also has –OH or –O⁻ on that same carbon.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.21 · 保留

- 原题：Identify the nitrogen-containing group in R–NH₂.
- 原答案：Amino group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.22 · 合并

- 原题：Write a neutral amino group attached to R.
- 原答案：R–NH₂.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.21 — Identify the nitrogen-containing group in R–NH₂.

### 1.23 · 重写

- 原题：What does R–NH₂ become when it accepts H⁺?
- 原答案：R–NH₃⁺.
- 理由：合并质子接受和正电荷结果，保留酸碱机制。
- 新题：Why can an amino group act as a base?
- 新答案：Its nitrogen accepts H⁺: R–NH₂ becomes R–NH₃⁺.

### 1.24 · 合并

- 原题：Why can an amino group act as a base?
- 原答案：Its nitrogen can accept H⁺.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.23 — Why can an amino group act as a base?

### 1.25 · 合并

- 原题：Which is positively charged: R–NH₂ or R–NH₃⁺?
- 原答案：R–NH₃⁺.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.23 — Why can an amino group act as a base?

### 1.26 · 合并

- 原题：How does protonation of an amino group affect its interaction with water?
- 原答案：The resulting positive charge favors interaction with water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.46 — Which region interacts more favorably with water: –COO⁻ or –CH₃?

### 1.27 · 合并

- 原题：Which group of an amino acid supplies nitrogen to a peptide linkage?
- 原答案：The amino group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.53 — Which groups supply the C and N of a peptide bond?

### 1.28 · 合并

- 原题：What atom surrounded by oxygens is a clue to a phosphate-containing group?
- 原答案：Phosphorus (P).
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.88 — Identify the phosphate attachment in R–O–P(=O)(O⁻)–O⁻.

### 1.29 · 合并

- 原题：Give one common schematic form of a phosphate monoester with negative charges.
- 原答案：R–O–P(=O)(O⁻)–O⁻; protonation can vary.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.88 — Identify the phosphate attachment in R–O–P(=O)(O⁻)–O⁻.

### 1.30 · 保留

- 原题：Why can phosphate groups make a molecular region hydrophilic?
- 原答案：Their polar bonds and often negative charges interact favorably with water.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.31 · 保留

- 原题：Are all phosphate-containing groups always drawn with exactly the same charge?
- 原答案：No; charge depends on protonation and the groups attached.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.32 · 保留

- 原题：Which repeating region of DNA and RNA contains phosphate groups?
- 原答案：The sugar–phosphate backbone.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.33 · 保留

- 原题：In a typical phospholipid, which region contains phosphate?
- 原答案：The polar head region.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.34 · 保留

- 原题：Identify the functional group C=O.
- 原答案：Carbonyl.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.35 · 合并

- 原题：Write the structural shorthand for a carbonyl group.
- 原答案：C=O.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.34 — Identify the functional group C=O.

### 1.36 · 重写

- 原题：Why is a carbonyl group polar?
- 原答案：Oxygen pulls the shared electrons more strongly than carbon.
- 理由：合并电负性解释和部分电荷方向。
- 新题：Why is the oxygen end of a carbonyl partially negative?
- 新答案：Oxygen attracts the shared electrons more strongly than carbon.

### 1.37 · 合并

- 原题：Which end of a carbonyl bond has a partial negative charge?
- 原答案：The oxygen end.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.36 — Why is the oxygen end of a carbonyl partially negative?

### 1.38 · 保留

- 原题：Does the polarity of C=O mean that the group necessarily has a net charge?
- 原答案：No; partial charges differ from a net ionic charge.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.39 · 合并

- 原题：Which feature do carboxyl, ester, and amide groups share?
- 原答案：A carbonyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.138 — After locating C=O, how do you distinguish an ester, amide, and thioester?

### 1.40 · 保留

- 原题：Identify the group –CH₃.
- 原答案：Methyl group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.41 · 合并

- 原题：Write the structural shorthand for a methyl group.
- 原答案：–CH₃.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.40 — Identify the group –CH₃.

### 1.42 · 合并

- 原题：Is a methyl group mainly polar or nonpolar?
- 原答案：Nonpolar.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.44 — Why is a long hydrocarbon chain hydrophobic?

### 1.43 · 合并

- 原题：A region contains mostly C–C and C–H bonds. Is it mainly polar or nonpolar?
- 原答案：Nonpolar.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.44 — Why is a long hydrocarbon chain hydrophobic?

### 1.44 · 保留

- 原题：Why is a long hydrocarbon chain hydrophobic?
- 原答案：Its mostly nonpolar bonds cannot form favorable hydrogen bonds with water.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.45 · 重写

- 原题：Which region interacts more favorably with water: –CH₂–CH₂– or –CH₂–OH?
- 原答案：–CH₂–OH, because it contains a polar hydroxyl group.
- 理由：用结构比较检验羟基的性质与原因。
- 新题：Which interacts more favorably with water: –CH₂–CH₂– or –CH₂–OH, and why?
- 新答案：–CH₂–OH: its polar hydroxyl can form hydrogen bonds with water.

### 1.46 · 保留

- 原题：Which region interacts more favorably with water: –COO⁻ or –CH₃?
- 原答案：–COO⁻, because its negative charge interacts with water.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.47 · 合并

- 原题：Can an uncharged group still be hydrophilic?
- 原答案：Yes; polar groups such as hydroxyls can interact with water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.45 — Which interacts more favorably with water: –CH₂–CH₂– or –CH₂–OH, and why?

### 1.48 · 保留

- 原题：Does one hydroxyl guarantee that an entire molecule is highly water-soluble?
- 原答案：No; the size of its nonpolar region also matters.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.49 · 合并

- 原题：Classify –COO⁻ as charged or uncharged and give the sign.
- 原答案：Charged; negative.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 1.50 · 合并

- 原题：Classify –NH₃⁺ as charged or uncharged and give the sign.
- 原答案：Charged; positive.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.23 — Why can an amino group act as a base?

### 1.51 · 合并

- 原题：Classify an alcohol –OH as charged or uncharged in its usual drawn form.
- 原答案：Uncharged.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.8 — Is an ordinary alcohol –OH group charged as drawn?

### 1.52 · 保留

- 原题：What covalent linkage joins amino acids in a protein backbone?
- 原答案：Peptide bond, a type of amide linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.53 · 重写

- 原题：Which two functional groups react in the course model of peptide-bond formation?
- 原答案：A carboxyl group and an amino group.
- 理由：保留连接方式；不与酰胺结构识别或蛋白质归属合并。
- 新题：Which groups supply the C and N of a peptide bond?
- 新答案：The carboxyl group supplies the carbonyl C; the amino group supplies N.

### 1.54 · 保留

- 原题：Recognize R–C(=O)–NH–R′: what linkage is shown?
- 原答案：An amide linkage; it is a peptide linkage when joining amino-acid residues.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.55 · 合并

- 原题：Write a typical peptide/amide linkage motif.
- 原答案：–C(=O)–NH–.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.54 — Recognize R–C(=O)–NH–R′: what linkage is shown?

### 1.56 · 保留

- 原题：In –C(=O)–NH–, which bond is the peptide bond itself?
- 原答案：The bond between the carbonyl carbon and nitrogen.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.57 · 合并

- 原题：Which class of macromolecule has repeated peptide bonds in its backbone?
- 原答案：Proteins.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.52 — What covalent linkage joins amino acids in a protein backbone?

### 1.58 · 合并

- 原题：What units does a peptide bond connect in proteins?
- 原答案：Amino-acid residues.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.52 — What covalent linkage joins amino acids in a protein backbone?

### 1.59 · 合并

- 原题：What net reaction type forms a peptide bond in the course's simplified model?
- 原答案：Condensation/dehydration.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.145 — Two free monomers join with net release of H₂O. What reaction type is modeled?

### 1.60 · 合并

- 原题：What net reaction type breaks a peptide bond?
- 原答案：Hydrolysis.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 1.61 · 合并

- 原题：What small molecule is consumed when a peptide bond is hydrolyzed?
- 原答案：Water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 1.62 · 合并

- 原题：What small molecule is released in the simplified condensation of two free amino acids?
- 原答案：Water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.145 — Two free monomers join with net release of H₂O. What reaction type is modeled?

### 1.63 · 保留

- 原题：Why is R–C(=O)–NH–R′ not a free amino group?
- 原答案：Its nitrogen is directly bonded to a carbonyl carbon as part of an amide.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.64 · 保留

- 原题：Why is the –C(=O)–NH– part of a peptide not a free carboxyl group?
- 原答案：The carbonyl carbon is bonded to nitrogen instead of –OH or –O⁻.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.65 · 合并

- 原题：How does R–NH₂ differ structurally from R–C(=O)–NH–R′?
- 原答案：Only the second has nitrogen directly attached to a carbonyl carbon.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.63 — Why is R–C(=O)–NH–R′ not a free amino group?

### 1.66 · 合并

- 原题：Does every nitrogen atom in a protein belong to a free amino group?
- 原答案：No; many are part of peptide linkages.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.63 — Why is R–C(=O)–NH–R′ not a free amino group?

### 1.67 · 重写

- 原题：Why do peptide bonds matter to protein structure at this course level?
- 原答案：They covalently join amino-acid residues into the backbone.
- 理由：将笼统的重要性改为断键后果，检验结构作用。
- 新题：Why does cleaving a peptide bond within a linear protein backbone split the chain?
- 新答案：It breaks a covalent link between successive amino-acid residues.

### 1.68 · 合并

- 原题：Write the structural motif of an ester linkage.
- 原答案：–C(=O)–O–.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.1 — Identify the linkage R–C(=O)–O–R′.

### 1.69 · 保留

- 原题：What two functional groups react to form an ester in the course model?
- 原答案：A hydroxyl group and a carboxyl group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.70 · 合并

- 原题：Which linkage would you expect between glycerol and a fatty acid?
- 原答案：Ester linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.69 — What two functional groups react to form an ester in the course model?

### 1.71 · 合并

- 原题：Which glycerol group participates in ester formation?
- 原答案：A hydroxyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.69 — What two functional groups react to form an ester in the course model?

### 1.72 · 合并

- 原题：Which fatty-acid group participates in ester formation?
- 原答案：The carboxyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.69 — What two functional groups react to form an ester in the course model?

### 1.73 · 合并

- 原题：What is the net reaction type for hydroxyl + carboxyl → ester + water?
- 原答案：Condensation/dehydration, specifically esterification.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.145 — Two free monomers join with net release of H₂O. What reaction type is modeled?

### 1.74 · 合并

- 原题：What reaction breaks an ester linkage by adding water?
- 原答案：Hydrolysis.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 1.75 · 保留

- 原题：What functional groups are restored by the course model of ester hydrolysis?
- 原答案：A hydroxyl group and a carboxyl group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.76 · 合并

- 原题：Which storage lipid contains three ester linkages between glycerol and fatty acids?
- 原答案：Triacylglycerol.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.9 — How many ester linkages attach fatty acids in one triacylglycerol?

### 1.77 · 保留

- 原题：In a common glycerol-based phospholipid, what links a fatty acid to glycerol?
- 原答案：An ester linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.78 · 合并

- 原题：Why do ester linkages matter in triacylglycerols?
- 原答案：They covalently attach the fatty-acid chains to glycerol.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.69 — What two functional groups react to form an ester in the course model?

### 1.79 · 合并

- 原题：A diagram contains R–O–C(=O)–R′. Which linkage is present?
- 原答案：Ester; reversing its drawing direction does not change the linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.1 — Identify the linkage R–C(=O)–O–R′.

### 1.80 · 合并

- 原题：A diagram contains C=O, but no oxygen single-bonded to that carbon. Is that enough to identify an ester?
- 原答案：No; an ester requires the –C(=O)–O– connection.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.129 — What structural feature distinguishes an ester from an ether?

### 1.81 · 保留

- 原题：How can you distinguish a free carboxyl group from an ester in a diagram?
- 原答案：A carboxyl has –C(=O)–OH/–O⁻; an ester has –C(=O)–O–R.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.82 · 保留

- 原题：Identify R–C(=O)–S–R′.
- 原答案：Thioester.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.83 · 合并

- 原题：Write the structural motif of a thioester.
- 原答案：–C(=O)–S–.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.82 — Identify R–C(=O)–S–R′.

### 1.84 · 合并

- 原题：Which atom replaces the linking oxygen of an ester in a thioester?
- 原答案：Sulfur.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.138 — After locating C=O, how do you distinguish an ester, amide, and thioester?

### 1.85 · 合并

- 原题：What feature is shared by ester and thioester linkages?
- 原答案：A carbonyl carbon bonded to the linking oxygen or sulfur.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.138 — After locating C=O, how do you distinguish an ester, amide, and thioester?

### 1.86 · 保留

- 原题：Which is a thioester: R–S–R′ or R–C(=O)–S–R′?
- 原答案：R–C(=O)–S–R′; sulfur must be attached to the carbonyl carbon.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.87 · 重写

- 原题：What introductory biological role can thioesters have?
- 原答案：They can carry acyl groups, the R–C(=O)– portion, in metabolic reactions.
- 理由：以具体载体替代含糊的 biological role；CoA 是代谢载体，不冒称为某类聚合物。
- 新题：What does the thioester in acetyl-CoA enable it to transfer?
- 新答案：An acetyl group to another molecule during metabolism.

### 1.88 · 保留

- 原题：Identify the phosphate attachment in R–O–P(=O)(O⁻)–O⁻.
- 原答案：A phosphoester linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.89 · 重写

- 原题：In a phosphoester, how is the carbon-containing group connected to phosphate?
- 原答案：Through an alcohol-derived oxygen: C–O–P.
- 理由：保留连接方式；与识别连接名称、核苷酸中的位置分别考查。
- 新题：How is an alcohol-derived carbon group connected to phosphate in a phosphoester?
- 新答案：Through the alcohol oxygen: C–O–P, not a direct C–P bond.

### 1.90 · 合并

- 原题：What kind of group provides the alcohol-derived oxygen in a phosphoester?
- 原答案：A hydroxyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.89 — How is an alcohol-derived carbon group connected to phosphate in a phosphoester?

### 1.91 · 合并

- 原题：Which two groups are joined in the simple condensation model of phosphoester formation?
- 原答案：An alcohol hydroxyl group and a phosphate –OH group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.89 — How is an alcohol-derived carbon group connected to phosphate in a phosphoester?

### 1.92 · 合并

- 原题：What reaction type can cleave a phosphoester linkage using water?
- 原答案：Hydrolysis.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 1.93 · 保留

- 原题：A nucleotide's sugar is attached to one phosphate through C–O–P. What linkage is that attachment?
- 原答案：Phosphoester.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.94 · 合并

- 原题：How many alcohol-derived organic groups are ester-linked to the phosphate in a phosphate monoester?
- 原答案：One.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.102 — What feature distinguishes a phosphodiester from a phosphate monoester in a diagram?

### 1.95 · 合并

- 原题：How many alcohol-derived organic groups are ester-linked to the phosphate in a phosphodiester?
- 原答案：Two.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.102 — What feature distinguishes a phosphodiester from a phosphate monoester in a diagram?

### 1.96 · 保留

- 原题：Identify sugar–O–P(=O)(O⁻)–O–sugar.
- 原答案：A phosphodiester connection.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.97 · 保留

- 原题：Which covalent linkage creates the DNA/RNA sugar–phosphate backbone?
- 原答案：Phosphodiester linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.98 · 合并

- 原题：What units are connected by phosphodiester linkages in DNA and RNA?
- 原答案：Nucleotide residues.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.97 — Which covalent linkage creates the DNA/RNA sugar–phosphate backbone?

### 1.99 · 重写

- 原题：Which sugar-carbon positions are connected through phosphate in a normal nucleic-acid backbone?
- 原答案：The 3′ position of one sugar and the 5′ position of the next.
- 理由：合并位置记忆与连接路径为同一个结构追踪问题。
- 新题：Trace the connection between neighboring sugars in a nucleic-acid backbone.
- 新答案：3′-C–O–P–O–C-5′; the sugars are connected through phosphate, not directly by C–C.

### 1.100 · 合并

- 原题：Does a 3′–5′ phosphodiester linkage directly join two sugar carbons with a C–C bond?
- 原答案：No; the connection passes through O–P–O.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.99 — Trace the connection between neighboring sugars in a nucleic-acid backbone.

### 1.101 · 合并

- 原题：How does a phosphodiester relate to phosphoester attachments?
- 原答案：One phosphate has two phosphoester attachments to organic groups.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.102 — What feature distinguishes a phosphodiester from a phosphate monoester in a diagram?

### 1.102 · 保留

- 原题：What feature distinguishes a phosphodiester from a phosphate monoester in a diagram?
- 原答案：Two organic groups are attached through oxygens to the same phosphate instead of one.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.103 · 合并

- 原题：Does any phosphate group in a drawing automatically identify a phosphodiester?
- 原答案：No; check for two ester attachments to organic groups.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.102 — What feature distinguishes a phosphodiester from a phosphate monoester in a diagram?

### 1.104 · 重写

- 原题：What reaction type can break the nucleic-acid backbone by using water?
- 原答案：Hydrolysis of a phosphodiester linkage.
- 理由：用骨架断裂的后果检验作用，避免重复 hydrolysis 定义。
- 新题：What happens to a DNA strand when one internal phosphodiester linkage is hydrolyzed?
- 新答案：Its covalent backbone is cut at that position.

### 1.105 · 合并

- 原题：Which nucleic-acid group is required at the growing chain end to form the next phosphodiester linkage?
- 原答案：A usable 3′-OH.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.27 — If the growing terminal nucleotide lacks a usable 3′-OH, what happens to normal extension?

### 1.106 · 合并

- 原题：Why does the 3′–5′ connection give a nucleic-acid strand directionality?
- 原答案：The strand has chemically different 5′ and 3′ ends.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.33 — What does polymer polarity mean when discussing 5′ and 3′ ends?

### 1.107 · 保留

- 原题：Does a phosphodiester bond connect the paired bases across two DNA strands?
- 原答案：No; it connects successive nucleotides within one strand.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.108 · 保留

- 原题：Which linkage joins monosaccharides in disaccharides and polysaccharides?
- 原答案：Glycosidic linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.109 · 合并

- 原题：What units does a glycosidic linkage connect in the carbohydrates in this course?
- 原答案：Monosaccharide residues.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.108 — Which linkage joins monosaccharides in disaccharides and polysaccharides?

### 1.110 · 保留

- 原题：What groups react in the simplified model of glycosidic-bond formation between sugars?
- 原答案：Hydroxyl groups on the two sugars, including the anomeric hydroxyl of one.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.111 · 合并

- 原题：What reaction type joins two free sugars with net loss of water in the course model?
- 原答案：Condensation/dehydration.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.145 — Two free monomers join with net release of H₂O. What reaction type is modeled?

### 1.112 · 合并

- 原题：What reaction type breaks a glycosidic linkage using water?
- 原答案：Hydrolysis.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 1.113 · 重写

- 原题：In glucose polymers, what does the 1 in a (1→4) linkage identify?
- 原答案：Carbon 1 of one glucose residue.
- 理由：合并两个数字的分拆题，考一个命名解读目标。
- 新题：What do the numbers in a glucose (1→4) linkage identify?
- 新答案：C1 of one glucose and C4 of the next, joined through oxygen.

### 1.114 · 合并

- 原题：In glucose polymers, what does the 4 in a (1→4) linkage identify?
- 原答案：Carbon 4 of the other glucose residue.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.113 — What do the numbers in a glucose (1→4) linkage identify?

### 1.115 · 合并

- 原题：Does 1→4 mean that four glucose molecules are connected?
- 原答案：No; it identifies the linked carbon positions.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.113 — What do the numbers in a glucose (1→4) linkage identify?

### 1.116 · 合并

- 原题：In α(1→6), which carbon of the second glucose is linked?
- 原答案：Carbon 6.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.124 — Identify the glycosidic linkage in this glucose structure.

### 1.117 · 保留

- 原题：What does α or β specify in a glycosidic-linkage name?
- 原答案：The configuration at the participating anomeric carbon, carbon 1 in glucose.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.118 · 重写

- 原题：In a standard D-glucose Haworth drawing, how is an α substituent at C1 oriented relative to the C5–CH₂OH group?
- 原答案：On the opposite side of the ring.
- 理由：保留构型比较；采用相对取向，避免把屏幕上下当结构规则。
- 新题：How do α and β substituents at C1 differ in a standard D-glucose Haworth drawing?
- 新答案：α is opposite the C5–CH₂OH group; β is on the same side.

### 1.119 · 合并

- 原题：In a standard D-glucose Haworth drawing, how is a β substituent at C1 oriented relative to the C5–CH₂OH group?
- 原答案：On the same side of the ring.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.118 — How do α and β substituents at C1 differ in a standard D-glucose Haworth drawing?

### 1.120 · 合并

- 原题：Can the numbers (1→4) alone distinguish starch from cellulose?
- 原答案：No; the α versus β configuration also matters.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.77 — What linkage difference distinguishes starch from cellulose even though both contain glucose?

### 1.121 · 重写

- 原题：Which linkage makes the glucose main chain of starch?
- 原答案：α(1→4) glycosidic linkage.
- 理由：保留大分子归属目标；去掉会提前给出答案的示意图。
- 新题：Which linkage forms the glucose main chain of starch?
- 新答案：α(1→4) glycosidic linkage.

### 1.122 · 保留

- 原题：Which linkage forms an amylopectin branch point?
- 原答案：α(1→6) glycosidic linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.123 · 保留

- 原题：Which linkage joins glucose residues in cellulose?
- 原答案：β(1→4) glycosidic linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.124 · 重写

- 原题：A glucose diagram shows an α connection from C1 through oxygen to C6 of another glucose. Name the linkage.
- 原答案：α(1→6) glycosidic linkage.
- 理由：去掉题干中直接给出的 α 和碳编号，保留看图辨认能力。
- 新题：Identify the glycosidic linkage in this glucose structure.
- 新答案：α(1→6) glycosidic linkage.

### 1.125 · 重写

- 原题：A glucose diagram shows a β connection from C1 through oxygen to C4 of another glucose. Name the linkage.
- 原答案：β(1→4) glycosidic linkage.
- 理由：去掉题干中直接给出的 β 和碳编号，保留看图辨认能力。
- 新题：Identify the glycosidic linkage in this glucose structure.
- 新答案：β(1→4) glycosidic linkage.

### 1.126 · 保留

- 原题：Why does glycosidic-linkage geometry matter biologically?
- 原答案：It changes polymer shape and which enzymes can act on the polymer.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.127 · 保留

- 原题：Identify R–O–R′ when the oxygen joins two carbons and neither adjacent carbon is a carbonyl carbon.
- 原答案：Ether.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.128 · 合并

- 原题：Write the structural motif of an ether.
- 原答案：C–O–C, without an adjacent carbonyl carbon.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.127 — Identify R–O–R′ when the oxygen joins two carbons and neither adjacent carbon is a carbonyl carbon.

### 1.129 · 保留

- 原题：What structural feature distinguishes an ester from an ether?
- 原答案：An ester has a carbonyl carbon directly bonded to the linking oxygen.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.130 · 合并

- 原题：Which is an ester: CH₃–O–CH₃ or CH₃–C(=O)–O–CH₃?
- 原答案：CH₃–C(=O)–O–CH₃.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.129 — What structural feature distinguishes an ester from an ether?

### 1.131 · 合并

- 原题：Which is an ether: CH₃–O–CH₃ or CH₃–C(=O)–O–CH₃?
- 原答案：CH₃–O–CH₃.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.129 — What structural feature distinguishes an ester from an ether?

### 1.132 · 合并

- 原题：What structural feature distinguishes an ester from an amide?
- 原答案：The atom attached to the carbonyl carbon is O in an ester and N in an amide.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.138 — After locating C=O, how do you distinguish an ester, amide, and thioester?

### 1.133 · 合并

- 原题：Classify CH₃–C(=O)–NH–CH₃.
- 原答案：Amide linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.54 — Recognize R–C(=O)–NH–R′: what linkage is shown?

### 1.134 · 合并

- 原题：Classify CH₃–C(=O)–S–CH₃.
- 原答案：Thioester linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.82 — Identify R–C(=O)–S–R′.

### 1.135 · 合并

- 原题：Classify CH₃–CH₂–O–CH₃.
- 原答案：Ether linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.127 — Identify R–O–R′ when the oxygen joins two carbons and neither adjacent carbon is a carbonyl carbon.

### 1.136 · 合并

- 原题：Classify CH₃–C(=O)–O–CH₂–CH₃.
- 原答案：Ester linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.1 — Identify the linkage R–C(=O)–O–R′.

### 1.137 · 合并

- 原题：Classify CH₃–CH₂–NH₂: free amino group or amide?
- 原答案：Free amino group; no carbonyl carbon is directly bonded to its nitrogen.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.63 — Why is R–C(=O)–NH–R′ not a free amino group?

### 1.138 · 重写

- 原题：Which atom should you inspect next after finding C=O when comparing ester, amide, and thioester?
- 原答案：The single-bonded linking atom: O, N, or S, respectively.
- 理由：把两两重复比较合成一个结构判别规则。
- 新题：After locating C=O, how do you distinguish an ester, amide, and thioester?
- 新答案：Inspect the linking atom bonded to the carbonyl C: O → ester, N → amide, S → thioester.

### 1.139 · 保留

- 原题：How can you distinguish a carboxylic ester from a phosphoester by its central atom?
- 原答案：A carboxylic ester centers on a carbonyl carbon; a phosphoester centers on phosphorus.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.140 · 删除

- 原题：Which linkage joins sugar units, and which joins amino-acid units?
- 原答案：Glycosidic joins sugar units; peptide joins amino-acid units.
- 理由：同时要求两类大分子映射；分别已由 1.52 和 1.108 覆盖，删除拼盘式复述。

### 1.141 · 重写

- 原题：Is every C–O–C fragment enough to classify a whole linkage as an ordinary ether?
- 原答案：No; inspect context, including an adjacent carbonyl or a sugar's anomeric carbon.
- 理由：用糖的结构语境替代笼统的“不是普通 ether”，保留大分子中的识别。
- 新题：What makes a sugar C–O–C connection an O-glycosidic linkage?
- 新答案：It joins a sugar’s anomeric carbon through oxygen to another group.

### 1.142 · 合并

- 原题：An unfamiliar molecule has –COO⁻ at one end and a long hydrocarbon region. Which end is more hydrophilic?
- 原答案：The –COO⁻ end.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.46 — Which region interacts more favorably with water: –COO⁻ or –CH₃?

### 1.143 · 保留

- 原题：An unfamiliar molecule has –C(=O)–NH– within a chain. Does that alone prove the whole molecule is a protein?
- 原答案：No; it identifies an amide, but the rest of the structure is needed.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.144 · 保留

- 原题：An unfamiliar molecule has one ester linkage. Does that alone prove it is a triacylglycerol?
- 原答案：No; triacylglycerol requires glycerol attached to three fatty acids.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.145 · 重写

- 原题：What happens to water in a net dehydration reaction?
- 原答案：Water is released.
- 理由：以反应情境替代单纯定义；适用于课程的简化净反应模型。
- 新题：Two free monomers join with net release of H₂O. What reaction type is modeled?
- 新答案：Condensation (dehydration).

### 1.146 · 保留

- 原题：What happens to water in a hydrolysis reaction?
- 原答案：Water is consumed to cleave a covalent linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.147 · 合并

- 原题：Is hydrolysis simply separating molecules without changing covalent bonds?
- 原答案：No; it cleaves a covalent linkage using water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 1.148 · 保留

- 原题：Why should a net dehydration equation not be treated as a complete cellular mechanism?
- 原答案：It summarizes the net change; cells use enzymes and often activated reactants.
- 理由：保留独立学习目标；题干明确，答案简短。

### 1.149 · 删除

- 原题：When identifying a linkage in a crowded diagram, what must you inspect beyond a single atom?
- 原答案：The connected neighboring atoms and bond orders.
- 理由：泛泛的做题建议，不考查可独立检验的生物化学知识。

### 1.150 · 合并

- 原题：Draw an ester linkage from memory.
- 原答案：R–C(=O)–O–R′.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.1 — Identify the linkage R–C(=O)–O–R′.

### 1.151 · 合并

- 原题：Draw an amide linkage from memory.
- 原答案：R–C(=O)–NH–R′.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.54 — Recognize R–C(=O)–NH–R′: what linkage is shown?

### 1.152 · 合并

- 原题：Draw a thioester linkage from memory.
- 原答案：R–C(=O)–S–R′.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.82 — Identify R–C(=O)–S–R′.

### 1.153 · 合并

- 原题：Draw an ether linkage from memory.
- 原答案：R–O–R′, with no adjacent carbonyl carbon.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.127 — Identify R–O–R′ when the oxygen joins two carbons and neither adjacent carbon is a carbonyl carbon.

### 1.154 · 合并

- 原题：Draw a phosphodiester connection between two sugars.
- 原答案：Sugar–O–P(=O)(O⁻)–O–sugar.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.96 — Identify sugar–O–P(=O)(O⁻)–O–sugar.

### 1.155 · 合并

- 原题：Draw a carboxyl group after loss of H⁺.
- 原答案：R–C(=O)–O⁻, often shortened to R–COO⁻.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 2.1 · 保留

- 原题：What three components make a nucleotide?
- 原答案：A phosphate group, a pentose sugar, and a nitrogenous base.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.2 · 合并

- 原题：What is the name of a nucleic-acid building block containing phosphate, pentose, and base?
- 原答案：Nucleotide.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.1 — What three components make a nucleotide?

### 2.3 · 合并

- 原题：Which pentose sugar occurs in DNA?
- 原答案：Deoxyribose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.4 · 合并

- 原题：Which nucleic acid contains deoxyribose?
- 原答案：DNA.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.5 · 合并

- 原题：Which pentose sugar occurs in RNA?
- 原答案：Ribose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.6 · 合并

- 原题：Which nucleic acid contains ribose?
- 原答案：RNA.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.7 · 重写

- 原题：Which bases occur in DNA?
- 原答案：A, T, G, and C.
- 理由：合并两套碱基清单及反向问题，突出唯一差别。
- 新题：Which base differs between DNA and RNA?
- 新答案：DNA uses thymine (T); RNA uses uracil (U). Both use A, C, and G.

### 2.8 · 合并

- 原题：Which bases occur in RNA?
- 原答案：A, U, G, and C.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.7 — Which base differs between DNA and RNA?

### 2.9 · 合并

- 原题：Which base in RNA takes the place of thymine in the usual base list?
- 原答案：Uracil (U).
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.7 — Which base differs between DNA and RNA?

### 2.10 · 合并

- 原题：Which sugar position distinguishes ribose from deoxyribose?
- 原答案：The 2′ carbon.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.11 · 重写

- 原题：What is attached to the 2′ carbon in ribose that is absent at that position in deoxyribose?
- 原答案：An –OH group; deoxyribose has H instead.
- 理由：合并糖名称正反问和同一差别的反复提问。
- 新题：How do ribose and deoxyribose differ at the 2′ carbon?
- 新答案：Ribose has 2′-OH; deoxyribose has 2′-H.

### 2.12 · 合并

- 原题：A nucleotide's sugar has H rather than OH at 2′. Which course nucleic acid does it match?
- 原答案：DNA.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.13 · 合并

- 原题：A nucleotide's sugar has OH at 2′. Which course nucleic acid does it match?
- 原答案：RNA.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.11 — How do ribose and deoxyribose differ at the 2′ carbon?

### 2.14 · 保留

- 原题：Which pentose carbon is attached to the nitrogenous base?
- 原答案：1′.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.15 · 合并

- 原题：What component attaches to the sugar at 1′?
- 原答案：The nitrogenous base.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.14 — Which pentose carbon is attached to the nitrogenous base?

### 2.16 · 保留

- 原题：Which pentose carbon bears the OH needed at the growing end of a nucleic-acid strand?
- 原答案：3′.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.17 · 合并

- 原题：Why is the terminal 3′-OH important?
- 原答案：It is needed to form the next backbone linkage during chain extension.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.27 — If the growing terminal nucleotide lacks a usable 3′-OH, what happens to normal extension?

### 2.18 · 合并

- 原题：Which numbered sugar carbon is a ring carbon connected to the outside-ring 5′ carbon?
- 原答案：4′.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.19 — Which numbered pentose carbon lies outside the ring and is commonly attached to phosphate?

### 2.19 · 保留

- 原题：Which numbered pentose carbon lies outside the ring and is commonly attached to phosphate?
- 原答案：5′.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.20 · 合并

- 原题：A sugar diagram shows CH₂ outside the ring connected to phosphate. Which carbon is this?
- 原答案：5′.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.19 — Which numbered pentose carbon lies outside the ring and is commonly attached to phosphate?

### 2.21 · 保留

- 原题：What does the prime mark in 3′ indicate in this context?
- 原答案：Sugar-carbon numbering, distinguished from numbering in the base.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.22 · 重写

- 原题：What defines the 5′ end of a nucleic-acid strand?
- 原答案：The end corresponding to the terminal sugar's 5′ position, often bearing phosphate.
- 理由：一题比较化学端点；不依赖图片左端或右端，避免说所有5′端必有磷酸。
- 新题：How can you identify the two ends of the usual textbook nucleic-acid strand?
- 新答案：The 3′ end has a free 3′-OH; the 5′ end has the terminal 5′ position, commonly bearing phosphate.

### 2.23 · 合并

- 原题：What defines the 3′ end of a nucleic-acid strand?
- 原答案：The end corresponding to the terminal sugar's 3′ position, normally bearing a free 3′-OH.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.22 — How can you identify the two ends of the usual textbook nucleic-acid strand?

### 2.24 · 合并

- 原题：To which end is a nucleotide added during normal nucleic-acid synthesis?
- 原答案：The 3′ end.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.26 — Why is nucleic-acid synthesis described as 5′ → 3′?

### 2.25 · 合并

- 原题：In which direction is a nucleic-acid strand synthesized?
- 原答案：5′→3′.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.26 — Why is nucleic-acid synthesis described as 5′ → 3′?

### 2.26 · 重写

- 原题：Why is extension at the 3′ end described as 5′→3′ synthesis?
- 原答案：The chain grows from its existing 5′ end toward its extending 3′ end.
- 理由：合并方向口号、延伸端及旋转题，保留机制。
- 新题：Why is nucleic-acid synthesis described as 5′ → 3′?
- 新答案：New nucleotides attach to the growing strand’s 3′-OH, extending its 3′ end.

### 2.27 · 保留

- 原题：If the growing terminal nucleotide lacks a usable 3′-OH, what happens to normal extension?
- 原答案：It stops because the next backbone linkage cannot form there.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.28 · 合并

- 原题：A strand reads 5′–A–G–C–3′. At which displayed end is the next nucleotide added?
- 原答案：The right-hand end, at the terminal 3′-OH.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.26 — Why is nucleic-acid synthesis described as 5′ → 3′?

### 2.29 · 合并

- 原题：A strand is drawn 3′ on the left and 5′ on the right. Which end can extend?
- 原答案：The left-hand 3′ end.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.26 — Why is nucleic-acid synthesis described as 5′ → 3′?

### 2.30 · 合并

- 原题：Does rotating a strand diagram change its chemical 5′→3′ direction?
- 原答案：No; direction is determined by the end chemistry, not page orientation.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.26 — Why is nucleic-acid synthesis described as 5′ → 3′?

### 2.31 · 合并

- 原题：What does antiparallel mean for DNA's two strands?
- 原答案：They run in opposite 5′→3′ directions.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.32 — One DNA strand runs 5′ → 3′ along a given direction. How does its partner run along that same direction?

### 2.32 · 重写

- 原题：One DNA strand runs 5′→3′ from left to right. How does the other run from left to right?
- 原答案：3′→5′.
- 理由：用方向应用替代重复定义。
- 新题：One DNA strand runs 5′ → 3′ along a given direction. How does its partner run along that same direction?
- 新答案：3′ → 5′: the strands are antiparallel.

### 2.33 · 保留

- 原题：What does polymer polarity mean when discussing 5′ and 3′ ends?
- 原答案：The polymer has chemically different ends and therefore a direction.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.34 · 合并

- 原题：Does polymer polarity mean that one DNA end is positive and the other is negative?
- 原答案：No; it refers here to chemically different ends.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.33 — What does polymer polarity mean when discussing 5′ and 3′ ends?

### 2.35 · 合并

- 原题：Which linkage holds successive nucleotides together within one strand?
- 原答案：Phosphodiester linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.97 — Which covalent linkage creates the DNA/RNA sugar–phosphate backbone?

### 2.36 · 合并

- 原题：Which components alternate along a nucleic-acid backbone?
- 原答案：Sugars and phosphates.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.32 — Which repeating region of DNA and RNA contains phosphate groups?

### 2.37 · 保留

- 原题：Are nitrogenous bases the repeating links of the sugar–phosphate backbone?
- 原答案：No; they attach to the sugars and project from the backbone.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.38 · 合并

- 原题：What four groups attach to an amino acid's α-carbon in the general course structure?
- 原答案：An amino group, a carboxyl group, H, and an R group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.41 — In this amino-acid structure, which substituent distinguishes one amino acid from another?

### 2.39 · 保留

- 原题：Which part of an amino acid varies and determines many of its properties?
- 原答案：The R group, or side chain.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.40 · 合并

- 原题：What is the α-carbon in the general amino-acid structure?
- 原答案：The central carbon bonded to the amino group, carboxyl group, H, and R group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.41 — In this amino-acid structure, which substituent distinguishes one amino acid from another?

### 2.41 · 重写

- 原题：Identify the building block H₂N–CH(R)–COOH.
- 原答案：An amino acid in its neutral schematic form.
- 理由：图像直接标出各部分，改为辨认可变部分而非重述整套组成。
- 新题：In this amino-acid structure, which substituent distinguishes one amino acid from another?
- 新答案：The R group attached to the α-carbon.

### 2.42 · 合并

- 原题：Draw the general neutral schematic structure of an amino acid.
- 原答案：H₂N–CH(R)–COOH.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.41 — In this amino-acid structure, which substituent distinguishes one amino acid from another?

### 2.43 · 重写

- 原题：How can the amino and carboxyl groups appear in an ionized amino-acid drawing?
- 原答案：As –NH₃⁺ and –COO⁻.
- 理由：将常见画法改为净电荷应用，避免重复两个官能团的质子化定义。
- 新题：An amino acid has –NH₃⁺, –COO⁻, and an uncharged R group. What is its net charge?
- 新答案：Zero: the +1 and −1 charges cancel, although both groups are charged.

### 2.44 · 合并

- 原题：If two amino acids have different R groups, must their general backbone groups differ?
- 原答案：No; the R groups vary while the general backbone arrangement is shared.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.39 — Which part of an amino acid varies and determines many of its properties?

### 2.45 · 重写

- 原题：Which end of a polypeptide has the free backbone amino group?
- 原答案：The N-terminus.
- 理由：合并两端定义；按骨架化学区分，不靠图片方位。
- 新题：How do you distinguish the N-terminus from the C-terminus in a peptide backbone?
- 新答案：The N-terminus has the free backbone amino group; the C-terminus has the free backbone carboxyl group.

### 2.46 · 合并

- 原题：Which end of a polypeptide has the free backbone carboxyl group?
- 原答案：The C-terminus.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.45 — How do you distinguish the N-terminus from the C-terminus in a peptide backbone?

### 2.47 · 合并

- 原题：In which direction are protein sequences conventionally written?
- 原答案：N-terminus→C-terminus.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.48 — To which end are new amino acids added during normal protein synthesis?

### 2.48 · 保留

- 原题：To which end are new amino acids added during normal protein synthesis?
- 原答案：The C-terminal end.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.49 · 重写

- 原题：A peptide is drawn with its N-terminus on the right. Which end normally grows?
- 原答案：The left-hand C-terminal end.
- 理由：保留反向结构应用；给出化学依据，消除猜图片位置。
- 新题：A peptide is drawn with its free backbone carboxyl group on the left. At which end is the next residue added?
- 新答案：At the left-hand C-terminus; chemical identity determines direction, not page orientation.

### 2.50 · 合并

- 原题：Which groups connect when two amino acids form a peptide linkage in the course model?
- 原答案：The carboxyl group of one and amino group of the other.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.53 — Which groups supply the C and N of a peptide bond?

### 2.51 · 合并

- 原题：What reaction type breaks a peptide chain into smaller pieces using water?
- 原答案：Hydrolysis.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.146 — What happens to water in a hydrolysis reaction?

### 2.52 · 合并

- 原题：What reaction type describes joining free amino acids with net loss of water?
- 原答案：Condensation/dehydration in the simplified course model.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.145 — Two free monomers join with net release of H₂O. What reaction type is modeled?

### 2.53 · 合并

- 原题：How many peptide bonds join three amino-acid residues in one unbranched chain?
- 原答案：Two.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.54 — How many peptide bonds join 10 amino acids in one unbranched, noncyclic chain?

### 2.54 · 重写

- 原题：How many peptide bonds join n amino-acid residues in one unbranched chain?
- 原答案：n − 1.
- 理由：以一次计算替代 n−1 与三肽的重复问法。
- 新题：How many peptide bonds join 10 amino acids in one unbranched, noncyclic chain?
- 新答案：9 peptide bonds (n − 1).

### 2.55 · 保留

- 原题：Does an amino group on a side chain define the N-terminus?
- 原答案：No; the N-terminus is the free amino end of the backbone.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.56 · 删除

- 原题：Compare the extending ends of nucleic acids and proteins.
- 原答案：Nucleic acids extend at the 3′ end; proteins extend at the C-terminal end.
- 理由：重复并列核酸与蛋白质延伸端；分别已在 2.26 和 2.48 中检验，不增加新能力。

### 2.57 · 合并

- 原题：What simple sugar building blocks form disaccharides and polysaccharides?
- 原答案：Monosaccharides.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.108 — Which linkage joins monosaccharides in disaccharides and polysaccharides?

### 2.58 · 合并

- 原题：To which broad biomolecule class does a monosaccharide belong?
- 原答案：Carbohydrates.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.108 — Which linkage joins monosaccharides in disaccharides and polysaccharides?

### 2.59 · 合并

- 原题：Which linkage connects the sugar units of a disaccharide?
- 原答案：Glycosidic linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.108 — Which linkage joins monosaccharides in disaccharides and polysaccharides?

### 2.60 · 保留

- 原题：Which disaccharide is made from two glucose units?
- 原答案：Maltose.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.61 · 合并

- 原题：Which monosaccharides make maltose?
- 原答案：Glucose + glucose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.60 — Which disaccharide is made from two glucose units?

### 2.62 · 合并

- 原题：Which disaccharide contains glucose and galactose?
- 原答案：Lactose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.66 — Complete hydrolysis produces glucose and galactose from one course disaccharide. Which one?

### 2.63 · 合并

- 原题：Which monosaccharides make lactose?
- 原答案：Glucose + galactose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.66 — Complete hydrolysis produces glucose and galactose from one course disaccharide. Which one?

### 2.64 · 合并

- 原题：Which disaccharide contains glucose and fructose?
- 原答案：Sucrose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.67 — Complete hydrolysis produces glucose and fructose from one course disaccharide. Which one?

### 2.65 · 合并

- 原题：Which monosaccharides make sucrose?
- 原答案：Glucose + fructose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.67 — Complete hydrolysis produces glucose and fructose from one course disaccharide. Which one?

### 2.66 · 保留

- 原题：Complete hydrolysis produces glucose and galactose from one course disaccharide. Which one?
- 原答案：Lactose.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.67 · 保留

- 原题：Complete hydrolysis produces glucose and fructose from one course disaccharide. Which one?
- 原答案：Sucrose.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.68 · 保留

- 原题：Which polysaccharide is used for glucose storage in plants?
- 原答案：Starch.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.69 · 合并

- 原题：Which main-chain linkage is characteristic of starch?
- 原答案：α(1→4).
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.121 — Which linkage forms the glucose main chain of starch?

### 2.70 · 合并

- 原题：Which branched component of starch contains α(1→6) branch points?
- 原答案：Amylopectin.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.79 — A plant glucose polymer has α(1→4) chains and α(1→6) branches. Identify it.

### 2.71 · 合并

- 原题：Which linkage forms the main chains of amylopectin?
- 原答案：α(1→4).
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.121 — Which linkage forms the glucose main chain of starch?

### 2.72 · 合并

- 原题：Which linkage marks the branch points of amylopectin?
- 原答案：α(1→6).
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.122 — Which linkage forms an amylopectin branch point?

### 2.73 · 合并

- 原题：Are starch and amylopectin entirely separate categories?
- 原答案：No; amylopectin is a branched component of starch.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.79 — A plant glucose polymer has α(1→4) chains and α(1→6) branches. Identify it.

### 2.74 · 合并

- 原题：Which glucose polymer contains β(1→4) linkages?
- 原答案：Cellulose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.123 — Which linkage joins glucose residues in cellulose?

### 2.75 · 保留

- 原题：What is cellulose's main course-level biological role?
- 原答案：Structural support in plant cell walls.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.76 · 合并

- 原题：Which plant polysaccharide forms long structural fibres?
- 原答案：Cellulose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.75 — What is cellulose's main course-level biological role?

### 2.77 · 重写

- 原题：What linkage difference distinguishes starch main chains from cellulose?
- 原答案：Starch has α(1→4); cellulose has β(1→4).
- 理由：合并单体相同、位置编号相同和构型不同的重复问法。
- 新题：What linkage difference distinguishes starch from cellulose even though both contain glucose?
- 新答案：Starch has α(1→4) main-chain linkages; cellulose has β(1→4) linkages.

### 2.78 · 合并

- 原题：Do starch and cellulose differ because one uses glucose and the other does not?
- 原答案：No; both use glucose, but their linkage configurations differ.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.77 — What linkage difference distinguishes starch from cellulose even though both contain glucose?

### 2.79 · 保留

- 原题：A plant glucose polymer has α(1→4) chains and α(1→6) branches. Identify it.
- 原答案：Amylopectin.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.80 · 合并

- 原题：A plant glucose polymer has β(1→4) linkages and forms fibres. Identify it.
- 原答案：Cellulose.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.75 — What is cellulose's main course-level biological role?

### 2.81 · 合并

- 原题：Why can two polymers made from glucose have different biological roles?
- 原答案：Different linkage geometries produce different structures and enzyme recognition.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.126 — Why does glycosidic-linkage geometry matter biologically?

### 2.82 · 保留

- 原题：An enzyme recognizes α(1→4) linkages. Does that guarantee it can cleave β(1→4)?
- 原答案：No; the different geometry may prevent recognition.
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.83 · 保留

- 原题：An enzyme cleaves only α(1→4) bonds in amylopectin. Which branch-point linkage remains uncleaved by it?
- 原答案：α(1→6).
- 理由：保留独立学习目标；题干明确，答案简短。

### 2.84 · 合并

- 原题：After complete hydrolysis, both starch and cellulose yield glucose. Does that establish that their linkages were identical?
- 原答案：No; monomer identity does not specify linkage geometry.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：2.77 — What linkage difference distinguishes starch from cellulose even though both contain glucose?

### 2.85 · 合并

- 原题：What distinguishes a branch connection in amylopectin from its main-chain connection?
- 原答案：The second glucose contributes C6 at a branch instead of C4.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.122 — Which linkage forms an amylopectin branch point?

### 3.1 · 保留

- 原题：Why are lipids not classified as conventional repeating-monomer polymers?
- 原答案：Their diverse structures do not generally consist of long chains of identical repeating monomers.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.2 · 保留

- 原题：What two regions make up a fatty acid?
- 原答案：A hydrocarbon region and a carboxyl group.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.3 · 合并

- 原题：Which region of a fatty acid is mainly nonpolar?
- 原答案：The hydrocarbon chain.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.44 — Why is a long hydrocarbon chain hydrophobic?

### 3.4 · 合并

- 原题：Which region of a fatty acid can ionize in water?
- 原答案：The carboxyl group.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.18 — Which functional group occurs at the end of a fatty acid?

### 3.5 · 合并

- 原题：Complete the equilibrium: COOH ⇌ ____ + H⁺.
- 原答案：COO⁻.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.13 — Why does a carboxyl group become negatively charged after donating H⁺?

### 3.6 · 保留

- 原题：Does ionizing a fatty acid's carboxyl group make its hydrocarbon chain polar?
- 原答案：No; the chain remains mainly nonpolar.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.7 · 合并

- 原题：What components make one triacylglycerol?
- 原答案：One glycerol and three fatty acids.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.14 — What products result from complete hydrolysis of one triacylglycerol in the course model?

### 3.8 · 保留

- 原题：How many hydroxyl groups does glycerol have before esterification?
- 原答案：Three.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.9 · 保留

- 原题：How many ester linkages attach fatty acids in one triacylglycerol?
- 原答案：Three.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.10 · 保留

- 原题：What is the primary role of triacylglycerols in this unit?
- 原答案：Energy storage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.11 · 合并

- 原题：Which lipid combines glycerol with three fatty acids through ester linkages?
- 原答案：Triacylglycerol.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.14 — What products result from complete hydrolysis of one triacylglycerol in the course model?

### 3.12 · 合并

- 原题：What net reaction joins glycerol hydroxyls to fatty-acid carboxyls?
- 原答案：Esterification by condensation/dehydration.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.69 — What two functional groups react to form an ester in the course model?

### 3.13 · 保留

- 原题：In the simplified formation of one triacylglycerol from glycerol and three free fatty acids, how many waters are released?
- 原答案：Three, one per ester linkage.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.14 · 重写

- 原题：What are the products of complete triacylglycerol hydrolysis in the course model?
- 原答案：Glycerol and three fatty acids.
- 理由：用水解情境整合重复的组成正反问。
- 新题：What products result from complete hydrolysis of one triacylglycerol in the course model?
- 新答案：Glycerol and three fatty acids (or their carboxylates, depending on pH).

### 3.15 · 删除

- 原题：Can the three fatty-acid chains of a triacylglycerol vary in length?
- 原答案：Yes.
- 理由：仅判断脂肪酸链长可以变化，辨别力低；没有独立的课程应用目标。

### 3.16 · 合并

- 原题：What does hydrophilic mean?
- 原答案：Interacts favorably with water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.17 — What chemical features usually make a region hydrophilic?

### 3.17 · 保留

- 原题：What chemical features usually make a region hydrophilic?
- 原答案：Polar bonds or ionic charges.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.18 · 合并

- 原题：What does hydrophobic mean?
- 原答案：Interacts poorly with water relative to polar or charged regions.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.44 — Why is a long hydrocarbon chain hydrophobic?

### 3.19 · 合并

- 原题：What chemical features usually make a region hydrophobic?
- 原答案：A largely nonpolar, uncharged structure.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.44 — Why is a long hydrocarbon chain hydrophobic?

### 3.20 · 合并

- 原题：What does amphipathic mean?
- 原答案：Having both hydrophilic and hydrophobic regions.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.21 — A molecule has a polar head and nonpolar tails. What term describes this arrangement?

### 3.21 · 保留

- 原题：A molecule has a polar head and nonpolar tails. What term describes this arrangement?
- 原答案：Amphipathic.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.22 · 合并

- 原题：Which course example is amphipathic: soap or a hydrocarbon-only oil molecule?
- 原答案：Soap.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.21 — A molecule has a polar head and nonpolar tails. What term describes this arrangement?

### 3.23 · 合并

- 原题：Which part of a typical phospholipid faces water in a membrane?
- 原答案：The hydrophilic head region.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.36 — How are phospholipid heads and tails oriented in a bilayer surrounded by water?

### 3.24 · 合并

- 原题：Which part of a typical phospholipid avoids exposure to water?
- 原答案：The hydrocarbon tails.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.36 — How are phospholipid heads and tails oriented in a bilayer surrounded by water?

### 3.25 · 重写

- 原题：What components form the polar region of the course's glycerol-based phospholipid?
- 原答案：The polar head group, phosphate, and oxygen-containing glycerol region.
- 理由：用明确分子取代“整个 glycerol 都是 head”的模糊归类。
- 新题：Which parts make the head region of phosphatidylcholine hydrophilic?
- 新答案：Its charged phosphate and choline groups, plus nearby polar oxygen-containing bonds.

### 3.26 · 保留

- 原题：What backbone connects the head region and fatty-acid chains in a glycerol-based phospholipid?
- 原答案：Glycerol.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.27 · 保留

- 原题：Which head-group component is named in phosphatidylcholine?
- 原答案：Choline.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.28 · 保留

- 原题：How many fatty-acid tails does the typical glycerol-based phospholipid in this unit have?
- 原答案：Two.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.29 · 合并

- 原题：What linkage attaches each fatty acid to glycerol in the course's typical phospholipid?
- 原答案：Ester linkage.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.77 — In a common glycerol-based phospholipid, what links a fatty acid to glycerol?

### 3.30 · 保留

- 原题：Can an overall electrically neutral phospholipid still have a hydrophilic head?
- 原答案：Yes; its head can contain polar bonds and opposite charges.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.31 · 保留

- 原题：What kind of fatty-acid double bond commonly creates a kink?
- 原答案：A cis double bond.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.32 · 合并

- 原题：Does every possible C=C arrangement necessarily create the same kink?
- 原答案：No; the course's bent-tail drawing represents a cis double bond.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.31 — What kind of fatty-acid double bond commonly creates a kink?

### 3.33 · 保留

- 原题：Compared with straight tails, how do kinked tails affect close packing?
- 原答案：They make close packing more difficult.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.34 · 保留

- 原题：Why is an isolated single phospholipid sheet unstable when water surrounds it on both sides?
- 原答案：Its tails would be exposed to water on one side.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.35 · 合并

- 原题：In a bilayer, where do the hydrophilic heads point?
- 原答案：Toward water on both outer surfaces.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.36 — How are phospholipid heads and tails oriented in a bilayer surrounded by water?

### 3.36 · 重写

- 原题：In a bilayer, where do the hydrophobic tails point?
- 原答案：Inward, toward one another and away from water.
- 理由：把两半方向题合为同一个空间关系；不依赖图片上下。
- 新题：How are phospholipid heads and tails oriented in a bilayer surrounded by water?
- 新答案：Heads face water on both sides; tails face inward, away from water.

### 3.37 · 保留

- 原题：What is a leaflet?
- 原答案：One of the two phospholipid layers making up a bilayer.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.38 · 合并

- 原题：How many leaflets make one bilayer?
- 原答案：Two.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.37 — What is a leaflet?

### 3.39 · 合并

- 原题：What is a liposome?
- 原答案：A closed phospholipid bilayer enclosing an aqueous cavity.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.49 — A circular cross-section has heads facing both the outside water and a water-filled center. Identify the aggregate.

### 3.40 · 合并

- 原题：What is inside a liposome's central cavity?
- 原答案：Water and potentially dissolved substances.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.44 — Which course aggregate has an aqueous cavity: a micelle or a liposome?

### 3.41 · 合并

- 原题：Is a liposome's central cavity the same as its hydrophobic bilayer interior?
- 原答案：No; the cavity is aqueous, while the tails occupy the bilayer itself.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.44 — Which course aggregate has an aqueous cavity: a micelle or a liposome?

### 3.42 · 合并

- 原题：What is a micelle?
- 原答案：An aggregate with hydrophilic heads outside and hydrophobic tails packed inward.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.44 — Which course aggregate has an aqueous cavity: a micelle or a liposome?

### 3.43 · 合并

- 原题：Does a typical micelle have an aqueous central cavity?
- 原答案：No; its core is hydrophobic.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.44 — Which course aggregate has an aqueous cavity: a micelle or a liposome?

### 3.44 · 保留

- 原题：Which course aggregate has an aqueous cavity: a micelle or a liposome?
- 原答案：A liposome.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.45 · 重写

- 原题：Which molecular shape favors micelles in the course notes?
- 原答案：A bulky hydrophilic head with a single hydrophobic tail.
- 理由：合并形状偏好，保留分子形状→组装方式的原因。
- 新题：Why do single-tail amphiphiles with bulky heads often favor micelles over bilayers?
- 新答案：Their cone-like shape packs well around a curved, tail-filled core.

### 3.46 · 合并

- 原题：Which arrangement is favored by the typical two-tailed phospholipids in this unit?
- 原答案：A bilayer.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.45 — Why do single-tail amphiphiles with bulky heads often favor micelles over bilayers?

### 3.47 · 保留

- 原题：Why can closing a bilayer into a liposome be favorable?
- 原答案：It removes exposed edges where hydrophobic tails could contact water.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.48 · 保留

- 原题：A circular cross-section has one layer of heads outside and tails filling the center. Identify the aggregate.
- 原答案：Micelle.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.49 · 保留

- 原题：A circular cross-section has heads facing both the outside water and a water-filled center. Identify the aggregate.
- 原答案：Liposome.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.50 · 合并

- 原题：Does one lipid bilayer mean two separate membranes?
- 原答案：No; its two leaflets form one membrane bilayer.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.37 — What is a leaflet?

### 3.51 · 重写

- 原题：What does a mitochondrial double membrane mean?
- 原答案：Two separate bilayers with an intermembrane space between them.
- 理由：合并双膜与四叶层的机械重复。
- 新题：How many bilayers make up the mitochondrial double membrane?
- 新答案：Two separate bilayers, with an intermembrane space between them (four leaflets total).

### 3.52 · 合并

- 原题：How many leaflets are present across two separate bilayers?
- 原答案：Four.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.51 — How many bilayers make up the mitochondrial double membrane?

### 3.53 · 重写

- 原题：Which two course organelle groups have double membranes?
- 原答案：Mitochondria and plastids.
- 理由：纠正原课堂笔记“折起来的一层”的误解；补明确的双膜例子，替代不完整的举例清单。
- 新题：Does the nuclear envelope contain one bilayer or two?
- 新答案：Two bilayers: the inner and outer nuclear membranes. The outer membrane is continuous with the ER.

### 3.54 · 保留

- 原题：Name a course organelle surrounded by a single membrane bilayer.
- 原答案：ER, Golgi, or lysosome.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.55 · 保留

- 原题：What membrane property helps maintain cellular homeostasis?
- 原答案：Selective permeability.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.56 · 合并

- 原题：What creates the main barrier to ions in a lipid bilayer?
- 原答案：Its hydrophobic interior.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.59 — Why do ions usually need transport proteins to cross a lipid bilayer?

### 3.57 · 保留

- 原题：Which passes through a lipid bilayer more easily: O₂ or Na⁺?
- 原答案：O₂; it is small and nonpolar.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.58 · 重写

- 原题：Can water cross a lipid bilayer at all without a channel?
- 原答案：Yes, to a limited extent; aquaporins enable much faster movement.
- 理由：合并水能否透过与水通道名称，考查功能解释。
- 新题：Why does adding aquaporins increase water transport across a membrane?
- 新答案：Water can cross the lipid bilayer slowly; aquaporin channels provide a much faster pathway.

### 3.59 · 重写

- 原题：Why do many polar solutes need membrane transport proteins?
- 原答案：The hydrophobic bilayer interior strongly limits their direct passage.
- 理由：保留屏障机制，区别于O₂和Na⁺的具体通透性比较。
- 新题：Why do ions usually need transport proteins to cross a lipid bilayer?
- 新答案：The hydrophobic interior is energetically unfavorable for charged, hydrated ions.

### 3.60 · 保留

- 原题：What two membrane components together determine selective permeability?
- 原答案：The lipid bilayer and membrane proteins.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.61 · 重写

- 原题：What kind of protein forms a selective aqueous passage across a membrane?
- 原答案：A channel protein.
- 理由：合并两个独立定义为机制比较。
- 新题：How does a carrier move a solute differently from a channel?
- 新答案：A carrier binds the solute and changes conformation; a channel provides a selective pore.

### 3.62 · 合并

- 原题：What kind of transport protein binds a solute and changes shape to move it?
- 原答案：A carrier protein.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.61 — How does a carrier move a solute differently from a channel?

### 3.63 · 合并

- 原题：What are aquaporins specialized to transport?
- 原答案：Water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.58 — Why does adding aquaporins increase water transport across a membrane?

### 3.64 · 保留

- 原题：Does movement through a membrane protein automatically mean active transport?
- 原答案：No; facilitated diffusion also uses proteins.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.65 · 保留

- 原题：What distinguishes simple from facilitated diffusion?
- 原答案：Simple diffusion crosses the lipid bilayer; facilitated diffusion uses a membrane protein.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.66 · 合并

- 原题：Does facilitated diffusion directly require ATP?
- 原答案：No; it moves substances down their gradient.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.64 — Does movement through a membrane protein automatically mean active transport?

### 3.67 · 保留

- 原题：At diffusion equilibrium, do molecules stop moving?
- 原答案：No; movement continues in both directions with no net movement.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.68 · 保留

- 原题：What distinguishes active transport from passive transport?
- 原答案：Active transport uses energy to move a substance against its gradient.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.69 · 保留

- 原题：Where does primary active transport obtain energy directly?
- 原答案：ATP, in the course examples.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.70 · 合并

- 原题：Where does secondary active transport obtain its immediate energy?
- 原答案：An ion moving down its electrochemical gradient.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.71 — Why can secondary active transport be active even without direct ATP use?

### 3.71 · 保留

- 原题：Why can secondary active transport be active even without direct ATP use?
- 原答案：It couples downhill ion movement to uphill movement of another solute.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.72 · 保留

- 原题：What two differences make up an electrochemical gradient?
- 原答案：Ion concentration difference and electrical potential difference.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.73 · 合并

- 原题：What is osmosis?
- 原答案：Net water movement across a selectively permeable membrane.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.74 — A membrane passes water but not solute. Side A has more solute than B, with equal pressure. Which way is net water flow?

### 3.74 · 重写

- 原题：With equal pressure and impermeant solute, toward which side does water move by osmosis?
- 原答案：Toward the side with higher effective solute concentration.
- 理由：明确不可透溶质和压力前提，避免只说总溶质浓度。
- 新题：A membrane passes water but not solute. Side A has more solute than B, with equal pressure. Which way is net water flow?
- 新答案：From B to A, toward the higher concentration of nonpenetrating solute.

### 3.75 · 重写

- 原题：What happens to an animal cell in a hypotonic solution?
- 原答案：Water enters and the cell swells; severe swelling can cause lysis.
- 理由：保留细胞应用，合并正反方向题；与跨膜水运动原理分开。
- 新题：An animal cell enters a hypotonic solution. What happens to its volume?
- 新答案：Water enters by osmosis; the cell swells and may lyse.

### 3.76 · 合并

- 原题：What happens to an animal cell in a hypertonic solution?
- 原答案：Water leaves and the cell shrinks.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.75 — An animal cell enters a hypotonic solution. What happens to its volume?

### 3.77 · 合并

- 原题：What happens to net water movement in an isotonic solution?
- 原答案：There is no net water movement, although water still moves both ways.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.67 — At diffusion equilibrium, do molecules stop moving?

### 3.78 · 保留

- 原题：Why do ion pumps help cells regulate their volume?
- 原答案：Ion concentrations affect osmotic water movement.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.79 · 保留

- 原题：What does a contractile vacuole do in a freshwater protist?
- 原答案：Collects and expels excess water.
- 理由：保留独立学习目标；题干明确，答案简短。

### 3.80 · 合并

- 原题：What is turgor pressure?
- 原答案：Outward pressure of cell contents against the plant cell wall.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.81 — Why does a plant cell wall limit osmotic swelling?

### 3.81 · 重写

- 原题：How does a plant cell wall limit swelling?
- 原答案：It resists expansion and pushes back against turgor pressure.
- 理由：把 turgor 定义与细胞壁作用合成因果题。
- 新题：Why does a plant cell wall limit osmotic swelling?
- 新答案：As water enters, the wall resists expansion; rising turgor pressure opposes further net water entry.

### 3.82 · 保留

- 原题：What protein framework helps maintain cell shape?
- 原答案：The cytoskeleton.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.1 · 删除

- 原题：About what fraction of cell mass is water in the course notes?
- 原答案：About 70%.
- 理由：70% 的孤立比例记忆不是本单元需要检验的机制。

### 4.2 · 保留

- 原题：What noncovalent interaction do water molecules form with one another?
- 原答案：Hydrogen bonds.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.3 · 合并

- 原题：Does calling water a universal solvent mean it dissolves every substance well?
- 原答案：No; nonpolar substances often dissolve poorly.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：1.44 — Why is a long hydrocarbon chain hydrophobic?

### 4.4 · 合并

- 原题：What effect is central to spontaneous bilayer assembly in water?
- 原答案：The hydrophobic effect.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.5 · 重写

- 原题：Write the Gibbs free-energy equation used in this unit.
- 原答案：ΔG = ΔH − TΔS.
- 理由：把符号碎片定义改为理解能量平衡的一题。
- 新题：In ΔG = ΔH − TΔS, what competes with the enthalpy change?
- 新答案：The entropy contribution −TΔS; T is absolute temperature and ΔS is the system’s entropy change.

### 4.6 · 合并

- 原题：What does ΔG represent?
- 原答案：The change in Gibbs free energy.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.5 — In ΔG = ΔH − TΔS, what competes with the enthalpy change?

### 4.7 · 合并

- 原题：What does ΔH represent?
- 原答案：The enthalpy change; heat absorbed or released at constant pressure.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.5 — In ΔG = ΔH − TΔS, what competes with the enthalpy change?

### 4.8 · 合并

- 原题：What does ΔS represent?
- 原答案：The entropy change of the system being considered.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.5 — In ΔG = ΔH − TΔS, what competes with the enthalpy change?

### 4.9 · 保留

- 原题：What temperature scale is required in ΔG = ΔH − TΔS?
- 原答案：Kelvin.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.10 · 重写

- 原题：What does ΔG < 0 mean at constant temperature and pressure?
- 原答案：The process is thermodynamically favorable in the stated direction.
- 理由：明确条件并消除“更稳定所以一定很快”的误解。
- 新题：At constant temperature and pressure, what does ΔG < 0 tell you?
- 新答案：The process is thermodynamically favorable in the forward direction; it says nothing about its speed.

### 4.11 · 合并

- 原题：What does ΔG > 0 mean for the stated process under those conditions?
- 原答案：It is thermodynamically unfavorable without coupling or changed conditions.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.10 — At constant temperature and pressure, what does ΔG < 0 tell you?

### 4.12 · 合并

- 原题：What does ΔG = 0 indicate at equilibrium?
- 原答案：No net thermodynamic driving force in either direction.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.10 — At constant temperature and pressure, what does ΔG < 0 tell you?

### 4.13 · 保留

- 原题：Does spontaneous mean instantaneous or fast?
- 原答案：No; spontaneity describes thermodynamic favorability, not rate.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.14 · 合并

- 原题：Does spontaneous bilayer assembly require zero molecular motion?
- 原答案：No; molecular motion allows lipids to rearrange.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.49 — Must an aggregate's molecules stay completely motionless for it to be stable?

### 4.15 · 重写

- 原题：What happens to nearby water when an isolated hydrophobic tail is exposed in the course model?
- 原答案：Water becomes more ordered and its motion is restricted.
- 理由：保留微观机制，标明是课程简化模型；去除方位猜测。
- 新题：In the lecture model, why does water near exposed nonpolar tails have lower entropy?
- 新答案：Its possible arrangements and motion are more constrained around the nonpolar surfaces.

### 4.16 · 合并

- 原题：How does ordering water around exposed hydrophobic tails affect water entropy?
- 原答案：It lowers water entropy.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.15 — In the lecture model, why does water near exposed nonpolar tails have lower entropy?

### 4.17 · 合并

- 原题：When many hydrophobic tails aggregate, what happens to the total tail surface exposed to water?
- 原答案：It decreases.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.18 — Why does burying hydrophobic tails increase water entropy in the lecture model?

### 4.18 · 重写

- 原题：Why are water molecules released when hydrophobic tails aggregate?
- 原答案：Less hydrophobic surface remains exposed, so fewer waters must organize around it.
- 理由：合并表面积、水释放、自由度增加的重复叙述为一个因果问题。
- 新题：Why does burying hydrophobic tails increase water entropy in the lecture model?
- 新答案：Less nonpolar surface contacts water, releasing constrained water molecules into the bulk.

### 4.19 · 合并

- 原题：What happens to the freedom of released water molecules?
- 原答案：They become freer to move and arrange themselves.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.18 — Why does burying hydrophobic tails increase water entropy in the lecture model?

### 4.20 · 合并

- 原题：What is the sign of ΔS_water during aggregation in the lecture model?
- 原答案：Positive.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.18 — Why does burying hydrophobic tails increase water entropy in the lecture model?

### 4.21 · 合并

- 原题：What is the sign of ΔS_lipids during ordered bilayer assembly in the lecture model?
- 原答案：Negative.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.22 — Why can lipid entropy decrease during assembly?

### 4.22 · 保留

- 原题：Why can lipid entropy decrease during assembly?
- 原答案：Lipids become more constrained in the organized aggregate.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.23 · 重写

- 原题：In the lecture model, which entropy change is larger in magnitude during favorable assembly?
- 原答案：The increase in water entropy exceeds the decrease in lipid entropy.
- 理由：保留脂质与水的熵比较；不与结构识别混合。
- 新题：How can bilayer formation be favored even though lipid entropy decreases?
- 新答案：The increase in water entropy can outweigh the decrease in lipid entropy.

### 4.24 · 合并

- 原题：When adding water and lipid entropy changes, what is the sign of total ΔS in the lecture model?
- 原答案：Positive.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.25 · 合并

- 原题：Why is looking only at lipid order insufficient to judge bilayer formation?
- 原答案：The surrounding water contributes to the system's entropy change too.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.26 · 合并

- 原题：If ΔS is positive and T is positive, what is the sign of −TΔS?
- 原答案：Negative.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.27 — How does a positive ΔS affect ΔG when ΔH and T are fixed?

### 4.27 · 重写

- 原题：How can an increase in total entropy favor bilayer assembly?
- 原答案：It makes −TΔS more negative, lowering ΔG.
- 理由：合并熵项符号和有利性两个同义问法。
- 新题：How does a positive ΔS affect ΔG when ΔH and T are fixed?
- 新答案：It makes −TΔS negative and lowers ΔG.

### 4.28 · 保留

- 原题：Does a positive ΔS alone guarantee a negative ΔG?
- 原答案：No; ΔH must also be included in ΔG = ΔH − TΔS.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.29 · 合并

- 原题：What is the lecture's main explanation for hydrophobic-tail aggregation?
- 原答案：Aggregation releases ordered water, increasing water entropy enough to favor assembly.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.30 · 合并

- 原题：Do tails aggregate because water forms covalent bonds between them?
- 原答案：No; assembly is driven by noncovalent interactions and the hydrophobic effect.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.50 — Is forming a bilayer the same chemical process as synthesizing a phospholipid?

### 4.31 · 合并

- 原题：Are strong special bonds between hydrophobic tails required to explain their aggregation?
- 原答案：No; the water-entropy contribution is central in the course model.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.32 · 保留

- 原题：Does hydrophobic mean that water and a hydrocarbon have absolutely no interactions?
- 原答案：No; the interactions are less favorable than those available to polar or charged regions.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.33 · 合并

- 原题：Why do phospholipid heads remain exposed to water during assembly?
- 原答案：Their polar or charged groups interact favorably with water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.36 — How are phospholipid heads and tails oriented in a bilayer surrounded by water?

### 4.34 · 合并

- 原题：Why do tails become buried during assembly?
- 原答案：Burial reduces hydrophobic surface exposed to water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.18 — Why does burying hydrophobic tails increase water entropy in the lecture model?

### 4.35 · 合并

- 原题：What connects amphipathic structure to the orientation of lipids in a bilayer?
- 原答案：Polar heads favor water contact while nonpolar tails become sheltered inside.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.36 · 重写

- 原题：A bilayer forms and the lipids become more ordered. Has the second law necessarily been violated?
- 原答案：No; water and the surroundings must also be included in the entropy accounting.
- 理由：纠正把第二定律等同于仅脂质或仅系统熵增加的说法。
- 新题：At constant T and P, how does a spontaneous process with ΔG < 0 relate to the second law?
- 新答案：The entropy of the system plus surroundings increases; the system alone need not gain entropy.

### 4.37 · 合并

- 原题：What is the appropriate system for the lecture's lipid-versus-water entropy comparison?
- 原答案：The lipids together with the surrounding water.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.38 · 重写

- 原题：If ΔS_lipids = −20 J/K and ΔS_water = +50 J/K, what is their combined ΔS?
- 原答案：+30 J/K.
- 理由：保留定量求和应用，只留一个同型例题。
- 新题：Lipids change entropy by −20 J/K and water by +50 J/K. What is their combined change?
- 新答案：+30 J/K: the water’s increase outweighs the lipid decrease.

### 4.39 · 合并

- 原题：If ΔS_lipids = −40 J/K and ΔS_water = +15 J/K, does their combined entropy increase?
- 原答案：No; the combined ΔS is −25 J/K.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.38 — Lipids change entropy by −20 J/K and water by +50 J/K. What is their combined change?

### 4.40 · 合并

- 原题：If T = 300 K and ΔS = +0.020 kJ/K, what is TΔS?
- 原答案：+6 kJ.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.41 — At 300 K, ΔH = +2 kJ and ΔS = +20 J/K. Calculate ΔG.

### 4.41 · 重写

- 原题：If ΔH = +2 kJ and TΔS = +6 kJ, what is ΔG?
- 原答案：−4 kJ; favorable in the stated direction.
- 理由：一个完整计算涵盖单位转换、熵项和符号，不拆步骤制造卡。
- 新题：At 300 K, ΔH = +2 kJ and ΔS = +20 J/K. Calculate ΔG.
- 新答案：ΔG = 2 − 300 × 0.020 = −4 kJ; the process is favorable.

### 4.42 · 合并

- 原题：If ΔH = +8 kJ and TΔS = +6 kJ, what is ΔG?
- 原答案：+2 kJ; unfavorable in the stated direction.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.41 — At 300 K, ΔH = +2 kJ and ΔS = +20 J/K. Calculate ΔG.

### 4.43 · 合并

- 原题：Why must ΔH and TΔS use compatible units before subtraction?
- 原答案：Both terms must be expressed in the same energy units.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.41 — At 300 K, ΔH = +2 kJ and ΔS = +20 J/K. Calculate ΔG.

### 4.44 · 保留

- 原题：Assuming ΔH and positive ΔS remain constant, how does increasing T affect ΔG?
- 原答案：It lowers ΔG because −TΔS becomes more negative.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.45 · 合并

- 原题：Does the lecture's hydrophobic-effect model require bilayer formation to release heat?
- 原答案：No; a sufficiently favorable entropy term can outweigh positive ΔH.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.28 — Does a positive ΔS alone guarantee a negative ΔG?

### 4.46 · 合并

- 原题：What would exposing more hydrophobic tail area do to nearby water in the course model?
- 原答案：It would require more water ordering and reduce water entropy.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.15 — In the lecture model, why does water near exposed nonpolar tails have lower entropy?

### 4.47 · 合并

- 原题：Why does a bilayer's exposed edge tend to be unfavorable in water?
- 原答案：It exposes hydrophobic tails, promoting water ordering around them.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：3.47 — Why can closing a bilayer into a liposome be favorable?

### 4.48 · 保留

- 原题：Why is the hydrophobic effect weaker as an explanation if no water is present?
- 原答案：The water-ordering and water-release mechanism no longer applies.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.49 · 保留

- 原题：Must an aggregate's molecules stay completely motionless for it to be stable?
- 原答案：No; thermodynamic stability is compatible with ongoing molecular motion.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.50 · 保留

- 原题：Is forming a bilayer the same chemical process as synthesizing a phospholipid?
- 原答案：No; assembly rearranges existing lipids, while synthesis forms covalent linkages.
- 理由：保留独立学习目标；题干明确，答案简短。

### 4.51 · 合并

- 原题：What changes during esterification that need not change during bilayer assembly?
- 原答案：Covalent bonds change during esterification.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.50 — Is forming a bilayer the same chemical process as synthesizing a phospholipid?

### 4.52 · 合并

- 原题：An exam answer says “lipids order, so entropy decreases and assembly cannot occur.” What did it omit?
- 原答案：The entropy increase of water released from exposed hydrophobic surfaces.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.53 · 合并

- 原题：An exam answer says “ΔG is negative because the tails want to hide.” What mechanism should replace that wording?
- 原答案：Tail burial releases ordered water; the resulting entropy contribution lowers ΔG.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.18 — Why does burying hydrophobic tails increase water entropy in the lecture model?

### 4.54 · 删除

- 原题：After tails cluster, fewer waters contact them. Does that mean the released water disappears?
- 原答案：No; it returns to the surrounding bulk water.
- 理由：“水没有消失”是字面误解提醒，无独立考查价值。

### 4.55 · 合并

- 原题：What is the immediate link between reduced tail exposure and increased water entropy?
- 原答案：Fewer water molecules remain constrained around hydrophobic surfaces.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.18 — Why does burying hydrophobic tails increase water entropy in the lecture model?

### 4.56 · 合并

- 原题：Does ΔG < 0 prove that ΔS_lipids > 0?
- 原答案：No; ΔG depends on enthalpy and the entropy change of the full system.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.23 — How can bilayer formation be favored even though lipid entropy decreases?

### 4.57 · 合并

- 原题：Which term in ΔG = ΔH − TΔS captures the lecture's main water-release contribution?
- 原答案：The entropy term, −TΔS.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：4.27 — How does a positive ΔS affect ΔG when ΔH and T are fixed?

### 5.1 · 保留

- 原题：What does A represent in AXₓEₑ notation?
- 原答案：The central atom.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.2 · 保留

- 原题：What does X count in the supplied VSEPR tables?
- 原答案：Atoms attached to the central atom.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.3 · 保留

- 原题：What does E count in the supplied VSEPR tables?
- 原答案：Lone pairs on the central atom.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.4 · 重写

- 原题：Which total selects the VSEPR parent shape?
- 原答案：E + X: lone pairs on A plus attached atoms.
- 理由：将计数定义改为实际应用。
- 新题：A central atom has four bonded atoms and one lone pair. How many electron domains determine its parent geometry?
- 新答案：Five domains (X + E = 4 + 1).

### 5.5 · 保留

- 原题：Does the molecular shape name include the positions of lone pairs?
- 原答案：No. It describes the attached atoms; lone pairs still influence their arrangement.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.6 · 保留

- 原题：When do the parent shape and molecular shape have the same name in these tables?
- 原答案：When E = 0: every parent position is occupied by an attached atom.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.7 · 合并

- 原题：Why can two molecules with the same parent shape have different molecular shapes?
- 原答案：Different numbers or positions of lone pairs leave different arrangements of attached atoms.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.60 — A molecule has X = 3. Is that enough to choose between trigonal planar, trigonal pyramidal, and T-shaped?

### 5.8 · 保留

- 原题：In VSEPR domain counting, is a double bond one region or two around A?
- 原答案：One bonding region; multiple bonds connect A to one attached atom in the table’s X count.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.9 · 保留

- 原题：E + X = 2. What is the parent shape?
- 原答案：Linear.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.10 · 合并

- 原题：What E + X total gives a linear parent shape?
- 原答案：2.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.9 — E + X = 2. What is the parent shape?

### 5.11 · 保留

- 原题：E + X = 3. What is the parent shape?
- 原答案：Trigonal planar.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.12 · 合并

- 原题：What E + X total gives a trigonal planar parent shape?
- 原答案：3.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.11 — E + X = 3. What is the parent shape?

### 5.13 · 保留

- 原题：E + X = 4. What is the parent shape?
- 原答案：Tetrahedral.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.14 · 合并

- 原题：What E + X total gives a tetrahedral parent shape?
- 原答案：4.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.13 — E + X = 4. What is the parent shape?

### 5.15 · 保留

- 原题：E + X = 5. What is the parent shape?
- 原答案：Trigonal bipyramidal.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.16 · 合并

- 原题：What E + X total gives a trigonal bipyramidal parent shape?
- 原答案：5.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.15 — E + X = 5. What is the parent shape?

### 5.17 · 保留

- 原题：E + X = 6. What is the parent shape?
- 原答案：Octahedral.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.18 · 合并

- 原题：What E + X total gives a octahedral parent shape?
- 原答案：6.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.17 — E + X = 6. What is the parent shape?

### 5.19 · 保留

- 原题：E + X = 7. What is the parent shape?
- 原答案：Pentagonal bipyramidal.
- 理由：保留独立学习目标；题干明确，答案简短。

### 5.20 · 合并

- 原题：What E + X total gives a pentagonal bipyramidal parent shape?
- 原答案：7.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.19 — E + X = 7. What is the parent shape?

### 5.21 · 重写

- 原题：In a perspective drawing, what does a solid wedge mean?
- 原答案：A bond projecting toward the viewer.
- 理由：合并成单一空间表示比较。
- 新题：How do solid wedges and dashed wedges differ in a perspective bond drawing?
- 新答案：A solid wedge points toward you; a dashed wedge points away.

### 5.22 · 合并

- 原题：In a perspective drawing, what does a dashed wedge mean?
- 原答案：A bond projecting away from the viewer.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.21 — How do solid wedges and dashed wedges differ in a perspective bond drawing?

### 5.23 · 合并

- 原题：What do two dots beside A usually represent in these diagrams?
- 原答案：One lone pair on the central atom.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.3 — What does E count in the supplied VSEPR tables?

### 5.24 · 保留

- 原题：Does rotating a perspective drawing change the molecular shape?
- 原答案：No. The relative three-dimensional arrangement stays the same.
- 理由：保留独立学习目标；题干明确，答案简短。

### 6.1 · 保留

- 原题：AX₂: what is the molecular shape?
- 原答案：Linear.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.2 · 合并

- 原题：AX₂: what is the parent shape?
- 原答案：Linear.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.1 — AX₂: what is the molecular shape?

### 6.3 · 删除

- 原题：AX₂: how many lone pairs are on A?
- 原答案：0.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.4 · 合并

- 原题：Linear with a linear parent: what are X and E?
- 原答案：X = 2, E = 0.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.1 — AX₂: what is the molecular shape?

### 6.5 · 保留

- 原题：AX₃: what is the molecular shape?
- 原答案：Trigonal planar.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.6 · 合并

- 原题：AX₃: what is the parent shape?
- 原答案：Trigonal planar.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.5 — AX₃: what is the molecular shape?

### 6.7 · 删除

- 原题：AX₃: how many lone pairs are on A?
- 原答案：0.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.8 · 合并

- 原题：Trigonal planar with a trigonal planar parent: what are X and E?
- 原答案：X = 3, E = 0.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.5 — AX₃: what is the molecular shape?

### 6.9 · 保留

- 原题：AX₂E: what is the molecular shape?
- 原答案：Bent.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.10 · 合并

- 原题：AX₂E: what is the parent shape?
- 原答案：Trigonal planar.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.11 — E + X = 3. What is the parent shape?

### 6.11 · 删除

- 原题：AX₂E: how many lone pairs are on A?
- 原答案：1.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.12 · 合并

- 原题：Bent with a trigonal planar parent: what are X and E?
- 原答案：X = 2, E = 1.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.9 — AX₂E: what is the molecular shape?

### 6.13 · 保留

- 原题：AX₄: what is the molecular shape?
- 原答案：Tetrahedral.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.14 · 合并

- 原题：AX₄: what is the parent shape?
- 原答案：Tetrahedral.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.13 — AX₄: what is the molecular shape?

### 6.15 · 删除

- 原题：AX₄: how many lone pairs are on A?
- 原答案：0.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.16 · 合并

- 原题：Tetrahedral with a tetrahedral parent: what are X and E?
- 原答案：X = 4, E = 0.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.13 — AX₄: what is the molecular shape?

### 6.17 · 保留

- 原题：AX₃E: what is the molecular shape?
- 原答案：Trigonal pyramidal.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.18 · 合并

- 原题：AX₃E: what is the parent shape?
- 原答案：Tetrahedral.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.13 — E + X = 4. What is the parent shape?

### 6.19 · 删除

- 原题：AX₃E: how many lone pairs are on A?
- 原答案：1.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.20 · 合并

- 原题：Trigonal pyramidal with a tetrahedral parent: what are X and E?
- 原答案：X = 3, E = 1.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.17 — AX₃E: what is the molecular shape?

### 6.21 · 保留

- 原题：AX₂E₂: what is the molecular shape?
- 原答案：Bent.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.22 · 合并

- 原题：AX₂E₂: what is the parent shape?
- 原答案：Tetrahedral.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.13 — E + X = 4. What is the parent shape?

### 6.23 · 删除

- 原题：AX₂E₂: how many lone pairs are on A?
- 原答案：2.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.24 · 合并

- 原题：Bent with a tetrahedral parent: what are X and E?
- 原答案：X = 2, E = 2.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.21 — AX₂E₂: what is the molecular shape?

### 6.25 · 保留

- 原题：AX₅: what is the molecular shape?
- 原答案：Trigonal bipyramidal.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.26 · 合并

- 原题：AX₅: what is the parent shape?
- 原答案：Trigonal bipyramidal.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.25 — AX₅: what is the molecular shape?

### 6.27 · 删除

- 原题：AX₅: how many lone pairs are on A?
- 原答案：0.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.28 · 合并

- 原题：Trigonal bipyramidal with a trigonal bipyramidal parent: what are X and E?
- 原答案：X = 5, E = 0.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.25 — AX₅: what is the molecular shape?

### 6.29 · 保留

- 原题：AX₄E: what is the molecular shape?
- 原答案：Seesaw.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.30 · 合并

- 原题：AX₄E: what is the parent shape?
- 原答案：Trigonal bipyramidal.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.15 — E + X = 5. What is the parent shape?

### 6.31 · 删除

- 原题：AX₄E: how many lone pairs are on A?
- 原答案：1.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.32 · 合并

- 原题：Seesaw with a trigonal bipyramidal parent: what are X and E?
- 原答案：X = 4, E = 1.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.29 — AX₄E: what is the molecular shape?

### 6.33 · 保留

- 原题：AX₃E₂: what is the molecular shape?
- 原答案：T-shaped.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.34 · 合并

- 原题：AX₃E₂: what is the parent shape?
- 原答案：Trigonal bipyramidal.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.15 — E + X = 5. What is the parent shape?

### 6.35 · 删除

- 原题：AX₃E₂: how many lone pairs are on A?
- 原答案：2.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.36 · 合并

- 原题：T-shaped with a trigonal bipyramidal parent: what are X and E?
- 原答案：X = 3, E = 2.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.33 — AX₃E₂: what is the molecular shape?

### 6.37 · 保留

- 原题：AX₂E₃: what is the molecular shape?
- 原答案：Linear.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.38 · 合并

- 原题：AX₂E₃: what is the parent shape?
- 原答案：Trigonal bipyramidal.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.15 — E + X = 5. What is the parent shape?

### 6.39 · 删除

- 原题：AX₂E₃: how many lone pairs are on A?
- 原答案：3.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.40 · 合并

- 原题：Linear with a trigonal bipyramidal parent: what are X and E?
- 原答案：X = 2, E = 3.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.37 — AX₂E₃: what is the molecular shape?

### 6.41 · 保留

- 原题：AX₆: what is the molecular shape?
- 原答案：Octahedral.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.42 · 合并

- 原题：AX₆: what is the parent shape?
- 原答案：Octahedral.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.41 — AX₆: what is the molecular shape?

### 6.43 · 删除

- 原题：AX₆: how many lone pairs are on A?
- 原答案：0.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.44 · 合并

- 原题：Octahedral with a octahedral parent: what are X and E?
- 原答案：X = 6, E = 0.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.41 — AX₆: what is the molecular shape?

### 6.45 · 保留

- 原题：AX₅E: what is the molecular shape?
- 原答案：Square-based pyramidal.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.46 · 合并

- 原题：AX₅E: what is the parent shape?
- 原答案：Octahedral.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.17 — E + X = 6. What is the parent shape?

### 6.47 · 删除

- 原题：AX₅E: how many lone pairs are on A?
- 原答案：1.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.48 · 合并

- 原题：Square-based pyramidal with a octahedral parent: what are X and E?
- 原答案：X = 5, E = 1.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.45 — AX₅E: what is the molecular shape?

### 6.49 · 保留

- 原题：AX₄E₂: what is the molecular shape?
- 原答案：Square planar.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.50 · 合并

- 原题：AX₄E₂: what is the parent shape?
- 原答案：Octahedral.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：5.17 — E + X = 6. What is the parent shape?

### 6.51 · 删除

- 原题：AX₄E₂: how many lone pairs are on A?
- 原答案：2.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.52 · 合并

- 原题：Square planar with a octahedral parent: what are X and E?
- 原答案：X = 4, E = 2.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.49 — AX₄E₂: what is the molecular shape?

### 6.53 · 保留

- 原题：AX₇: what is the molecular shape?
- 原答案：Pentagonal bipyramidal.
- 理由：保留 AXE→分子形状的预测能力；与第8套的看图识别不同。

### 6.54 · 合并

- 原题：AX₇: what is the parent shape?
- 原答案：Pentagonal bipyramidal.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.53 — AX₇: what is the molecular shape?

### 6.55 · 删除

- 原题：AX₇: how many lone pairs are on A?
- 原答案：0.
- 理由：答案已经由题干 AXE 的 E 下标直接给出；删除机械抄写计数题。

### 6.56 · 合并

- 原题：Pentagonal bipyramidal with a pentagonal bipyramidal parent: what are X and E?
- 原答案：X = 7, E = 0.
- 理由：与目标卡需要的知识相同；合并正反问法、同义定义或重复实例。
- 合并到：6.53 — AX₇: what is the molecular shape?

### 6.57 · 重写

- 原题：Which two AXE formulas in your table give a bent molecular shape?
- 原答案：AX₂E and AX₂E₂.
- 理由：保留同分子形状、不同电子几何的比较目标。
- 新题：Why does the word “bent” not uniquely specify the parent geometry?
- 新答案：AX₂E is trigonal planar in electron geometry; AX₂E₂ is tetrahedral. Lone pairs count toward the parent shape.

### 6.58 · 合并

- 原题：Which two AXE formulas in your table give a linear molecular shape?
- 原答案：AX₂ and AX₂E₃.
- 理由：同样考查“分子形状不能唯一确定电子几何”，保留 bent 的一个比较实例即可。
- 合并到：6.57 — Why does the word “bent” not uniquely specify the parent geometry?

### 6.59 · 保留

- 原题：Why is AX₄E₂ square planar rather than tetrahedral?
- 原答案：Its six domains have an octahedral parent; two opposite lone pairs leave four atoms in a square.
- 理由：保留独立学习目标；题干明确，答案简短。

### 6.60 · 保留

- 原题：A molecule has X = 3. Is that enough to choose between trigonal planar, trigonal pyramidal, and T-shaped?
- 原答案：No. You also need E and therefore the parent shape.
- 理由：保留独立学习目标；题干明确，答案简短。

### 6.61 · 重写

- 原题：In the trigonal-bipyramidal-derived shapes shown, where are lone pairs placed first?
- 原答案：In equatorial positions.
- 理由：将位置记忆升级为排斥作用解释。
- 新题：Why do lone pairs prefer equatorial sites in a trigonal-bipyramidal electron geometry?
- 新答案：An equatorial site has only two 90° interactions; an axial site has three.

### 7.1 · 保留

- 原题：AX₂: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：180°.
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.2 · 保留

- 原题：AX₃: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：120°.
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.3 · 合并

- 原题：AX₂E: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：120°.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.2 — AX₃: which approximate X–A–X angle(s) are listed in your course table?

### 7.4 · 保留

- 原题：AX₄: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：109.5°.
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.5 · 合并

- 原题：AX₃E: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：109.5°.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.4 — AX₄: which approximate X–A–X angle(s) are listed in your course table?

### 7.6 · 合并

- 原题：AX₂E₂: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：109.5°.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.4 — AX₄: which approximate X–A–X angle(s) are listed in your course table?

### 7.7 · 保留

- 原题：AX₅: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：90° (ax–eq), 120° (eq–eq), 180° (ax–ax).
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.8 · 合并

- 原题：AX₄E: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：90° (ax–eq), 120° (eq–eq), 180° (ax–ax).
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.9 · 保留

- 原题：AX₃E₂: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：90° (ax–eq), 180° (ax–ax).
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.10 · 保留

- 原题：AX₂E₃: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：180° (ax–ax).
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.11 · 保留

- 原题：AX₆: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：90° and 180°.
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.12 · 合并

- 原题：AX₅E: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：90° and 180°.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.11 — AX₆: which approximate X–A–X angle(s) are listed in your course table?

### 7.13 · 保留

- 原题：AX₄E₂: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：90° and 180°.
- 理由：保留独立学习目标；题干明确，答案简短。

### 7.14 · 重写

- 原题：AX₇: which approximate X–A–X angle(s) are listed in your course table?
- 原答案：72° (adjacent eq–eq), 90° (ax–eq), 180° (ax–ax).
- 理由：原表只列相邻赤道72°；补非相邻赤道144°，避免“所有角度”答案不全。
- 新题：What ideal bond angles occur in pentagonal-bipyramidal AX₇?
- 新答案：72° and 144° between equatorial bonds; 90° axial–equatorial; 180° axial–axial.

### 7.15 · 合并

- 原题：What does ax–eq mean in the angle table?
- 原答案：An angle between an axial bond and an equatorial bond.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.16 · 合并

- 原题：What does eq–eq mean in the angle table?
- 原答案：An angle between two equatorial bonds.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.17 · 合并

- 原题：What does ax–ax mean in the angle table?
- 原答案：An angle between the two axial bonds.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.18 · 合并

- 原题：In a trigonal bipyramid, what is the axial–equatorial angle?
- 原答案：90° in the ideal parent geometry.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.19 · 合并

- 原题：In a trigonal bipyramid, what is the equatorial–equatorial angle?
- 原答案：120° in the ideal parent geometry.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.20 · 合并

- 原题：In a trigonal bipyramid, what is the axial–axial angle?
- 原答案：180° in the ideal parent geometry.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.7 — AX₅: which approximate X–A–X angle(s) are listed in your course table?

### 7.21 · 重写

- 原题：For AX₇, what angle separates adjacent equatorial bonds in the supplied table?
- 原答案：72°; five equal sectors divide 360° around the equatorial plane.
- 理由：保留几何推导能力，区别于识别图形或回忆角度。
- 新题：Derive the angle between adjacent equatorial bonds in ideal pentagonal-bipyramidal geometry.
- 新答案：360° ÷ 5 = 72° because five equatorial bonds are evenly spaced.

### 7.22 · 合并

- 原题：For AX₇, what is the axial–equatorial angle in the supplied table?
- 原答案：90°.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.14 — What ideal bond angles occur in pentagonal-bipyramidal AX₇?

### 7.23 · 合并

- 原题：Does the table’s 109.5° entry mean every AX₂E₂ molecule has an exact 109.5° angle?
- 原答案：No. It is the table’s approximate parent-shape value; actual angles can be distorted by lone pairs.
- 理由：使用同一亲本理想角度；合并理想数值的复述，实际偏离由 7.24 解释。
- 合并到：7.24 — Why should 109.5° not be treated as the exact bond angle of every AX₃E or AX₂E₂ molecule?

### 7.24 · 重写

- 原题：Why can lone pairs change actual bond angles from the parent-shape values?
- 原答案：Lone-pair electron density changes repulsions between the domains.
- 理由：合并实际角度与理想值的两个重复提醒，并纠正表格近似值的误读。
- 新题：Why should 109.5° not be treated as the exact bond angle of every AX₃E or AX₂E₂ molecule?
- 新答案：109.5° is the ideal tetrahedral domain angle. Lone pairs repel more strongly and usually compress bond angles.

### 8.1 · 重写

- 原题：For the AX₂ diagram, identify the molecular shape.
- 原答案：Linear.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Linear.

### 8.2 · 合并

- 原题：For the AX₂ diagram, identify the parent shape.
- 原答案：Linear.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.1 — Identify the molecular shape in this diagram.

### 8.3 · 重写

- 原题：For the AX₃ diagram, identify the molecular shape.
- 原答案：Trigonal planar.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Trigonal planar.

### 8.4 · 合并

- 原题：For the AX₃ diagram, identify the parent shape.
- 原答案：Trigonal planar.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.3 — Identify the molecular shape in this diagram.

### 8.5 · 重写

- 原题：For the AX₂E diagram, identify the molecular shape.
- 原答案：Bent.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Bent.

### 8.6 · 重写

- 原题：For the AX₂E diagram, identify the parent shape.
- 原答案：Trigonal planar.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the electron-domain (parent) shape in this diagram.
- 新答案：Trigonal planar.

### 8.7 · 重写

- 原题：For the AX₄ diagram, identify the molecular shape.
- 原答案：Tetrahedral.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Tetrahedral.

### 8.8 · 合并

- 原题：For the AX₄ diagram, identify the parent shape.
- 原答案：Tetrahedral.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.7 — Identify the molecular shape in this diagram.

### 8.9 · 重写

- 原题：For the AX₃E diagram, identify the molecular shape.
- 原答案：Trigonal pyramidal.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Trigonal pyramidal.

### 8.10 · 重写

- 原题：For the AX₃E diagram, identify the parent shape.
- 原答案：Tetrahedral.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the electron-domain (parent) shape in this diagram.
- 新答案：Tetrahedral.

### 8.11 · 重写

- 原题：For the AX₂E₂ diagram, identify the molecular shape.
- 原答案：Bent.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Bent.

### 8.12 · 合并

- 原题：For the AX₂E₂ diagram, identify the parent shape.
- 原答案：Tetrahedral.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.10 — Identify the electron-domain (parent) shape in this diagram.

### 8.13 · 重写

- 原题：For the AX₅ diagram, identify the molecular shape.
- 原答案：Trigonal bipyramidal.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Trigonal bipyramidal.

### 8.14 · 合并

- 原题：For the AX₅ diagram, identify the parent shape.
- 原答案：Trigonal bipyramidal.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.13 — Identify the molecular shape in this diagram.

### 8.15 · 重写

- 原题：For the AX₄E diagram, identify the molecular shape.
- 原答案：Seesaw.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Seesaw.

### 8.16 · 重写

- 原题：For the AX₄E diagram, identify the parent shape.
- 原答案：Trigonal bipyramidal.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the electron-domain (parent) shape in this diagram.
- 新答案：Trigonal bipyramidal.

### 8.17 · 重写

- 原题：For the AX₃E₂ diagram, identify the molecular shape.
- 原答案：T-shaped.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：T-shaped.

### 8.18 · 合并

- 原题：For the AX₃E₂ diagram, identify the parent shape.
- 原答案：Trigonal bipyramidal.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.16 — Identify the electron-domain (parent) shape in this diagram.

### 8.19 · 重写

- 原题：For the AX₂E₃ diagram, identify the molecular shape.
- 原答案：Linear.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Linear.

### 8.20 · 合并

- 原题：For the AX₂E₃ diagram, identify the parent shape.
- 原答案：Trigonal bipyramidal.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.16 — Identify the electron-domain (parent) shape in this diagram.

### 8.21 · 重写

- 原题：For the AX₆ diagram, identify the molecular shape.
- 原答案：Octahedral.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Octahedral.

### 8.22 · 合并

- 原题：For the AX₆ diagram, identify the parent shape.
- 原答案：Octahedral.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.21 — Identify the molecular shape in this diagram.

### 8.23 · 重写

- 原题：For the AX₅E diagram, identify the molecular shape.
- 原答案：Square-based pyramidal.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Square-based pyramidal.

### 8.24 · 重写

- 原题：For the AX₅E diagram, identify the parent shape.
- 原答案：Octahedral.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the electron-domain (parent) shape in this diagram.
- 新答案：Octahedral.

### 8.25 · 重写

- 原题：For the AX₄E₂ diagram, identify the molecular shape.
- 原答案：Square planar.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Square planar.

### 8.26 · 合并

- 原题：For the AX₄E₂ diagram, identify the parent shape.
- 原答案：Octahedral.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.24 — Identify the electron-domain (parent) shape in this diagram.

### 8.27 · 重写

- 原题：For the AX₇ diagram, identify the molecular shape.
- 原答案：Pentagonal bipyramidal.
- 理由：保留看图辨认；题干不透露 AXE 公式。亲本计入孤对，分子形状只看原子。
- 新题：Identify the molecular shape in this diagram.
- 新答案：Pentagonal bipyramidal.

### 8.28 · 合并

- 原题：For the AX₇ diagram, identify the parent shape.
- 原答案：Pentagonal bipyramidal.
- 理由：图像中考查的几何知识与目标卡相同；零孤对时亲本与分子形状相同，重复亲本实例也合并。
- 合并到：8.27 — Identify the molecular shape in this diagram.
