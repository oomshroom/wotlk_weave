import{A as e,aC as a,aD as t,aQ as l,bV as s,N as i,D as n,a as d,ei as o,F as c,dP as p,dK as r,dN as m,dJ as I,aA as h,bb as u,E as g,x as S,aB as f,$ as v,a1 as T,G as O,S as y,bo as A,g as P,u as R,bf as G}from"./detailed_results-f4712c7d.chunk.js";import{m as W,a as b,b as w,c as F,r as j,M as k,d as E,A as B,e as C,f as H,g as U,h as V,T as D,R as L,D as x,n as M,I as N}from"./preset_utils-48a66ad1.chunk.js";const z=W({fieldName:"innervateTarget",id:e.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().innervateTarget?.type==a.Player,setValue:(e,l,s)=>{const i=l.getSpecOptions();i.innervateTarget=t.create({type:s?a.Player:a.Unknown,index:0}),l.setSpecOptions(e,i)}}),K=b({fieldName:"okfUptime",label:"Owlkin Frenzy Uptime (%)",labelTooltip:"Percentage of fight uptime for Owlkin Frenzy",percent:!0}),_={items:[{id:40467,enchant:3820,gems:[41285,42144]},{id:44661,gems:[40026]},{id:40470,enchant:3810,gems:[42144]},{id:44005,enchant:3859,gems:[40026]},{id:40469,enchant:3832,gems:[42144,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40466,enchant:3604,gems:[39998,0]},{id:40561,enchant:3601,gems:[39998]},{id:40560,enchant:3719},{id:40519,enchant:3606},{id:40399},{id:40080},{id:40255},{id:40432},{id:40395,enchant:3834},{id:40192},{id:40321}]},J={items:[{id:45497,enchant:3820,gems:[41285,42144]},{id:45133,gems:[40048]},{id:46196,enchant:3810,gems:[39998]},{id:45242,enchant:3859,gems:[40048]},{id:45519,enchant:3832,gems:[40051,42144,40026]},{id:45446,enchant:2332,gems:[42144,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,gems:[39998,39998,39998]},{id:46192,enchant:3719,gems:[39998,39998]},{id:45537,enchant:3606,gems:[39998,40026]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:40321}]},Q={items:[{id:48171,enchant:3820,gems:[41285,40153]},{id:47144,gems:[40153]},{id:48168,enchant:3810,gems:[40153]},{id:47552,enchant:3722,gems:[40113]},{id:48169,enchant:3832,gems:[40113,40113]},{id:47066,enchant:2332,gems:[40113,0]},{id:48172,enchant:3604,gems:[40113,0]},{id:47084,gems:[40133,40113,40113]},{id:47190,enchant:3719,gems:[40113,40113,40113]},{id:47097,enchant:3606,gems:[40133,40113]},{id:47237,gems:[40113]},{id:46046,gems:[40113]},{id:45518},{id:47188},{id:47206,enchant:3834},{id:47064},{id:47670}]},$={items:[{id:48174,enchant:3820,gems:[41285,40155]},{id:47468,gems:[40155]},{id:48177,enchant:3810,gems:[40153]},{id:47551,enchant:3722,gems:[40113]},{id:48176,enchant:3832,gems:[40113,40113]},{id:47467,enchant:2332,gems:[40155,0]},{id:48173,enchant:3604,gems:[40113,0]},{id:47447,gems:[40133,40113,40113]},{id:47479,enchant:3719,gems:[40113,40113,40113]},{id:47454,enchant:3606,gems:[40133,40113]},{id:47489,gems:[40155]},{id:46046,gems:[40155]},{id:45518},{id:47477},{id:47483,enchant:3834},{id:47437},{id:47670}]},q={items:[{id:51290,enchant:3820,gems:[41285,40113]},{id:50724,gems:[40113]},{id:51292,enchant:3810,gems:[40113]},{id:50628,enchant:3722,gems:[40155]},{id:51294,enchant:3832,gems:[40113,40155]},{id:50630,enchant:2332,gems:[40113,0]},{id:51291,enchant:3604,gems:[45883,0]},{id:50613,enchant:3601,gems:[40113,45883,40113]},{id:50694,enchant:3719,gems:[40113,40133,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40152]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50719},{id:50457}]},X={items:[{id:51290,enchant:3820,gems:[41285,40113]},{id:50724,gems:[40113]},{id:51292,enchant:3810,gems:[40113]},{id:50628,enchant:3722,gems:[40155]},{id:51294,enchant:3832,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:50663,enchant:3604,gems:[40133,40113,0]},{id:50613,enchant:3601,gems:[40113,45883,40113]},{id:51293,enchant:3719,gems:[40113,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40152]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50719},{id:50457}]},Y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{spellId:48461}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"0.5s"}}}},castSpell:{spellId:{spellId:48463}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}},castSpell:{spellId:{spellId:65861}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48463}}}}},castSpell:{spellId:{spellId:48463}}}},{action:{castSpell:{spellId:{spellId:53201}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}},castSpell:{spellId:{spellId:48465}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}},castSpell:{spellId:{spellId:48461}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}},castSpell:{spellId:{spellId:48465}}}},{action:{castSpell:{spellId:{spellId:48461}}}}]},Z={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48470}}},doAtValue:{const:{val:"-2.3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:48461}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:48463}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:65861}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:53201}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"11s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48517}}},rhs:{const:{val:"2s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48465}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48461}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}},castSpell:{spellId:{spellId:48465}}}},{action:{castSpell:{spellId:{spellId:48461}}}}]},ee={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:48470}}},doAtValue:{const:{val:"-2.3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:48461}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"5s"}}}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{spellId:48463}}}},{action:{castSpell:{spellId:{itemId:41119}}}},{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:65861}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:53201}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"8s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48518}}},rhs:{const:{val:"11s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}},{cmp:{op:"OpGt",lhs:{auraRemainingTime:{auraId:{spellId:48517}}},rhs:{const:{val:"2s"}}}},{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{and:{vals:[{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:48517}}},rhs:{const:{val:"0s"}}}},{not:{val:{dotIsActive:{spellId:{spellId:48463}}}}},{auraIsActive:{auraId:{spellId:16886}}}]}},castSpell:{spellId:{spellId:48463}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48518}}}]}},castSpell:{spellId:{spellId:48465}}}},{action:{condition:{and:{vals:[{auraIsActiveWithReactionTime:{auraId:{spellId:48517}}}]}},castSpell:{spellId:{spellId:48461}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:48468}}}}}]}},castSpell:{spellId:{spellId:48468}}}},{action:{condition:{not:{val:{auraIcdIsReadyWithReactionTime:{auraId:{spellId:48518}}}}},castSpell:{spellId:{spellId:48465}}}},{action:{castSpell:{spellId:{spellId:48461}}}}]},ae=w("Pre-raid Preset",{items:[{id:42554,enchant:3820,gems:[41285,40049]},{id:40680},{id:37673,enchant:3810,gems:[42144]},{id:41610,enchant:3859},{id:39547,enchant:3832,gems:[42144,40026]},{id:37884,enchant:2332,gems:[0]},{id:39544,enchant:3604,gems:[42144,0]},{id:40696,enchant:3601,gems:[40014,39998]},{id:37854,enchant:3719},{id:44202,enchant:3606,gems:[39998]},{id:40585},{id:43253,gems:[40026]},{id:37873},{id:40682},{id:45085,enchant:3834},{id:40698},{id:40712}]}),te=w("P1 Preset",_),le=w("P2 Preset",J),se=w("P3 Preset [A]",Q,{faction:l.Alliance}),ie=w("P3 Preset [H]",$,{faction:l.Horde}),ne=w("P4 Preset [A]",q,{faction:l.Alliance}),de=w("P4 Preset [H]",X,{faction:l.Horde}),oe=F("P3",Y),ce=F("P4 Focus Glyph",Z),pe=F("P4 Starfire Glyph",ee),re={name:"Phase 1",data:s.create({talentsString:"5032003115331303213305311231--205003012",glyphs:i.create({major1:n.GlyphOfFocus,major2:n.GlyphOfInsectSwarm,major3:n.GlyphOfStarfall,minor1:d.GlyphOfTyphoon,minor2:d.GlyphOfUnburdenedRebirth,minor3:d.GlyphOfTheWild})})},me={name:"Phase 2",data:s.create({talentsString:"5012203115331303213305311231--205003012",glyphs:i.create({major1:n.GlyphOfStarfire,major2:n.GlyphOfInsectSwarm,major3:n.GlyphOfStarfall,minor1:d.GlyphOfTyphoon,minor2:d.GlyphOfUnburdenedRebirth,minor3:d.GlyphOfTheWild})})},Ie={name:"Phase 3",data:s.create({talentsString:"5102223115331303213305311031--205003012",glyphs:i.create({major1:n.GlyphOfStarfire,major2:n.GlyphOfMoonfire,major3:n.GlyphOfStarfall,minor1:d.GlyphOfTyphoon,minor2:d.GlyphOfUnburdenedRebirth,minor3:d.GlyphOfTheWild})})},he={name:"Phase 4",data:s.create({talentsString:"5102223115331303213305311031--205003012",glyphs:i.create({major1:n.GlyphOfFocus,major2:n.GlyphOfInsectSwarm,major3:n.GlyphOfStarfall,minor1:d.GlyphOfTyphoon,minor2:d.GlyphOfUnburdenedRebirth,minor3:d.GlyphOfTheWild})})},ue=o.create({innervateTarget:t.create()}),ge=c.create({defaultPotion:p.PotionOfSpeed,flask:r.FlaskOfTheFrostWyrm,food:m.FoodFishFeast,prepopPotion:p.PotionOfWildMagic,fillerExplosive:I.ExplosiveSaroniteBomb}),Se=h.create({arcaneBrilliance:!0,bloodlust:!0,divineSpirit:!0,giftOfTheWild:u.TristateEffectImproved,icyTalons:!0,moonkinAura:u.TristateEffectImproved,leaderOfThePack:u.TristateEffectImproved,powerWordFortitude:u.TristateEffectImproved,sanctifiedRetribution:!0,strengthOfEarthTotem:u.TristateEffectImproved,trueshotAura:!0,wrathOfAirTotem:!0,demonicPactSp:500}),fe=g.create({blessingOfKings:!0,blessingOfMight:u.TristateEffectImproved,blessingOfWisdom:u.TristateEffectImproved,vampiricTouch:!0}),ve=S.create({heroicPresence:!1}),Te=f.create({bloodFrenzy:!0,ebonPlaguebringer:!0,faerieFire:u.TristateEffectImproved,heartOfTheCrusader:!0,judgementOfWisdom:!0,shadowMastery:!0,sunderArmor:!0,totemOfWrath:!0}),Oe={distanceFromTarget:18,profession1:v.Engineering,profession2:v.Tailoring,nibelungAverageCasts:11},ye=j(y.SpecBalanceDruid,{cssClass:"balance-druid-sim-ui",cssScheme:"druid",knownIssues:[],epStats:[T.StatIntellect,T.StatSpirit,T.StatSpellPower,T.StatSpellHit,T.StatSpellCrit,T.StatSpellHaste,T.StatMP5],epReferenceStat:T.StatSpellPower,displayStats:[T.StatHealth,T.StatStamina,T.StatIntellect,T.StatSpirit,T.StatSpellPower,T.StatSpellHit,T.StatSpellCrit,T.StatSpellHaste,T.StatMP5],defaults:{gear:ie.gear,epWeights:O.fromMap({[T.StatIntellect]:.43,[T.StatSpirit]:.34,[T.StatSpellPower]:1,[T.StatSpellCrit]:.82,[T.StatSpellHaste]:.8,[T.StatMP5]:0}),consumes:ge,talents:Ie.data,specOptions:ue,raidBuffs:Se,partyBuffs:ve,individualBuffs:fe,debuffs:Te,other:Oe},playerIconInputs:[z],includeBuffDebuffInputs:[k,E,B,C,H,U,V],excludeBuffDebuffInputs:[],otherInputs:{inputs:[K,D,L,x,M]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[re,me,Ie,he],rotations:[oe,ce,pe],gear:[ae,te,le,ie,se,de,ne]},autoRotation:e=>oe.rotation.rotation,raidSimPresets:[{spec:y.SpecBalanceDruid,tooltip:A[y.SpecBalanceDruid],defaultName:"Balance",iconUrl:P(R.ClassDruid,0),talents:me.data,specOptions:ue,consumes:ge,otherDefaults:Oe,defaultFactionRaces:{[l.Unknown]:G.RaceUnknown,[l.Alliance]:G.RaceNightElf,[l.Horde]:G.RaceTauren},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:te.gear,2:le.gear,3:se.gear,4:ne.gear},[l.Horde]:{1:te.gear,2:le.gear,3:ie.gear,4:de.gear}}}]});class Ae extends N{constructor(e,a){super(e,a,ye)}}export{Ae as B};
//# sourceMappingURL=sim-c81a204e.chunk.js.map