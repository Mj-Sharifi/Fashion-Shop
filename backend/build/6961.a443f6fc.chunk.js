"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[6961],{6961:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(91747),n=_(71100),A=_(21272),R=_(2291),C=_(5409),i=_(15796),U=_(15126),v=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),P=_(41286),h=_(51187),r=_(56336),f=_(39404),g=_(58692),S=_(54257),y=_(501),N=_(57646),j=_(23120),V=_(44414),F=_(25962),c=_(14664),H=_(42588),x=_(90325),$=_(62785),z=_(87443),G=_(41032),X=_(22957),J=_(93179),Y=_(73055),Q=_(15747),Z=_(85306),e=_(77965),u=_(26509),p=_(84624),k=_(71210),w=_(32058),b=_(81185),q=_(82261),__=_(62482),E_=_(52190),t_=_(16751),s_=_(14373),O_=_(55151),M_=_(79077),D_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},71100:(W,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(2291),n=_(67031),A=_(54894),R=_(17703),C=_(15796);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,C.m)(),d=(0,o.hN)(),{pathname:O}=(0,R.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};a.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),K&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,T,D,L])}}}]);
