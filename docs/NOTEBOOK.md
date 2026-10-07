# 课程错题本（2026-10-03）

每门课程独立入口。四个视图使用同一个 `notebook.questions` 集合：全部、按章节、按共性问题、待复习。全部按最近修改/作答时间排序，可搜索题目和答案，筛选章节、知识点、错因、掌握状态。每题一个所属章节，可关联多个知识点与多个共性问题。

- Test 的新答错记录自动录入；同一道 Test 题复用题目 ID，每次作答独立保存。题目结构图保留。
- 可以手动录入题目、正确答案、我的错误回答、错因、知识点、个人解析；首次录题计一次错误。编辑不增加次数。
- 共性问题可跨章节关联，同一课程内统计独立题数与所有实际答错记录数，统一总结在关联题中共享。题目同时关联多个问题时，每个问题分别统计；课程总数不会重复加总。
- 尚未答对的题立即待复习。累计两次以上答错的题，复习答对一次后进入巩固状态，一天后再次待复习；连续答对两次后为已掌握。再次答错重新待复习。旧错误次数和历史一直保留。
- Forgot / 左滑仍进入改名后的「未记牢卡片」。旧 flashcard 记录原样保留，不推断为真实做题次数。此更新后的 Test 答错才开始自动进入新错题本；之前的混合卡片历史没有被复制进去。

## 同步与备份

题目元数据、共性问题与作答事件分别保存，四个视图没有四份数据。新增的独立尝试 ID 防止同步重试或重复导入放大计数。设备/账号隔离沿用 CloudSync，JSON 备份包含错题本。

为兼容现有数据库 schema，使用既有 `study_events` 的 `test` 类型与保留实体前缀 `notebook:questions:`、`notebook:issues:`、`notebook:attempts:`。它们投影到独立 notebook，不进入 activeTests。原有 RLS 和 RPC 的 auth.uid() 所有权规则不变，不需执行 SQL migration。旧客户端可能发出的 null session envelope 会被忽略，缓存压缩也不会丢失实际题目。

每次作答是独立记录，两个设备并行答错会保留两次；同一题元数据或同一共性总结的并行编辑按服务器接收顺序保留最后版本。请部署完成后刷新电脑和手机。

本地验证：纯逻辑与模拟后端覆盖重复事件、备份合并、并行编辑、离线重载、账号隔离、旧客户端空值兼容。浏览器覆盖电脑/手机录题、跨章节关联、统一总结、搜索/筛选、待复习、刷新保留、Test 自动记录、Forgot 分离。没有操作真实 Supabase 数据或进行真实跨设备账号测试。

兼容性核查：读取 Supabase changelog（2026-10-03）和 RLS 文档；此次无需采用新 API 或变更依赖版本。

## Chapter reminders and answer structures (2026-10-05)

Shared issues may now specify `pinnedChapters` (editable as one chapter title per line). Those exact summaries appear above that chapter's questions; the underlying issue records remain shared with the common-problem view. Approved chemistry answer diagrams appear inside the answer disclosure and can be opened at full size. The separate `illustration` field survives editing, normalization, backup and synchronization. Existing screenshot uploads, image-only questions, concept tags, custom chapters and account ownership protections from the latest deployed source are preserved.

The generic chemistry structure assets are public educational diagrams. Personal mistake records and account identifiers are not bundled in the website source. The enolate illustration is explicitly a screenshot example, not a reconstruction of unspecified A/B contributor drawings. Source definitions: https://goldbook.iupac.org/terms/view/C01309 and https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance .

## 逐题复习（2026-10-06，取代旧的单题展开方式）

- 四个入口和筛选保留，列表只显示原题摘要、状态、记录日期和编辑入口。点开一道题或「开始逐题复习」后，使用当前筛选 / 章节 / 共性问题中的题目 ID 建立本轮队列；队列去重，复习期间顺序不会因刚保存的结果跳动。
- 初始只有完整原题、原始题图 / 截图和原题选项。不会从关联 flashcard 的默认模型猜图，也不再自动显示 `illustration` 指向的补充化学解答示意图。原有这个字段和文件不删除，仅停止自动展示。Test 题只重用它自己的原图；旧记录只有题干与已知 Test 题完全一致时，才恢复该题的原图和选项。
- 「显示答案」后显示完整正确答案，以及可选 `reminder` 的前两句；不会自动用长笔记生成提醒。提醒可以在题目编辑页填写，超出两句的原始内容保留于「以往笔记」。原题和原有长笔记均不改写。
- 选择「答对 / 答错」，可选输入「这次为什么错或有什么新发现」，点击「保存并下一题」（末题为「保存并完成」）。未选择结果不能保存。成功保存后进入下一题，并重新隐藏答案；结束显示本轮完成。
- 每次复习独立保存 `reflection`、日期和对错，历史的 `chosen` 仍表示当时回答，两者不混用。日期、对错和当次原因在同题的「历次记录」里查看；无原因的旧记录标明未填写，不替用户编造原因。
- 「以往笔记」默认折叠，收纳原有错因、长笔记、来源、知识点和共性问题总结；初次看题时不显示历史和笔记，防止答案泄露。
- 同一题只存在于 `questions` 一次；所有视图使用同一 `attempts` 集合。保存失败重试沿用尝试 ID，防止重复计数。账号或课程切换不允许将当前复盘写到另一个账号 / 课程；同账号后台刷新保留正在输入的草稿。
- 新增字段兼容旧备份和既有事件同步协议，无数据库迁移。本轮没有操作真实账号数据，也未自动发布线上版本。

验证：65 项自动测试通过；浏览器隔离样本验证原题隐藏答案、原图放大、答案与最多两句提醒、必选评分、可选原因、保存下一题 / 完成、失败重试、刷新后的历史、章节筛选、跨章节共性问题计数、待复习队列和手机布局。正式账号跨设备同步未进行现场操作；事件投影及重复导入由自动测试覆盖。

## Imported original fields and unreviewed state

Imported questions may retain the five named original fields in `sourceFields`: Question, Correct answer, My wrong answer, Key concept for this question, What I didn't understand. The original text is also retained in the folded notes for older-client compatibility. Editing preserves the source archive. A question with no attempt events is explicitly 未复习 and remains available in 待复习; importing it does not fabricate an incorrect answer event or review date.
