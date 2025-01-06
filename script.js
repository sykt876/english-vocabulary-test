// 単語リストとその意味（JSON形式）
const words = {
  "agree to/with A": {
    "meaning": "Aに同意する、Aと一致する",
    "example": "I agree to your proposal.",
    "japanese": "私はあなたの提案に同意します。"
  },
  "assure A that S V": {
    "meaning": "AにSがVすることを保証する",
    "example": "I assure you that everything will be fine.",
    "japanese": "私はあなたに全てがうまくいくことを保証します。"
  },
  "establish": {
    "meaning": "設立する、確立する",
    "example": "The company was established in 1990.",
    "japanese": "その会社は1990年に設立されました。"
  },
  "compare A with/to B": {
    "meaning": "AをBと比較する",
    "example": "Compare the prices of the two products.",
    "japanese": "2つの製品の価格を比較してください。"
  },
  "persuade A to V": {
    "meaning": "AにVするよう説得する",
    "example": "She persuaded him to join the team.",
    "japanese": "彼女は彼にチームに参加するよう説得しました。"
  },
   "agree to/with A": {
        "meaning": "Aに同意する、Aと一致する",
        "example": "I agree to your proposal.",
        "japanese": "私はあなたの提案に同意します。"
    },
    "assure A that S V": {
        "meaning": "AにSがVすることを保証する",
        "example": "I assure you that everything will be fine.",
        "japanese": "私はあなたに全てがうまくいくことを保証します。"
    },
    "establish": {
        "meaning": "設立する、確立する",
        "example": "The company was established in 1990.",
        "japanese": "その会社は1990年に設立されました。"
    },
    "compare A with/to B": {
        "meaning": "AをBと比較する",
        "example": "Compare the prices of the two products.",
        "japanese": "2つの製品の価格を比較してください。"
    },
    "persuade A to V": {
        "meaning": "AにVするよう説得する",
        "example": "She persuaded him to join the team.",
        "japanese": "彼女は彼にチームに参加するよう説得しました。"
    },
    "invest A in B": {
        "meaning": "AをBに投資する",
        "example": "They decided to invest their savings in stocks.",
        "japanese": "彼らは貯金を株に投資することに決めました。"
    },
    "be entitled to A": {
        "meaning": "Aを受ける権利がある",
        "example": "Employees are entitled to vacation days.",
        "japanese": "従業員は休暇を取る権利があります。"
    },
    "turn out A": {
        "meaning": "Aが判明する、Aを結果として出す",
        "example": "It turned out that the meeting was canceled.",
        "japanese": "会議がキャンセルされたことが判明しました。"
    },
    "consider V ing": {
        "meaning": "Vすることを考慮する",
        "example": "I am considering applying for a new job.",
        "japanese": "新しい仕事に応募することを考慮しています。"
    },
    "consider A B": {
        "meaning": "AをBと見なす、AをBとして考える",
        "example": "We consider this project to be very important.",
        "japanese": "このプロジェクトは非常に重要だと考えています。"
    },
    "acquire": {
        "meaning": "獲得する、手に入れる",
        "example": "She acquired a new skill last year.",
        "japanese": "彼女は昨年新しいスキルを獲得しました。"
    },
    "affect A B": {
        "meaning": "AがBに影響を与える",
        "example": "The weather can affect your mood.",
        "japanese": "天気はあなたの気分に影響を与えることがあります。"
    },
    "allocate A to C": {
        "meaning": "AをCに割り当てる",
        "example": "The manager allocated the tasks to the team.",
        "japanese": "マネージャーはチームにタスクを割り当てました。"
    },
    "anticipate": {
        "meaning": "予測する、予期する",
        "example": "We anticipate that sales will increase next year.",
        "japanese": "来年、売上が増加することを予測しています。"
    },
    "assign B to C": {
        "meaning": "BをCに割り当てる",
        "example": "I will assign the report to John.",
        "japanese": "このレポートをジョンに割り当てます。"
    },
    "compensate A for B": {
        "meaning": "AにBを補償する",
        "example": "The company compensated him for his injury.",
        "japanese": "会社は彼の怪我に対して補償しました。"
    },
    "conduct": {
        "meaning": "実施する、行う",
        "example": "The teacher will conduct the experiment.",
        "japanese": "先生は実験を行います。"
    },
    "donate A to B": {
        "meaning": "AをBに寄付する",
        "example": "She donated her clothes to charity.",
        "japanese": "彼女は服をチャリティに寄付しました。"
    },
    "enable B to V": {
        "meaning": "BにVすることを可能にする",
        "example": "This tool enables users to work more efficiently.",
        "japanese": "このツールはユーザーがより効率的に働けるようにします。"
    },
    "encourage B to V": {
        "meaning": "BにVするよう促す",
        "example": "They encouraged her to pursue her dreams.",
        "japanese": "彼らは彼女に夢を追いかけるよう促しました。"
    },
    "ensure that S V": {
        "meaning": "SがVすることを確実にする",
        "example": "Please ensure that all documents are signed.",
        "japanese": "全ての書類に署名されていることを確認してください。"
    },
    "maintain": {
        "meaning": "維持する、保持する",
        "example": "He tries to maintain a healthy lifestyle.",
        "japanese": "彼は健康的なライフスタイルを維持しようとしています。"
    },
    "agree to/with A": {
        "meaning": "Aに同意する、Aと一致する",
        "example": "I agree to your proposal.",
        "japanese": "私はあなたの提案に同意します。"
    },
    "assure A that S V": {
        "meaning": "AにSがVすることを保証する",
        "example": "I assure you that everything will be fine.",
        "japanese": "私はあなたに全てがうまくいくことを保証します。"
    },
    "establish": {
        "meaning": "設立する、確立する",
        "example": "The company was established in 1990.",
        "japanese": "その会社は1990年に設立されました。"
    },
    "compare A with/to B": {
        "meaning": "AをBと比較する",
        "example": "Compare the prices of the two products.",
        "japanese": "2つの製品の価格を比較してください。"
    },
    "persuade A to V": {
        "meaning": "AにVするよう説得する",
        "example": "She persuaded him to join the team.",
        "japanese": "彼女は彼にチームに参加するよう説得しました。"
    },
    "invest A in B": {
        "meaning": "AをBに投資する",
        "example": "They decided to invest their savings in stocks.",
        "japanese": "彼らは貯金を株に投資することに決めました。"
    },
    "be entitled to A": {
        "meaning": "Aを受ける権利がある",
        "example": "Employees are entitled to vacation days.",
        "japanese": "従業員は休暇を取る権利があります。"
    },
    "turn out A": {
        "meaning": "Aが判明する、Aを結果として出す",
        "example": "It turned out that the meeting was canceled.",
        "japanese": "会議がキャンセルされたことが判明しました。"
    },
    "consider V ing": {
        "meaning": "Vすることを考慮する",
        "example": "I am considering applying for a new job.",
        "japanese": "新しい仕事に応募することを考慮しています。"
    },
    "consider A B": {
        "meaning": "AをBと見なす、AをBとして考える",
        "example": "We consider this project to be very important.",
        "japanese": "このプロジェクトは非常に重要だと考えています。"
    },
  "acquire": {
        "meaning": "獲得する、手に入れる",
        "example": "She acquired a new skill last year.",
        "japanese": "彼女は昨年新しいスキルを獲得しました。"
    },
    "affect A B": {
        "meaning": "AがBに影響を与える",
        "example": "The weather can affect your mood.",
        "japanese": "天気はあなたの気分に影響を与えることがあります。"
    },
    "allocate A to C": {
        "meaning": "AをCに割り当てる",
        "example": "The manager allocated the tasks to the team.",
        "japanese": "マネージャーはチームにタスクを割り当てました。"
    },
    "anticipate": {
        "meaning": "予測する、予期する",
        "example": "We anticipate that sales will increase next year.",
        "japanese": "来年、売上が増加することを予測しています。"
    },
    "assign B to C": {
        "meaning": "BをCに割り当てる",
        "example": "I will assign the report to John.",
        "japanese": "このレポートをジョンに割り当てます。"
    },
    "compensate A for B": {
        "meaning": "AにBを補償する",
        "example": "The company compensated him for his injury.",
        "japanese": "会社は彼の怪我に対して補償しました。"
    },
    "conduct": {
        "meaning": "実施する、行う",
        "example": "The teacher will conduct the experiment.",
        "japanese": "先生は実験を行います。"
    },
    "donate A to B": {
        "meaning": "AをBに寄付する",
        "example": "She donated her clothes to charity.",
        "japanese": "彼女は服をチャリティに寄付しました。"
    },
    "enable B to V": {
        "meaning": "BにVすることを可能にする",
        "example": "This tool enables users to work more efficiently.",
        "japanese": "このツールはユーザーがより効率的に働けるようにします。"
    },
    "encourage B to V": {
        "meaning": "BにVするよう促す",
        "example": "They encouraged her to pursue her dreams.",
        "japanese": "彼らは彼女に夢を追いかけるよう促しました。"
    },
  "ensure that S V": {
        "meaning": "SがVすることを確実にする",
        "example": "Please ensure that all documents are signed.",
        "japanese": "全ての書類に署名されていることを確認してください。"
    },
    "maintain": {
        "meaning": "維持する、保持する",
        "example": "He tries to maintain a healthy lifestyle.",
        "japanese": "彼は健康的なライフスタイルを維持しようとしています。"
    },
    "exceed": {
        "meaning": "超える、上回る",
        "example": "Sales this quarter have exceeded expectations.",
        "japanese": "今四半期の売上は予想を上回りました。"
    },
    "indicate": {
        "meaning": "示す、指し示す",
        "example": "The sign indicates the direction to the office.",
        "japanese": "看板はオフィスへの方向を示しています。"
    },
    "inspect A for B": {
        "meaning": "AをBのために点検する",
        "example": "The technician will inspect the machine for defects.",
        "japanese": "技術者は欠陥のために機械を点検します。"
    },
    "intend to V": {
        "meaning": "Vするつもりである、Vする予定である",
        "example": "I intend to finish the report by tomorrow.",
        "japanese": "明日までにレポートを終わらせるつもりです。"
    },
    "locate": {
        "meaning": "見つける、位置を特定する",
        "example": "The map will help you locate the nearest station.",
        "japanese": "地図は最寄りの駅を見つけるのに役立ちます。"
    },
    "notify A of B": {
        "meaning": "AにBを通知する",
        "example": "Please notify me of any changes.",
        "japanese": "変更があれば私に通知してください。"
    },
    "occur": {
        "meaning": "起こる、発生する",
        "example": "A mistake occurred during the meeting.",
        "japanese": "会議中にミスが発生しました。"
    },
    "state that S V": {
        "meaning": "SがVすることを述べる",
        "example": "The report states that profits have increased.",
        "japanese": "レポートは利益が増加したことを述べています。"
    },
  "proceed to V": {
        "meaning": "Vに進む",
        "example": "After the break, we will proceed to the next topic.",
        "japanese": "休憩後、次のトピックに進みます。"
    },
    "refer B to C": {
        "meaning": "BをCに紹介する、BをCに送る",
        "example": "The doctor referred the patient to a specialist.",
        "japanese": "医者は患者を専門医に紹介しました。"
    },
    "refer to A": {
        "meaning": "Aを参照する、Aに言及する",
        "example": "Please refer to the manual for more information.",
        "japanese": "詳しくはマニュアルを参照してください。"
    },
    "renew": {
        "meaning": "更新する、再開する",
        "example": "I need to renew my driver's license this month.",
        "japanese": "今月中に運転免許を更新する必要があります。"
    },
    "broaden": {
        "meaning": "拡大する、広げる",
        "example": "Traveling can broaden your horizons.",
        "japanese": "旅行は視野を広げることができます。"
    },
    "verify that S V": {
        "meaning": "SがVすることを確認する",
        "example": "Please verify that all fields are filled out.",
        "japanese": "すべての項目が記入されていることを確認してください。"
    },
    "come up with A": {
        "meaning": "Aを思いつく、Aを考え出す",
        "example": "She came up with a brilliant idea for the project.",
        "japanese": "彼女はプロジェクトの素晴らしいアイデアを思いつきました。"
    },
    "argue that S V": {
        "meaning": "SがVすることを主張する",
        "example": "He argued that the decision was unfair.",
        "japanese": "彼はその決定が不公平だと主張しました。"
    },
    "examine": {
        "meaning": "検査する、調査する",
        "example": "The doctor examined the patient carefully.",
        "japanese": "医者は患者を慎重に診察しました。"
    },
    "expand": {
        "meaning": "拡大する、広げる",
        "example": "The company plans to expand its operations overseas.",
        "japanese": "その会社は海外での事業を拡大する計画です。"
    },
  "specify": {
        "meaning": "明確に述べる、指定する",
        "example": "Please specify your requirements in detail.",
        "japanese": "詳細にあなたの要件を明確にしてください。"
    },
    "imply": {
        "meaning": "暗示する、含意する",
        "example": "Her words implied a hidden meaning.",
        "japanese": "彼女の言葉には隠された意味が含まれていました。"
    },
    "substitute A for B": {
        "meaning": "Bの代わりにAを使う、AをBの代用品として使う",
        "example": "You can substitute honey for sugar in the recipe.",
        "japanese": "そのレシピでは砂糖の代わりに蜂蜜を使うことができます。"
    },
    "accommodate": {
        "meaning": "宿泊させる、収容する、適応する",
        "example": "The hotel can accommodate up to 500 guests.",
        "japanese": "そのホテルは最大500人の宿泊客を収容できます。"
    },
    "negotiate with A for B": {
        "meaning": "AとBのために交渉する",
        "example": "We negotiated with the supplier for better prices.",
        "japanese": "私たちはサプライヤーとより良い価格のために交渉しました。"
    },
    "facilitate": {
        "meaning": "容易にする、促進する",
        "example": "The new software will facilitate project management.",
        "japanese": "新しいソフトウェアはプロジェクト管理を容易にします。"
    },
    "assemble": {
        "meaning": "組み立てる、集める",
        "example": "Workers assembled the parts of the machine.",
        "japanese": "労働者は機械の部品を組み立てました。"
    },
    "identify A as B": {
        "meaning": "AをBとして識別する",
        "example": "The police identified the suspect as a local resident.",
        "japanese": "警察は容疑者を地元の住民として特定しました。"
    },
    "consult A about B": {
        "meaning": "AにBについて相談する",
        "example": "You should consult your doctor about this issue.",
        "japanese": "この問題については医者に相談するべきです。"
    },
    "engage in A": {
        "meaning": "Aに従事する",
        "example": "The company engages in sustainable practices.",
        "japanese": "その会社は持続可能な取り組みに従事しています。"
    },
  "obligate A to V": {
        "meaning": "AにVする義務を課す",
        "example": "The contract obligates the company to meet safety standards.",
        "japanese": "契約により会社は安全基準を満たす義務を負います。"
    },
    "resolve": {
        "meaning": "解決する、決定する",
        "example": "They resolved the conflict through negotiation.",
        "japanese": "彼らは交渉を通じて対立を解決しました。"
    },
    "release": {
        "meaning": "解放する、発表する",
        "example": "The company released a new version of the software.",
        "japanese": "その会社はソフトウェアの新バージョンを発表しました。"
    },
    "combine A with B": {
        "meaning": "AとBを組み合わせる",
        "example": "You can combine work with leisure on this trip.",
        "japanese": "この旅行では仕事とレジャーを組み合わせることができます。"
    },
    "expose A to B": {
        "meaning": "AをBにさらす",
        "example": "Prolonged exposure to the sun can damage your skin.",
        "japanese": "長時間の日光への曝露は肌を傷めることがあります。"
    },
    "offset A B": {
        "meaning": "AをBで相殺する",
        "example": "The gains offset the losses from last quarter.",
        "japanese": "利益が前四半期の損失を相殺しました。"
    },
    "quote": {
        "meaning": "引用する、見積もる",
        "example": "The report quotes several experts in the field.",
        "japanese": "その報告書はその分野の専門家をいくつか引用しています。"
    },
    "distinguish A from B": {
        "meaning": "AをBと区別する",
        "example": "It's hard to distinguish reality from illusion.",
        "japanese": "現実と幻想を区別するのは難しいです。"
    },
    "prohibit A from B": {
        "meaning": "AにBを禁じる",
        "example": "Smoking is prohibited in this area.",
        "japanese": "この地域では喫煙が禁止されています。"
    },
    "infer": {
        "meaning": "推測する、結論を導く",
        "example": "From his tone, I inferred that he was upset.",
        "japanese": "彼の口調から彼が動揺していると推測しました。"
    },
  "idealize": {
        "meaning": "理想化する",
        "example": "She tends to idealize her childhood memories.",
        "japanese": "彼女は幼少期の思い出を理想化する傾向があります。"
    },
    "claim that S V": {
        "meaning": "SがVすることを主張する",
        "example": "He claimed that he had never seen the document.",
        "japanese": "彼はその書類を見たことがないと主張しました。"
    },
    "accustom A to B": {
        "meaning": "AをBに慣れさせる",
        "example": "Living abroad has accustomed her to different cultures.",
        "japanese": "海外生活は彼女を異文化に慣れさせました。"
    },
    "narrow A down to B": {
        "meaning": "AをBに絞る",
        "example": "We narrowed the list of candidates down to three.",
        "japanese": "候補者のリストを3人に絞りました。"
    },
    "fluctuate": {
        "meaning": "変動する、上下する",
        "example": "The stock market fluctuates daily.",
        "japanese": "株式市場は日々変動します。"
    },
    "predict": {
        "meaning": "予測する",
        "example": "Experts predict a rise in global temperatures.",
        "japanese": "専門家は地球の気温が上昇すると予測しています。"
    },
    "enhance": {
        "meaning": "強化する、向上させる",
        "example": "The new feature enhances user experience.",
        "japanese": "新機能はユーザー体験を向上させます。"
    },
    "ascertain": {
        "meaning": "確かめる、確認する",
        "example": "The detective tried to ascertain the facts of the case.",
        "japanese": "探偵は事件の事実を確認しようとしました。"
    },
    "adhere to A": {
        "meaning": "Aを守る、Aに固執する",
        "example": "Employees must adhere to the company policies.",
        "japanese": "従業員は会社の方針を守らなければなりません。"
    },
    "impose A on B": {
        "meaning": "AをBに課す",
        "example": "The government imposed new taxes on luxury goods.",
        "japanese": "政府は贅沢品に新たな税を課しました。"
    },
  "subtract A from B": {
        "meaning": "AをBから引く",
        "example": "You can subtract 10 from 50 to get 40.",
        "japanese": "50から10を引くと40になります。"
    },
    "deduct A from B": {
        "meaning": "AをBから差し引く",
        "example": "The bank deducted the fee from my account.",
        "japanese": "銀行は私の口座から手数料を差し引きました。"
    },
    "restrict A to B": {
        "meaning": "AをBに制限する",
        "example": "Access is restricted to authorized personnel only.",
        "japanese": "アクセスは認可された人員のみに制限されています。"
    },
    "reinforce": {
        "meaning": "強化する、補強する",
        "example": "The team reinforced their defense in the second half.",
        "japanese": "チームは後半で守備を強化しました。"
    },
    "compile": {
        "meaning": "編集する、まとめる",
        "example": "She compiled a list of her favorite books.",
        "japanese": "彼女はお気に入りの本のリストをまとめました。"
    },
    "verbalize": {
        "meaning": "言葉にする",
        "example": "He found it hard to verbalize his feelings.",
        "japanese": "彼は自分の感情を言葉にするのが難しいと感じました。"
    },
    "commence": {
        "meaning": "始める、開始する",
        "example": "The meeting will commence at 10 a.m.",
        "japanese": "会議は午前10時に開始します。"
    },
    "succeed in A": {
        "meaning": "Aで成功する",
        "example": "She succeeded in solving the complex problem.",
        "japanese": "彼女は複雑な問題を解決することに成功しました。"
    },
    "diversify": {
        "meaning": "多様化する、変化を加える",
        "example": "The company aims to diversify its product line.",
        "japanese": "その会社は製品ラインを多様化することを目指しています。"
    },
    "make a living": {
        "meaning": "生計を立てる",
        "example": "He makes a living by teaching music.",
        "japanese": "彼は音楽を教えることで生計を立てています。"
    },
  "sustain A at B": {
        "meaning": "AをBで維持する",
        "example": "The organization sustains its operations through donations.",
        "japanese": "その組織は寄付によって運営を維持しています。"
    },
    "lead to B": {
        "meaning": "Bにつながる、Bを引き起こす",
        "example": "Poor planning can lead to failure.",
        "japanese": "不十分な計画は失敗を引き起こす可能性があります。"
    },
    "authorize A to V": {
        "meaning": "AにVする権限を与える",
        "example": "The manager authorized her to access the files.",
        "japanese": "マネージャーは彼女にファイルへのアクセス権限を与えました。"
    },
    "remain": {
        "meaning": "残る、依然として存在する",
        "example": "Only a few pieces of evidence remain.",
        "japanese": "ほんのわずかな証拠が残っています。"
    },
    "remain A": {
        "meaning": "Aのままでいる",
        "example": "The situation remained unchanged for years.",
        "japanese": "状況は何年も変わらないままでした。"
    },
    "represent": {
        "meaning": "代表する、表す",
        "example": "The flag represents the nation's values.",
        "japanese": "その旗は国の価値観を表しています。"
    },
    "end up V-ing": {
        "meaning": "最後にVすることになる",
        "example": "He ended up working late to finish the project.",
        "japanese": "彼はプロジェクトを終えるために結局遅くまで働きました。"
    },
    "replace B with/by C": {
        "meaning": "BをCに置き換える",
        "example": "We replaced the old chairs with new ones.",
        "japanese": "古い椅子を新しいものに置き換えました。"
    },
    "comprise A": {
        "meaning": "Aを構成する、含む",
        "example": "The committee comprises ten members.",
        "japanese": "委員会は10人のメンバーで構成されています。"
    },
    "explore": {
        "meaning": "探索する、調査する",
        "example": "The scientists explored the depths of the ocean.",
        "japanese": "科学者たちは海の深部を探索しました。"
    },
  "subscribe to A": {
        "meaning": "Aを購読する、賛同する",
        "example": "I subscribed to a monthly magazine.",
        "japanese": "私は月刊誌を購読しました。"
    },
    "have A in mind": {
        "meaning": "Aを考えている",
        "example": "Do you have any specific location in mind?",
        "japanese": "具体的にどこか考えている場所はありますか？"
    },
    "make up one's mind to V": {
        "meaning": "Vすることを決心する",
        "example": "She made up her mind to study abroad.",
        "japanese": "彼女は留学することを決心しました。"
    },
    "find A B": {
        "meaning": "AがBであると分かる",
        "example": "I found the movie very entertaining.",
        "japanese": "その映画はとても面白いと分かりました。"
    },
    "assume that S V": {
        "meaning": "SがVすることを仮定する",
        "example": "Many people assume that hard work guarantees success.",
        "japanese": "多くの人が努力が成功を保証すると仮定しています。"
    },
    "afford to V": {
        "meaning": "Vする余裕がある",
        "example": "I can't afford to buy a new car right now.",
        "japanese": "今新しい車を買う余裕はありません。"
    },
    "take part in A": {
        "meaning": "Aに参加する",
        "example": "She took part in the charity event.",
        "japanese": "彼女はチャリティーイベントに参加しました。"
    },
    "take turns V-ing": {
        "meaning": "交代でVする",
        "example": "We took turns driving during the road trip.",
        "japanese": "私たちはロードトリップ中に交代で運転しました。"
    },
    "appear": {
        "meaning": "現れる、見える",
        "example": "A rainbow appeared after the rain.",
        "japanese": "雨の後に虹が現れました。"
    },
    "appear to be A": {
        "meaning": "Aのように見える",
        "example": "He appears to be tired today.",
        "japanese": "彼は今日は疲れているように見えます。"
    },
  "distribute A to B": {
        "meaning": "AをBに配布する",
        "example": "The organization distributed food to the homeless.",
        "japanese": "その組織はホームレスに食べ物を配布しました。"
    },
    "pursue": {
        "meaning": "追求する、従事する",
        "example": "She decided to pursue a career in medicine.",
        "japanese": "彼女は医学のキャリアを追求することに決めました。"
    },
    "determine that S V": {
        "meaning": "SがVすることを決定する",
        "example": "The court determined that the law was unconstitutional.",
        "japanese": "裁判所はその法律が違憲であると判断しました。"
    },
    "thrive": {
        "meaning": "成長する、繁栄する",
        "example": "Plants thrive in a warm and sunny environment.",
        "japanese": "植物は温暖で日当たりの良い環境で成長します。"
    },
    "accompany": {
        "meaning": "同行する、伴う",
        "example": "He accompanied his friend to the event.",
        "japanese": "彼は友人と一緒にイベントに参加しました。"
    },
    "resemble A in B": {
        "meaning": "AがBに似ている",
        "example": "She resembles her mother in her kindness.",
        "japanese": "彼女は優しさの点で母親に似ています。"
    },
    "observe": {
        "meaning": "観察する",
        "example": "The scientist observed the behavior of the animals.",
        "japanese": "科学者は動物の行動を観察しました。"
    },
    "require A to V": {
        "meaning": "AにVすることを要求する",
        "example": "The rules require students to wear uniforms.",
        "japanese": "規則では生徒に制服を着用することを求めています。"
    },
    "attribute A to B": {
        "meaning": "AをBのせいにする",
        "example": "She attributed her success to hard work.",
        "japanese": "彼女は自分の成功を努力のおかげだと考えました。"
    },
    "vary": {
        "meaning": "異なる、変わる",
        "example": "The results vary depending on the method used.",
        "japanese": "結果は使用された方法によって異なります。"
    },
  "vary from A to B": {
        "meaning": "AからBにかけて変わる",
        "example": "Opinions vary from person to person.",
        "japanese": "意見は人によって異なります。"
    },
    "contribute B to C": {
        "meaning": "BをCに貢献する",
        "example": "He contributed a large sum to the charity.",
        "japanese": "彼はチャリティーに多額の寄付をしました。"
    },
    "imitate": {
        "meaning": "真似る、模倣する",
        "example": "Children often imitate their parents' behavior.",
        "japanese": "子供はよく親の行動を真似します。"
    },
    "get in touch with A": {
        "meaning": "Aと連絡を取る",
        "example": "I need to get in touch with the customer service team.",
        "japanese": "カスタマーサービスチームに連絡を取る必要があります。"
    },
    "put off V-ing": {
        "meaning": "Vすることを延期する",
        "example": "They decided to put off the meeting until next week.",
        "japanese": "彼らは会議を来週まで延期することに決めました。"
    },
    "warn A of B": {
        "meaning": "AにBを警告する",
        "example": "The weather forecast warned residents of the approaching storm.",
        "japanese": "天気予報は住民に接近中の嵐を警告しました。"
    },
    "make one's point": {
        "meaning": "自分の意見を述べる",
        "example": "She made her point clearly during the debate.",
        "japanese": "彼女は討論中に自分の意見を明確に述べました。"
    },
    "feed": {
        "meaning": "食べ物を与える",
        "example": "He feeds the stray cats every evening.",
        "japanese": "彼は毎晩野良猫に餌を与えています。"
    },
    "ruin": {
        "meaning": "破壊する、台無しにする",
        "example": "The heavy rain ruined our picnic plans.",
        "japanese": "大雨が私たちのピクニックの計画を台無しにしました。"
    },
    "forecast": {
        "meaning": "予測する",
        "example": "The economists forecast a significant increase in inflation.",
        "japanese": "経済学者はインフレの大幅な上昇を予測しました。"
    },
  "estimate that S V": {
        "meaning": "SがVすることを見積もる",
        "example": "They estimated that the project would take six months to complete.",
        "japanese": "彼らはプロジェクトが完了するのに6ヶ月かかると見積もりました。"
    },
    "immerse oneself in A": {
        "meaning": "Aに没頭する",
        "example": "He immersed himself in his studies before the exams.",
        "japanese": "彼は試験の前に勉強に没頭しました。"
    },
    "respond to A": {
        "meaning": "Aに反応する",
        "example": "The audience responded positively to the speech.",
        "japanese": "聴衆はそのスピーチに好意的に反応しました。"
    },
    "A is derived from B": {
        "meaning": "AはBから派生する",
        "example": "This word is derived from Latin.",
        "japanese": "この単語はラテン語に由来します。"
    },
    "admire": {
        "meaning": "賞賛する、感心する",
        "example": "I admire her dedication to her work.",
        "japanese": "私は彼女の仕事への献身を賞賛します。"
    },
    "specialize in A": {
        "meaning": "Aを専門にする",
        "example": "He specializes in environmental law.",
        "japanese": "彼は環境法を専門としています。"
    },
    "constitute A": {
        "meaning": "Aを構成する",
        "example": "These factors constitute a major challenge for the project.",
        "japanese": "これらの要因はプロジェクトにとって大きな課題を構成します。"
    },
    "incur": {
        "meaning": "（損害・費用などを）被る",
        "example": "The company incurred significant losses last year.",
        "japanese": "その会社は昨年大きな損失を被りました。"
    },
    "diagnose A with B": {
        "meaning": "AをBと診断する",
        "example": "The doctor diagnosed her with pneumonia.",
        "japanese": "医者は彼女を肺炎と診断しました。"
    },
    "insult": {
        "meaning": "侮辱する",
        "example": "He felt insulted by their rude remarks.",
        "japanese": "彼は彼らの無礼な発言に侮辱されたと感じました。"
    },
  "deal with A": {
        "meaning": "Aを処理する、対処する",
        "example": "We need to deal with this issue immediately.",
        "japanese": "私たちはこの問題に直ちに対処する必要があります。"
    },
    "adapt A to B": {
        "meaning": "AをBに適応させる",
        "example": "The company adapted its products to the local market.",
        "japanese": "その会社は製品を地元市場に適応させました。"
    },
    "obtain": {
        "meaning": "得る、手に入れる",
        "example": "He obtained permission to access the restricted area.",
        "japanese": "彼は制限区域へのアクセス許可を得ました。"
    },
    "involve": {
        "meaning": "関与させる、巻き込む",
        "example": "The project involves several departments.",
        "japanese": "そのプロジェクトにはいくつかの部門が関与しています。"
    },
    "abandon": {
        "meaning": "放棄する",
        "example": "They abandoned the plan due to lack of funding.",
        "japanese": "資金不足のために彼らは計画を放棄しました。"
    },
    "doubt that S V": {
        "meaning": "SがVすることを疑う",
        "example": "I doubt that he will come to the party.",
        "japanese": "彼がパーティーに来るとは思えません。"
    },
    "suspect that S V": {
        "meaning": "SがVすることを疑う",
        "example": "She suspected that he was lying.",
        "japanese": "彼女は彼が嘘をついているのではないかと疑いました。"
    },
    "fail to V": {
        "meaning": "Vすることに失敗する",
        "example": "He failed to meet the deadline.",
        "japanese": "彼は締め切りを守ることができませんでした。"
    },
    "neglect (to V / V-ing)": {
        "meaning": "Vするのを怠る",
        "example": "She neglected to turn off the lights before leaving.",
        "japanese": "彼女は出かける前にライトを消すのを怠りました。"
    },
    "irritate": {
        "meaning": "怒らせる、イライラさせる",
        "example": "His constant interruptions irritated everyone in the meeting.",
        "japanese": "彼の頻繁な割り込みが会議の全員をイライラさせました。"
    },
  "interact with A": {
        "meaning": "Aと交流する",
        "example": "She enjoys interacting with people from different cultures.",
        "japanese": "彼女は異文化の人々と交流するのを楽しんでいます。"
    },
    "review": {
        "meaning": "見直す、再評価する",
        "example": "We need to review the proposal before submission.",
        "japanese": "提出前に提案書を見直す必要があります。"
    },
    "distract A from B": {
        "meaning": "AをBから気を散らせる",
        "example": "The loud noise distracted her from studying.",
        "japanese": "大きな音が彼女の勉強の邪魔をしました。"
    },
    "provide A with B / provide B for A": {
        "meaning": "AにBを提供する",
        "example": "The program provides students with useful resources.",
        "japanese": "このプログラムは学生に役立つリソースを提供します。"
    },
    "express": {
        "meaning": "表現する",
        "example": "He expressed his gratitude in a heartfelt speech.",
        "japanese": "彼は心のこもったスピーチで感謝の気持ちを表しました。"
    },
    "forecast": {
        "meaning": "予測する",
        "example": "The weather forecast predicts rain for tomorrow.",
        "japanese": "天気予報では明日は雨だと予測しています。"
    },
    "deal with A": {
        "meaning": "Aを処理する、対処する",
        "example": "We need to deal with this issue immediately.",
        "japanese": "私たちはこの問題に直ちに対処する必要があります。"
    },
    "abandon": {
        "meaning": "放棄する",
        "example": "They abandoned the plan due to lack of funding.",
        "japanese": "資金不足のために彼らは計画を放棄しました。"
    },
    "succeed in A": {
        "meaning": "Aで成功する",
        "example": "She succeeded in solving the complex problem.",
        "japanese": "彼女は複雑な問題を解決することに成功しました。"
    },
    "diversify": {
        "meaning": "多様化する、変化を加える",
        "example": "The company aims to diversify its product line.",
        "japanese": "その会社は製品ラインを多様化することを目指しています。"
    },
   "make a living": {
        "meaning": "生計を立てる",
        "example": "He makes a living by teaching music.",
        "japanese": "彼は音楽を教えることで生計を立てています。"
    },
    "warn A of B": {
        "meaning": "AにBを警告する",
        "example": "The guide warned the hikers of the rough trail ahead.",
        "japanese": "ガイドはハイカーに前方の険しい道について警告しました。"
    },
    "renew": {
        "meaning": "更新する、再開する",
        "example": "I need to renew my driver's license this month.",
        "japanese": "今月中に運転免許を更新する必要があります。"
    },
    "engage in A": {
        "meaning": "Aに従事する",
        "example": "The company engages in sustainable practices.",
        "japanese": "その会社は持続可能な取り組みに従事しています。"
    },
    "inspect A for B": {
        "meaning": "AをBのために点検する",
        "example": "The technician inspected the machine for defects.",
        "japanese": "技術者は欠陥のために機械を点検しました。"
    },
    "notify A of B": {
        "meaning": "AにBを通知する",
        "example": "Please notify me of any changes to the schedule.",
        "japanese": "スケジュールの変更があれば私に通知してください。"
    },
    "verify that S V": {
        "meaning": "SがVすることを確認する",
        "example": "Please verify that all fields are filled correctly.",
        "japanese": "すべての項目が正しく記入されていることを確認してください。"
    },
    "come up with A": {
        "meaning": "Aを思いつく、Aを考え出す",
        "example": "She came up with an innovative solution.",
        "japanese": "彼女は革新的な解決策を思いつきました。"
    },
    "represent": {
        "meaning": "代表する、表す",
        "example": "The artwork represents the cultural heritage of the region.",
        "japanese": "その芸術作品は地域の文化遺産を表しています。"
    },
    "replace B with/by C": {
        "meaning": "BをCに置き換える",
        "example": "We replaced the old equipment with modern technology.",
        "japanese": "私たちは古い設備を最新の技術に置き換えました。"
    },
  "considering S V,": {
        "meaning": "SがVすることを考慮する",
        "example": "Considering the situation, we decided to wait.",
        "japanese": "状況を考慮して、私たちは待つことにしました。"
    },
    "A affect B": {
        "meaning": "AがBに影響を与える",
        "example": "The weather can affect your health.",
        "japanese": "天気は健康に影響を与えることがあります。"
    },
    "A allocate B to C": {
        "meaning": "AをBにCへ割り当てる",
        "example": "The manager will allocate the task to John.",
        "japanese": "マネージャーはジョンにタスクを割り当てます。"
    },
    "A assign B to C": {
        "meaning": "BをCに割り当てる",
        "example": "She assigned the report to the team.",
        "japanese": "彼女はレポートをチームに割り当てました。"
    },
    "A enable B to V": {
        "meaning": "BがVすることを可能にする",
        "example": "The software will enable you to work remotely.",
        "japanese": "ソフトウェアはあなたがリモートで働くことを可能にします。"
    },
    "A encourage B to V": {
        "meaning": "BにVするよう促す",
        "example": "She encouraged him to pursue his dreams.",
        "japanese": "彼女は彼に夢を追いかけるよう促しました。"
    },
    "affect A B": {
        "meaning": "AがBに影響を与える",
        "example": "The economy affects the job market.",
        "japanese": "経済は雇用市場に影響を与えます。"
    },
    "allocate A to C": {
        "meaning": "AをCに割り当てる",
        "example": "The funds will be allocated to the new project.",
        "japanese": "資金は新しいプロジェクトに割り当てられます。"
    },
    "assign B to C": {
        "meaning": "BをCに割り当てる",
        "example": "We need to assign the task to someone.",
        "japanese": "誰かにそのタスクを割り当てる必要があります。"
    },
    "enable B to V": {
        "meaning": "BがVすることを可能にする",
        "example": "The training will enable employees to use the new system.",
        "japanese": "研修は従業員が新しいシステムを使うことを可能にします。"
    },
    "encourage B to V": {
        "meaning": "BにVするよう促す",
        "example": "Teachers should encourage students to ask questions.",
        "japanese": "先生は生徒に質問をするよう促すべきです。"
    }
};

