"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9322],{69322:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var D=_(92132),P=_(91814),n=_(71100),A=_(21272),C=_(2291),R=_(14718),i=_(14373),v=_(55151),U=_(79077),B=_(15796),t=_(15126),l=_(63299),L=_(67014),d=_(59080),I=_(79275),O=_(82437),T=_(61535),a=_(5790),E=_(12083),o=_(35223),K=_(5409),M=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(51187),y=_(56336),S=_(39404),N=_(58692),j=_(54257),H=_(501),e=_(57646),c=_(23120),x=_(44414),z=_(25962),F=_(14664),G=_(42588),V=_(90325),$=_(62785),X=_(87443),Y=_(41032),J=_(22957),Q=_(93179),Z=_(73055),u=_(15747),p=_(85306),k=_(77965),w=_(26509),b=_(84624),q=_(71210),__=_(32058),E_=_(81185),t_=_(82261),s_=_(54892),O_=_(67031);const m=()=>((0,n.u)(),(0,D.jsx)(P.HomePageCE,{}))},71100:(W,s,_)=>{_.d(s,{u:()=>B});var D=_(21272),P=_(2291),n=_(67031),A=_(54894),C=_(17703),R=_(15796);const i="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:d}=(0,R.m)(),I=(0,P.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:a,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};D.useEffect(()=>{if(L||d)return;const K=!n(a)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let M;E==="OVER_LIMIT"?M="warning":E==="AT_LIMIT"&&(M="softWarning"),K&&I({type:M,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:a}),link:{url:o?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[I,l,O,t,d,a,E,T,o,L])}}}]);
