/**
 * Created by Troy on 2016/8/22.
 */

var dialogue = [
    {
        npcID:'dade1',
        name:'你老爹',
        dialogID:4,
        startIndex:0,
        dialog_0:{
            text:'快滚，老子没这么弱逼的儿子',
            options:[
                {
                    text:'修理',
                    nextDialog:1,
                    failDialog:3
                },
                {
                    text:'孝敬',
                    nextDialog:2,
                    failDialog:3
                },
                {
                    text:'看你',
                    nextDialog:7,
                    failDialog:3
                },
                {
                    text:'离开',
                    nextDialog:3,
                    failDialog:3
                }
            ]
        },
        dialog_1:{
            text:'还不走？想坑爹么？',
            callback:function(itemList,scene,dialog) {
                showItemList(itemList,scene,dialog);
            },
            failDialog:4,
            nextDialog:5
        },
        dialog_2:{
            text:'送我东西？',
            callback:function(itemList,scene,dialog) {
                sellItem(itemList,scene,dialog);
            },
            failDialog:4
        },
        dialog_3:{
            text:'快滚吧!',
            nextDialog:-1
        },
        dialog_4:{
            text:'还磨叽什么?',
            options:[]
        },
        dialog_5:{
            text:'是{itemName}啊,真有眼光!打折卖您{itemCost},可以吗?',
            options:[
                {
                    text:'是'
                },
                {
                    text:'否'
                }
            ]
        },
        dialog_6:{
            text:'是{itemName}啊,有些破旧了呢,我出{itemCost}收购,可以吗?',
            options:[
                {
                    text:'是'
                },
                {
                    text:'否'
                }
            ]
        },
        dialog_7:{
            text:'嗯，还是太弱嘛',
            nextDialog:-1
        }
    },
    {
        npcID:'tankNpc01',
        name:'猎人',
        dialogID:0,
        startIndex:0,
        dialog_0:{
            text:'你要出去做英雄么？哪怕是一秒钟',
            nextDialog:1
        },
        dialog_1:{
            text:'外面诺亚的部队正在围攻镇子',
            nextDialog:2
        },
        dialog_2:{
            text:'如果大家都这么懦弱的躲在里面，这个镇子早晚会被夷为平地',
            nextDialog:-1
        }
    },
    {
        npcID:'npc02',
        name:'守卫',
        dialogID:0,
        startIndex:0,
        dialog_0:{
            text:'哦哦!是旅行者啊.',
            nextDialog:1
        },
        dialog_1:{
            text:'嘿嘿，欢迎来到沙漠绿洲!',
            nextDialog:2
        },
        dialog_2:{
            text:'这一带的水源都在这个镇子了.',
            nextDialog:-1
        }
    },
    {
        npcID:'npc03',
        name:'',
        dialogID:1,
        startIndex:0,
        dialog_0:{
            text:'你也是来寻找水源的吗?',
            options:[
                {
                    text:'是',
                    nextDialog:1
                },
                {
                    text:'否',
                    nextDialog:3
                }
            ]
        },
        dialog_1:{
            text:'最近来了一伙叫做流沙党的恶棍,',
            nextDialog:2
        },
        dialog_2:{
            text:'他们霸占了这个镇子的水源.',
            nextDialog:-1
        },
        dialog_3:{
            text:'那么赶紧离开吧.',
            nextDialog:-1,
            random:[3,4]
        },
        dialog_4:{
            text:'祝你好运.',
            nextDialog:-1,
            random:[3,4]
        }
    },
    {
        npcID:'npc01',
        name:'',
        dialogID:2,
        startIndex:0,
        dialog_0:{
            text:'什么?!你说要打败流沙党?!',
            nextDialog:1
        },
        dialog_1:{
            text:'你没开玩笑吧?',
            options:[
                {
                    text:'开玩笑',
                    nextDialog:4
                },
                {
                    text:'没开玩笑',
                    nextDialog:2
                }
            ]
        },
        dialog_2:{
            text:'那么告诉你一个情报吧,不过不能免费给你,收你10G,怎么样?',
            options:[
                {
                    text:'给',
                    condition:'g.playerList[0].player.gp >= 10',    //玩家金钱大于10
                    nextDialog:3,
                    failDialog:6,
                    callback:function() {
                        g.gp -= 10;
                        dialogue[2].startIndex = 3;
                        //g.npcList.desertTown.npc[0].dialogID = 3;
                    }
                },
                {
                    text:'不给',
                    nextDialog:5
                }
            ]
        },
        dialog_3:{
            text:'就告诉你吧,首先得找辆战车,不然会被打成马蜂窝的.',
            nextDialog:-1
        },
        dialog_4:{
            text:'吓我一跳,玩笑可不能乱开呀!',
            nextDialog:-1
        },
        dialog_5:{
            text:'真小气!',
            nextDialog:-1
        },
        dialog_6:{
            text:'喂,你的钱不够啊,攒够钱再来吧!',
            nextDialog:-1
        }
    },
    {
        npcID:'',
        name:'',
        dialogID:3,
        startIndex:0,
        dialog_0:{
            text:'不错嘛,已经找到战车了啊!',
            nextDialog:1
        },
        dialog_1:{
            text:'那么要不要再花10G交换一个情报呢?',
            options:[
                {
                    text:'交换',
                    condition:'g.gp >= 10',    //玩家金钱大于10
                    nextDialog:2,
                    failDialog:3,
                    callback:function() {
                        g.gp -= 10;
                        dialogue[3].startIndex = 2;
                    }
                },
                {
                    text:'不交换',
                    nextDialog:4
                }
            ]
        },
        dialog_2:{
            text:'真是爽快,要挑战流沙党,孤军奋战是不明智的,最好找个帮手.',
            nextDialog:5
        },
        dialog_3:{
            text:'喂,你的钱不够啊,攒够钱再来吧!',
            nextDialog:-1
        },
        dialog_4:{
            text:'改变主意了再来吧!',
            nextDialog:-1
        },
        dialog_5:{
            text:'什么?我?我不行,我不想死得太早,嘿嘿!',
            nextDialog:-1
        }
    },
    {
        npcID:'salesman',
        name:'',
        dialogID:4,
        startIndex:0,
        dialog_0:{
            text:'欢迎光临道具店!',
            options:[
                {
                    text:'买',
                    nextDialog:1,
                    failDialog:3
                },
                {
                    text:'卖',
                    nextDialog:2,
                    failDialog:3
                },
                {
                    text:'离开',
                    nextDialog:3,
                    failDialog:3
                }
            ]
        },
        dialog_1:{
            text:'请随意挑选~',
            callback:function(itemList,scene,dialog) {
                showItemList(itemList,scene,dialog);
            },
            failDialog:4,
            nextDialog:5
        },
        dialog_2:{
            text:'是哪一位要出售商品呢?',
            callback:function(itemList,scene,dialog) {
                sellItem(itemList,scene,dialog);
            },
            failDialog:4
        },
        dialog_3:{
            text:'欢迎再来!',
            nextDialog:-1
        },
        dialog_4:{
            text:'还需要别的服务吗?',
            options:[]
        },
        dialog_5:{
            text:'是{itemName}啊,真有眼光!打折卖您{itemCost},可以吗?',
            options:[
                {
                    text:'是'
                },
                {
                    text:'否'
                }
            ]
        },
        dialog_6:{
            text:'是{itemName}啊,有些破旧了呢,我出{itemCost}收购,可以吗?',
            options:[
                {
                    text:'是'
                },
                {
                    text:'否'
                }
            ]
        }
    },
    {
        npcID:'salesman2',
        name:'',
        dialogID:5,
        startIndex:0,
        dialog_0:{
            text:'欢迎光临武器店!',
            options:[
                {
                    text:'买',
                    nextDialog:1,
                    failDialog:3
                },
                {
                    text:'卖',
                    nextDialog:2,
                    failDialog:3
                },
                {
                    text:'离开',
                    nextDialog:3,
                    failDialog:3
                }
            ]
        },
        dialog_1:{
            text:'请随意挑选~',
            callback:function(itemList,scene,dialog) {
                showItemList(itemList,scene,dialog);
            },
            failDialog:4,
            nextDialog:5
        },
        dialog_2:{
            text:'是哪一位要出售商品呢?',
            callback:function(itemList,scene,dialog) {
                sellItem(itemList,scene,dialog);
            },
            failDialog:4
        },
        dialog_3:{
            text:'欢迎再来!',
            nextDialog:-1
        },
        dialog_4:{
            text:'还需要别的服务吗?',
            options:[]
        },
        dialog_5:{
            text:'是{itemName}啊,真有眼光!打折卖您{itemCost},可以吗?',
            options:[
                {
                    text:'是'
                },
                {
                    text:'否'
                }
            ]
        },
        dialog_6:{
            text:'是{itemName}啊,有些破旧了呢,我出{itemCost}收购,可以吗?',
            options:[
                {
                    text:'是'
                },
                {
                    text:'否'
                }
            ]
        }
    },
    {
        npcID:'npc04',
        name:'',
        dialogID:6,
        startIndex:0,
        dialog_0:{
            text:'你说买了武器不能装备?',
            nextDialog:1
        },
        dialog_1:{
            text:'这是肯定的嘛!',
            nextDialog:2
        },
        dialog_2:{
            text:'因为作者偷懒了,没有开发这个功能~',
            nextDialog:-1
        }
    },
    {
        npcID:'npc05',
        name:'',
        dialogID:7,
        startIndex:0,
        dialog_0:{
            text:'买了武器一定要装备上',
            nextDialog:1
        },
        dialog_1:{
            text:'放在背包里就没有意义了~',
            nextDialog:2
        },
        dialog_2:{
            text:'战斗中敌人可不会给你机会换武器和装备!',
            nextDialog:-1
        }
    },
    {
        npcID:'badguy',
        name:'喽啰',
        dialogID:8,
        startIndex:0,
        dialog_0:{
            text:'……………………',
            nextDialog:-1
        }
    },
    {
        npcID:'badguyleader',
        name:'喽啰头领',
        dialogID:9,
        startIndex:0,
        dialog_0:{
            text:'喂！小子，这里不是你该来的地方，快滚！',
            nextDialog:-1,
            random:[1]
        },
        dialog_1:{
            text:'没听到吗?要不要弟兄们给你长长记性?哈哈哈!',
            nextDialog:-1
        }
    }
];