let currentIndex = 0; // 現在の単語インデックス
let currentOrder = []; // テストの順序（順番またはランダム）

// テスト開始
function startTest(order) {
  currentIndex = 0; // インデックスをリセット

  // 順序を設定
  if (order === 'random') {
    currentOrder = shuffle(Object.keys(words));
  } else {
    currentOrder = Object.keys(words);
  }

  // 画面表示を切り替え
  document.getElementById('order-selection').style.display = 'none';
  document.getElementById('word-container').style.display = 'block';

  loadQuestion();
}

// 配列をランダムに並べ替える（シャッフル）
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 問題をロード
function loadQuestion() {
  const wordKey = currentOrder[currentIndex];
  const wordData = words[wordKey];

  document.getElementById("word").textContent = wordKey;

  // 選択肢を生成
  const options = generateOptions(wordData.meaning);
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = ""; // 前の選択肢をクリア

  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option, wordData.meaning);
    choicesDiv.appendChild(button);
  });

  // 結果と例文をリセット
  document.getElementById("result").textContent = "";
  document.getElementById("example").textContent = "";
}

// 選択肢を生成
function generateOptions(correctAnswer) {
  const allMeanings = Object.values(words).map(word => word.meaning);
  const options = [correctAnswer];

  while (options.length < 3) {
    const randomOption = allMeanings[Math.floor(Math.random() * allMeanings.length)];
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }

  return shuffle(options); // 選択肢をシャッフル
}

// 答えをチェック
function checkAnswer(selectedAnswer, correctAnswer) {
  const resultDiv = document.getElementById("result");
  const exampleDiv = document.getElementById("example");

  if (selectedAnswer === correctAnswer) {
    resultDiv.textContent = "正解！";
    exampleDiv.textContent = `例文: ${words[currentOrder[currentIndex]].example} (${words[currentOrder[currentIndex]].japanese})`;
  } else {
    resultDiv.textContent = "不正解。もう一度選んでください。";
    exampleDiv.textContent = "";
  }
}

// 次の問題へ
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentOrder.length) {
    alert("テストが終了しました！");
    document.getElementById('word-container').style.display = 'none';
    document.getElementById('order-selection').style.display = 'block';
    return;
  }

  loadQuestion();
}
