
Page({
  data:{
    detailList:[
      {
        name: "泰坦尼克号",
        average:9.4,
        imagePath: "/images/icons/titan.jpg",
        summary: "1912年4月10日，号称 “世界工业史上的奇迹”的豪华客轮泰坦尼克号开始了自己的处女航，从英国的南安普顿出发驶往美国纽约。富家少女罗丝（凯特•温丝莱特）与母亲及未婚夫卡尔坐上了头等舱；另一边，放荡不羁的少年画家杰克（莱昂纳多·迪卡普里奥）也在码头的一场赌博中赢得了下等舱的船票。 罗丝厌倦了上流社会虚伪的生活，不愿嫁给卡尔，打算投海自尽，被杰克救起。很快，美丽活泼的罗丝与英俊开朗的杰克相爱，杰克带罗丝参加下等舱的舞会、为她画像，二人的感情逐渐升温。1912年4月14日，星期天晚上，一个风平浪静的夜晚。泰坦尼克号撞上了冰山，“永不沉没的”泰坦尼克号面临沉船的命运，罗丝和杰克刚萌芽的爱情也将经历生死的考验"
      },
      {
        name: "教父",
        average: 9.3,
        imagePath: "/images/icons/jf.jpg",
        summary: "40年代的美国，“教父”维托·唐·柯里昂（马龙·白兰度 饰）是黑手党柯里昂家族的首领，带领家族从事非法的勾当，但同时他也是许多弱小平民的保护神，深得人们爱戴。因为拒绝了毒枭索洛索的毒品交易要求，柯里昂家族和纽约其他几个黑手党家族的矛盾激化。圣诞前夕，索洛索劫持了“教 父”的参谋汤姆，并派人暗杀“教父”；因为内奸的出卖，“教父”的大儿子逊尼被仇家杀害；小儿子麦克（阿尔·帕西诺 饰）也被卷了进来，失去爱妻。黑手党家族之间的矛盾越来越白热化。年老的“教父”面对丧子之痛怎样统领全局？黑手党之间的仇杀如何落幕？谁是家族的内奸？谁又能够成为新一代的“教父”？血雨腥风和温情脉脉，在这部里程碑式的黑帮史诗巨片里真实上演"
      },
      {
        name: "阿甘正传",
        average: 9.4,
        imagePath: "/images/icons/agan.jpg",
        summary: "阿甘（汤姆·汉克斯 饰）于二战结束后不久出生在美国南方阿拉巴马州一个闭塞的小镇，他先天弱智，智商只有75，然而他的妈妈是一个性格坚强的女性，她常常鼓励阿甘“傻人有傻福”，要他自强不息。 阿甘像普通孩子一样上学，并且认识了一生的朋友和至爱珍妮（罗宾·莱特·潘 饰），在珍妮和妈妈的爱护下，阿甘凭着上帝赐予的“飞毛腿”开始了一生不停的奔跑。阿甘成为橄榄球巨星、越战英雄、乒乓球外交使者、亿万富翁，但是，他始终忘不了珍妮，几次匆匆的相聚和离别，更是加深了阿甘的思念。有一天，阿甘收到珍妮的信，他们终于又要见面……"
      }
    ]
  },
  onLoad:function (options){
    console.log(options.id)
    this.setData({
      mid:options.id
    });
  }
})